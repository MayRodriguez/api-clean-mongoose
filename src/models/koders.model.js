const mongoose = require("mongoose");

const kodersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        masLength: 50,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        masLength: 50,
        trim: true,
    },
    email: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    program: {
        type: String,
        enum: ["javascript", "python", "ios"],
        required: true,
        trim: true,
    }
});

module.exports = mongoose.model("koder", kodersSchema);
