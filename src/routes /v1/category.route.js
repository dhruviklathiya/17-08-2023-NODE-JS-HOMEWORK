const express = require("express");
const { category_Validation } = require("../../validations");
const { category_Controller } = require("../../controllers");
const validate = require("../../middlewares/validate")

const router = express.Router()

router.get(
    "/list",
    category_Controller.category_list
)

router.post(
    "/create-category",
    validate(category_Validation.createCategory),
    category_Controller.create_category
)

module.exports = router;
