const mongoose = require("mongoose");

const stationary_Schema = new mongoose.Schema(
    {
        item_name:{
            type:String,
            trim:true
        },
        item_category:{
            type:String,
            trim:true
        },
        item_price:{
            type:Number,
            default:0
        },
        item_stock:{
            type:Number,
            default:0
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);
const stationary = mongoose.model("Stationary",stationary_Schema);
module.exports = stationary;