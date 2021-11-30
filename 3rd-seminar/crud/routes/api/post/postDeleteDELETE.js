const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const util = require("../../../lib/util");
const posts = require("../../../dbMockup/post");

// req.body 를 받을 수 없음.
module.exports = async(req,res) => {
    const { id } = req.params;

    if(!id){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    // 해당하는 post를 배열에서 빼기
    const existingPost = post.filter(obj => obj.id === Number(id))[0]

    if(!existingPost){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POSTING),  // ? NO_POSTING 이 맞는지 확신없음.
        );
    }

    const newPosts = posts.filter(obj => obj.id !== Number(id));

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.DELETE_POST_SUCCESS, newPosts));

}