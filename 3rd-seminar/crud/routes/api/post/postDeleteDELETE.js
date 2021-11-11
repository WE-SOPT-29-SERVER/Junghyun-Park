const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const util = require("../../../lib/util");
const posts = require("../../../dbMockup/post");

// req.body 를 받을 수 없음.
module.exports = async(req,res) => {
    const id = req.params;

    if(!id){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    const idPost = post.filter(obj => obj.id == id)[0]


    // delete 프로세스
    const deleted = { };

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_ALLPOSTING_SUCCESS, deleted));

}