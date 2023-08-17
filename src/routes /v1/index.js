const express = require("express")
const userRouter = require("./userRoute")
const categoryRouter = require("./categoryRoute")

const router = express.Router();

router.use("/user",userRouter);
router.use("/category",categoryRouter);

module.exports = router;