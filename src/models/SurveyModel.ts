import mongoose from 'mongoose'

var Survey = new mongoose.Schema({
    identifier: {
        type: String,
        default: 'survey_01'
    },
    xamarin: Number,
    cpp: Number,
    react: Number,
    next: Number,
    dotnet: Number
})

module.exports = mongoose.models.Survey || mongoose.model("Survey", Survey);