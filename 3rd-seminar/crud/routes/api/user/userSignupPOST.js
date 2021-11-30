// 폴더명 + 라우트명 + 메서드명
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const util = require("../../../lib/util");
const users = require("../../../dbMockup/user");

//  /user/signup 요청을 여기서 핸들링
//              여기는 path    여기는 로직
//  모두 /user의 하위 라우터임.
module.exports = async(req,res) => {

        /* const email = req.body.email;
         const name = req.body.name;
         const password = req.body.password; */
    
        /*
        비구조화 할당, email, name, password를 body에 담아서 보내줌
        const { email: myEmail } 처럼 이름을 정해줄 수도 있음 but 흔하지 않음
        */
        const { name, password, email } = req.body;
    
        // request body가 잘못됐을 때
        if (!name || !password || !email) {     //res.status(코드).send(메시지)
            return res
                .status(statusCode.BAD_REQUEST)
                .send(
                    util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE)
                );
        }
    
        // 해당 email를 가진 유저가 이미 있을 경우 Already Email 반환
        const alreadyUser = users.filter(obj => obj.email === email).length > 0; //배열의 길이가 0보다 큰지 판별
        if (alreadyUser) {
            return res
                .status(statusCode.BAD_REQUEST)
                .send(
                    util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL)
                );
        }
    
        const newUser = {
            id:users.length + 1, // > 처음 비구조화 할당 시에는 id는 보내주지 않아서 여기에 넣으면 NoNo
            name,
            password, 
            email
        };
        users.push(newUser);
    
        res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, newUser));
    
}