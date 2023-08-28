const { Bus } = require("../models")

/**
 * Create bus
 * @param {object} reqbody
 * @returns {Promise<Bus>}
 */
const create_bus = async (reqbody) => {
 return Bus.create(reqbody);
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
 * Get bus by bus_name
 * @param {string} bus_name
 * @returns {Promise<Bus>}
*/
const get_bus_by_name = async(bus_name) => {
    return Bus.findOne({bus_name})
}
/**
 * Delete bus by id
 * @param {ObjectId} bus_id
 * @returns {Promise<Bus>}
 */
const delete_bus = async(bus_id) => {
    return Bus.findByIdAndDelete(bus_id);
}
/**
 * UPDATE bus by id
 * @param {ObjectId} bus_id
 * @returns {Promise<Bus>}
 */
const update_bus = async(bus_id,reqbody) => {
    return Bus.findByIdAndUpdate(bus_id,{$set:reqbody});
}

module.exports = {
    create_bus,
    get_bus_list,
    get_bus_by_id,
    delete_bus,
    get_bus_by_name,
    update_bus
}