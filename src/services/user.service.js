const { User } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const create_user = async (reqBody) => {
  return User.create(reqBody);
};

/**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const get_user_list = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return User.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const get_user_by_email = async (email) => {
  return User.findOne({ email });
};

/**
 * Get user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const get_user_by_id = async (userId) => {
  return User.findById(userId);
};

/**
 * user details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<User>}
 */
const update_details = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const delete_user = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  create_user,
  get_user_list,
  get_user_by_id,
  update_details,
  get_user_by_email,
  delete_user,
};
