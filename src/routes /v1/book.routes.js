const express = require("express");
const validate = require("../../middlewares/validate");
const { book_Validation } = require("../../validations")
const { book_Controller } = require("../../controllers")
const router = express.Router();

router.post(
    "/create-book",
    validate(book_Validation.createbookValidate),
    book_Controller.create_book
)
router.get(
    "/list",
    book_Controller.get_book_list
)
module.exports = router;