import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ onOpenBooking, currentLang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAbout = location.pathname === "/gioi-thieu";
  const isTour =
    location.pathname === "/tham-quan" ||
    location.pathname === "/tham-quan-trai-nghiem";
  const isResort =
    location.pathname === "/khach-san-am-thuc" ||
    location.pathname === "/khach-san" ||
    location.pathname === "/nha-hang-khach-san";
  const isPricing =
    location.pathname === "/bang-gia-khuyen-mai" ||
    location.pathname === "/bang-gia" ||
    location.pathname === "/khuyen-mai" ||
    location.pathname === "/uu-dai";
  const isBooking =
    location.pathname === "/dat-phong" ||
    location.pathname === "/dat-phong-truc-tuyen" ||
    location.pathname === "/dat-tour" ||
    location.pathname === "/booking";
  const isContact =
    location.pathname === "/lien-he" ||
    location.pathname === "/lien-he-chi-duong" ||
    location.pathname === "/chi-duong" ||
    location.pathname === "/contact";

  // Menu items matching user specification with real page routing
  const navLinks = [
    {
      id: "about",
      label: currentLang === "vi" ? "GIỚI THIỆU" : "ABOUT US",
      to: "/gioi-thieu",
      active: isAbout,
    },
    {
      id: "tour",
      label: currentLang === "vi" ? "THAM QUAN-TRẢI NGHIỆM" : "ATTRACTIONS & TOURS",
      to: "/tham-quan",
      active: isTour,
    },
    {
      id: "resort",
      label: currentLang === "vi" ? "NHÀ HÀNG & KHÁCH SẠN" : "RESTAURANT & HOTEL",
      to: "/khach-san-am-thuc",
      active: isResort,
    },
    {
      id: "pricing",
      label: currentLang === "vi" ? "TIN KHUYẾN MÃI & GIÁ DỊCH VỤ" : "PROMOTIONS & PRICING",
      to: "/bang-gia-khuyen-mai",
      active: isPricing,
    },
    {
      id: "booking",
      label: currentLang === "vi" ? "ĐẶT PHÒNG" : "BOOK HOTEL",
      to: "/dat-phong",
      active: isBooking,
    },
    {
      id: "contact",
      label: currentLang === "vi" ? "LIÊN HỆ" : "CONTACT",
      to: "/lien-he",
      active: isContact,
    },
  ];

  const handleItemClick = (e, link) => {
    setMobileMenuOpen(false);

    if (link.action === "booking") {
      e.preventDefault();
      onOpenBooking(
        currentLang === "vi"
          ? "Đặt phòng Khách sạn Làng Nổi (8 tầng)"
          : "Hotel Reservation (8 Floors)"
      );
      return;
    }

    if (link.to) {
      if (location.pathname === link.to) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (link.id === "pricing") {
      e.preventDefault();
      const target =
        document.querySelector("#bang-gia") ||
        document.querySelector("#pricing");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/#pricing");
        setTimeout(() => {
          const el = document.querySelector("#pricing");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
      return;
    }

    if (link.hash) {
      e.preventDefault();
      const targetOnCurrentPage = document.querySelector(link.hash);
      if (targetOnCurrentPage) {
        targetOnCurrentPage.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + link.hash);
        setTimeout(() => {
          const target = document.querySelector(link.hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 120);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF5]/95 backdrop-blur-md shadow-sm border-b border-[#1B4D3E]/10"
          : "bg-[#FAFAF5]/90 backdrop-blur-sm border-b border-[#1B4D3E]/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center h-20">
        {/* Brand Identity */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-[22px]">
              sailing
            </span>
          </div>
          <div className="flex min-w-0 flex-col text-left">
            <span className="font-serif text-[16px] sm:text-[17px] leading-[1.15] text-[#1B4D3E] font-bold tracking-tight">
              Làng Nổi Tân Lập
            </span>
            <span className="mt-0.5 text-[8px] leading-[1.3] text-[#2D6A4F] tracking-[0.16em] uppercase font-semibold">
              ECO SANCTUARY • LONG AN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - 6 items matching user specification */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7">
          {navLinks.map((link) => {
            const baseClassName = `text-[12px] xl:text-[13px] 2xl:text-[14px] uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer whitespace-nowrap py-1 relative ${
              link.active
                ? "text-[#1B4D3E] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2.5px] after:bg-[#1B4D3E] after:rounded-full"
                : "text-[#111D23] hover:text-[#2D6A4F]"
            }`;

            if (link.to) {
              return (
                <Link
                  key={link.id}
                  to={link.to}
                  onClick={(e) => handleItemClick(e, link)}
                  className={baseClassName}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <button
                key={link.id}
                type="button"
                onClick={(e) => handleItemClick(e, link)}
                className={`${baseClassName} bg-transparent border-0`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Trailing Action Hub */}
        <div className="flex items-center gap-2.5 md:gap-3.5 shrink-0">
          {/* Language Switcher Dual Pill */}
          <div className="flex items-center bg-[#F3F4ED] p-1 rounded-full border border-[#1B4D3E]/10">
            <button
              onClick={() => setLang("vi")}
              className={`px-2 py-0.5 rounded-full font-bold text-[11px] transition-all cursor-pointer ${
                currentLang === "vi"
                  ? "bg-[#1B4D3E] text-white shadow-xs"
                  : "text-[#404945] hover:text-[#1B4D3E]"
              }`}
            >
              VI
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-full font-bold text-[11px] transition-all cursor-pointer ${
                currentLang === "en"
                  ? "bg-[#1B4D3E] text-white shadow-xs"
                  : "text-[#404945] hover:text-[#1B4D3E]"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1B4D3E] rounded-lg hover:bg-[#F3F4ED] focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF5] border-b border-[#1B4D3E]/15 px-6 py-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1 pb-3 border-b border-[#1B4D3E]/10">
            {navLinks.map((link) => {
              const mobileClass = `text-[13.5px] uppercase tracking-wider font-bold py-2.5 text-left transition-colors cursor-pointer ${
                link.active
                  ? "text-[#1B4D3E] font-extrabold"
                  : "text-[#111D23] hover:text-[#2D6A4F]"
              }`;

              if (link.to) {
                return (
                  <Link
                    key={link.id}
                    to={link.to}
                    onClick={(e) => handleItemClick(e, link)}
                    className={mobileClass}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={(e) => handleItemClick(e, link)}
                  className={`${mobileClass} bg-transparent border-0`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
