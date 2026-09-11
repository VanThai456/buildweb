import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import HeritageStory from '../components/home/HeritageStory';
import ServiceTiles from '../components/home/ServiceTiles';
import SpecialOffers from '../components/home/SpecialOffers';
import NewsletterContact from '../components/home/NewsletterContact';

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
    document.title =
      currentLang === 'vi'
        ? 'Làng Nổi Tân Lập Resort & Eco Sanctuary | Đồng Tháp Mười, Long An'
        : 'Tan Lap Floating Village Resort & Eco Sanctuary | Dong Thap Muoi, Long An';
  }, [location, currentLang]);

  return (
    <main className="w-full bg-white text-charcoal-vintage">
      {/* 2. Hero Section (Ana Mandara Atmospheric Resort Hero + Quick Floating Booking Bar) */}
      <Hero onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* 3. Editorial Story Section (Exact Ana Mandara Layout) */}
      <HeritageStory currentLang={currentLang} />

      {/* 4. Experience & Service Tiles (5-card Grid) */}
      <ServiceTiles onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* 5. Special Offers / Promotions Slider (Cùng Bạn Hưởng Thụ Cuộc Sống) */}
      <SpecialOffers onOpenBooking={onOpenBooking} currentLang={currentLang} />

      {/* 6. Newsletter Subscription & Contact Section */}
      <NewsletterContact currentLang={currentLang} />
    </main>
  );
}
