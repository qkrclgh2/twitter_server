import SQ from 'sequelize'
import { sequelize } from "../db/database.js"

// export async function findByUsername(username) {
//     return db.execute('SELECT * FROM users WHERE username=?', [username])
//         .then((result) => result[0][0])
// }

// export async function findById(id) {
//     return db.execute('SELECT * FROM users WHERE id=?', [id]).then((result) => result[0][0])
// }

// // 회원만들기                                         -> sequelize 하기 전
// export async function createUser(user) {
//     const { username, password, name, email, url } = user
//     return db.execute('INSERT INTO users (username, password, name, email, url) VALUES (?, ?, ?, ?, ?)',[username, password, name, email, url]
//     ).then((result) => result[0].insertId)
// }               

const DataTypes = SQ.DataTypes

export const User = sequelize.define(
    'user',                                     // 테이블 이름
    {
        id: {                                   // 컬럼명
            type: DataTypes.INTEGER,            // 데이터 타입
            autoIncrement: true,                // 자동으로 1씩 증가
            allowNull: false,                   // not null
            primaryKey: true                    // pk 설정
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        url: DataTypes.TEXT
    },
    { timestamps: false } // createAt을 사용하지 않는다.
)

export async function findByUsername(username) {
    return User.findOne({ where: { username }})
}

export async function findById(id) {
    return User.findByPk(id)
}

export async function createUser(user) {
    return User.create(user).then((data) => data.dataValues.id)
}
