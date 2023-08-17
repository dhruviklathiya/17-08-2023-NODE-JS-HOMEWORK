const { Category } = require("../models");

/**
 * category user
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getCategoryList = async (filter,options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Category.find(filter).skip(skip).limit(options.limit);
  };

module.exports = {
    createCategory,
    getCategoryList
}