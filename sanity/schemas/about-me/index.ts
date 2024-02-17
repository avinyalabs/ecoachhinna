import { SchemaTypeDefinition } from 'sanity'
export const statsCard = {
  name: 'stats-card',
  type: 'document',
  title: 'Stats card',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

const aboutMe = {
  name: 'about-me',
  type: 'document',
  title: 'About me',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'description2',
      title: 'Description 2',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

export default aboutMe
