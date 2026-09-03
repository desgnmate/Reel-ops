import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import ProjectShowcase from '@/components/ProjectShowcase';
import Team from '@/components/Team';
import Allies from '@/components/Allies';
import ClientMarquee from '@/components/ClientMarquee';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { getSiteContent } from '@/lib/cms/content';

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Navbar settings={content.settings} />
      <main>
        <Hero content={content.hero} />
        <Mission content={content.mission} />
        <Services
          label={content.servicesLabel}
          title={content.servicesTitle}
          services={content.services}
          ctaLabel={content.servicesCtaLabel}
          pastProjectsLabel={content.servicesPastProjectsLabel}
        />
        <ProjectShowcase
          label={content.projectsLabel}
          title={content.projectsTitle}
          projects={content.projects}
        />
        <Team label={content.teamLabel} title={content.teamTitle} member={content.team} />
        <Allies
          label={content.alliesLabel}
          title={content.alliesTitle}
          description={content.alliesDescription}
          allies={content.allies}
          contractorCount={content.contractorCount}
          contractorTitle={content.contractorTitle}
          contractorSubtitle={content.contractorSubtitle}
          contractors={content.contractors}
        />
        <ClientMarquee label={content.clientsLabel} clients={content.clients} />
        <Contact content={content.contact} />
        <Testimonials
          label={content.testimonialsLabel}
          title={content.testimonialsTitle}
          testimonials={content.testimonials}
          stats={content.testimonialStats}
        />
      </main>
      <Footer settings={content.settings} />
    </>
  );
}
