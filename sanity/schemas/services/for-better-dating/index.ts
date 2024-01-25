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
