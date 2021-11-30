// 폴더명 + 라우트명 + 메서드명
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const util = require("../../../lib/util");
const users = require("../../../dbMockup/user");

//  /user/login 요청을 여기서 핸들링
//              여기는 path    여기는 로직
//  모두 /user의 하위 라우터임.
module.exports = async(req,res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    //유저 확인
    const user = users.filter(user => user.email === email)[0];

    if(!user){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    //위에서 체크한 유저의 비밀번호와 입력된 비밀 번호 비교 >> 실제로는 해싱 때문에 이렇게 못함
    if(user.password !== password){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
                statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW,
            ),
        );
    }

    // const onlineUser = {
    //     id: URLSearchParams.length + 1,
    //     password, 
    // };

    // res.status(200).send(onlineUser);
}