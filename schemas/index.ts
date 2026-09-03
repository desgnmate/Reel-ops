import { defineField, defineType } from 'sanity';

const navLink = defineType({
  name: 'navLink',
  title: 'Navigation Link',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'href', type: 'string', validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'href' },
  },
});

const stat = defineType({
  name: 'projectStat',
  title: 'Project Stat',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'value', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'positive', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'value' },
  },
});

const credential = defineType({
  name: 'credential',
  title: 'Credential',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'value', type: 'string', validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'value' },
  },
});

const contractor = defineType({
  name: 'contractor',
  title: 'Contractor',
  type: 'object',
  fields: [
    defineField({ name: 'role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'count', type: 'number', validation: (rule) => rule.required().min(0) }),
  ],
  preview: {
    select: { title: 'role', subtitle: 'count' },
  },
});

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'companyName', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'navLink' }],
    }),
    defineField({ name: 'contactLabel', type: 'string' }),
    defineField({ name: 'contactHref', type: 'string' }),
    defineField({ name: 'footerHoursLabel', type: 'string' }),
    defineField({ name: 'footerHoursValue', type: 'string' }),
    defineField({ name: 'footerTagline', type: 'text', rows: 2 }),
    defineField({ name: 'instagramUrl', type: 'url' }),
    defineField({ name: 'linkedinUrl', type: 'url' }),
    defineField({ name: 'developerName', type: 'string' }),
    defineField({ name: 'developerUrl', type: 'url' }),
  ],
  preview: {
    select: { title: 'companyName' },
  },
});

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text', rows: 3, validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
});

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'number', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'type', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: 'imageAlt', type: 'string' }),
    defineField({ name: 'videoUrl', type: 'string', description: 'Video CDN URL or local path.' }),
    defineField({ name: 'stats', type: 'array', of: [{ type: 'projectStat' }] }),
  ],
  preview: {
    select: { title: 'name', media: 'image', subtitle: 'type' },
  },
});

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'photo', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: 'imageAlt', type: 'string' }),
    defineField({ name: 'bio', type: 'text', rows: 5, validation: (rule) => rule.required() }),
    defineField({ name: 'credentials', type: 'array', of: [{ type: 'credential' }] }),
  ],
  preview: {
    select: { title: 'name', media: 'photo', subtitle: 'role' },
  },
});

export const ally = defineType({
  name: 'ally',
  title: 'Ally',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: 'imageAlt', type: 'string' }),
  ],
  preview: {
    select: { title: 'name', media: 'image', subtitle: 'role' },
  },
});

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'company', type: 'string', validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'company' },
  },
});

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'titleLine1', type: 'string' }),
        defineField({ name: 'titleLine2', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCtaLabel', type: 'string' }),
        defineField({ name: 'primaryCtaHref', type: 'string' }),
        defineField({ name: 'secondaryCtaLabel', type: 'string' }),
        defineField({ name: 'secondaryCtaHref', type: 'string' }),
        defineField({ name: 'backgroundVideo', type: 'string', description: 'Video CDN URL or local path.' }),
      ],
    }),
    defineField({
      name: 'mission',
      type: 'object',
      fields: [
        defineField({ name: 'leftLine1', type: 'string' }),
        defineField({ name: 'leftLine2', type: 'string' }),
        defineField({ name: 'rightLine1', type: 'string' }),
        defineField({ name: 'rightLine2', type: 'string' }),
      ],
    }),
    defineField({ name: 'servicesLabel', type: 'string' }),
    defineField({ name: 'servicesTitle', type: 'string' }),
    defineField({ name: 'services', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
    defineField({ name: 'servicesCtaLabel', type: 'string' }),
    defineField({ name: 'servicesPastProjectsLabel', type: 'string' }),
    defineField({ name: 'projectsLabel', type: 'string' }),
    defineField({ name: 'projectsTitle', type: 'string' }),
    defineField({ name: 'projects', type: 'array', of: [{ type: 'reference', to: [{ type: 'project' }] }] }),
    defineField({ name: 'teamLabel', type: 'string' }),
    defineField({ name: 'teamTitle', type: 'string' }),
    defineField({ name: 'teamMembers', type: 'array', of: [{ type: 'reference', to: [{ type: 'teamMember' }] }] }),
    defineField({ name: 'alliesLabel', type: 'string' }),
    defineField({ name: 'alliesTitle', type: 'string' }),
    defineField({ name: 'alliesDescription', type: 'text', rows: 3 }),
    defineField({ name: 'allies', type: 'array', of: [{ type: 'reference', to: [{ type: 'ally' }] }] }),
    defineField({ name: 'contractorCount', type: 'number' }),
    defineField({ name: 'contractorTitle', type: 'string' }),
    defineField({ name: 'contractorSubtitle', type: 'string' }),
    defineField({ name: 'contractors', type: 'array', of: [{ type: 'contractor' }] }),
    defineField({ name: 'clientsLabel', type: 'string' }),
    defineField({ name: 'clients', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'contact',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text', rows: 3 }),
        defineField({ name: 'backgroundImage', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'meetingName', type: 'string' }),
        defineField({ name: 'meetingTitle', type: 'string' }),
        defineField({ name: 'duration', type: 'string' }),
        defineField({ name: 'conferencingText', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
        defineField({ name: 'calendarMonth', type: 'string' }),
        defineField({ name: 'timezone', type: 'string' }),
      ],
    }),
    defineField({ name: 'testimonialsLabel', type: 'string' }),
    defineField({ name: 'testimonialsTitle', type: 'string' }),
    defineField({ name: 'testimonials', type: 'array', of: [{ type: 'reference', to: [{ type: 'testimonial' }] }] }),
    defineField({
      name: 'testimonialStats',
      type: 'array',
      of: [{ type: 'object', fields: [defineField({ name: 'value', type: 'string' }), defineField({ name: 'label', type: 'string' })] }],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Homepage' }),
  },
});

export const schemaTypes = [
  navLink,
  stat,
  credential,
  contractor,
  siteSettings,
  homePage,
  service,
  project,
  teamMember,
  ally,
  testimonial,
];
