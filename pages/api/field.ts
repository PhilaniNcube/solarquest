// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  const fields = [
    { 'name': `address`,
    'field_type': 'varchar',
    'options': [{"label": "Address"}]

},
    { 'name': `electricity`,
    'field_type': 'varchar',
    'options': [{"label": "Electricty"}]
},
  ]
//  const {first_name, last_name, email, address, telephone, electricty} = req.body

 const request = await fetch(`https://solarquest2.pipedrive.com/api/v1/personFields?api_token=${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`,
  },
  body: JSON.stringify({
  "field_type": "varchar",
  "name": "address",
  "options": [{'label': 'address'}],
  "add_visible_flag": true
})
 })

 let response = await request.json()

 console.log(response)


  res.status(200).json({message: response})
}
