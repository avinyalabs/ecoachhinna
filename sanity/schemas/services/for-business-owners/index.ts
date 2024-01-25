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
const forBusiness = {
  name: 'forBusiness',
  type: 'document',
  title: 'For Business',
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
          to: [{ type: 'businessTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export default forBusiness
