import { SchemaTypeDefinition } from 'sanity'
const footer = {
  name: 'footer',
  type: 'document',
  title: 'Footer Section',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
} satisfies SchemaTypeDefinition

export const footerInfo = {
  name: 'footer-info',
  type: 'document',
  title: 'Footer Information',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
  ],
}
export default footer
