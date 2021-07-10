const mongoose = require('mongoose')

var survey = new mongoose.Schema({
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

survey.pre("save", async function () {
    try {
        const User = this.constructor;
        const userExists = await User.find({
            userName: this.get("identifier"),
        })
            .lean()
            .exec();
        if (userExists.length > 0) {
            throw new Error(errorHandler.errors.REGISTER_USERNAME_EXISTS);
        }
    } catch (err) {
        throw new Error(errorHandler.errors.REGISTER_USERNAME_EXISTS);
    }
});

module.exports = mongoose.models.Survey || mongoose.model("Survey", survey);