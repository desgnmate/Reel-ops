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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <ProjectShowcase />
        <Team />
        <Allies />
        <ClientMarquee />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
