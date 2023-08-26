const Joi = require("joi");

const create_school = {
    body: Joi.object().keys({
        school_name:Joi.string().required().trim(),
        school_address:Joi.string().required().trim(),
        school_level:Joi.string().required().trim(),
        school_facilities:Joi.string().required().trim(),
    })
}

module.exports = {
    create_school
}