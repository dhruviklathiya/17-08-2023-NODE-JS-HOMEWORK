const { Movie } = require("../models")

/**
 * Get movie by title
 * @param {string} movie_title
 * @returns {Promise<Movie>}
 */
const get_movie_by_title = async(movie_title) => {
    return Movie.findOne({movie_title});
}

/**
 * Create movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const create_movie = async(reqbody) => {
    return Movie.create(reqbody);
}

/**
 * Get movie list
 * @returns {Promise<User>}
 */
const get_movie_list = async() => {
    // Specific data
    return Movie.find({$or:[{movie_rating: 8.8}]});
    // All data
    // return Movie.find();
}

/**
 * Get movie by movie_id
 * @param {string} movie_id
 * @returns {Promise<Movie>}
 */
const get_movie_by_id = async(movie_id) => {
    return Movie.findById(movie_id);
}

/**
 * Delete movie
 * @param {ObjectId} movie_id
 * @returns {Promise<Movie>}
 */
const delete_movie = async(movie_id) => {
    return Movie.findByIdAndDelete(movie_id);
}
module.exports = {
    get_movie_by_title,
    create_movie,
    get_movie_list,
    get_movie_by_id,
    delete_movie
}