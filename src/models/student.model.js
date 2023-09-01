const mongoose = require("mongoose");

const student_Schema = new mongoose.Schema(
    {
        student_name: {
            type: String,
            trim:true
        },
        student_course: {
            type: String,
            trim:true
        },
        student_dob: {
            type: String,
            trim:true
        },
        student_contact: {
            type: Number
        },
        student_email: {
            type: String,
            trim:true
        },
        guardian_name: {
            type: String,
            trim:true
        },
        guardian_contact: {
            type: String,
            trim:true
        },
        school : {
            type: mongoose.Types.ObjectId,
            ref: "School"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const student = mongoose.model("Student",student_Schema);
module.exports = student