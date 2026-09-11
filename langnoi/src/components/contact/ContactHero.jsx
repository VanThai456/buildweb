export default function ContactHero({ currentLang = "vi" }) {
  const isEn = currentLang === "en";

  const filterPills = [
    {
      label: isEn ? "Contact Channels" : "Kênh Liên Lạc",
      href: "#contact-departments",
      icon: "contacts",
    },
    {
      label: isEn ? "Send Message" : "Gửi Lời Nhắn",
      href: "#contact-form",
      icon: "outgoing_mail",
    },
    {
      label: isEn ? "Route & Map" : "Lộ Trình & Bản Đồ",
      href: "#direction-guide",
      icon: "map",
    },
    {
      label: isEn ? "Transport & Parking" : "Phương Tiện Bến Bãi",
      href: "#transportation",
      icon: "directions_car",
    },
    {
      label: isEn ? "Route FAQs" : "Hỏi Đáp Tuyến Đường",
      href: "#faq",
      icon: "help_outline",
    },
  ];

  return (
    <section className="pt-24 pb-8 bg-wetland-cream border-b border-forest-moss/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-4 font-medium">
          <a href="/" className="hover:text-forest-moss transition-colors">
            {isEn ? "Home" : "Trang chủ"}
          </a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-melaleuca-canopy font-semibold">
            {isEn ? "Contact & Directions" : "Liên hệ & Hướng dẫn đường đi"}
          </span>
        </nav>

        {/* Hero Visual Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-forest-moss/20 mb-8 aspect-[21/9] max-h-[360px]">
          <img
            src="/images/contact/contact-hero.jpg"
            alt={isEn ? "Tan Lap Floating Village Cajeput Forest" : "Rừng tràm Làng Nổi Tân Lập"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-melaleuca-canopy/90 via-melaleuca-canopy/50 to-transparent flex flex-col justify-end p-6 md:p-12 text-white">
            <span className="text-alluvial-earth text-xs uppercase tracking-widest font-bold mb-2">
              {isEn ? "Accompanying & Caring for Visitors" : "Đồng Hành & Chăm Sóc Du Khách"}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-wetland-cream max-w-3xl leading-tight">
              {isEn
                ? "Contact & Connect with Tan Lap Floating Village"
                : "Liên Hệ & Kết Nối Với Làng Nổi Tân Lập"}
            </h1>
            <p className="text-xs md:text-sm text-wetland-cream/90 max-w-2xl mt-2 leading-relaxed">
              {isEn
                ? "Our eco-tourism support team is always ready to listen, advise, and accompany your memorable journey."
                : "Đội ngũ tư vấn sinh thái luôn sẵn sàng lắng nghe, hỗ trợ thông tin và đồng hành cùng chuyến hành trình trải nghiệm của quý khách."}
            </p>
          </div>
        </div>

        {/* Fast-Filter Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {filterPills.map((pill, idx) => (
            <a
              key={idx}
              href={pill.href}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-forest-moss/15 text-xs font-semibold text-gray-700 hover:bg-forest-moss hover:text-white hover:border-forest-moss transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-sm">{pill.icon}</span>
              <span>{pill.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
