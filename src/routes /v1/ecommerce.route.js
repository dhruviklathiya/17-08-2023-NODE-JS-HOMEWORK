const express = require("express");
const { ecommerce_Controller } = require("../../controllers")

const router = express.Router();

router.get(
    "/list",
    ecommerce_Controller.get_all_list
)

module.exports = router;