const mongoose = require("mongoose");

const music_Schema = new mongoose.Schema(
    {
        music_track: {
            type: String,
            trim: true
        },
        music_artist: {
            type: String,
            trim: true
        },
        music_genre: {
            type: String,
            trim: true
        },
        music_album: {
            type: String,
            trim: true
        },
        music_duration: {
            type: String,
            trim: true
        },
        is_active:{
            type: Boolean,
            default: true
        }
    },
    {
        timestramps: true,
        versionKey: false
    }
);

const music = mongoose.model("Music", music_Schema);
module.exports = music