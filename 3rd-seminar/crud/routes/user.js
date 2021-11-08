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
router.post("/signup", require("./userSignupPOST"));
router.post("/login", require("./userLoginPOST"));

module.exports = router;