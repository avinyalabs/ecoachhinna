import { SchemaTypeDefinition } from 'sanity'
const footer = {
  name: 'footer',
  type: 'document',
  title: 'Footer Section',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
} satisfies SchemaTypeDefinition

export default footer
