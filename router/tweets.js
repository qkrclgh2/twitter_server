import express from 'express'

const router = express.Router()

let tweets = [
    {
        id:'1',
        name:'김사과',
        username:'apple',
        text:'안녕하세요',
        createdAt: Date.now().toString(),
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfNjcg/MDAxNjc5OTM0ODI4NjY4.zqXlbKy0qFpg0N-EkZGAZjwDA3kVbS1M6s_nICANQXkg.CcYuyKTOWe4y32jCzlO89z3CHrroRKCvRotWOLzDWdkg.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868.jpg?type=w966'
    },
    {
        id:'2',
        name:'반하나',
        username:'banana',
        text:'반갑습니다',
        createdAt: Date.now().toString(),
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfNjcg/MDAxNjc5OTM0ODI4NjY4.zqXlbKy0qFpg0N-EkZGAZjwDA3kVbS1M6s_nICANQXkg.CcYuyKTOWe4y32jCzlO89z3CHrroRKCvRotWOLzDWdkg.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868.jpg?type=w966'
    },
    {
        id:'3',
        name:'오렌지',
        username:'orange',
        text:'첫 트윗!',
        createdAt: Date.now().toString(),
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfNjcg/MDAxNjc5OTM0ODI4NjY4.zqXlbKy0qFpg0N-EkZGAZjwDA3kVbS1M6s_nICANQXkg.CcYuyKTOWe4y32jCzlO89z3CHrroRKCvRotWOLzDWdkg.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868.jpg?type=w966'
    }
]


// 해당 아이디에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username
    const data = username ? tweets.filter((tweet) => tweet.username == username) : tweets
    res.status(200).json(data)
})

// 글번호에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets/:id
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        res.status(200).json(tweet)
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
})


// 트윗하기
// POST
// http://127.0.0.1:8080/tweets
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.post('/', (req, res, next) => {
    const { username, name, text } = req.body
    const tweet = {
        id:'4',
        username: username,
        name: name,
        text: text,
        createdAt: Date.now().toString()
    }
    tweets = [tweet, ...tweets]
    res.status(201).json(tweets)
})


// 트윗 수정하기
// PUT
// http://127.0.0.1:8080/tweets/:id
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const text = req.body.text
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet) {
        tweet.text = text
        res.status(201).json(tweet)
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`})
    }
})


// 트윗 삭제하기
// DELETE
// http://127.0.0.1:8080/tweets/:id
// router.delete('/:id', (req, res, next) => {
//     const id = req.query.id
//     const tweet = tweets.findIndex((tweet) => tweet.id === id)
//     if(tweet){
//         tweets.splice()
//         res.status(200)
//     }else{
//         res.status(404).json({message: `삭제할 ${id}이 없습니다.`})
//     }
// })
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    tweets = tweets.filter((tweet) => tweet.id !== id)
    res.status(204)
})


export default router