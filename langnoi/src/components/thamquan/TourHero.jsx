export default function TourHero({ currentLang }) {
  const metrics = [
    {
      icon: 'forest',
      value: '135 ha',
      label: currentLang === 'vi' ? 'Rừng tràm nguyên sinh' : 'Ancient cajeput forest',
      color: 'text-primary-fixed',
    },
    {
      icon: 'route',
      value: '5.000 m',
      label: currentLang === 'vi' ? 'Cung đường xuyên rừng dài nhất' : 'Longest canopy forest trail',
      color: 'text-secondary-fixed',
    },
    {
      icon: 'visibility',
      value: '38 m',
      label: currentLang === 'vi' ? 'Tháp quan sát 360° toàn cảnh' : '360° panoramic observation tower',
      color: 'text-tertiary-fixed',
    },
    {
      icon: 'schedule',
      value: '2 Giờ',
      label: currentLang === 'vi' ? 'Cách TP. Hồ Chí Minh qua QL62' : 'Hours drive from HCMC via QL62',
      color: 'text-stream-jade',
    },
  ];

  const filterTabs = [
    { href: '#attractions', label: currentLang === 'vi' ? 'Điểm tham quan biểu tượng' : 'Iconic Attractions' },
    { href: '#experiences', label: currentLang === 'vi' ? 'Trải nghiệm sông nước' : 'River Experiences' },
    { href: '#pricing', label: currentLang === 'vi' ? 'Bảng giá dịch vụ' : 'Pricing & Combos' },
    { href: '#itinerary', label: currentLang === 'vi' ? 'Gợi ý lịch trình 1N / 2N1Đ' : '1-Day / 2D1N Itinerary' },
  ];

  const scrollToSection = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" id="all">
      {/* Hero Background Image & Gradient Mist */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-105"
          src="/images/thamquan/tour-hero.jpg"
          alt="Tan Lap Melaleuca forest landscape"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-melaleuca-canopy via-melaleuca-canopy/40 to-black/30"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
        {/* Ramsar & Heritage Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-melaleuca-canopy/80 backdrop-blur-md border border-stream-jade/40 text-mist-emerald text-xs md:text-sm font-medium mb-6 shadow-sm">
          <span className="material-symbols-outlined text-base" data-icon="eco">
            eco
          </span>
          <span>
            {currentLang === 'vi'
              ? 'Khu Du Lịch Sinh Thái Rừng Tràm Cổ Thụ Đồng Tháp Mười'
              : 'Dong Thap Muoi Ancient Melaleuca Eco-Sanctuary'}
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-5xl mx-auto leading-tight md:leading-[1.18] text-wetland-cream mb-6 drop-shadow-md">
          {currentLang === 'vi'
            ? 'Hành Trình Khám Phá Rừng Tràm Cổ Thụ & Trải Nghiệm Miền Sông Nước'
            : 'Explore Ancient Cajeput Forest & Authentic Riverway Experiences'}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base md:text-lg text-wetland-cream/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow">
          {currentLang === 'vi'
            ? 'Hòa mình vào thiên nhiên nguyên sơ Đồng Tháp Mười, thong thả dạo bước trên cung đường đan 5km, ngắm thảm bèo cám xanh biếc trên chiếc xuồng ba lá và cảm nhận nét đẹp thuần phác của đất phương Nam.'
            : 'Immerse in Dong Thap Muoi nature, stroll leisurely along the 5km concrete walkway, admire duckweed carpets on wooden sampans, and savor authentic Southern hospitality.'}
        </p>

        {/* Key Metrics Strip Glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto mb-12">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-wetland-cream/15 backdrop-blur-md rounded-xl p-4 border border-white/20 text-left transition-all hover:bg-wetland-cream/25 shadow-sm"
            >
              <div className={`flex items-center gap-2 ${item.color} mb-1`}>
                <span className="material-symbols-outlined text-xl" data-icon={item.icon}>
                  {item.icon}
                </span>
                <span className="font-serif text-lg md:text-2xl font-bold text-white">
                  {item.value}
                </span>
              </div>
              <span className="text-xs text-wetland-cream/85 block leading-tight">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Quick Fast-Filter Pill Nav */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-1.5 rounded-full bg-melaleuca-canopy/85 backdrop-blur-lg border border-white/20 max-w-fit mx-auto shadow-2xl">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 md:px-5 py-2 rounded-full bg-forest-moss text-white text-xs md:text-sm font-semibold shadow-sm transition-colors cursor-pointer"
          >
            {currentLang === 'vi' ? 'Tất cả' : 'All'}
          </button>
          {filterTabs.map((tab, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => scrollToSection(e, tab.href)}
              className="px-4 md:px-5 py-2 rounded-full text-wetland-cream/90 hover:bg-forest-moss/50 hover:text-white text-xs md:text-sm font-medium transition-colors cursor-pointer"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
