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
      of: [
        {
          type: 'reference',
          to: [{ type: 'datingTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export default forDating
