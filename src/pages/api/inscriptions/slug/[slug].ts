import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connectDB from '../../../../../middleware/mongodb'
const Inscription = require('../../../../models/InscriptionModel')

const handler = nc<NextApiRequest, NextApiResponse>()
    .get(async (req, res) => {
        try {
            const inscriptions = await Inscription.find({ courseSlug: req.query.slug })

            if(inscriptions == null)
                return res.status(404).json({ data: null, message: 'not-found' })

            return res.status(200).json({ data: inscriptions, message: 'ok'})
        }
        catch(err) {
            return res.status(400).json({ data: null, message: 'error' })
        }
    })

export default connectDB(handler);