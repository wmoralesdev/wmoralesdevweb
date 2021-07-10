import mongoose from 'mongoose'

var Course = new mongoose.Schema({
    slug: String,
    title: String,
    desc: String,
    schedule: String,
    startsAt: String,
    endsAt: String,
    price: Number
})

module.exports = mongoose.models.Course || mongoose.model("Course", Course)