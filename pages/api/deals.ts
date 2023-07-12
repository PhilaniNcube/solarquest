// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabaseClient } from '@supabase/auth-helpers-nextjs';

import type { NextApiRequest, NextApiResponse } from 'next'
const pipedrive = require('pipedrive');






export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

 const {v, matches_filters, meta, event } = req.body

 const url = new URL(`https://graph.facebook.com/v16.0/3500554073544736/events?access_token=${process.env.FB_ACCESS_TOKEN}`)

 const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "data": [
      {
        "event_name": "Lead",
        "event_time": Date.now(),
        "action_source": "system_generated",
        "user_data": {
          "lead_id": meta.id,
        },
        "custom_data": {
          "lead_event_source": "Pipedrive",
          "event_source": "crm",
          "event": event
        }
      }
    ]
  })
 } )




  const leadResponse = await response.json()

  res.setHeader( 'Content-Type', 'application/json' )
  res.setHeader( 'status', '200' )


  res.headersSent

  res.status(200).json({message: 'All Good!', lead: leadResponse})
}
