const express = require("express");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const router = express.Router();
const util = require("../lib/util");
const users = require("./../dbMockup/user");

/* 
sign up
METHOD : POST
URI : localhost:3000/user/signup
REQUEST BODY : id, name, password, email
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : All User Data
*/

// require을 통해 login과 signup 메서드를 불러옴
// 라우터와 내부 로직 분리
router.post("/signup", require("./api/user/userSignupPOST"));
router.post("/login", require("./api/user/userLoginPOST"));

module.exports = router;

// 이 파일이 의미없는건지 아님 여기에 라우터를 작성해줘야하는지 (비슷한 방식으로 예를 들어 포스트 메서드를 작성하면 따로 포스트 파일을 만들어서 이 파일처럼 라우트와 내부 로직을 분리해주는 작업을 해야하는지)