const Book = require("../models/book.model")
/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const createBook = async (reqBody) => {
    return Book.create(reqBody);
};

/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Book>}
 */
const getbooklist = async (filter,options) => {
    const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Book.find(filter).skip(skip).limit(options.limit);
};

module.exports = {
    createBook,
    getbooklist
}