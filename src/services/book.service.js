const { Book } = require("../models");
/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const create_book = async (reqBody) => {
    return Book.create(reqBody);
};
/**
 * Get Book list
 * @returns {Promise<Book>}
 */
const get_book_list = async () => {
    // return specific data
    return Book.find({ $or: [{book_author:"James Clear"}]});
    // Return all data
    // return Book.find();
}
/**
 * Get Book by name
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const get_book_by_name = async(book_name) => {
    return Book.findOne({book_name});
}

module.exports = {
    create_book,
    get_book_list,
    get_book_by_name
}