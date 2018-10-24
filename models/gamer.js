const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamerSchema = new Schema({
    title: { type: String, required: true },
    platform: { type: String, required: true},
    tag: { type: String, required: true},
    description: { type: String, required: true }
});

const Help = mongoose.model("Help", gamerSchema);

module.exports = Help;