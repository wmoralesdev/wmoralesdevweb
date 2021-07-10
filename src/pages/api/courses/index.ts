import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connectDB from '../../../../middleware/mongodb'

const Course = require('../../../models/CourseModel')

interface ICourseRequest extends NextApiRequest {
    body: {
        slug: String,
        title: String,
        desc: String,
        schedule: String,
        startsAt: String,
        endsAt: String,
        price: Number
    }
}

const handler = nc<ICourseRequest, NextApiResponse>()
    .get(async (req, res) => {
        try {
            var courses = await Course.find()

            return res.status(200).json({ data: courses, message: 'success' })
        }
        catch(err) {
            return res.status(400).json({ data: null, message: 'error' })
        }
    })
    .post(async (req, res) => {
        try {
            var course = await Course.find({ slug: req.body.slug })

            if(course.length > 0)
                return res.status(400).json({data: null, message: 'repeated-slug'})

            var newCourse = new Course({...req.body})
            await newCourse.save()

            return res.status(200).json({data: newCourse, message: 'created'})
        }
        catch(err) {
            return res.status(400).json({ data: null, message: err })
        }
    })

export default connectDB(handler);