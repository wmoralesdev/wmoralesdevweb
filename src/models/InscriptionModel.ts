import mongoose from "mongoose";

var Inscription = new mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    receiptLink: String,
    courseSlug: String
})

module.exports = mongoose.models.Inscription || mongoose.model("Inscription", Inscription)