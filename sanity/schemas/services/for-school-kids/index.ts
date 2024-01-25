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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'kidTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export default forKids
