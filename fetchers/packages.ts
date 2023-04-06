import { supabaseClient } from "@supabase/auth-helpers-nextjs"
import { Package } from "../Types"

const getPackages = async () => {

let { data: packages, error } = await supabaseClient
  .from('packages')
  .select('*')

  if(error) throw error.message

  return packages as Package[]

}

export const getPackage = async (slug:string) => {

let { data: packages, error } = await supabaseClient
  .from('packages')
  .select('*').eq('slug', slug).single()

  if(error) throw error.message

  return packages as Package

}

export default getPackages


export let getResidential = async () => {
  let { data: packages, error } = await supabaseClient
  .from('packages')
  .select('*').eq('type', 'residential').order('order', {ascending: true})

  if(error) throw error.message

  return packages as Package[]
}

export let getBusiness = async () => {
  let { data: packages, error } = await supabaseClient
  .from('packages')
  .select('*').eq('type', 'business').order('name')

  if(error) throw error.message

  return packages as Package[]
}
