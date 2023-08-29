const mongoose = require("mongoose");

const mobile_Schema = new mongoose.Schema(
    {
        mobile_name : {
            type:String,
            trim:true
        },
        mobile_desc : {
            type:String,
            trim:true
        },
        mobile_price : {
            type:Number,
            default:0
        },
        is_active : {
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const mobile = mongoose.model("Mobile",mobile_Schema);
module.exports = mobile;