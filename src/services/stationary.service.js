const { Stationary } = require("../models");

/**
 * Get item by name
 * @param {string} item_namename
 * @returns {Promise<Stationary>}
 */
const get_item_by_name = async (item_name) => {
    return Stationary.findOne({item_name});
}
/**
* Create item
* @param {object} reqBody
* @returns {Promise<Stationary>}
*/
const create_stationary = async(reqbody) =>{
    return Stationary.create(reqbody);
};

/**
 * Get item list
 * @returns {Promise<Stationary>}
 */
const get_stationary_list = async() => {
    // Specific data
    return Stationary.find({$or:[{item_stock: 200}]});
    // All data
    // return Stationary.find();
}

/**
 * Get item by item_name
 * @param {string} item_name
 * @returns {Promise<Stationary>}
 */
const get_item_by_id = async(stationary_id) => {
    return Stationary.findById(stationary_id);
}

/**
 * Delete by item id
 * @param {string} stationary_id
 * @returns {Promise<Stationary>}
 */
const delete_item = async(stationary_id) => {
    return Stationary.findByIdAndDelete(stationary_id);
}

module.exports = {
    get_item_by_name,
    create_stationary,
    get_stationary_list,
    get_item_by_id,
    delete_item
}