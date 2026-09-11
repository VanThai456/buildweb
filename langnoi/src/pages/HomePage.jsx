import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Attractions from '../components/Attractions';
import Experiences from '../components/Experiences';
import Resort from '../components/Resort';
import Cuisine from '../components/Cuisine';
import Pricing from '../components/Pricing';
import TravelGuide from '../components/TravelGuide';

export default function HomePage({ onOpenBooking, currentLang }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scrollToTarget = () => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };
      scrollToTarget();
      const timer = setTimeout(scrollToTarget, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    document.title = 'Làng Nổi Tân Lập - Khu Du Lịch Sinh Thái Rừng Tràm Cổ Thụ Long An';
  }, [location]);

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* 2. Iconic Attractions Bento Grid */}
      <Attractions currentLang={currentLang} />

      {/* 3. Riverway Experiences */}
      <Experiences onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* 4. Hotel & Resort Accommodation */}
      <Resort onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* 5. Western Countryside Cuisine */}
      <Cuisine onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* 6. Pricing & Combos */}
      <Pricing onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* 7. Travel Route & Location Guide */}
      <TravelGuide currentLang={currentLang} />
    </main>
  );
}
