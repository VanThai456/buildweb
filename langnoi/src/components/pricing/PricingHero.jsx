export default function PricingHero({ currentLang }) {
  const filterTabs = [
    { href: '#uu-dai', label: currentLang === 'vi' ? 'Khuyến Mãi Đang Diễn Ra' : 'Active Promotions' },
    { href: '#bang-gia', label: currentLang === 'vi' ? 'Bảng Giá Chi Tiết' : 'Detailed Price List' },
    { href: '#combo', label: currentLang === 'vi' ? 'Gói Combo Trọn Gói' : 'Package Deals' },
    { href: '#dat-ve', label: currentLang === 'vi' ? 'Tư Vấn & Báo Giá' : 'Get Quote' },
  ];

  const scrollToSection = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#103026] via-[#1B4D3E] to-[#245b4a] text-white" id="top">
      {/* Background Decorative Dapples */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#74C69D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-stream-jade/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-alluvial-earth/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-mist-emerald text-xs md:text-sm font-semibold mb-6 shadow-sm">
          <span className="material-symbols-outlined text-base" data-icon="verified">
            verified
          </span>
          <span>
            {currentLang === 'vi'
              ? 'MINH BẠCH • KHÔNG PHỤ PHÍ ẨN • NIÊM YẾT 2024'
              : 'TRANSPARENT • NO HIDDEN FEES • 2024 OFFICIAL'}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.18] text-wetland-cream mb-6 drop-shadow-md">
          {currentLang === 'vi'
            ? 'Bảng Giá Niêm Yết & Các Gói Ưu Đãi Nghỉ Dưỡng Sinh Thái'
            : 'Official Price List & Eco-Resort Special Offers'}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base md:text-lg text-wetland-cream/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          {currentLang === 'vi'
            ? 'Cập nhật biểu phí chi tiết các dịch vụ tham quan, chèo xuồng bèo cám, lưu trú khách sạn 8 tầng và ẩm thực khẩn hoang Đồng Tháp Mười.'
            : 'Explore complete, transparent rates for admission, scenic sampan tours, 8-story hotel lodging, and authentic Mekong culinary delights.'}
        </p>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-1.5 rounded-full bg-black/25 backdrop-blur-lg border border-white/20 max-w-fit mx-auto shadow-2xl">
          {filterTabs.map((tab, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => scrollToSection(e, tab.href)}
              className="px-4 md:px-5 py-2 rounded-full text-wetland-cream/90 hover:bg-white/20 hover:text-white text-xs md:text-sm font-medium transition-colors cursor-pointer"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
