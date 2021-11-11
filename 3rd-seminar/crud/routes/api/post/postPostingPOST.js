const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const util = require("../../../lib/util");
const posts = require("../../../dbMockup/post");

module.exports = async(req,res) => {
    const id = req.params;
    const {title, text, writer} = req.body; // 여기에 id 값도 넣고싶은데 위에 선언한 id 때문에 안되는 상황. 이럴때는 위에 선언한 id를 수정해야하나 아니면 그냥 무시하고 선언해도 괜찮은가
    
    if(!title || !text || !writer){
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE)
            );
    }

    const newPost = {
        id : posts.length + 1,
        title,
        text,
        writer,
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_POST_SUCCESS, newPost));

}