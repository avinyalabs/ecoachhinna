import { SchemaTypeDefinition } from 'sanity'

export const professionalTags = {
  name: 'professionalTags',
  title: 'Professional Tags',
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

export const professoinalHeader = {
  name: 'professoinalHeader',
  title: 'Professional Header',
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

const forProfessionals = {
  name: 'forProfessionals',
  type: 'document',
  title: 'For Professionals',
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
          to: [{ type: 'professionalTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export const professionalOfferings = {
  name: 'professionalOfferings',
  type: 'document',
  title: 'Professional Offerings',
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

export default forProfessionals
