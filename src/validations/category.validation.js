const Joi = require("joi");

const createCategory = {
    body: Joi.object().keys({
        category_name: Joi.string().required().trim(),
        category_desc: Joi.string().required().trim()
    })
};

const getCategoryList = {
    query: Joi.object().keys({
      search: Joi.string().trim().allow(""),
      sortBy: Joi.string().trim().allow(""),
      limit: Joi.number().integer().required(),
      page: Joi.number().integer().required(),
    }),
  };

module.exports = {
    createCategory,
    getCategoryList
}