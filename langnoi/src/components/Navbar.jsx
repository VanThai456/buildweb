import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ onOpenBooking, currentLang, setLang }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL || '/';

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
    setLangDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [drawerOpen]);

  const navLinks = [
    {
      id: 'home',
      label: currentLang === 'vi' ? 'TRANG CHỦ' : 'HOME',
      sublabel: currentLang === 'vi' ? 'Tổng quan khu du lịch & nghỉ dưỡng' : 'Overview & Sanctuary',
      to: '/',
      active: location.pathname === '/',
    },
    {
      id: 'about',
      label: currentLang === 'vi' ? 'GIỚI THIỆU & CÂU CHUYỆN DI SẢN' : 'ABOUT & HERITAGE',
      sublabel: currentLang === 'vi' ? 'Sứ mệnh bảo tồn & rừng tràm 135ha' : 'Conservation mission & 135ha forest',
      to: '/gioi-thieu',
      active: location.pathname === '/gioi-thieu',
    },
    {
      id: 'tour',
      label: currentLang === 'vi' ? 'THAM QUAN & TRẢI NGHIỆM' : 'ATTRACTIONS & TOURS',
      sublabel: currentLang === 'vi' ? 'Cung đường 5km, xuồng ba lá & tháp 38m' : '5km trail, sampan cruise & 38m tower',
      to: '/tham-quan',
      active: location.pathname === '/tham-quan' || location.pathname === '/tham-quan-trai-nghiem',
    },
    {
      id: 'resort',
      label: currentLang === 'vi' ? 'KHÁCH SẠN & ẨM THỰC' : 'RESORT & DINING',
      sublabel: currentLang === 'vi' ? 'Khách sạn 8 tầng & đặc sản Đồng Tháp Mười' : '8-floor eco-hotel & Mekong cuisine',
      to: '/khach-san-am-thuc',
      active: location.pathname === '/khach-san-am-thuc' || location.pathname === '/khach-san' || location.pathname === '/nha-hang-khach-san',
    },
    {
      id: 'pricing',
      label: currentLang === 'vi' ? 'BẢNG GIÁ DỊCH VỤ & ƯU ĐÃI' : 'RATES & PROMOTIONS',
      sublabel: currentLang === 'vi' ? 'Combo vé, phòng nghỉ & gói tour hấp dẫn' : 'Tickets, packages & exclusive promotions',
      to: '/bang-gia-khuyen-mai',
      active: location.pathname === '/bang-gia-khuyen-mai' || location.pathname === '/bang-gia' || location.pathname === '/khuyen-mai' || location.pathname === '/uu-dai',
    },
    {
      id: 'booking',
      label: currentLang === 'vi' ? 'ĐẶT PHÒNG TRỰC TUYẾN' : 'ONLINE BOOKING',
      sublabel: currentLang === 'vi' ? 'Giữ chỗ nhanh, nhận xác nhận tức thì' : 'Fast reservation & instant confirmation',
      to: '/dat-phong',
      active: location.pathname === '/dat-phong' || location.pathname === '/dat-phong-truc-tuyen' || location.pathname === '/booking',
    },
    {
      id: 'guide',
      label: currentLang === 'vi' ? 'CẨM NANG DU LỊCH' : 'TRAVEL GUIDE',
      sublabel: currentLang === 'vi' ? 'Kinh nghiệm khám phá & lịch trình gợi ý' : 'Field notes & recommended itineraries',
      to: '/cam-nang',
      active: location.pathname === '/cam-nang' || location.pathname === '/cam-nang-du-lich' || location.pathname === '/kinh-nghiem',
    },
    {
      id: 'contact',
      label: currentLang === 'vi' ? 'LIÊN HỆ & CHỈ ĐƯỜNG' : 'CONTACT & DIRECTIONS',
      sublabel: currentLang === 'vi' ? 'Quốc lộ 62, Mộc Hóa, Long An' : 'Highway 62, Moc Hoa, Long An',
      to: '/lien-he',
      active: location.pathname === '/lien-he' || location.pathname === '/contact' || location.pathname === '/chi-duong',
    },
  ];

  const handleBookNow = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.querySelector('#booking');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
    if (onOpenBooking) {
      onOpenBooking('Suite Sanctuary Rừng Tràm');
    } else {
      navigate('/dat-phong');
    }
  };

  return (
    <>
      {/* ================= STITCH EXACT HEADER & TOP NAVIGATION (Ana Mandara Style) ================= */}
      <header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] h-20 md:h-24 transition-all">
        <div className="w-full h-full flex items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Left: Clean minimal hamburger menu icon */}
          <div className="flex items-center gap-3 sm:gap-4 w-36 sm:w-48">
            <button
              aria-label="Menu"
              onClick={() => setDrawerOpen(true)}
              className="group flex flex-col justify-center items-start gap-1.5 p-2 focus:outline-none cursor-pointer"
              type="button"
            >
              <span className="w-7 h-[2px] bg-charcoal-vintage transition-all group-hover:bg-olive-moss group-hover:w-8"></span>
              <span className="w-7 h-[2px] bg-charcoal-vintage transition-all group-hover:bg-olive-moss"></span>
              <span className="w-7 h-[2px] bg-charcoal-vintage transition-all group-hover:bg-olive-moss group-hover:w-6"></span>
            </button>
            <span className="hidden md:inline-block font-sans text-xs uppercase tracking-[0.16em] text-charcoal-muted font-medium select-none">
              {currentLang === 'vi' ? 'Menu' : 'Menu'}
            </span>
          </div>

          {/* Center: Refined brand logo with Official Heritage Crest Emblem */}
          <div className="flex-1 flex flex-col items-center justify-center text-center py-1">
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex flex-col items-center group py-0.5"
            >
              {/* Official Tan Lap Heritage Crest Emblem (Crane, Melaleuca, Sampan) */}
              <img
                src={`${baseUrl}images/logo-tanlap-mark.png`}
                alt="Làng Nổi Tân Lập Logo"
                className="w-10 h-10 md:w-11 md:h-11 object-contain mb-1 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs"
              />
              <span className="font-serif-luxury text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.24em] uppercase text-charcoal-vintage leading-none">
                LÀNG NỔI TÂN LẬP
              </span>
              <span className="font-serif-luxury text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-olive-moss mt-1 font-medium">
                ECO SANCTUARY &amp; RESORT • LONG AN
              </span>
            </Link>
          </div>

          {/* Right: Language Switcher + Solid Olive Green 'ĐẶT NGAY' Button */}
          <div className="flex items-center justify-end gap-3 sm:gap-6 w-auto sm:w-48 h-full">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="hidden sm:flex items-center gap-1.5 text-xs text-charcoal-vintage hover:text-olive-moss cursor-pointer tracking-wider transition-colors py-2"
                type="button"
              >
                <span className="material-symbols-outlined text-base" data-icon="language">
                  language
                </span>
                <span className="font-medium text-[13px]">
                  {currentLang === 'vi' ? 'Tiếng Việt' : 'English'}
                </span>
                <span className="material-symbols-outlined text-sm" data-icon="arrow_drop_down">
                  arrow_drop_down
                </span>
              </button>

              {/* Language Dropdown */}
              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-xl border border-gray-100 py-1.5 z-50 animate-fadeIn">
                  <button
                    onClick={() => {
                      setLang('vi');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-1.5 text-xs tracking-wider flex items-center justify-between ${
                      currentLang === 'vi' ? 'bg-linen-sand text-olive-moss font-semibold' : 'text-charcoal-vintage hover:bg-linen-warm'
                    }`}
                  >
                    Tiếng Việt
                    {currentLang === 'vi' && <span className="material-symbols-outlined text-sm">check</span>}
                  </button>
                  <button
                    onClick={() => {
                      setLang('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-1.5 text-xs tracking-wider flex items-center justify-between ${
                      currentLang === 'en' ? 'bg-linen-sand text-olive-moss font-semibold' : 'text-charcoal-vintage hover:bg-linen-warm'
                    }`}
                  >
                    English
                    {currentLang === 'en' && <span className="material-symbols-outlined text-sm">check</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Solid olive-moss green rectangular button full navbar height */}
            <button
              onClick={handleBookNow}
              className="h-20 md:h-24 px-5 sm:px-8 bg-olive-moss hover:bg-olive-dark text-white font-sans text-xs md:text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center transition-colors duration-200 cursor-pointer shrink-0"
              type="button"
            >
              {currentLang === 'vi' ? 'ĐẶT NGAY' : 'BOOK NOW'}
            </button>
          </div>
        </div>
      </header>

      {/* ================= LUXURY NAVIGATION DRAWER (Full Page / Side Drawer) ================= */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[100] flex animate-fadeIn">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setDrawerOpen(false)}
          ></div>

          {/* Drawer Content */}
          <div className="relative w-full max-w-lg bg-linen-warm h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto border-r border-gray-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-200/80 bg-white">
              <div className="flex items-center gap-3">
                <img
                  src={`${baseUrl}images/logo-tanlap-mark.png`}
                  alt="Làng Nổi Tân Lập Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="text-left">
                  <span className="font-serif-luxury text-lg font-semibold tracking-[0.2em] uppercase text-charcoal-vintage block leading-none">
                    LÀNG NỔI TÂN LẬP
                  </span>
                  <span className="font-serif-luxury text-[9px] tracking-[0.24em] uppercase text-olive-moss font-medium">
                    ECO SANCTUARY &amp; RESORT • LONG AN
                  </span>
                </div>
              </div>

              <button
                onClick={() => setDrawerOpen(false)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-charcoal-vintage hover:bg-olive-moss hover:text-white hover:border-olive-moss transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Navigation List */}
            <nav className="p-6 md:p-8 flex-1 space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-olive-moss mb-4">
                {currentLang === 'vi' ? 'DANH MỤC KHÁM PHÁ' : 'NAVIGATION MENU'}
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  onClick={() => setDrawerOpen(false)}
                  className={`group block p-3.5 rounded-lg transition-all duration-200 ${
                    link.active
                      ? 'bg-white shadow-sm border-l-4 border-olive-moss'
                      : 'hover:bg-white/80 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-serif-luxury text-lg md:text-xl font-semibold tracking-[0.14em] uppercase transition-colors ${
                        link.active ? 'text-olive-moss' : 'text-charcoal-vintage group-hover:text-olive-moss'
                      }`}
                    >
                      {link.label}
                    </span>
                    <span className="material-symbols-outlined text-sm text-charcoal-muted group-hover:text-olive-moss group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                  <span className="block text-xs text-charcoal-muted font-light tracking-wide mt-0.5">
                    {link.sublabel}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Drawer Footer: Language & Quick Contact */}
            <div className="p-6 md:p-8 bg-white border-t border-gray-200/80 space-y-4">
              {/* Language Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-xs uppercase tracking-wider text-charcoal-muted font-medium">
                  {currentLang === 'vi' ? 'Ngôn ngữ' : 'Language'}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLang('vi')}
                    className={`px-3 py-1 rounded text-xs font-semibold tracking-wider transition-colors ${
                      currentLang === 'vi' ? 'bg-olive-moss text-white' : 'bg-gray-100 text-charcoal-vintage hover:bg-gray-200'
                    }`}
                  >
                    VI
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`px-3 py-1 rounded text-xs font-semibold tracking-wider transition-colors ${
                      currentLang === 'en' ? 'bg-olive-moss text-white' : 'bg-gray-100 text-charcoal-vintage hover:bg-gray-200'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-1 text-xs text-charcoal-muted">
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-olive-moss">call</span>
                  <a href="tel:02723968133" className="hover:text-olive-moss font-semibold">
                    0272 3968 133
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="tel:0966893943" className="hover:text-olive-moss font-semibold">
                    0966 893 943
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-olive-moss">location_on</span>
                  <span>QL62, Tân Lập, Mộc Hóa, Long An</span>
                </p>
              </div>

              {/* Action Button inside drawer */}
              <button
                onClick={(e) => {
                  setDrawerOpen(false);
                  handleBookNow(e);
                }}
                className="w-full py-3 bg-olive-moss hover:bg-olive-dark text-white font-sans text-xs uppercase tracking-[0.2em] font-bold transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
                type="button"
              >
                <span>{currentLang === 'vi' ? 'ĐẶT PHÒNG & TOUR NGAY' : 'BOOK EXPERIENCE NOW'}</span>
                <span className="material-symbols-outlined text-sm">calendar_month</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
