const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const util = require("../../../lib/util");
const posts = require("../../../dbMockup/post");

module.exports = async(req,res) => {
    const id = req.params;
    const { title, text } = req.body;

    if(!id || !title || !text){
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE)
            );
    }

    const post = posts.filter(obj => obj.id)[0];

    if(!post){
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POSTING)
            );
    }

    // 게시글을 수정하는 프로세스..
    const newPost = { };

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MODIFY_POST_SUCCESS, newPost));

}