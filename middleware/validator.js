import { ExpressValidator, validationResult } from "express-validator";

export const validate = (req, res, next) => {
    const errors = validationResult(req) // 유효성 결과
    if(errors.isEmpty()){ // 에러가 없다면
        return next()
    }
    return res.status(400).json({message: errors.array()[0].msg}) // 에러메세지 중 첫번째것을 가져와라
}