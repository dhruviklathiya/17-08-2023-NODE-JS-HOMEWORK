const mongoose = require("mongoose");
const school_Schema = new mongoose.Schema(
    {
        school_name:{
            type:String,
            trim:true
        },
        school_address:{
            type:String,
            trim:true
        },
        school_level:{
            type:String,
            trim:true
        },
        school_facilities:{
            type:String,
            trim:true
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
const school = mongoose.model("School", school_Schema);
module.exports = school