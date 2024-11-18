// import mysql from 'mysql2' // 터미널로 npm i mysql2 설치         -> sequelize 사용하기 전
import { config } from '../config.js'
import SQ from 'sequelize'

// // DB에 접속하는 내용을 작성                                         -> sequelize 사용하기 전
// const pool = mysql.createPool({
//     host: config.db.host,
//     user: config.db.user,
//     database: config.db.database,
//     password: config.db.password
// })
// export const db = pool.promise() 

const { host, user, database, password } = config.db
export const sequelize = new SQ.Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    logging: false
})