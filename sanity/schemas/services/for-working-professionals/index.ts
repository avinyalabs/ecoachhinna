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
const forProfessionals = {
  name: 'forProfessionals',
  type: 'document',
  title: 'For Professionals',
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
          to: [{ type: 'professionalTags' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export default forProfessionals
