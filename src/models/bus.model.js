const mongoose = require("mongoose");

const bus_Schema = new mongoose.Schema(
    {
        bus_name:{
            type:String,
            trim:true
        },
        bus_plate_number:{
            type:String,
            trim:true
        },
        bus_origin:{
            type:String,
            trim:true
        },
        bus_destination:{
            type:String,
            trim:true
        },
        bus_schedule:{
            type:String,
            trim:true
        },
        bus_stops:{
            type:String,
            trim:true
        },
        is_active: {
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionkey:false
});
const bus = mongoose.model("Buses",bus_Schema);
module.exports = bus;