import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PricingHero from "../components/pricing/PricingHero";
import PricingPromos from "../components/pricing/PricingPromos";
import PricingTableTabs from "../components/pricing/PricingTableTabs";
import PricingCombos from "../components/pricing/PricingCombos";
import PricingInquiryForm from "../components/pricing/PricingInquiryForm";

export default function PricingPage({ currentLang = "vi", onOpenBooking }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scrollToTarget = () => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      scrollToTarget();
      const timer = setTimeout(scrollToTarget, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    document.title =
      currentLang === "vi"
        ? "Bảng Giá Dịch Vụ & Ưu Đãi Khuyến Mãi - Làng Nổi Tân Lập"
        : "Service Pricing & Promotional Offers - Tan Lap Floating Village";
  }, [location, currentLang]);

  return (
    <main className="w-full bg-wetland-cream text-on-surface">
      <PricingHero currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <PricingPromos currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <PricingTableTabs currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <PricingCombos currentLang={currentLang} onOpenBooking={onOpenBooking} />
      <PricingInquiryForm currentLang={currentLang} />
    </main>
  );
}
