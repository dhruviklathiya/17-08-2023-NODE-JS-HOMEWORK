const express = require("express");
const validate = require("../../middlewares/validate");
const { travel_Validation }  = require("../../validations");
const { travel_Controller } = require("../../controllers");

const router = express.Router();
router.get(
    "/list",
    travel_Controller.get_travel_list
);
router.post(
    "/create-travel",
    validate(travel_Validation.create_travel),
    travel_Controller.create_travel
);
router.delete(
    "/delete-travel/:travelId",
    travel_Controller.delete_travel
);

module.exports = router