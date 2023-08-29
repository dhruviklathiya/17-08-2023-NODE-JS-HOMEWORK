const Joi = require("joi");

const create_mobile = {
    body: Joi.object().keys({
        mobile_name: Joi.string().required().trim(),
        mobile_desc: Joi.string().required().trim(),
        mobile_price: Joi.number().required()
    })
}

module.exports = {
    create_mobile
}