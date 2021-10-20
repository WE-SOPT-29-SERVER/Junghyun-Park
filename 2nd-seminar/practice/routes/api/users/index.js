const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    const result = {
        status : 200,
        message : "Users에 접근합니다."
    };
    res.status(200).send(result);
});

router.post('/login', (req,res) => {
    const result = {
        status : 200,
        message : "로그인에 성공하였습니다."
    };
    res.status(200).send(result);
});

router.post('/signup', (req,res) => {
        const result = {
            status : 200,
            message : "회원가입에 성공하였습니다."
        };
        res.status(200).send(result);
});

module.exports = router;