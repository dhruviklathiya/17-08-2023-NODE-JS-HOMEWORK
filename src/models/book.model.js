const mongoose = require("mongoose");

const book_Schema = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true
        },
        book_author: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
});

const book = mongoose.model("Book",book_Schema);
module.exports = book;