const express = require("express");
const router = express.Router()
const validate = require("../../middlewares/validate")
const { bookValidation } = require("../../validations")
const { bookController } = require("../../controllers")
router.post(
    "/create-book",
    validate(bookValidation.create_book_validation),
    bookController.create_book_controller
    )
router.get(
    "/list",
    bookController.get_book_contoller
)
module.exports = router;