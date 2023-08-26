const Joi = require("joi");

const create_bus = {
    body: Joi.object().keys({
        bus_name: Joi.string().required().trim(),
        bus_plate_number: Joi.string().required().trim(),
        bus_origin: Joi.string().required().trim(),
        bus_destination: Joi.string().required().trim(),
        bus_schedule: Joi.string().required().trim(),
        bus_stops: Joi.string().required().trim()
    })
}

module.exports = {
    create_bus
}