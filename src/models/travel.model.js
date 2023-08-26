const mongoose = require("mongoose");

const travel_Schema = new mongoose.Schema(
    {
        travel_destination:{
            type:String,
            trim:true
        },
        travel_date:{
            type:String,
            trim:true
        },
        travel_duration:{
            type:String,
            trim:true
        },
        travel_mode:{
            type:String,
            trim:true
        },
        travel_cost:{
            type:Number,
            default:1200
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestramps:true,
        versionKey:false
    }
);

const travel = mongoose.model("Travel",travel_Schema);

module.exports = travel;