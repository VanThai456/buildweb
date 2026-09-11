import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactHero from "../components/contact/ContactHero";
import ContactDepartments from "../components/contact/ContactDepartments";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactMapGuide from "../components/contact/ContactMapGuide";
import ContactTransportation from "../components/contact/ContactTransportation";
import ContactFAQ from "../components/contact/ContactFAQ";

export default function ContactPage({ currentLang = "vi" }) {
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
        ? "Liên Hệ & Hướng Dẫn Đường Đi - Làng Nổi Tân Lập"
        : "Contact & Route Directions - Tan Lap Floating Village";
  }, [location, currentLang]);

  return (
    <main className="w-full bg-wetland-cream min-h-screen text-on-surface">
      <ContactHero currentLang={currentLang} />
      <ContactDepartments currentLang={currentLang} />
      <ContactFormSection currentLang={currentLang} />
      <ContactMapGuide currentLang={currentLang} />
      <ContactTransportation currentLang={currentLang} />
      <ContactFAQ currentLang={currentLang} />
    </main>
  );
}
