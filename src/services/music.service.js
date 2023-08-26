const { Music } = require("../models");

/**
 * Get user by music_track
 * @param {string} music_track
 * @returns {Promise<Music>}
 */
const get_music_by_track = async(music_track) => {
    return Music.findOne({music_track});
}
/**
 * Create music
 * @param {object} reqbody
 * @returns {Promise<Music>}
 */
const create_music = async(reqbody) => {
    return Music.create(reqbody);
}

/**
 * Get music list
 * @returns {Promise<Music>}
 */
const get_music_list = async() => {
    // Specific data
    return Music.find({$or:[{music_genre: "Rock"}]});
    // All data
    // return Music.find();
}

/**
 * Get music by music_id
 * @param {string} music_id
 * @returns {Promise<Music>}
 */
const get_music_by_id = async(music_id) => {
    return Music.findById(music_id);
}

/**
 * Delete music
 * @param {ObjectId} music_id
 * @returns {Promise<Music>}
 */
const delete_music = async(music_id) => {
    return Music.findByIdAndDelete(music_id);
}

module.exports = {
    get_music_by_track,
    create_music,
    get_music_list,
    get_music_by_id,
    delete_music
}