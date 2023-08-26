const Joi = require("joi");

const create_music = {
    body: Joi.object().keys({
        music_track: Joi.string().required().trim(),
        music_artist: Joi.string().required().trim(),
        music_genre: Joi.string().required().trim(),
        music_album: Joi.string().required().trim(),
        music_duration: Joi.string().required().trim()
    })
}

module.exports = {
    create_music
}