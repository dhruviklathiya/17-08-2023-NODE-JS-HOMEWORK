const express = require("express");
const validate = require("../../middlewares/validate");
const { book_Validation } = require("../../validations")
const { book_Controller } = require("../../controllers")

const router = express.Router();
router.post(
    "/create-book",
    validate(book_Validation.create_book),
    book_Controller.create_book
)
router.get(
    "/list",
    book_Controller.get_book_list
)
router.delete(
    "/delete-book/:bookId",
    book_Controller.delete_book
)
router.put(
    "/update-book/:bookId",
    validate(book_Validation.create_book),
    book_Controller.update_book
)
module.exports = router;