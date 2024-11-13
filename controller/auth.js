import * as authRepository from '../data/auth.js'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = 'abcdefg1234%^&*'

async function makeToken(id) {
    const token = jwt.sign({
        id: id,
        isAdmin: false,
    }, secret, {expiresIn: '1h'})
    return token
}

// 회원 가입
export async function signup(req, res, next) {
    const { username, password, name, email } = req.body
    // const users = await authRepository.createUser(username, password, name, email)
    const hashed = bcrypt.hashSync(password, 10)
    const users = await authRepository.createUser(username, hashed, name, email)
    if(users){
        res.status(201).json(users)
    }
}

// 로그인
export async function login(req, res, next) {
    const { username, password } = req.body
    const user = await authRepository.findByUsername(username)
    if(!user){
        res.status(401).json(`${username} 아이디를 찾을 수 없음`)
    }else{
        if(bcrypt.compareSync(password, user.password)){
            res.status(201).header('Token', makeToken(username)).json(`${username} 로그인 완료`)
        }else{
            res.status(404).json({message: `${username}님 아이디 또는 비밀번호를 확인`})
        }
    }
}

// 로그인 유지
export async function verify(req, res, next) {
    const token = req.header['Token']
    if(token){
        res.status(200).json(token)
    }
}