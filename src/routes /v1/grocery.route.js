const express = require("express");
const validate = require("../../middlewares/validate");
const router = express.Router();
const { grocery_Validation } = require("../../validations")
const { grocery_Controller } = require("../../controllers")

router.get(
    "/list",
    grocery_Controller.get_grocery_list
);
router.post(
    "/create-grocery",
    validate(grocery_Validation.create_grocery),
    grocery_Controller.create_grocery
);
router.delete(
    "/delete-grocery/:groceryId",
    grocery_Controller.delete_grocey
);

module.exports = router