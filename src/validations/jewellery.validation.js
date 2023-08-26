const Joi = require("joi");

const create_jewellery = {
    body: Joi.object().keys({
        jewellery_name:Joi.string().required().trim() ,
        jewellery_address:Joi.string().required().trim() ,
        jewellery_products:Joi.string().required().trim() ,
        jewellery_specials:Joi.string().required().trim()
    })
}

module.exports = {
    create_jewellery
}