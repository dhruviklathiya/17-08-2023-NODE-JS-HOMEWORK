const Joi = require("joi");

const create_stationary = {
    body: Joi.object().keys({
        item_name: Joi.string().required().trim(),
        item_category: Joi.string().required().trim(),
        item_price: Joi.number().required(),
        item_stock: Joi.number().integer().required()
    })
}

module.exports = {
    create_stationary
}