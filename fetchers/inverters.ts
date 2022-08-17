import { supabaseClient } from "@supabase/auth-helpers-nextjs"
import { Inverter } from "../Types"

const getInverters = async () => {

  let { data: inverters, error } = await supabaseClient
  .from('inverters')
  .select('*')


  if(error) {
    throw new Error(error.message)
  } else {
    return inverters as Inverter[]
  }
}


export default getInverters
