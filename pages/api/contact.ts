// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
const pipedrive = require('pipedrive');






export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

 const {first_name, last_name, email, address, telephone, electricty} = req.body

 const request = await fetch(`https://solarquest2.pipedrive.com/api/v1/persons?api_token=${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`,
  },
  body: JSON.stringify({
    name: `${first_name} ${last_name}`,
    email: [email],
    phone: [telephone],
    marketing_status: 'subscribed',
  })
 })

 let response = await request.json()


  res.status(200).json({message: response})
}
