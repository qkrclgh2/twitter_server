let users = [
    {
        id:'1',
        username:'apple',
        password:'$2b$10$zksNbztWYVgbkZWwF.qHne7ZzHSwMP1X/me3pV7o869rBECaMCs6m',
        name:'김사과',
        email:'apple@apple.com',
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfMjgg/MDAxNjc5OTM1MDk0MDY3.V-2gfYUtJ_Y0oWyqDCXrTWuRYckpQ4Gwoxtqh-nmS3wg.jxOJMNUZZz9-chMrau_tHKOfaLzVWA2uqF1rsmg4r3Ug.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868_12.jpg?type=w966'
    },
    {
        id:'2',
        username:'banana',
        password:'$2b$10$HD6iG8ecz6SyHsQrNs2iVOznxL1IHJMaR4KxJUm8JvsKlv.JNy9OO',
        name:'반하나',
        email:'banana@banana.com',
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfMjgg/MDAxNjc5OTM1MDk0MDY3.V-2gfYUtJ_Y0oWyqDCXrTWuRYckpQ4Gwoxtqh-nmS3wg.jxOJMNUZZz9-chMrau_tHKOfaLzVWA2uqF1rsmg4r3Ug.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868_12.jpg?type=w966'
    },
    {
        id:'3',
        username:'orange',
        password:'$2b$10$fCQE4WhzQJ2Qhh27AxhCAO1gxOc6sYB6ciLolKjOdkWFDrRqwyVpa',
        name:'오렌지',
        email:'orange@orange.com',
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfMjgg/MDAxNjc5OTM1MDk0MDY3.V-2gfYUtJ_Y0oWyqDCXrTWuRYckpQ4Gwoxtqh-nmS3wg.jxOJMNUZZz9-chMrau_tHKOfaLzVWA2uqF1rsmg4r3Ug.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868_12.jpg?type=w966'
    }
]

// 회원만들기
export async function createUser(username, password, name, email) {
    const user = {
        id:'4',
        username,
        password,
        name,
        email,
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfMjgg/MDAxNjc5OTM1MDk0MDY3.V-2gfYUtJ_Y0oWyqDCXrTWuRYckpQ4Gwoxtqh-nmS3wg.jxOJMNUZZz9-chMrau_tHKOfaLzVWA2uqF1rsmg4r3Ug.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868_12.jpg?type=w966'
    }
    users = [user, ...users]
    return user
}

// 로그인
export async function findByUsername(username) {
    const user = users.find((user) => user.username === username)
    return user
}

export async function findById(id) {
    return users.find((user) => user.id === id)
}