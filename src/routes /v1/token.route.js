const express = require("express");
const validate = require("../../middlewares/validate");
const { token_Validation } = require("../../validations");
const { token_Controller } = require("../../controllers");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** Create jsonwebtoken */
router.post(
  "/create-token",
  validate(token_Validation.generateToken),
  token_Controller.generateToken
);

/** Verify token to get user details */
router.get("/verify-token", auth(), token_Controller.verifyToken);

module.exports = router;
