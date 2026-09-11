export default function AboutHero({ currentLang }) {
  return (
    <section className="relative min-h-[820px] md:min-h-[880px] flex items-center justify-center pt-28 pb-20 overflow-hidden text-white">
      {/* Background Image with Soft Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center"
          src="/images/about/about-hero.jpg"
          onError={(e) => {
            e.target.src =
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAw7bqUMEHGHSCjZdnM32TbpnZw-FXHOznB69-JU67buf9Kf6pJrlCSlp_QerNr0EA1PIzRurNCCZY3v1-gLXsj7AeMLbPIViBNvy8LO8AuRXsREmakxwDNGPVnPHHDLH_1lrt4sWdYqyiZrajj3M-C5L9M3ptbZgwJyCZpr9dvwYRSntGh1WQN5PiyMapGTca7zIGktEqfFR5dzy8Cvhfa9zDwg2xwXRGAa3lM1Q18LDIJLZcpQVZUSw=s0';
          }}
          alt="Cajeput forest in Tan Lap Long An"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D3E]/95 via-[#1B4D3E]/60 to-black/35"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
        {/* Floating Eco Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stream-jade/25 border border-stream-jade/40 backdrop-blur-md text-white mb-6 shadow-sm">
          <span className="material-symbols-outlined text-stream-jade text-sm">eco</span>
          <span className="font-label-sm text-xs md:text-sm tracking-wide font-medium">
            {currentLang === 'vi'
              ? 'Khu Ramsar & Du Lịch Sinh Thái Rừng Tràm Cổ Thụ Đồng Tháp Mười'
              : 'Ramsar Wetland & Ancient Cajeput Eco-Sanctuary'}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] max-w-5xl leading-[1.2] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] font-bold text-white tracking-tight">
          {currentLang === 'vi'
            ? 'Khám Phá Bản Giao Hưởng Thiên Nhiên Giữa Lòng Rừng Tràm Cổ Thụ'
            : 'Discover Nature’s Symphony in the Heart of Ancient Cajeput Forest'}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base md:text-lg max-w-3xl text-wetland-cream/95 mb-12 font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {currentLang === 'vi'
            ? 'Tọa lạc tại vùng trũng ngập nước Đồng Tháp Mười huyền thoại, Làng Nổi Tân Lập là chốn tĩnh dưỡng nguyên sơ gìn giữ trọn vẹn lá phổi xanh melaleuca cajuputi, nơi con người và thiên nhiên giao hòa trong từng nhịp chèo êm ả.'
            : 'Nestled within legendary Dong Thap Muoi wetlands, Tan Lap Floating Village is a pristine eco-retreat preserving living cajeput lungs where humans and nature breathe together in harmony.'}
        </p>

        {/* Signature Metrics Grid */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl">
          <div className="flex flex-col items-center p-3 border-r border-white/10 last:border-0">
            <span className="material-symbols-outlined text-stream-jade text-2xl mb-1">forest</span>
            <span className="font-serif text-2xl md:text-[28px] font-bold text-white leading-tight">135 ha</span>
            <span className="font-label-sm text-xs text-wetland-cream/80 text-center mt-1">
              {currentLang === 'vi' ? 'Rừng tràm nguyên sinh' : 'Ancient forest'}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 md:border-r border-white/10">
            <span className="material-symbols-outlined text-stream-jade text-2xl mb-1">route</span>
            <span className="font-serif text-2xl md:text-[28px] font-bold text-white leading-tight">5 km</span>
            <span className="font-label-sm text-xs text-wetland-cream/80 text-center mt-1">
              {currentLang === 'vi' ? 'Đường đan xuyên rừng' : 'Walkway trail'}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 border-r border-white/10">
            <span className="material-symbols-outlined text-stream-jade text-2xl mb-1">nature_people</span>
            <span className="font-serif text-2xl md:text-[28px] font-bold text-white leading-tight">100+</span>
            <span className="font-label-sm text-xs text-wetland-cream/80 text-center mt-1">
              {currentLang === 'vi' ? 'Loài chim & cá bản địa' : 'Native wildlife species'}
            </span>
          </div>

          <div className="flex flex-col items-center p-3">
            <span className="material-symbols-outlined text-stream-jade text-2xl mb-1">cloud_upload</span>
            <span className="font-serif text-2xl md:text-[28px] font-bold text-white leading-tight">38 m</span>
            <span className="font-label-sm text-xs text-wetland-cream/80 text-center mt-1">
              {currentLang === 'vi' ? 'Tháp ngắm toàn cảnh' : 'Panoramic tower'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
