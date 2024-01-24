import { createClient, groq } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-12',
  token:
    'skCIWopJnCSXRHaPOhiKRSOKiOBYM2wgn0v67DFo6SpdTpalYwfTcb4iIAakaCO6VYa65qPP3X9hM5Y7l4fOpWBjElVrSILxcwUY1wGH7CMxodW0RIZEMvZbwMBtqeHlIfMASVhfZ0KVkrazAHcNQYzeTEYRpWY4dTmNbEHGK56oHGcTpdUD',
})

export async function getWhatICanHelp() {
  return await client.fetch(
    groq`*[_type=='what-i-can-help']{title,"image":image.asset->url , content}`
  )
}

export async function getAboutMe() {
  return await client.fetch(
    groq`*[_type=='about-me']{title,description,content}`
  )
}
export async function getTestimonials() {
  return await client.fetch(
    groq`*[_type=='testimonials']{description,author,designation,"image":image.asset->url}`
  )
}
