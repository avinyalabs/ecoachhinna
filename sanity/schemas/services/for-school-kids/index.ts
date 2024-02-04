import { SchemaTypeDefinition } from 'sanity'

export const kidTags = {
  name: 'kidTags',
  title: 'Kids Tags',
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

export const kidsHeader = {
  name: 'kidsHeader',
  title: 'Kids Header',
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

const forKids = {
  name: 'forKids',
  type: 'document',
  title: 'For Kids',
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
          to: [{ type: 'kidTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export const kidsOfferings = {
  name: 'kidsOfferings',
  type: 'document',
  title: 'Kids Offerings',
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

export default forKids
