import { SchemaTypeDefinition } from 'sanity'
const faqs = {
  name: 'faq',
  type: 'document',
  title: 'Frequently Asked Questions',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'text',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
    },
  ],
} satisfies SchemaTypeDefinition

export default faqs
