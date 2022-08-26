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


export let getResidential = async () => {
  let { data: packages, error } = await supabaseClient
  .from('packages')
  .select('*').eq('type', 'residential')

  if(error) throw error.message

  return packages as Package[]
}

export let getBusiness = async () => {
  let { data: packages, error } = await supabaseClient
  .from('packages')
  .select('*').eq('type', 'business')

  if(error) throw error.message

  return packages as Package[]
}
