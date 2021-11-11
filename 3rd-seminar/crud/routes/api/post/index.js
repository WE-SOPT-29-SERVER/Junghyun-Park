const express = require("express");
const router = express.Router();

// /post
router.get("/allposting", require("./postAllpostingGET"));
router.delete("/delete", require("./postDeleteDELETE"));
router.get("/idposting", require("./postIdpostingGET"));
router.put("/modify", require("./postModifyPUT"));
router.post("/posting", require("./postPostingPOST"));

module.exports = router;