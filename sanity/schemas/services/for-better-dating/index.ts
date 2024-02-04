import { SchemaTypeDefinition } from 'sanity'

export const datingTags = {
  name: 'datingTags',
  title: 'Dating Tags',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'Tag name',
    },
  ],
}

export const datingHeader = {
  name: 'datingHeader',
  title: 'Dating Header',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Sub Heading',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
} satisfies SchemaTypeDefinition

const forDating = {
  name: 'forDating',
  type: 'document',
  title: 'For Dating',
  fields: [
    {
      name: 'subcategory',
      type: 'string',
      title: 'Sub Category',
    },
    {
      name: 'subheading',
      type: 'string',
      title: 'Sub Heading',
    },
    {
      name: 'pricing',
      type: 'string',
      title: 'Pricing',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      validation(rule) {
        return rule
          .min(5)
          .max(10)
          .error('You must have 5 skills only upto 10 skills')
      },
      of: [
        {
          type: 'reference',
          to: [{ type: 'datingTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export const datingOfferings = {
  name: 'datingOfferings',
  type: 'document',
  title: 'Dating Offerings',
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
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
} satisfies SchemaTypeDefinition

export default forDating
