const express = require("express");
const validate = require("../../middlewares/validate");
const router = express.Router();
const { movie_Validation }  = require("../../validations");
const { movie_Controller }  = require("../../controllers");

router.get(
    "/list",
    movie_Controller.get_movie_list
);
router.post(
    "/create-movie",
    validate(movie_Validation.create_movie),
    movie_Controller.create_movie
);
router.delete(
    "/delete-movie/:movieId",
    movie_Controller.delete_movie
);

module.exports = router