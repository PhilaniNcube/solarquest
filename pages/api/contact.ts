// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabaseClient } from '@supabase/auth-helpers-nextjs';

import type { NextApiRequest, NextApiResponse } from 'next'
const pipedrive = require('pipedrive');






export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

 const {first_name, last_name, email, address, telephone, electricity} = req.body

 const { data, error } = await supabaseClient
  .from('leads')
  .insert([
    { first_name: first_name, last_name: last_name, email: email, address: address, telephone: telephone, electricity: electricity},
  ]).single()


  if (error) {
    res.status(400).send({message: error.message})
    return
  }


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
    custom_fields: {
    address: address,
    electricity: electricity,
    }

  })
 })

 let response = await request.json()

 console.log(response)

 const personId = response.data.id

  const leadRequest = await fetch(`https://solarquest2.pipedrive.com/api/v1/deals?api_token=${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`,
  },
  body: JSON.stringify({
    title: `${first_name} ${last_name}`,
    person_id: personId,
    currency : 'ZAR',
     '10765cf01debaaf7f6a391d8ae6baefea4df2ecc': address,
    '49ffed0939c4895d3f5f61c32254fc709c033b59': electricity,


  })
 })


 let leadResponse = await leadRequest.json()

  res.status(200).json({message: response, data: data, lead: leadResponse})
}
