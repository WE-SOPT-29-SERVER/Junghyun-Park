const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const util = require("../../../lib/util");
const posts = require("../../../dbMockup/post");

// req.body 를 받을 수 없음.
// delete, get을 사용할 때는, data로 넘기지말고 params로 간단히 id를 넘겨야 한다. - 라고 한다.
module.exports = async(req,res) => {
    const { id } = req.body;  // ? 이렇게 해주면 id가 /dbMockup/post 에서의 id를 가져오는지 어떻게 알지?

    //게시글 id가 없을 때
    if(!id){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    //id 확인
    const post = posts.filter(obj => obj.id === Number(id));
    
    //게시글이 빈 값일 때
    if(post == ''){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(statusCode.NOT_FOUND, responseMessage.NO_POSTING),
        );
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_POSTING_SUCCESS, post));
}