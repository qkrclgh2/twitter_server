// env파일을 읽어오는 법
import dotenv from 'dotenv'

dotenv.config()

function required(key, defaultValue=undefined){
    const value = process.env[key] || defaultValue // abcd1234%^&*
    if(value == null){
        throw new Error(`키 ${key}는 undefined!!`)
    }
    return value
}

export const config = {
    jwt: {
        secretKey: required('JWT_SECRET'),
        expiresInSec: parseInt(required('JWT_EXPIRES_SEC', 259200))
    },
    bcrypt: {
        saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 10))
    },
    host: {
        port: parseInt(required('HOST_PORT', 8080))
    }
}