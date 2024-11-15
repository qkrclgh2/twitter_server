import mysql from 'mysql2' // 터미널로 npm i mysql2 설치
import { config } from '../config.js'

// DB에 접속하는 내용을 작성
const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password
})

export const db = pool.promise()