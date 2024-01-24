import { type SchemaTypeDefinition } from 'sanity'
import contactData from './schemas/contact-us/contactData'
import whatICanHelp from './schemas/what-i-can-help'
import aboutMe from './schemas/about-me'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contactData, whatICanHelp, aboutMe],
}
