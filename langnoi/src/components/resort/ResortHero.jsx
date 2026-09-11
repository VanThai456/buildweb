export default function ResortHero({ currentLang }) {
  const filterTabs = [
    { href: '#phong-nghi', label: currentLang === 'vi' ? 'Khách Sạn & Phòng Nghỉ' : 'Hotel Rooms' },
    { href: '#tien-ich', label: currentLang === 'vi' ? 'Tiện Ích Sinh Thái' : 'Eco Amenities' },
    { href: '#am-thuc', label: currentLang === 'vi' ? 'Nhà Hàng & Món Ngon' : 'Dining & Specialties' },
    { href: '#bang-gia', label: currentLang === 'vi' ? 'Combo Nghỉ Dưỡng' : 'Holiday Packages' },
    { href: '#booking-form', label: currentLang === 'vi' ? 'Đặt Phòng / Bàn Ăn' : 'Book Room / Table' },
  ];

  const scrollToSection = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" id="top">
      {/* Hero Background Image & Gradient Mist */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-105"
          src="/images/resort/hotel-tower.jpg"
          alt="Tan Lap 8-story eco-hotel tower"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-melaleuca-canopy via-melaleuca-canopy/45 to-black/35"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
        {/* Eco Sanctuary Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-melaleuca-canopy/80 backdrop-blur-md border border-stream-jade/40 text-mist-emerald text-xs md:text-sm font-medium mb-6 shadow-sm">
          <span className="material-symbols-outlined text-base" data-icon="hotel">
            hotel
          </span>
          <span>
            {currentLang === 'vi'
              ? 'Nghỉ Dưỡng Sinh Thái & Tinh Hoa Ẩm Thực Đồng Tháp Mười'
              : 'Eco-Resort Accommodation & Mekong Delta Cuisine'}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-5xl mx-auto leading-tight md:leading-[1.18] text-wetland-cream mb-6 drop-shadow-md">
          {currentLang === 'vi'
            ? 'Nghỉ Dưỡng Giữa Lòng Rừng Tràm & Tinh Hoa Ẩm Thực Nam Bộ'
            : 'Eco-Retreat Amidst Ancient Melaleuca Forest & Southern Flavors'}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base md:text-lg text-wetland-cream/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow">
          {currentLang === 'vi'
            ? 'Hệ thống phòng nghỉ khách sạn 8 tầng view trọn vẹn 135ha rừng tràm và nhà hàng sinh thái phục vụ những thức quà khẩn hoang trứ danh vùng Đồng Tháp Mười.'
            : 'An 8-story eco-hotel granting panoramic vistas over 135 hectares of pristine cajeput canopy, paired with rustic riverside culinary delicacies.'}
        </p>

        {/* Fast-Filter Pill Nav */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-1.5 rounded-full bg-melaleuca-canopy/85 backdrop-blur-lg border border-white/20 max-w-fit mx-auto shadow-2xl">
          {filterTabs.map((tab, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => scrollToSection(e, tab.href)}
              className="px-4 md:px-5 py-2 rounded-full text-wetland-cream/90 hover:bg-forest-moss/60 hover:text-white text-xs md:text-sm font-medium transition-colors cursor-pointer"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
