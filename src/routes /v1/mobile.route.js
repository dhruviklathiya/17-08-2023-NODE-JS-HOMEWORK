const express = require("express");
const validate = require("../../middlewares/validate");
const { mobile_Validation } = require("../../validations");
const { mobile_Controller } = require("../../controllers")

const router = express.Router();
/* *CREATE MOBILE ROUTE */
router.post(
    "/create-mobile",
    validate(mobile_Validation.create_mobile),
    mobile_Controller.create_mobile
)
/* *GET MOBILE LIST ROUTE */
router.get(
    "/list",
    mobile_Controller.get_mobile_list
)
/* *UPDATE MOBILE STATUS ROUTE */
router.put(
    "/update-mobile-state/:mobileId",
    mobile_Controller.update_mobile_state
)
/* *UPDATE MOBILE DETAILS */
router.put(
    "/update-mobile/:mobileId",
    mobile_Controller.update_mobile
)
/* *DELETE MOBILE ROUTE */
router.delete(
    "/delete-mobile/:mobileId",
    mobile_Controller.delete_mobile
)
module.exports = router;