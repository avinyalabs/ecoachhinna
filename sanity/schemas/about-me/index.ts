import { SchemaTypeDefinition } from 'sanity'
const aboutMe = {
  name: 'about-me',
  type: 'document',
  title: 'About me',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
} satisfies SchemaTypeDefinition

export default aboutMe
