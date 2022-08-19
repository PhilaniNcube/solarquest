import { supabaseClient } from "@supabase/auth-helpers-nextjs"
import { Package } from "../Types"

const getPackages = async () => {

let { data: packages, error } = await supabaseClient
  .from('packages')
  .select('*')

  if(error) throw error.message

  return packages as Package[]

}

export default getPackages
