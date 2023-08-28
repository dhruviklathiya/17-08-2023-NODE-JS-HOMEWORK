const { Book } = require("../models");
/**
 * Create Book
 * @param {object} reqbody
 * @returns {Promise<Book>}
 */
const create_book = async (reqbody) => {
    return Book.create(reqbody);
};
/**
 * Get Book list
 * @returns {Promise<Book>}
 */
const get_book_list = async () => {
    // return specific data
    // return Book.find({ $or: [{book_author:"James Clear"}]});
    // Return all data
    return Book.find();
}
/**
 * Get Book by name
 * @param {object} book_name
 * @returns {Promise<Book>}
 */
const get_book_by_name = async(book_name) => {
    return Book.findOne({book_name});
}
/**
 * Get Book by id
 * @param {object} book_id
 * @returns {Promise<Book>}
 */
const get_book_by_id = async(book_id) => {
    return Book.findById(book_id);
}

/**
 * Delete Book by id
 * @param {object} book_id
 * @returns {Promise<Book>}
 */
const delete_book = async(book_id) => {
    return Book.findByIdAndDelete(book_id);
}

/**
 * Update Book by id
 * @param {object} book_id
 * @returns {Promise<Book>}
 */
const update_book = async(book_id,reqbody) => {
    console.log(reqbody);
    return Book.findByIdAndUpdate(book_id,{ $set: reqbody });
}
module.exports = {
    create_book,
    get_book_list,
    get_book_by_name,
    get_book_by_id,
    delete_book,
    update_book
}