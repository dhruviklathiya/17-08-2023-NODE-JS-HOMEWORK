const { Bus } = require("../models")

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const create_bus = async (reqBody) => {
 return Bus.create(reqBody);
};

/**
 * Get Bus list
 * @returns {Promise<Bus>}
 */
const get_bus_list = async () => {
    // Specific data
    return Bus.find({$or:[{bus_plate_number: "LMN234"}]})
    // All data
    // return Bus.find();
};

/**
 * Get bus by bus_id
 * @param {string} bus_id
 * @returns {Promise<Bus>}
 */
const get_bus_by_id = async(bus_id) => {
    return Bus.findById(bus_id);
}

/**
 * Delete bus
 * @param {ObjectId} bus_id
 * @returns {Promise<Bus>}
 */
const delete_bus = async(bus_id) => {
    return Bus.findByIdAndDelete(bus_id);
}

const get_bus_by_name = async(bus_name) => {
    return Bus.findOne({bus_name})
}

module.exports = {
    create_bus,
    get_bus_list,
    get_bus_by_id,
    delete_bus,
    get_bus_by_name
}