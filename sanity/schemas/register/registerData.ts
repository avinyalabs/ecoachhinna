import { SchemaTypeDefinition } from 'sanity'
const registerData = {
  name: 'register-data',
  type: 'document',
  title: 'Register Data',
  fields: [
    {
      name: 'firstname',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phonenumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'event',
      title: 'event',
      type: 'text',
    },
  ],
} satisfies SchemaTypeDefinition

export default registerData
