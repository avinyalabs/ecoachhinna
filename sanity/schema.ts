import { type SchemaTypeDefinition } from 'sanity'
import contactData from './schemas/contact-us/contactData'
import whatICanHelp from './schemas/what-i-can-help'
import aboutMe, { statsCard } from './schemas/about-me'
import testimonials from './schemas/testimonials'
import services from './schemas/services'
import forKids, {
  kidTags,
  kidsHeader,
} from './schemas/services/for-school-kids'
import forBusiness, {
  businessHeader,
  businessTags,
} from './schemas/services/for-business-owners'
import forDating, {
  datingHeader,
  datingTags,
} from './schemas/services/for-better-dating'
import forProfessionals, {
  professionalTags,
  professoinalHeader,
} from './schemas/services/for-working-professionals'
import forHomeMakers, {
  makerTags,
  makersHeader,
} from './schemas/services/for-home-markers'
import footer, { footerInfo } from './schemas/footer'
import heroSection, { carouselItem } from './schemas/hero-section'
import events from './schemas/events'
import howItWorks, { howItWorksItems } from './schemas/how-it-works'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
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
  ],
}
