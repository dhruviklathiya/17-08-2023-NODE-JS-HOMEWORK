const express = require("express")
const userRouter = require("./userRoute")
const categoryRouter = require("./categoryRoute")
const bookRouter = require("./bookRouter")
const router = express.Router();

router.use("/user",userRouter);
router.use("/category",categoryRouter);
router.use("/book",bookRouter)

module.exports = router;