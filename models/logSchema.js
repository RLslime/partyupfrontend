const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true},
});

const Login = mongoose.model("Login", logSchema);

module.exports = Login;