const mongoose = require("mongoose");

const pharmacy_Schema = new mongoose.Schema(
    {
        pharmacy_name:{
            type:String,
            trim:true
        },
        pharmacy_address:{
            type:String,
            trim:true
        },
        pharmacy_products:{
            type:String,
            trim:true
        },
        pharmacy_hours:{
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

const pharmacy = mongoose.model("Pharmacy",pharmacy_Schema);
module.exports = pharmacy;