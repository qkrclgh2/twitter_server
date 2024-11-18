import SQ from 'sequelize'
import { sequelize } from "../db/database.js"
import { User } from './auth.js'

const DataTypes = SQ.DataTypes
const Sequelize = SQ.Sequelize

const Tweets = sequelize.define('tweet', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
        
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
Tweets.belongsTo(User)          // join 기능 사용 가능

const INCLUDE_USER = {
    attributes: [
        'id',
        'text',
        'createdAt',
        'userId',
        [Sequelize.col('user.name'), 'name'],
        [Sequelize.col('user.username'), 'username'],
        [Sequelize.col('user.url'), 'url'],
    ],
    include: {
        model: User,
        attributes: []
    }
}

const ORDER_DESC = {
    order: [['createdAt', 'DESC']]      // createdAt으로 내림차순[] 2개인 이유는 여러개를 오름 및 내림차순할 수 있기 때문에
}


// 전체 데이터 조회
export async function getAll() {
    return Tweets.findAll({ ...INCLUDE_USER, ...ORDER_DESC })
}

// username으로 찾기
export async function getAllByUsername(username) {
    return Tweets.findAll({
        ...INCLUDE_USER, ...ORDER_DESC,
        include: {
            ...INCLUDE_USER.include,
            where: { username }
        }
    })
}

// 아이디로 찾기
export async function getById(id) {
    return Tweets.findOne({
        ...INCLUDE_USER,
        where: { id }
    })
}

// 글작성
export async function create(text, userId) {
    return Tweets.create({ text, userId }).then((data) => this.getById(data.dataValues.id))
}

export async function update(id, text) {
    return Tweets.findByPk(id, INCLUDE_USER).then((tweet) => {
        tweet.text = text
        return tweet.save()         // 수정한 내용이 저장된다.
    })
}

export async function remove(id) {
    return Tweets.findByPk(id).then((tweet) => {
        tweet.destroy()
    })
}