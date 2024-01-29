import { SchemaTypeDefinition } from 'sanity'

const expertiseHeader = {
  name: 'expertiseHeader',
  type: 'document',
  title: 'Expertise Header',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

export default expertiseHeader
