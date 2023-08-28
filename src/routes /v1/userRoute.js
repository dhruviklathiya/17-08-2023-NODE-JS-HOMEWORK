const express = require("express");
const { user_Validation } = require("../../validations");
const { user_Controller } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { valid } = require("joi");

const router = express.Router();
/** create user */
router.post(
    "/create-user",
    validate(user_Validation.create_user),
    user_Controller.create_user
);
/** Get user list */
router.get(
    "/list",
    validate(user_Validation.get_user_list),
    user_Controller.get_user_list
);
router.delete(
    "/delete-user/:userId",
    user_Controller.delete_user
);
router.put(
    "/update-user/:userId",
    validate(user_Validation.create_user),
    user_Controller.update_user
)

module.exports = router;
