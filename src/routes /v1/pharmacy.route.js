const express = require("express");
const validate = require("../../middlewares/validate");
const router = express.Router();
const { pharmacy_Validation } = require("../../validations")
const { pharmacy_Controller } = require("../../controllers")

router.get(
    "/list",
    pharmacy_Controller.get_pharmacy_list
);
router.post(
    "/create-pharmacy",
    validate(pharmacy_Validation.create_pharmacy),
    pharmacy_Controller.create_pharmacy
);
router.delete(
    "/delete-pharmacy/:pharmacyId",
    pharmacy_Controller.delete_pharmacy
);

module.exports = router