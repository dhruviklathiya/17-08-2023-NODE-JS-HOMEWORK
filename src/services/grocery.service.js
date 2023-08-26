const { Grocery } = require("../models");
/**
 * Get grocery by grocery_name
 * @param {string} grocery_name
 * @returns {Promise<Grocery>}
 */
const get_grocery_by_name = async(grocery_name) => {
    return Grocery.findOne({grocery_name});
}

/**
 * Create grocery
 * @param {object} reqbody
 * @returns {Promise<Grocery>}
 */
const create_grocery = async(reqbody) => {
    return Grocery.create(reqbody);
}

/**
   * Get grocery list
   * @returns {Promise<Grocery>}
   */
const get_grocery_list = async() => {
    // Specific data
    return Grocery.find({$or:[{grocery_category: "Dairy"}]});
    // All data
    return Grocery.find();
}

/**
 * Get grocery by grocery_id
 * @param {string} grocery_id
 * @returns {Promise<Grocery>}
 */
const get_grocery_by_id = async(grocery_id) => {
    return Grocery.findById(grocery_id);
}

/**
 * Delete grocery
 * @param {ObjectId} grocery_id
 * @returns {Promise<Grocery>}
 */
const delete_grocery = async(grocery_id) => {
    return Grocery.findByIdAndDelete(grocery_id);
}

module.exports = {
    get_grocery_by_name,
    create_grocery,
    get_grocery_list,
    get_grocery_by_id,
    delete_grocery
}