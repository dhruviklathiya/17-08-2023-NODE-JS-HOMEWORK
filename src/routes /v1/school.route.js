const express = require("express");
const validate = require("../../middlewares/validate");
const { school_Validation } = require("../../validations")
const { school_Controller } = require("../../controllers")

const router = express.Router();
router.get(
    "/list",
    school_Controller.get_school_list
);
router.post(
    "/create-school",
    validate(school_Validation.create_school),
    school_Controller.create_school
);
router.delete(
    "/delete-school/:schoolId",
    school_Controller.delete_school
);

module.exports = router;