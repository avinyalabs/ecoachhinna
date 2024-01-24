import { SchemaTypeDefinition } from 'sanity'
import contactData from './contact-us/contactData'
import whatICanHelp from './what-i-can-help'
import aboutMe from './about-me'
import testimonials from './testimonials'

const schemas: SchemaTypeDefinition[] = [
  contactData,
  whatICanHelp,
  aboutMe,
  testimonials,
]

export default schemas
