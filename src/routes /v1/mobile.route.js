const express = require("express");
const validate = require("../../middlewares/validate");
const { mobile_Validation } = require("../../validations");
const { mobile_Controller } = require("../../controllers")

const router = express.Router();
router.post(
    "/create-mobile",
    validate(mobile_Validation.create_mobile),
    mobile_Controller.create_mobile
)
router.get(
    "/list",
    mobile_Controller.get_mobile_list
)
module.exports = router;