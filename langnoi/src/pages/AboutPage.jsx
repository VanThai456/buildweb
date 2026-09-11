import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutHistory from '../components/about/AboutHistory';
import AboutVision from '../components/about/AboutVision';
import AboutEcosystem from '../components/about/AboutEcosystem';
import AboutSustainability from '../components/about/AboutSustainability';
import AboutPeople from '../components/about/AboutPeople';
import AboutCTA from '../components/about/AboutCTA';

export default function AboutPage({ currentLang = 'vi', onOpenBooking }) {
  useEffect(() => {
    // Scroll to top on page mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Giới Thiệu & Sứ Mệnh - Làng Nổi Tân Lập | Long An';
  }, []);

  return (
    <main className="w-full bg-[#f4faff] text-[#111d23]">
      <AboutHero currentLang={currentLang} />
      <AboutHistory />
      <AboutVision />
      <AboutEcosystem />
      <AboutSustainability />
      <AboutPeople />
      <AboutCTA onOpenBooking={onOpenBooking} />
    </main>
  );
}
