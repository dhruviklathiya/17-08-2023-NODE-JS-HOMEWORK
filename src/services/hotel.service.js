const { Hotel } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
const create_hotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

/**
 * Get user by email
 * @param {string} hotel_name
 * @returns {Promise<Hotel>}
 */
const get_hotel_by_name = async (hotel_name) => {
    return Hotel.findOne({ hotel_name });
  };

  /**
 * Get user by email
 * @param {string} hotelId
 * @returns {Promise<Hotel>}
 */
const get_hotel_by_id = async (hotelId) => {
  return Hotel.findById(hotelId);
};

  /**
 * Get Hotel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Hotel>}
 */
const get_hotel_list = async () => {
    // Return Specifc data
    return Hotel.find({ $or:[{hotel_total_rooms:2}]})
    // Return all data
    // return Hotel.find();
  };
/**
 * Delete Hotel
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
