// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabaseClient } from '@supabase/auth-helpers-nextjs';

import type { NextApiRequest, NextApiResponse } from 'next'
const pipedrive = require('pipedrive');






export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

 const {first_name, last_name, email, address, telephone, electricity, utm_source, utm_campaign, utm_medium} = req.body

 console.log({first_name, last_name, email, address, telephone, electricity, utm_source, utm_campaign, utm_medium} )

 const { data, error } = await supabaseClient
  .from('leads')
  .insert([
    { first_name: first_name, last_name: last_name, email: email, address: address, telephone: telephone, electricity: electricity},
  ]).single()


  if (error) {
    res.status(400).json({message: error.details, error: error})
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
    '7ee5859401172e95ec2e7d4e43e00c4effeaf4c4': utm_campaign === undefined ? 'direct' : utm_campaign,
    '24e2172d06a275ad34d27d44092df64adaf5868f': utm_medium === undefined ? 'direct' : utm_medium,
    'b309313bb7967eb804330b0fc9d4e2bda01cfa8a': utm_source === undefined ? 'direct' : utm_source,

  })
 })

 let leadResponse = await leadRequest.json()



  res.status(200).json({message: 'All Good!', data: data, lead: leadResponse})
}
