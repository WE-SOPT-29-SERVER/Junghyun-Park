const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    const result = {
        status : 200,
        message : "blog에 접근합니다."
    };
    res.status(200).send(result);
});

router.post("/post", (req,res) => {
    const result = {
        status : 200,
        message : "포스팅하였습니다."
    };
    res.status(200).send(result);
});

// router.use("/api", require("./api"));

// //이게 맞는지 index 파일에서 경로를 지정해주는건지 확실히 알아보기
// router.use("/blog", require("./blog"));

module.exports = router;