const mongoose = require("mongoose");

const hotel_Schema = new mongoose.Schema(
    {
        hotel_name: {
            type:String,
            trim:true
        },
        hotel_address: {
            type:String,
            trim:true
        },
        hotel_location: {
            type:String,
            trim:true
        },
        hotel_total_rooms : {
            type: Number,
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
    });

const hotel = mongoose.model("Hotels",hotel_Schema);
module.exports = hotel;