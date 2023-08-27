const express = require("express");
const { product_Validation } = require("../../validations")
const { product_Controller } = require("../../controllers");
const validate = require("../../middlewares/validate");
const router = express.Router();

router.post(
    "/create-product",
    validate(product_Validation.create_product),
    product_Controller.create_product
)
router.get(
    "/list",
    product_Controller.get_product_list
)
router.delete(
    "/delete-product/:productId",
    product_Controller.delete_product
)
module.exports = router