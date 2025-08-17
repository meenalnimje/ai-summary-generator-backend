const express = require("express");
const uploadcontroller = require("../controllers/upload");

const router = express.Router();

router.post("/summary", uploadcontroller.summarize);
router.post("/email", uploadcontroller.sendEmail);
module.exports = router;
