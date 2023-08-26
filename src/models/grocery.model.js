const mongoose = require("mongoose");

const grocery_Schema = new mongoose.Schema(
    {
        grocery_name: {
            type:String,
            trim:true
        },
        grocery_category: {
            type:String,
            trim:true
        },
        grocery_price:{
            type:Number,
            default:0
        },
        grocery_stock:{
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

const grocery = mongoose.model("Grocery",grocery_Schema);
module.exports = grocery