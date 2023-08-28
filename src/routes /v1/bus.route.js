const express = require("express");
const validate = require("../../middlewares/validate")
const { bus_Validation } = require("../../validations")
const { bus_Controller } = require("../../controllers")

const router = express.Router();
router.post(
    "/create-bus",
    validate(bus_Validation.create_bus),
    bus_Controller.create_bus
)
router.get(
    "/list",
    bus_Controller.get_bus_list
)
router.delete(
    "/delete-bus/:busId",
    bus_Controller.delete_bus
)
router.put(
    "/update-bus/:busId",
    validate(bus_Validation.create_bus),
    bus_Controller.update_bus
)

module.exports = router