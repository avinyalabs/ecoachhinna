import { SchemaTypeDefinition } from 'sanity'

const events = {
  name: 'events',
  type: 'document',
  title: 'Events',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
    },
    {
      name: 'Audience',
      title: 'Target Audience',
      type: 'string',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

export const eventHeading = {
  name: 'eventHeading',
  type: 'document',
  title: 'Events Heading',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

export default events
