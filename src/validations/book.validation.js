const Joi = require("joi");

const createbookValidate = {
    body: Joi.object().keys({
        book_name: Joi.string().required().trim(),
        book_author: Joi.string().required().trim()
    })
};

module.exports = {
    createbookValidate
}