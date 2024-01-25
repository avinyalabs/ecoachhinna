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
const forHomeMakers = {
  name: 'forHomeMakers',
  type: 'document',
  title: 'For Home Makers',
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
          to: [{ type: 'makerTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export default forHomeMakers
