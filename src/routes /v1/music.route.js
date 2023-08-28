const express = require("express");
const validate = require("../../middlewares/validate");
const { music_Validation } = require("../../validations")
const { music_Controller } = require("../../controllers")
const router = express.Router();

router.get(
    "/list",
    music_Controller.get_music_list
);
router.post(
    "/create-music",
    validate(music_Validation.create_music),
    music_Controller.create_music
);
router.delete(
    "/delete-music/:musicId",
    music_Controller.delete_music
);
router.put(
    "/update-music/:musicId",
    validate(music_Validation.create_music),
    music_Controller.update_music
);

module.exports = router