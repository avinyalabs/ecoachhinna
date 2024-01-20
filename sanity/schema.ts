import { type SchemaTypeDefinition } from 'sanity'
import contactData from './schemas/contact-us/contactData'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contactData],
}
