const { School } = require("../models")

/**
 * Create school
 * @param {object} reqbody
 * @returns {Promise<School>}
 */
const create_school = async (reqbody) => {
    return School.create(reqbody);
};

/**
 * Get school by name
 * @param {string} school_name
 * @returns {Promise<School>}
 */
const get_school_by_name = async(school_name) => {
    return School.findOne({school_name});
}

/**
 * Get school list
 * @returns {Promise<School>}
 */
const get_school_list = async () => {
    // Specific data
    return School.find({$or:[{school_level: "Elementary"}]});
    // All data
    // return School.find();
}

/**
 * Get bus by bus_id
 * @param {string} school_id
 * @returns {Promise<School>}
 */
const get_school_by_id = async(schoold_id) => {
    return School.findById(schoold_id)
}
/**
 * Get bus by school_id
 * @param {string} school_id
 * @returns {Promise<School>}
 */
const delete_school = async(schoold_id) => {
    return School.findByIdAndDelete(schoold_id)
}

module.exports = {
    create_school,
    get_school_by_name,
    get_school_list,
    get_school_by_id,
    delete_school
}