const express = require('express');
const router = express.Router();

router.use("/user", require("./api/user"));
router.use("/post", require("./api/post"));

module.exports = router;
