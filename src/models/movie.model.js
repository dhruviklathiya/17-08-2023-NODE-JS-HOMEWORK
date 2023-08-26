const mongoose = require("mongoose");

const movie_Schema = new mongoose.Schema(
    {
        movie_title:{
        type:String,
            trim:true
        },
        movie_director:{
            type:String,
            trim:true
        },
        movie_genre:{
            type:String,
            trim:true
        },
        movie_release_date:{
            type:String,
            trim:true
        },
        movie_rating: {
            type:Number,
            default:0
        },
        is_active: {
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const movie = mongoose.model("Movie",movie_Schema);
module.exports = movie;