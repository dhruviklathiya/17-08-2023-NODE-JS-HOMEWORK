const { Pharmacy } = require("../models");

/**
 * Get Pharmacy by pharmacy_name
 * @param {string} pharmacy_name
 * @returns {Promise<Pharmacy>}
 */
const get_pharma_by_name = async(pharmacy_name) => {
    return Pharmacy.findOne({pharmacy_name});
};

/**
 * Create pharmacy
 * @param {object} reqbody
 * @returns {Promise<Pharmacy>}
 */
const create_pharmacy = async(reqbody) => {
    return Pharmacy.create(reqbody);
}

/**
 * Get pharmacy list
 * @returns {Promise<Pharmacy>}
 */
const get_pharmacy_list = async() => {
    // Specific data
    return Pharmacy.find({$or:[{pharmacy_hours: "Mon-Sun: 24/7"}]});
    // All data
    // return Pharmacy.find();
}
/**
 * Get pharmacy by pharmacy_id
 * @param {string} pharmacy_id
 * @returns {Promise<Pharmacy>}
 */
const get_pharmacy_by_id = async(pharmacy_id) => {
    return Pharmacy.findById(pharmacy_id);
}
/**
 * Delete pharmacy by pharmacy_id
 * @param {string} pharmacy_id
 * @returns {Promise<Pharmacy>}
 */
const delete_pharmacy = async(pharmacy_id) => {
    return Pharmacy.findByIdAndDelete(pharmacy_id);
}

module.exports = {
    get_pharma_by_name,
    create_pharmacy,
    get_pharmacy_list,
    get_pharmacy_by_id,
    delete_pharmacy
}