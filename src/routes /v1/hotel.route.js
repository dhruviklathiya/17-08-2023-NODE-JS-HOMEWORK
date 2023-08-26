const express = require("express");
const validate = require("../../middlewares/validate")
const { hotel_Validation } = require("../../validations")
const { hotel_Controller } = require("../../controllers")

const router = express.Router();

router.post(
    "/create-hotel",
    validate(hotel_Validation.create_Hotel),
    hotel_Controller.create_hotel
)

router.get(
    "/list",
    hotel_Controller.get_hotel_list
)

router.delete(
    "/delete-hotel/:hotelId",
    validate(hotel_Validation.delete_hotel),
    hotel_Controller.delete_hotel
)

module.exports = router;

