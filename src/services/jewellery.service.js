const { Jewellery } = require("../models");

/**
 * Get Jewellery by name
 * @param {string} jewellery_name
 * @returns {Promise<Jewellery>}
 */
const get_jewellery_by_name = async (jewellery_name) => {
    return Jewellery.findOne({jewellery_name});
}

/**
 * Create jewellery
 * @param {object} reqbody
 * @returns {Promise<Jewellery>}
 */
const create_jewellery = async(reqbody) => {
    return Jewellery.create(reqbody);
}

/**
 * Get jewellery list
 * @returns {Promise<Jewellery>}
 */
const get_jewellery_list = async() => {
    // Specific data
    return Jewellery.find({$or:[{jewellery_specials: "50% Off Diamond Collection"}]});
    // All data
    // return Jewellery.find();
}

/**
 * Get jewellery by jewellery_id
 * @param {string} jewellery_id
 * @returns {Promise<Jewellery>}
 */
const get_jewellery_by_id = async(jewellery_id) => {
    return Jewellery.findById(jewellery_id);
}

/**
 * Delete jewellery
 * @param {ObjectId} jewellery_id
 * @returns {Promise<Jewellery>}
 */
const delete_jewellery = async(jewellery_id) => {
    return Jewellery.findByIdAndDelete(jewellery_id);
}
module.exports = {
    get_jewellery_by_name,
    create_jewellery,
    get_jewellery_list,
    get_jewellery_by_id,
    delete_jewellery
}