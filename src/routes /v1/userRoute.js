const express = require("express");
const { user_Validation } = require("../../validations");
const { user_Controller } = require("../../controllers");
const validate = require("../../middlewares/validate")

const router = express.Router();

/** create user */
router.post(
    "/create-user",
    validate(user_Validation.createUser),
    user_Controller.create_user
);

/** Get user list */
router.get(
    "/list",
    validate(user_Validation.getUserList),
    user_Controller.get_user_list
);

module.exports = router;
