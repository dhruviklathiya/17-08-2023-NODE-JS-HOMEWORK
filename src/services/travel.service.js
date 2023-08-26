const { Travel } = require("../models");
/**
 * Create travel
 * @param {object} reqBody
 * @returns {Promise<Travel>}
 */
const create_travel = async(reqbody) => {
    return Travel.create(reqbody);
}

/**
 * Get travel by destination
 * @param {string} travel_destination
 * @returns {Promise<Travel>}
 */
const get_travel_by_destination = async(travel_destination) => {
    return Travel.findOne({travel_destination})
}

/**
 * Get travel by destination
 * @returns {Promise<Travel>}
 */
const get_travel_list = async() => {
    // Specific data
    return Travel.find({$or:[{travel_mode: "Flight"}]});
    // All data
    // return Travel.find();
}

/**
 * Get travel by travel_id
 * @param {string} travel_id
 * @returns {Promise<Travel>}
 */
const get_travel_by_id = async(travel_id) => {
    return Travel.findById(travel_id);
}
/**
 * Delete travel by travel_id
 * @param {string} travel_id
 * @returns {Promise<Travel>}
 */
const delete_travel = async(travel_id) => {
    return Travel.findByIdAndDelete(travel_id);
}

module.exports = {
    create_travel,
    get_travel_by_destination,
    get_travel_list,
    get_travel_by_id,
    delete_travel
}