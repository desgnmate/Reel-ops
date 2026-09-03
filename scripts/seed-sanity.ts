import { createReadStream, readFileSync } from 'node:fs';
import path from 'node:path';
import { createClient, type IdentifiedSanityDocumentStub } from '@sanity/client';
import { DEFAULT_SITE_CONTENT } from '../lib/cms/defaults';

function loadLocalEnv() {
  const env: Record<string, string | undefined> = { ...process.env };
  const envPath = path.join(process.cwd(), '.env.local');

  try {
    for (const line of readFileSync(envPath, 'utf8').split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const separator = trimmed.indexOf('=');
      if (separator === -1) continue;
      const key = trimmed.slice(0, separator);
      const value = trimmed.slice(separator + 1).replace(/^['"]|['"]$/g, '');
      env[key] = value;
    }
  } catch {
    // The script can also run with environment variables already exported.
  }

  return env;
}

const env = loadLocalEnv();
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || env.SANITY_API_DATASET;
const token = env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    'Missing Sanity configuration. Pull the linked Vercel environment first with `npx vercel env pull .env.local --yes`.',
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-09-03',
  useCdn: false,
  token,
});

function reference(_ref: string, key: string) {
  return { _key: key, _type: 'reference', _ref };
}

function imageField(assetId: string) {
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: assetId },
  };
}

async function uploadImage(relativePath: string) {
  const filename = path.basename(relativePath);
  const existingId = await client.fetch<string | null>(
    '*[_type == "sanity.imageAsset" && originalFilename == $filename] | order(_updatedAt desc)[0]._id',
    { filename },
  );

  if (existingId) return existingId;

  const absolutePath = path.join(process.cwd(), 'public', relativePath.replace(/^\//, ''));
  const asset = await client.assets.upload('image', createReadStream(absolutePath), {
    filename,
  });
  return asset._id;
}

async function main() {
  const imagePaths = new Set<string>([
    DEFAULT_SITE_CONTENT.contact.backgroundImage,
    DEFAULT_SITE_CONTENT.team.image,
    ...DEFAULT_SITE_CONTENT.projects.map((project) => project.image),
    ...DEFAULT_SITE_CONTENT.allies.map((ally) => ally.image),
  ]);
  const assetIds = new Map<string, string>();

  for (const imagePath of imagePaths) {
    assetIds.set(imagePath, await uploadImage(imagePath));
  }

  const services = DEFAULT_SITE_CONTENT.services.map((item, index) => ({
    _id: `service-${index + 1}`,
    _type: 'service',
    title: item.title,
    description: item.description,
  }));

  const projects = DEFAULT_SITE_CONTENT.projects.map((item) => ({
    _id: `project-${item.number}`,
    _type: 'project',
    number: item.number,
    name: item.name,
    type: item.type,
    tags: item.tags,
    image: imageField(assetIds.get(item.image)!),
    imageAlt: item.imageAlt,
    videoUrl: item.video,
    stats: item.stats.map((item, index) => ({ ...item, _key: `stat-${index + 1}`, _type: 'projectStat' })),
  }));

  const team = {
    _id: 'team-isaac',
    _type: 'teamMember',
    name: DEFAULT_SITE_CONTENT.team.name,
    role: DEFAULT_SITE_CONTENT.team.role,
    photo: imageField(assetIds.get(DEFAULT_SITE_CONTENT.team.image)!),
    imageAlt: DEFAULT_SITE_CONTENT.team.imageAlt,
    bio: DEFAULT_SITE_CONTENT.team.bio,
    credentials: DEFAULT_SITE_CONTENT.team.credentials.map((item, index) => ({
      ...item,
      _key: `credential-${index + 1}`,
      _type: 'credential',
    })),
  };

  const allies = DEFAULT_SITE_CONTENT.allies.map((item, index) => ({
    _id: `ally-${index + 1}`,
    _type: 'ally',
    name: item.name,
    role: item.role,
    image: imageField(assetIds.get(item.image)!),
    imageAlt: item.imageAlt,
  }));

  const testimonials = DEFAULT_SITE_CONTENT.testimonials.map((item, index) => ({
    _id: `testimonial-${index + 1}`,
    _type: 'testimonial',
    ...item,
  }));

  const homePage = {
    _id: 'homePage',
    _type: 'homePage',
    hero: DEFAULT_SITE_CONTENT.hero,
    mission: DEFAULT_SITE_CONTENT.mission,
    servicesLabel: DEFAULT_SITE_CONTENT.servicesLabel,
    servicesTitle: DEFAULT_SITE_CONTENT.servicesTitle,
    services: services.map((item, index) => reference(item._id, `service-${index + 1}`)),
    servicesCtaLabel: DEFAULT_SITE_CONTENT.servicesCtaLabel,
    servicesPastProjectsLabel: DEFAULT_SITE_CONTENT.servicesPastProjectsLabel,
    projectsLabel: DEFAULT_SITE_CONTENT.projectsLabel,
    projectsTitle: DEFAULT_SITE_CONTENT.projectsTitle,
    projects: projects.map((item) => reference(item._id, `project-${item.number}`)),
    teamLabel: DEFAULT_SITE_CONTENT.teamLabel,
    teamTitle: DEFAULT_SITE_CONTENT.teamTitle,
    teamMembers: [reference(team._id, 'team-1')],
    alliesLabel: DEFAULT_SITE_CONTENT.alliesLabel,
    alliesTitle: DEFAULT_SITE_CONTENT.alliesTitle,
    alliesDescription: DEFAULT_SITE_CONTENT.alliesDescription,
    allies: allies.map((item, index) => reference(item._id, `ally-${index + 1}`)),
    contractorCount: DEFAULT_SITE_CONTENT.contractorCount,
    contractorTitle: DEFAULT_SITE_CONTENT.contractorTitle,
    contractorSubtitle: DEFAULT_SITE_CONTENT.contractorSubtitle,
    contractors: DEFAULT_SITE_CONTENT.contractors.map((item, index) => ({
      ...item,
      _key: `contractor-${index + 1}`,
      _type: 'contractor',
    })),
    clientsLabel: DEFAULT_SITE_CONTENT.clientsLabel,
    clients: DEFAULT_SITE_CONTENT.clients,
    contact: {
      ...DEFAULT_SITE_CONTENT.contact,
      backgroundImage: imageField(assetIds.get(DEFAULT_SITE_CONTENT.contact.backgroundImage)!),
    },
    testimonialsLabel: DEFAULT_SITE_CONTENT.testimonialsLabel,
    testimonialsTitle: DEFAULT_SITE_CONTENT.testimonialsTitle,
    testimonials: testimonials.map((item, index) => reference(item._id, `testimonial-${index + 1}`)),
    testimonialStats: DEFAULT_SITE_CONTENT.testimonialStats.map((item, index) => ({
      ...item,
      _key: `testimonial-stat-${index + 1}`,
      _type: 'testimonialStat',
    })),
  };

  const settings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    ...DEFAULT_SITE_CONTENT.settings,
    navLinks: DEFAULT_SITE_CONTENT.settings.navLinks.map((item, index) => ({
      ...item,
      _key: `nav-${index + 1}`,
      _type: 'navLink',
    })),
  };

  const documents: IdentifiedSanityDocumentStub[] = [
    ...services,
    ...projects,
    team,
    ...allies,
    ...testimonials,
    homePage,
    settings,
  ];

  for (const document of documents) {
    await client.createOrReplace(document);
  }

  console.log(
    `Seeded ${services.length} services, ${projects.length} projects, ${allies.length} allies, ${testimonials.length} testimonials, and homepage settings into ${projectId}/${dataset}.`,
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
