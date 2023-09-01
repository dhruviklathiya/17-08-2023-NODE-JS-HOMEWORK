const express = require("express");
const validate = require("../../middlewares/validate");
const { student_Validation } = require("../../validations");
const { student_Controller } = require("../../controllers");

const router = express.Router();

/** CREATE STUDENT ROUTE */
router.post(
    "/create-student",
    validate(student_Validation.create_student),
    student_Controller.create_student
)
/** LIST STUDENT ROUTE */
router.get(
    "/list",
    student_Controller.get_student_list
)
/** DELETE STUDENT ROUTE */
router.delete(
    "/delete-student/:deleteId",
    student_Controller.delete_student
)

module.exports = router;