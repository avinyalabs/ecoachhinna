import { SchemaTypeDefinition } from 'sanity'

export const businessTags = {
  name: 'businessTags',
  title: 'Business Tags',
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
export const businessHeader = {
  name: 'businessHeader',
  title: 'Business Header',
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

const forBusiness = {
  name: 'forBusiness',
  type: 'document',
  title: 'For Business',
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
          to: [{ type: 'businessTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export const businessOfferings = {
  name: 'businessOfferings',
  type: 'document',
  title: 'Business Offerings',
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

export default forBusiness
