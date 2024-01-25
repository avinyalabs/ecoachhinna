import { SchemaTypeDefinition } from 'sanity'

const services = {
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
} satisfies SchemaTypeDefinition

export default services
