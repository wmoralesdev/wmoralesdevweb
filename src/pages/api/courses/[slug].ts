import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connectDB from '../../../../middleware/mongodb'
import Course from '../../../models/CourseModel'

const handler = nc<NextApiRequest, NextApiResponse>()
    .get(async (req, res) => {
        try {
            const course = await Course.findOne({ slug: req.query.slug })

            if(course == null)
                return res.status(404).json({ data: null, message: 'not-found' })

            return res.status(200).json({ data: course, message: 'ok'})
        }
        catch(err) {
            return res.status(400).json({ data: null, message: 'error' })
        }
    })

export default connectDB(handler);