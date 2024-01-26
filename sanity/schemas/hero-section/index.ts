import { SchemaTypeDefinition } from 'sanity'
export const carouselItem = {
  name: 'carousel-item',
  title: 'Carousel Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
}

const heroSection = {
  name: 'hero-section',
  type: 'document',
  title: 'Hero Section',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'carousel',
      title: 'Carousel',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'carousel-item' }],
        },
      ],
    },
  ],
} satisfies SchemaTypeDefinition

export default heroSection
