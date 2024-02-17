import { SchemaTypeDefinition } from 'sanity'

export const navbarLink = {
  name: 'navbarLinks',
  type: 'document',
  title: 'Navbar Links',
  fields: [
    {
      name: 'signup',
      title: 'Sign Up',
      type: 'string',
    },
    {
      name: 'booking',
      title: 'Booking',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition

export default navbarLink
