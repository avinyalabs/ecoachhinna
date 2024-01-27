import { SchemaTypeDefinition } from 'sanity'

const howItWorks = {
  name: 'how-it-works',
  type: 'document',
  title: 'How it Works',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

export const howItWorksItems = {
  name: 'howItWorksItems',
  type: 'document',
  title: 'How it works (Items)',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'how-it-works' }],
        },
      ],
    },
  ],
}

export default howItWorks
