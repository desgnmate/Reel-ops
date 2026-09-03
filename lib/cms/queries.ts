import { defineQuery } from 'next-sanity';

export const SITE_QUERY = defineQuery(`
  {
    "settings": *[_type == "siteSettings" && _id == "siteSettings"][0] {
      companyName,
      navLinks[]{label, href},
      contactLabel,
      contactHref,
      footerHoursLabel,
      footerHoursValue,
      footerTagline,
      instagramUrl,
      linkedinUrl,
      developerName,
      developerUrl
    },
    "home": *[_type == "homePage" && _id == "homePage"][0] {
      hero,
      mission,
      servicesLabel,
      servicesTitle,
      services[]->{title, description},
      servicesCtaLabel,
      servicesPastProjectsLabel,
      projectsLabel,
      projectsTitle,
      projects[]->{
        number,
        name,
        type,
        tags,
        "video": videoUrl,
        "image": image.asset->url,
        imageAlt,
        stats[]{label, value, positive}
      },
      teamLabel,
      teamTitle,
      teamMembers[0]->{
        name,
        role,
        "image": photo.asset->url,
        imageAlt,
        bio,
        credentials[]{label, value}
      },
      alliesLabel,
      alliesTitle,
      alliesDescription,
      allies[]->{name, "image": image.asset->url, imageAlt, role},
      contractorCount,
      contractorTitle,
      contractorSubtitle,
      contractors[]{role, count},
      clientsLabel,
      clients,
      contact{
        title,
        subtitle,
        "backgroundImage": backgroundImage.asset->url,
        meetingName,
        meetingTitle,
        duration,
        conferencingText,
        description,
        calendarMonth,
        timezone
      },
      testimonialsLabel,
      testimonialsTitle,
      testimonials[]->{quote, name, role, company},
      testimonialStats[]{value, label}
    }
  }
`);
