export interface NavLink {
  label: string;
  href: string;
}

export interface SiteSettings {
  companyName: string;
  navLinks: NavLink[];
  contactLabel: string;
  contactHref: string;
  footerHoursLabel: string;
  footerHoursValue: string;
  footerTagline: string;
  instagramUrl: string;
  linkedinUrl: string;
  developerName: string;
  developerUrl: string;
}

export interface HeroContent {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  backgroundVideo: string;
}

export interface MissionContent {
  leftLine1: string;
  leftLine2: string;
  rightLine1: string;
  rightLine2: string;
}

export interface ServiceContent {
  title: string;
  description: string;
}

export interface ProjectStat {
  label: string;
  value: string;
  positive?: boolean;
}

export interface ProjectContent {
  number: string;
  image: string;
  imageAlt: string;
  video?: string;
  tags: string[];
  name: string;
  type: string;
  stats: ProjectStat[];
}

export interface Credential {
  label: string;
  value: string;
}

export interface TeamMemberContent {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  bio: string;
  credentials: Credential[];
}

export interface AllyContent {
  name: string;
  image: string;
  imageAlt: string;
  role: string;
}

export interface ContractorContent {
  role: string;
  count: number;
}

export interface TestimonialContent {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface TestimonialStat {
  value: string;
  label: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  meetingName: string;
  meetingTitle: string;
  duration: string;
  conferencingText: string;
  description: string;
  calendarMonth: string;
  timezone: string;
}

export interface SiteContent {
  settings: SiteSettings;
  hero: HeroContent;
  mission: MissionContent;
  servicesLabel: string;
  servicesTitle: string;
  services: ServiceContent[];
  servicesCtaLabel: string;
  servicesPastProjectsLabel: string;
  projectsLabel: string;
  projectsTitle: string;
  projects: ProjectContent[];
  teamLabel: string;
  teamTitle: string;
  team: TeamMemberContent;
  alliesLabel: string;
  alliesTitle: string;
  alliesDescription: string;
  allies: AllyContent[];
  contractorCount: number;
  contractorTitle: string;
  contractorSubtitle: string;
  contractors: ContractorContent[];
  clientsLabel: string;
  clients: string[];
  contact: ContactContent;
  testimonialsLabel: string;
  testimonialsTitle: string;
  testimonials: TestimonialContent[];
  testimonialStats: TestimonialStat[];
}
