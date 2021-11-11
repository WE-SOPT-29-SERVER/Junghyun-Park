const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const util = require("../../../lib/util");
const posts = require("../../../dbMockup/post");

// req.body 를 받을 수 없음.
module.exports = async(req,res) => {
    const allPosting = posts;   // ? const 선언해서 res 보내기 vs 선언안하고 바로 posts로 res 보내기. 둘 중 뭐가 더 나은 방법일까?
    
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_ALLPOSTING_SUCCESS, allPosting));

}