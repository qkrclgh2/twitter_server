import express from 'express'
import * as tweetController from '../controller/tweet.js'
import { body } from 'express-validator'
import { validate } from '../middleware/validator.js'

const router = express.Router()

// 유효성 검사 체크
const validateTweet = [
    // 앞의 조건을 만족하지 못한다면 validate로 이동한다
    body('text').trim().isLength({min:3}).withMessage('최소 3자이상 입력'), validate
]


// 해당 아이디에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets?username=:username
router.get('/', tweetController.getTweets)

// 글번호에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets/:id - 체크
router.get('/:id', tweetController.getTweet)


// 트윗하기
// POST
// http://127.0.0.1:8080/tweets
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.post('/', validateTweet, tweetController.createTweet)


// 트윗 수정하기
// PUT
// http://127.0.0.1:8080/tweets/:id
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.put('/:id', validateTweet, tweetController.updateTweet)


// 트윗 삭제하기
// DELETE
// http://127.0.0.1:8080/tweets/:id
router.delete('/:id', tweetController.deleteTweet)


export default router