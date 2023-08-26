const Joi = require("joi");

const create_pharmacy = {
    body: Joi.object().keys({
        pharmacy_name:Joi.string().required().trim() ,
        pharmacy_address:Joi.string().required().trim() ,
        pharmacy_products:Joi.string().required().trim() ,
        pharmacy_hours:Joi.string().required().trim()
    })
}

module.exports = {
    create_pharmacy
}