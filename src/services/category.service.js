const { Category } = require("../models");

/**
 * category user
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const   create_category = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get category list
 * @returns {Promise<Category>}
 */
const get_category_list = async () => {
    return Category.find();
  };

/**
 * Get category by name
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Category>}
 */
const get_category_by_name = async(category_name)=>{
  return Category.findOne({category_name})
}
module.exports = {
    create_category,
    get_category_list,
    get_category_by_name
}