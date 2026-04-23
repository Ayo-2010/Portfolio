import Hero from './components/Hero';
import TechMarquee from '../src/components/TechMarquee';
import ProjectSection from '@/src/components/ProjectSection';
import ContactSection from '@/src/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
