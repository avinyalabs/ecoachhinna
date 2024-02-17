import { SchemaTypeDefinition } from 'sanity'

export const bullets = {
  name: 'bullets',
  title: 'Bullets',
  type: 'document',
  fields: [
    {
      name: 'bullet',
      title: 'Bullet',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

const otherServices = {
  name: 'other-services',
  type: 'document',
  title: 'Other Offerings',
  fields: [
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heading',
      title: 'Heading',
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
    {
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'bullets' }],
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

export default otherServices
