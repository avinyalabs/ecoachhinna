import { SchemaTypeDefinition } from 'sanity'

const bookingHeading = {
  name: 'booking-heading',
  type: 'document',
  title: 'Booking Heading',
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

export default bookingHeading
