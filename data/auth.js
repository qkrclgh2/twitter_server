let users = [
    {
        id:'1',
        username:'apple',
        password:'1111',
        name:'김사과',
        email:'apple@apple.com',
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfMjgg/MDAxNjc5OTM1MDk0MDY3.V-2gfYUtJ_Y0oWyqDCXrTWuRYckpQ4Gwoxtqh-nmS3wg.jxOJMNUZZz9-chMrau_tHKOfaLzVWA2uqF1rsmg4r3Ug.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868_12.jpg?type=w966'
    },
    {
        id:'2',
        username:'banana',
        password:'2222',
        name:'반하나',
        email:'banana@banana.com',
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfMjgg/MDAxNjc5OTM1MDk0MDY3.V-2gfYUtJ_Y0oWyqDCXrTWuRYckpQ4Gwoxtqh-nmS3wg.jxOJMNUZZz9-chMrau_tHKOfaLzVWA2uqF1rsmg4r3Ug.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868_12.jpg?type=w966'
    },
    {
        id:'3',
        username:'orange',
        password:'3333',
        name:'오렌지',
        email:'orange@orange.com',
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfMjgg/MDAxNjc5OTM1MDk0MDY3.V-2gfYUtJ_Y0oWyqDCXrTWuRYckpQ4Gwoxtqh-nmS3wg.jxOJMNUZZz9-chMrau_tHKOfaLzVWA2uqF1rsmg4r3Ug.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868_12.jpg?type=w966'
    }
]

// 회원만들기
export async function createUser(username, password, name, email) {
    const user = {
        id:'4',
        username:username,
        password:password,
        name:name,
        email:email,
        url:'https://postfiles.pstatic.net/MjAyMzAzMjhfMjgg/MDAxNjc5OTM1MDk0MDY3.V-2gfYUtJ_Y0oWyqDCXrTWuRYckpQ4Gwoxtqh-nmS3wg.jxOJMNUZZz9-chMrau_tHKOfaLzVWA2uqF1rsmg4r3Ug.JPEG.wjdtjddms02/KakaoTalk_20230313_205738868_12.jpg?type=w966'
    }
    users = [user, ...users]
    return user
}

// 로그인
export async function login(username) {
    const user = users.find((user) => user.username === username)
    return user
}