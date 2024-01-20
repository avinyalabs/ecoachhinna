import { SchemaTypeDefinition } from 'sanity'
const contactData = {
  name: 'contact-data',
  type: 'document',
  title: 'Contact Data',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
  ],
} satisfies SchemaTypeDefinition

export default contactData
