const express = require("express");
const validate = require("../../middlewares/validate");
const { stationary_Validation } = require("../../validations")
const { stationary_Controller } = require("../../controllers")

const router = express.Router();

router.get(
    "/list",
    stationary_Controller.get_stationary_list
);
router.post(
    "/create-stationary",
    validate(stationary_Validation.create_stationary),
    stationary_Controller.create_stationary
);
router.delete(
    "/delete-stationary/:stationaryId",
    stationary_Controller.delete_stationary
);

module.exports = router