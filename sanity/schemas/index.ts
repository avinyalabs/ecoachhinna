import { SchemaTypeDefinition } from 'sanity'
import contactData from './contact-us/contactData'
import whatICanHelp from './what-i-can-help'
import aboutMe from './about-me'
import testimonials from './testimonials'
import services from './services'
import forKids, { kidTags } from './services/for-school-kids'
import forBusiness, { businessTags } from './services/for-business-owners'
import forDating, { datingTags } from './services/for-better-dating'
import forProfessionals, {
  professionalTags,
} from './services/for-working-professionals'
import forHomeMakers, { makerTags } from './services/for-home-markers'
import footer, { footerInfo } from './footer'
import heroSection, { carouselItem } from './hero-section'
import events from './events'

const schemas: SchemaTypeDefinition[] = [
  contactData,
  whatICanHelp,
  aboutMe,
  testimonials,
  services,
  kidTags,
  forKids,
  businessTags,
  forBusiness,
  datingTags,
  forDating,
  professionalTags,
  forProfessionals,
  makerTags,
  forHomeMakers,
  footer,
  carouselItem,
  heroSection,
  events,
  footerInfo,
]

export default schemas
