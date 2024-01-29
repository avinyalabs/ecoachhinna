import { createClient, groq } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-12',
  token:
    'skCIWopJnCSXRHaPOhiKRSOKiOBYM2wgn0v67DFo6SpdTpalYwfTcb4iIAakaCO6VYa65qPP3X9hM5Y7l4fOpWBjElVrSILxcwUY1wGH7CMxodW0RIZEMvZbwMBtqeHlIfMASVhfZ0KVkrazAHcNQYzeTEYRpWY4dTmNbEHGK56oHGcTpdUD',
  useCdn: true,
})

export async function getWhatICanHelp() {
  return await client.fetch(
    groq`*[_type=='what-i-can-help']{title,"image":image.asset->url , content}`
  )
}

export async function getAboutMe() {
  return await client.fetch(
    groq`*[_type=='about-me']{title,description,content,description2}`
  )
}
export async function getTestimonials() {
  return await client.fetch(
    groq`*[_type=='testimonials']{description,author,designation,"image":image.asset->url}`
  )
}

export async function getServices() {
  return await client.fetch(
    groq`*[_type=='services']{title,category,link,"image":image.asset->url}`
  )
}

export type ServiceDetails = {
  _id: string
  subcategory: string
  tags: { tag: string }[]
}
export async function getKidsService() {
  return await client.fetch(
    groq`*[_type=='forKids']{subcategory,subheading,pricing,tags[]->{tag}}`
  )
}
export async function getBusinessService() {
  return await client.fetch(
    groq`*[_type=='forBusiness']{subcategory,subheading,pricing,tags[]->{tag}}`
  )
}
export async function getDatingService() {
  return await client.fetch(
    groq`*[_type=='forDating']{subcategory,subheading,pricing,tags[]->{tag}}`
  )
}
export async function getProfessionalService() {
  return await client.fetch(
    groq`*[_type=='forProfessionals']{subcategory,subheading,pricing,tags[]->{tag}}`
  )
}
export async function getHomeMakerService() {
  return await client.fetch(
    groq`*[_type=='forHomeMakers']{subcategory,subheading,pricing,tags[]->{tag}}`
  )
}

export async function getFooterData() {
  return await client.fetch(groq`*[_type=='footer']{title,content}`)
}

export async function getHeroSectionData() {
  return await client.fetch(
    groq`*[_type=='hero-section']{title,content,'carouselItems': carousel[]->{
      title
    }}`
  )
}

export async function getEvents() {
  return await client.fetch(groq`*[_type=='events']{
    title,
    duration,
    eventDate,
    "image":image.asset->url,
    Audience,
    isActive,
    price
  }`)
}

export async function getActiveEvents() {
  return await client.fetch(groq`*[_type=='events' && isActive == true]{
    title
  }`)
}

export async function getFooterInfo() {
  return await client.fetch(groq`*[_type=='footer-info']{content,phone,email}`)
}

export async function getHowItWorks() {
  return await client.fetch(
    groq`*[_type=='how-it-works']{description,title,"image":image.asset->url}`
  )
}

export async function getHowItWorksWithItems() {
  return await client.fetch(groq`*[_type == 'howItWorksItems'] {
    items[]-> {
      "image":image.asset->url,
      description,
      title
    }
  }`)
}

export async function getStatsData() {
  return await client.fetch(groq`*[_type == 'stats-card']{title,value}`)
}

export async function getBusinessHeader() {
  return await client.fetch(groq`*[_type == 'businessHeader']{
    heading,
    subheading,
    content
  }`)
}
export async function getMakersHeader() {
  return await client.fetch(groq`*[_type == 'makersHeader']{
    heading,
    subheading,
    content
  }`)
}
export async function getKidsHeader() {
  return await client.fetch(groq`*[_type == 'kidsHeader']{
    heading,
    subheading,
    content
  }`)
}
export async function getDatingHeader() {
  return await client.fetch(groq`*[_type == 'datingHeader']{
    heading,
    subheading,
    content
  }`)
}
export async function getProfessionalHeader() {
  return await client.fetch(groq`*[_type == 'professoinalHeader']{
    heading,
    subheading,
    content
  }`)
}

export async function getBookingHeader() {
  return await client.fetch(groq`*[_type == 'booking-heading']{
    title,
    content
  }`)
}

export async function getEventsHeading() {
  return await client.fetch(groq`*[_type == 'eventHeading']{
    heading
  }`)
}

export async function getDatingOfferings() {
  return await client.fetch(groq`*[_type == 'datingOfferings']{
    heading,
    content,
    "image" : image.asset->url,
  }`)
}

export async function getKidsOfferings() {
  return await client.fetch(groq`*[_type == 'kidsOfferings']{
    heading,
    content,
    "image" : image.asset->url,
  }`)
}
export async function getBusinessOfferings() {
  return await client.fetch(groq`*[_type == 'businessOfferings']{
    heading,
    content,
    "image" : image.asset->url,
  }`)
}
export async function getMakersOfferings() {
  return await client.fetch(groq`*[_type == 'makersOfferings']{
    heading,
    content,
    "image" : image.asset->url,
  }`)
}
export async function getProfessionalOfferings() {
  return await client.fetch(groq`*[_type == 'professionalOfferings']{
    heading,
    content,
    "image" : image.asset->url,
  }`)
}

type FAQ = {
  _id: string
  question: string
  answer: string
}
export async function getFAQs() {
  console.log('hit action')

  return (await client.fetch(
    groq`*[_type == 'faq']{ _id, question, answer }`
  )) as FAQ[]
}

export async function getExpertiseHeader() {
  return await client.fetch(groq`*[_type == 'expertiseHeader']{title,content}`)
}

export async function getHowItWorksHeader() {
  return await client.fetch(groq`*[_type == 'howItWorksHeader']{title,content}`)
}
