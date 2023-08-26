const Joi = require("joi");

const create_movie = {
    body: Joi.object().keys({
        movie_title: Joi.string().required().trim(),
        movie_director: Joi.string().required().trim(),
        movie_genre: Joi.string().required().trim(),
        movie_release_date: Joi.string().required().trim(),
        movie_rating: Joi.number().required()
    })
}

module.exports = {
    create_movie
}