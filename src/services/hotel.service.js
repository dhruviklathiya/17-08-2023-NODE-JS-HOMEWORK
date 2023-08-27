const { Hotel } = require("../models");

/**
 * Create hotel
 * @param {object} reqbody
 * @returns {Promise<Hotel>}
 */
const create_hotel = async (reqbody) => {
  return Hotel.create(reqbody);
};

/**
 * Get hotel by name
 * @param {string} hotel_name
 * @returns {Promise<Hotel>}
 */
const get_hotel_by_name = async (hotel_name) => {
    return Hotel.findOne({ hotel_name });
  };

  /**
 * Get hotel by id
 * @param {string} hotelId
 * @returns {Promise<Hotel>}
 */
const get_hotel_by_id = async (hotelId) => {
  return Hotel.findById(hotelId);
};

  /**
 * Get Hotel list
 * @returns {Promise<Hotel>}
 */
const get_hotel_list = async () => {
    // Return Specifc data
    return Hotel.find({ $or:[{hotel_total_rooms:2}]})
    // Return all data
    // return Hotel.find();
  };
/**
 * Delete Hotel by id
 * @param {ObjectId} hotelId
 * @returns {Promise<Hotel>}
 */
const delete_hotel = async (hotelID) => {
  return Hotel.findByIdAndDelete(hotelID);
};

module.exports = {
    create_hotel,
    get_hotel_by_name,
    get_hotel_list,
    get_hotel_by_id,
    delete_hotel
}
