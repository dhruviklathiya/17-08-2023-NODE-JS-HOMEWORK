const express = require("express")
const userRouter = require("./userRoute")
const categoryRouter = require("./category.route")
const bookRouter = require("./book.routes")
const hotelRouter = require("./hotel.route")
const busRouter = require("./bus.route")
const stationaryRouter = require("./stationary.route")
const schoolRouter = require("./school.route")
const travelRouter = require("./travel.route")
const pharmacyRouter = require("./pharmacy.route")
const jewelleryRouter = require("./jewellery.route")
const movieRouter = require("./movie.route")
const musicRouter = require("./music.route")
const groceryRouter = require("./grocery.route")

const router = express.Router();

router.use("/user",userRouter);
router.use("/category",categoryRouter);
router.use("/book",bookRouter);
router.use("/hotel",hotelRouter);
router.use("/bus",busRouter);
router.use("/stationary",stationaryRouter);
router.use("/school",schoolRouter);
router.use("/travel",travelRouter);
router.use("/pharmacy",pharmacyRouter);
router.use("/jewellery",jewelleryRouter);
router.use("/movie",movieRouter);
router.use("/music",musicRouter);
router.use("/grocery",groceryRouter);

module.exports = router;