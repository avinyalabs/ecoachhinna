import { SchemaTypeDefinition } from 'sanity'

export const makerTags = {
  name: 'makerTags',
  title: 'Home Marker Tags',
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

export const makersHeader = {
  name: 'makersHeader',
  title: 'Other services Header',
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
    {
      name: 'topicHeading',
      title: 'Topics heading',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

const forHomeMakers = {
  name: 'forHomeMakers',
  type: 'document',
  title: 'For Home Makers',
  fields: [
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
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
      name: 'link',
      type: 'string',
      title: 'Link',
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
          to: [{ type: 'makerTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export const makersOfferings = {
  name: 'makersOfferings',
  type: 'document',
  title: 'Makers Offerings',
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

export default forHomeMakers
