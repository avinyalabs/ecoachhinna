import { SchemaTypeDefinition } from 'sanity'
const whatICanHelp = {
  name: 'what-i-can-help',
  type: 'document',
  title: 'What I can help',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
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

export default whatICanHelp
