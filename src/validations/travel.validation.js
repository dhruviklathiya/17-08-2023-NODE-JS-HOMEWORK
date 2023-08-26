const Joi = require("joi");

const create_travel = {
    body: Joi.object().keys({
        travel_destination: Joi.string().required().trim(),
        travel_date: Joi.string().required().trim(),
        travel_duration: Joi.string().required().trim(),
        travel_mode: Joi.string().required().trim(),
        travel_cost: Joi.number().integer().required()
    })
}

module.exports = {
    create_travel
}