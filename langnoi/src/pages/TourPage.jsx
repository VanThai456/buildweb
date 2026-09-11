import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TourHero from '../components/thamquan/TourHero';
import TourAttractions from '../components/thamquan/TourAttractions';
import TourExperiences from '../components/thamquan/TourExperiences';
import TourPricing from '../components/thamquan/TourPricing';
import TourItinerary from '../components/thamquan/TourItinerary';
import TourBookingForm from '../components/thamquan/TourBookingForm';

export default function TourPage({ currentLang = 'vi', onOpenBooking }) {
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
        ? 'Điểm Tham Quan & Trải Nghiệm - Làng Nổi Tân Lập Eco Sanctuary'
        : 'Attractions & Experiences - Tan Lap Floating Village';
  }, [location, currentLang]);

  return (
    <main className="w-full bg-wetland-cream text-on-surface">
      <TourHero currentLang={currentLang} />
      <TourAttractions currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <TourExperiences currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <TourPricing currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <TourItinerary currentLang={currentLang} />
      <TourBookingForm currentLang={currentLang} />
    </main>
  );
}
