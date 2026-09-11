import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResortHero from '../components/resort/ResortHero';
import ResortIntro from '../components/resort/ResortIntro';
import ResortRooms from '../components/resort/ResortRooms';
import ResortAmenities from '../components/resort/ResortAmenities';
import ResortDining from '../components/resort/ResortDining';
import ResortPackages from '../components/resort/ResortPackages';
import ResortBookingForm from '../components/resort/ResortBookingForm';
import ResortFAQ from '../components/resort/ResortFAQ';

export default function ResortPage({ currentLang = 'vi', onOpenBooking }) {
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
    document.title =
      currentLang === 'vi'
        ? 'Khách Sạn Nghỉ Dưỡng & Ẩm Thực - Làng Nổi Tân Lập'
        : 'Eco Hotel Resort & Southern Cuisine - Tan Lap Floating Village';
  }, [location, currentLang]);

  return (
    <main className="w-full bg-wetland-cream text-on-surface">
      <ResortHero currentLang={currentLang} />
      <ResortIntro currentLang={currentLang} />
      <ResortRooms currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <ResortAmenities currentLang={currentLang} />
      <ResortDining currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <ResortPackages currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <ResortBookingForm currentLang={currentLang} />
      <ResortFAQ currentLang={currentLang} />
    </main>
  );
}
