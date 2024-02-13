import { type SchemaTypeDefinition } from 'sanity'
import contactData from './schemas/contact-us/contactData'
import whatICanHelp from './schemas/what-i-can-help'
import aboutMe, { statsCard } from './schemas/about-me'
import testimonials from './schemas/testimonials'
import services from './schemas/services'
import forKids, {
  kidTags,
  kidsHeader,
  kidsOfferings,
} from './schemas/services/for-school-kids'
import forBusiness, {
  businessHeader,
  businessOfferings,
  businessTags,
} from './schemas/services/for-business-owners'
import forDating, {
  datingHeader,
  datingOfferings,
  datingTags,
} from './schemas/services/for-better-dating'
import forProfessionals, {
  professionalOfferings,
  professionalTags,
  professoinalHeader,
} from './schemas/services/for-working-professionals'
import forHomeMakers, {
  makerTags,
  makersHeader,
  makersOfferings,
} from './schemas/services/for-home-markers'
import footer, { footerInfo } from './schemas/footer'
import heroSection, { carouselItem } from './schemas/hero-section'
import events, { eventHeading } from './schemas/events'
import howItWorks, {
  howItWorksHeader,
  howItWorksItems,
} from './schemas/how-it-works'
import registerData from './schemas/register/registerData'
import bookingHeading from './schemas/booking'
import faqs from './schemas/faq'
import expertiseHeader from './schemas/expertise'
import otherServices, { bullets } from './schemas/services/other-services'

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
    registerData,
    bookingHeading,
    eventHeading,
    datingOfferings,
    businessOfferings,
    makersOfferings,
    kidsOfferings,
    professionalOfferings,
    faqs,
    expertiseHeader,
    howItWorksHeader,
    otherServices,
    bullets,
  ],
}
