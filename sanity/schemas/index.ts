import { SchemaTypeDefinition } from 'sanity'
import contactData from './contact-us/contactData'
import whatICanHelp from './what-i-can-help'
import aboutMe, { statsCard } from './about-me'
import testimonials from './testimonials'
import services from './services'
import forKids, {
  kidTags,
  kidsHeader,
  kidsOfferings,
} from './services/for-school-kids'
import forBusiness, {
  businessHeader,
  businessOfferings,
  businessTags,
} from './services/for-business-owners'
import forDating, {
  datingHeader,
  datingOfferings,
  datingTags,
} from './services/for-better-dating'
import forProfessionals, {
  professionalOfferings,
  professionalTags,
  professoinalHeader,
} from './services/for-working-professionals'
import forHomeMakers, {
  makerTags,
  makersHeader,
  makersOfferings,
} from './services/for-home-markers'
import footer, { footerInfo } from './footer'
import heroSection, { carouselItem } from './hero-section'
import events, { eventHeading } from './events'
import howItWorks, { howItWorksItems } from './how-it-works'
import registerData from './register/registerData'
import bookingHeading from './booking'

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
  howItWorks,
  howItWorksItems,
  statsCard,
  datingHeader,
  businessHeader,
  makersHeader,
  kidsHeader,
  professoinalHeader,
  registerData,
  bookingHeading,
  eventHeading,
  datingOfferings,
  businessOfferings,
  makersOfferings,
  kidsOfferings,
  professionalOfferings,
]

export default schemas
