import { SchemaTypeDefinition } from 'sanity'

export const datingTags = {
  name: 'datingTags',
  title: 'Partnership Tags',
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
  title: 'Partnership Header',
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
  ],
} satisfies SchemaTypeDefinition

const forDating = {
  name: 'forDating',
  type: 'document',
  title: 'For Partnership',
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
  title: 'Partnership offersings',
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
