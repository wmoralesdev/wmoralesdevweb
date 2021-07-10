import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import connectDB from '../../../../middleware/mongodb'
import Inscription from '../../../models/InscriptionModel'

interface IInscriptionRequest extends NextApiRequest {
    body: {
        fullname: String,
        email: String,
        phone: String,
        receiptLink: String | undefined,
        courseSlug: String
    }
}

const handler = nc<IInscriptionRequest, NextApiResponse>()
    .post(async (req, res) => {
        try {
            var inscription = await Inscription.find({ email: req.body.email, courseSlug: req.body.courseSlug })

            if(inscription.length > 0)
                return res.status(400).json({ data: null, message: 'already signed up'})

            var newInscription = await Inscription.create({...req.body})

            return res.status(200).json({ data: newInscription, message: 'signed up'})
        }
        catch(err) {
            console.log(err)
            return res.status(400).json({ data: null, message: 'error' })
        }
    })
    .get(async (req, res) => {
        try {
            var inscriptions = await Inscription.find()

            return res.status(200).json({ data: inscriptions, message: 'success' })
        }
        catch(err) {
            return res.status(400).json({ data: null, message: 'error' })
        }
    })

export default connectDB(handler);
