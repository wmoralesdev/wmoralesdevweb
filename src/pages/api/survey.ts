// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Survey from '../../models/SurveyModel'
import dbConnect from '../../../middleware/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'PUT':
      try {
        var ans = await Survey.findOne({ identifier: 'survey_01' })

        if (ans == null) {
          var newAns = new Survey({
            xamarin: 0,
            cpp: 0,
            react: 0,
            next: 0,
            dotnet: 0
          })

          await newAns.save()

          ans = newAns
        }

        console.log(req.body)

        var updatedAns = {
          xamarin: req.body.xamarin ? ans.xamarin + 1 : ans.xamarin,
          cpp: req.body.cpp ? ans.cpp + 1 : ans.cpp,
          react: req.body.react ? ans.react + 1 : ans.react,
          next: req.body.next ? ans.next + 1 : ans.next,
          dotnet: req.body.dotnet ? ans.dotnet + 1 : ans.dotnet,
        }

        await Survey.findOneAndUpdate(
          { identifier: 'survey_01' },
          updatedAns
        )

        return res.status(200).json({ message: "Success", data: updatedAns })
      }
      catch (err) {
        return res.status(400).json({ message: "Error" })
      }
    case 'GET': try {
      var ans = await Survey.findOne({ identifier: 'survey_01' })

      return res.status(200).json({ message: "Success", data: ans })
    }
      catch (err) {
        return res.status(400).json({ message: "Error" })
      }
  }
}