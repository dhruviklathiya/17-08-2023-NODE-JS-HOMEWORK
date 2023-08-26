const express = require("express");
const validate = require("../../middlewares/validate");
const { jewellery_Validation } = require("../../validations")
const { jewellery_Controller } = require("../../controllers")

const router = express.Router();
router.get(
    "/list",
    jewellery_Controller.get_jewellery_list
);
router.post(
    "/create-jewellery",
    validate(jewellery_Validation.create_jewellery),
    jewellery_Controller.create_jewellery
);
router.delete(
    "/delete-jewellery/:jewelleryId",
    jewellery_Controller.delete_jewellery
);

module.exports = router