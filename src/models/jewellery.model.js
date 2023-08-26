const mongoose = require("mongoose");

const jewellery_Schema = new mongoose.Schema(
    {
        jewellery_name:{
            type:String,
            trim:true
        },
        jewellery_address:{
            type:String,
            trim:true
        },
        jewellery_products:{
            type:String,
            trim:true
        },
        jewellery_specials:{
            type:String,
            trim:true
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

const jewellery = mongoose.model("Jewellery",jewellery_Schema);
module.exports = jewellery;