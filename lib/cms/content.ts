import { draftMode } from 'next/headers';
import { DEFAULT_SITE_CONTENT } from './defaults';
import { SITE_QUERY } from './queries';
import { isSanityConfigured, sanityFetch } from './sanity';
import type { SiteContent } from './types';

type CmsSite = {
  settings?: Partial<SiteContent['settings']>;
  home?: Partial<SiteContent> & {
    teamMembers?: SiteContent['team'];
  };
};

function withFallback<T>(value: T | null | undefined, fallback: T): T {
  return value === null || value === undefined ? fallback : value;
}

export async function getSiteContent(): Promise<SiteContent> {
  if (!isSanityConfigured) return DEFAULT_SITE_CONTENT;

  const { isEnabled: isDraftMode } = await draftMode();
  const { data } = await sanityFetch({
    query: SITE_QUERY,
    perspective: isDraftMode ? 'drafts' : 'published',
    stega: isDraftMode,
    tags: ['site'],
  });

  const cmsSite = data as CmsSite | null;
  const home = cmsSite?.home;
  const settings = cmsSite?.settings;

  return {
    settings: {
      ...DEFAULT_SITE_CONTENT.settings,
      ...settings,
      navLinks: settings?.navLinks?.length
        ? settings.navLinks
        : DEFAULT_SITE_CONTENT.settings.navLinks,
    },
    hero: { ...DEFAULT_SITE_CONTENT.hero, ...home?.hero },
    mission: { ...DEFAULT_SITE_CONTENT.mission, ...home?.mission },
    servicesLabel: withFallback(home?.servicesLabel, DEFAULT_SITE_CONTENT.servicesLabel),
    servicesTitle: withFallback(home?.servicesTitle, DEFAULT_SITE_CONTENT.servicesTitle),
    services: home?.services?.length ? home.services : DEFAULT_SITE_CONTENT.services,
    servicesCtaLabel: withFallback(home?.servicesCtaLabel, DEFAULT_SITE_CONTENT.servicesCtaLabel),
    servicesPastProjectsLabel: withFallback(
      home?.servicesPastProjectsLabel,
      DEFAULT_SITE_CONTENT.servicesPastProjectsLabel,
    ),
    projectsLabel: withFallback(home?.projectsLabel, DEFAULT_SITE_CONTENT.projectsLabel),
    projectsTitle: withFallback(home?.projectsTitle, DEFAULT_SITE_CONTENT.projectsTitle),
    projects: home?.projects?.length ? home.projects : DEFAULT_SITE_CONTENT.projects,
    teamLabel: withFallback(home?.teamLabel, DEFAULT_SITE_CONTENT.teamLabel),
    teamTitle: withFallback(home?.teamTitle, DEFAULT_SITE_CONTENT.teamTitle),
    team: home?.teamMembers || DEFAULT_SITE_CONTENT.team,
    alliesLabel: withFallback(home?.alliesLabel, DEFAULT_SITE_CONTENT.alliesLabel),
    alliesTitle: withFallback(home?.alliesTitle, DEFAULT_SITE_CONTENT.alliesTitle),
    alliesDescription: withFallback(
      home?.alliesDescription,
      DEFAULT_SITE_CONTENT.alliesDescription,
    ),
    allies: home?.allies?.length ? home.allies : DEFAULT_SITE_CONTENT.allies,
    contractorCount: withFallback(home?.contractorCount, DEFAULT_SITE_CONTENT.contractorCount),
    contractorTitle: withFallback(home?.contractorTitle, DEFAULT_SITE_CONTENT.contractorTitle),
    contractorSubtitle: withFallback(
      home?.contractorSubtitle,
      DEFAULT_SITE_CONTENT.contractorSubtitle,
    ),
    contractors: home?.contractors?.length ? home.contractors : DEFAULT_SITE_CONTENT.contractors,
    clientsLabel: withFallback(home?.clientsLabel, DEFAULT_SITE_CONTENT.clientsLabel),
    clients: home?.clients?.length ? home.clients : DEFAULT_SITE_CONTENT.clients,
    contact: { ...DEFAULT_SITE_CONTENT.contact, ...home?.contact },
    testimonialsLabel: withFallback(
      home?.testimonialsLabel,
      DEFAULT_SITE_CONTENT.testimonialsLabel,
    ),
    testimonialsTitle: withFallback(
      home?.testimonialsTitle,
      DEFAULT_SITE_CONTENT.testimonialsTitle,
    ),
    testimonials: home?.testimonials?.length
      ? home.testimonials
      : DEFAULT_SITE_CONTENT.testimonials,
    testimonialStats: home?.testimonialStats?.length
      ? home.testimonialStats
      : DEFAULT_SITE_CONTENT.testimonialStats,
  };
}
