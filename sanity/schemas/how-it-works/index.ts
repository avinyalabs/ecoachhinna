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

export const howItWorksHeader = {
  name: 'howItWorksHeader',
  type: 'document',
  title: 'How it works (Header)',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
    },
  ],
} satisfies SchemaTypeDefinition

export default howItWorks
