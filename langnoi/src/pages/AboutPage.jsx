import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutPage({ currentLang = "vi", onOpenBooking }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title =
      currentLang === "vi"
        ? "Giới Thiệu & Câu Chuyện Di Sản - Làng Nổi Tân Lập"
        : "Heritage & Conservation Story | Tan Lap Floating Village Eco Sanctuary";
  }, [currentLang]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  const isEn = currentLang === "en";

  return (
    <div className="w-full bg-surface text-on-surface font-body-md selection:bg-[#555555] selection:text-white">
      {/* 1. BREADCRUMB & PROLOGUE RIBBON */}
      <div className="w-full bg-surface-container-low border-b border-outline-variant/30 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-sans text-on-surface/60 uppercase tracking-[0.15em]">
            <Link to="/" className="hover:text-primary transition-colors">
              {isEn ? "Home" : "Trang Chủ"}
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">
              {isEn ? "Heritage Story" : "Giới Thiệu Di Sản"}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-sans text-on-surface/60 tracking-[0.18em] uppercase">
            <span className="w-2 h-2 bg-primary rounded-full inline-block" />
            <span>Đồng Tháp Mười, Long An</span>
          </div>
        </div>
      </div>

      {/* 2. CINEMATIC HERO SECTION (Sharp Photo, Zero Video Button per User Request) */}
      <section className="relative w-full h-[620px] md:h-[720px] lg:h-[800px] min-h-[580px] max-h-[850px] overflow-hidden">
        {/* Full-bleed background with atmospheric layered scrim */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={`${import.meta.env.BASE_URL}images/about/about-hero-sharp.jpg`}
            alt="Làng Nổi Tân Lập Eco Sanctuary Panorama - Golden Sunrise"
            className="w-full h-full object-cover object-center"
            style={{ imageRendering: "-webkit-optimize-contrast" }}
          />
          {/* Atmospheric Layered Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/80" />
        </div>

        {/* Hero Centered Monograph Content */}
        <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col justify-end pb-16 text-center text-white">
          <span className="font-serif-luxury text-sm md:text-base tracking-[0.24em] uppercase text-khaki-gold mb-3 drop-shadow">
            {isEn
              ? "SYMPHONY OF NATURE & CONSERVATION HERITAGE"
              : "BẢN GIAO HƯỞNG CỦA THIÊN NHIÊN & DI SẢN"}
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl tracking-[0.06em] uppercase font-normal mb-5 leading-tight drop-shadow-md">
            {isEn
              ? "TOUCH THE UNTOUCHED CAJEUPUT HERITAGE"
              : "CHẠM VÀO DI SẢN RỪNG TRÀM NGUYÊN BẢN"}
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-white/90 font-light tracking-wide drop-shadow leading-relaxed">
            {isEn
              ? "A 135-hectare core wetland reserve in the heart of Dong Thap Muoi, preserving pristine Southern Vietnamese biodiversity and peaceful mindful sanctuaries."
              : "Khu bảo tồn sinh thái 135 héc-ta giữa trái tim châu thổ Đồng Tháp Mười, nơi lưu giữ tinh hoa ngập nước Nam Bộ và không gian thanh tĩnh an yên."}
          </p>
        </div>

        {/* Floating Editorial Carousel Controls */}
        <div className="hidden md:flex absolute bottom-12 right-12 z-20 items-center gap-3">
          <button
            aria-label="Previous"
            className="w-11 h-11 rounded-full bg-black/30 backdrop-blur-md border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-charcoal-vintage transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-lg">west</span>
          </button>
          <button
            aria-label="Next"
            className="w-11 h-11 rounded-full bg-black/30 backdrop-blur-md border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-charcoal-vintage transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-lg">east</span>
          </button>
        </div>
      </section>

      {/* 3. SECTION 1: EDITORIAL SPLIT STORYTELLING (Ana Mandara Style Asymmetric Block) */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left 6 Columns: Poetic Heritage Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
            <div className="flex items-center gap-3 text-tertiary">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary font-semibold">
                {isEn ? "135HA ANCIENT CAJEUPUT FORESTRY" : "Miền Rừng Tràm Cổ Thụ 135ha"}
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl tracking-[0.04em] text-on-surface leading-snug">
              {isEn
                ? "Genesis of Dong Thap Muoi Primal Wetlands"
                : "Khởi Nguồn Vùng Đất Ngập Nước Đồng Tháp Mười"}
            </h2>
            <p className="font-serif-luxury italic text-primary text-base md:text-lg">
              {isEn
                ? '"Where each weathered cajeput trunk stands as a silent witness to the timeless rhythms of the Mekong Delta over decades."'
                : '"Nơi mỗi thân tràm bạc màu là một chứng nhân thầm lặng của nhịp thở sông nước Cửu Long qua hàng thập kỷ."'}
            </p>
            <div className="space-y-4 text-on-surface/75 text-sm md:text-base leading-relaxed">
              <p>
                {isEn ? (
                  <>
                    Amidst the vast floodplain of Moc Hoa district, Long An province,{" "}
                    <strong className="text-on-surface font-semibold">
                      Tan Lap Floating Village Eco Sanctuary
                    </strong>{" "}
                    exists as an idyllic natural retreat, preserving the authentic wild essence of
                    inland wetlands. Once an untamed acid-sulfate territory immersed in annual
                    floods, this land has been safeguarded with deep reverence for biodiversity.
                  </>
                ) : (
                  <>
                    Giữa vùng đồng bưng mênh mông của huyện Mộc Hóa, tỉnh Long An,{" "}
                    <strong className="text-on-surface font-semibold">
                      Làng Nổi Tân Lập Eco Sanctuary
                    </strong>{" "}
                    hiện hữu như một chốn trú ẩn thanh bình, gìn giữ trọn vẹn đặc trưng hoang dại
                    của đất ngập nước nội địa. Từng là vùng đất rũ phèn hoang sơ ngập sâu trong mùa
                    nước nổi, nơi đây đã được gìn giữ và tôn tạo với tâm niệm bảo tồn nguyên vẹn sự
                    phong phú sinh thái.
                  </>
                )}
              </p>
              <p>
                {isEn ? (
                  <>
                    The monumental highlight of the sanctuary is the{" "}
                    <strong className="text-on-surface font-semibold">
                      5km concrete forest walkway
                    </strong>{" "}
                    weaving gracefully beneath thick cajeput canopies — a unique handcrafted
                    architectural feat in Vietnam, together with the{" "}
                    <strong className="text-on-surface font-semibold">
                      38m observation tower
                    </strong>{" "}
                    rising above the green sea of foliage to capture panoramic boundless horizons.
                  </>
                ) : (
                  <>
                    Điểm nhấn kỳ vĩ của khu bảo tồn là{" "}
                    <strong className="text-on-surface font-semibold">
                      con đường bê tông dài 5km
                    </strong>{" "}
                    len lỏi uyển chuyển dưới tán tràm cổ thụ rậm rạp – kỳ tích xây dựng thủ công độc
                    nhất vô nhị ở Việt Nam, cùng{" "}
                    <strong className="text-on-surface font-semibold">
                      tháp ngắm cảnh cao 38m
                    </strong>{" "}
                    sừng sững vươn lên giữa đại ngàn, thu trọn vào tầm mắt bức tranh thiên nhiên
                    khoáng đạt tuyệt mỹ.
                  </>
                )}
              </p>
              <p>
                {isEn ? (
                  <>
                    Without disrupting natural rhythms, every structure from the 8-floor eco-hotel
                    to bamboo footbridges leading across blooming lotus fields embodies indigenous
                    rustic vernacular architecture, forging a tranquil dialogue between human souls
                    and wild nature.
                  </>
                ) : (
                  <>
                    Không phá vỡ nhịp điệu sinh thái, mọi công trình từ khu nghỉ dưỡng sinh thái 8
                    tầng hiện đại đến các cầu tre dẫn ra đồng hoa súng đều mang hơi thở kiến trúc
                    mộc bản bản địa mộc mạc, tạo nên một cuộc đối thoại hài hòa giữa con người và tự
                    nhiên.
                  </>
                )}
              </p>
            </div>

            {/* Editorial Stat Badges */}
            <div className="pt-6 border-t border-outline-variant/40 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif-luxury text-3xl md:text-4xl text-primary leading-none">
                  135<span className="text-base font-normal">ha</span>
                </p>
                <p className="text-[11px] font-sans uppercase text-on-surface/60 mt-1 tracking-wider font-medium">
                  {isEn ? "Core Reserve" : "Vùng Lõi Bảo Tồn"}
                </p>
              </div>
              <div>
                <p className="font-serif-luxury text-3xl md:text-4xl text-primary leading-none">
                  5<span className="text-base font-normal">km</span>
                </p>
                <p className="text-[11px] font-sans uppercase text-on-surface/60 mt-1 tracking-wider font-medium">
                  {isEn ? "Boardwalk Trail" : "Cung Đường Xuyên Rừng"}
                </p>
              </div>
              <div>
                <p className="font-serif-luxury text-3xl md:text-4xl text-primary leading-none">
                  38<span className="text-base font-normal">m</span>
                </p>
                <p className="text-[11px] font-sans uppercase text-on-surface/60 mt-1 tracking-wider font-medium">
                  {isEn ? "Lookout Tower" : "Tháp Quan Sát Vọng Cảnh"}
                </p>
              </div>
            </div>
          </div>

          {/* Right 6 Columns: Vertical Architectural Photography with Subtle Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-outline-variant/50 p-2 md:p-3 bg-surface-container-low shadow-sm">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  src={`${import.meta.env.BASE_URL}images/about/wonder-path.jpg`}
                  alt="Con đường xuyên rừng tràm Làng Nổi Tân Lập"
                />
              </div>
              {/* Inset Badge */}
              <div className="absolute -bottom-6 -left-6 bg-surface p-5 border border-outline-variant/60 shadow-md max-w-[260px] hidden sm:block text-left">
                <p className="text-xs font-sans text-primary font-bold uppercase tracking-[0.18em]">
                  {isEn ? "Primal Walkway" : "Con Đường Xuyên Rừng"}
                </p>
                <p className="text-xs text-on-surface/75 font-light mt-1 leading-relaxed">
                  {isEn
                    ? "Vietnam's longest and most serene handcrafted cajeput forest boardwalk."
                    : "Con đường bộ hành xuyên rừng tràm độc bản dài nhất Việt Nam."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: 3 PILLARS OF ECOLOGICAL SANCTUARY (Core Values Bento/Grid) */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary font-semibold">
              {isEn ? "SUSTAINABLE DEVELOPMENT ETHOS" : "TRIẾT LÝ PHÁT TRIỂN BỀN VỮNG"}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-on-surface mt-2 mb-4 uppercase tracking-[0.05em]">
              {isEn ? "Three Pillars of Sanctuary Stewardship" : "Ba Trụ Cột Gìn Giữ & Khởi Sắc"}
            </h2>
            <p className="text-sm md:text-base text-on-surface/75 font-light">
              {isEn
                ? "Every experience at Tan Lap is cultivated with profound reverence for pristine wetland habitats and authentic Southern hospitality."
                : "Mỗi trải nghiệm tại Làng Nổi Tân Lập được vun đắp dựa trên lòng tôn kính tuyệt đối đối với hệ sinh cảnh đất ngập nước nguyên sơ và con người phương Nam."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Pillar 1: Ramsar Conservation */}
            <div className="bg-surface border border-outline-variant/40 p-8 flex flex-col justify-between hover:border-primary/60 transition-all duration-300 shadow-sm">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">nature_people</span>
                </div>
                <span className="text-xs font-sans uppercase tracking-[0.16em] text-primary font-semibold">
                  {isEn ? "Pillar 01" : "Trụ Cột 01"}
                </span>
                <h3 className="font-serif-luxury text-2xl text-on-surface mt-1 mb-3">
                  {isEn ? "Wetland Conservation" : "Bảo Tồn Đất Ngập Nước"}
                </h3>
                <p className="text-xs md:text-sm text-on-surface/75 leading-relaxed">
                  {isEn
                    ? "Protecting rich aquatic flora, delicate duckweed carpets, and migrating avian colonies during seasonal inundations, preserving natural water filtration functions."
                    : "Bảo vệ hệ thực vật thủy sinh phong phú, thảm bèo hoa dâu và quần thể chim muông hoang dã cư trú trong mùa nước nổi, giữ vững chức năng lọc nước tự nhiên của Đồng Tháp Mười."}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center text-xs font-sans text-primary tracking-[0.15em] uppercase font-bold">
                <span>{isEn ? "Biodiversity Sanctuary" : "Đa Dạng Sinh Học"}</span>
                <span className="material-symbols-outlined text-sm ml-2">north_east</span>
              </div>
            </div>

            {/* Pillar 2: Authentic Indigenous Living */}
            <div className="bg-surface border border-outline-variant/40 p-8 flex flex-col justify-between hover:border-primary/60 transition-all duration-300 shadow-sm">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">rowing</span>
                </div>
                <span className="text-xs font-sans uppercase tracking-[0.16em] text-primary font-semibold">
                  {isEn ? "Pillar 02" : "Trụ Cột 02"}
                </span>
                <h3 className="font-serif-luxury text-2xl text-on-surface mt-1 mb-3">
                  {isEn ? "Authentic Indigenous Living" : "Trải Nghiệm Bản Địa Đích Thực"}
                </h3>
                <p className="text-xs md:text-sm text-on-surface/75 leading-relaxed">
                  {isEn
                    ? "Reviving peaceful riverway living with handcrafted sampan journeys along cajeput waterways, straw-grilled snakehead fish, and soulful traditional melodies."
                    : "Tái hiện nếp sống thanh bình miền sông nước với những chuyến du ngoạn xuồng ba lá len lỏi luồng tràm, thưởng thức ẩm thực cá lóc nướng trui và khúc ca Đờn Ca Tài Tử mộc mạc bên ánh hoàng hôn."}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center text-xs font-sans text-primary tracking-[0.15em] uppercase font-bold">
                <span>{isEn ? "Southern Heritage" : "Văn Hóa Phương Nam"}</span>
                <span className="material-symbols-outlined text-sm ml-2">north_east</span>
              </div>
            </div>

            {/* Pillar 3: Education & Green Luxury */}
            <div className="bg-surface border border-outline-variant/40 p-8 flex flex-col justify-between hover:border-primary/60 transition-all duration-300 shadow-sm">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <span className="text-xs font-sans uppercase tracking-[0.16em] text-primary font-semibold">
                  {isEn ? "Pillar 03" : "Trụ Cột 03"}
                </span>
                <h3 className="font-serif-luxury text-2xl text-on-surface mt-1 mb-3">
                  {isEn ? "Green Tourism & Learning" : "Du Lịch Xanh & Giáo Dục"}
                </h3>
                <p className="text-xs md:text-sm text-on-surface/75 leading-relaxed">
                  {isEn
                    ? "Hosting educational nature excursions for youth, combined with sustainable luxury hospitality that minimizes carbon footprints on every guest step."
                    : "Tổ chức các hải trình học tập dã ngoại thực tế cho thế hệ trẻ, kết hợp dịch vụ nghỉ dưỡng cao cấp thân thiện với môi trường, hạn chế tối đa dấu chân carbon trên mỗi bước chân du khách."}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center text-xs font-sans text-primary tracking-[0.15em] uppercase font-bold">
                <span>{isEn ? "Zero Single-Use Plastic" : "Không Rác Thải Nhựa"}</span>
                <span className="material-symbols-outlined text-sm ml-2">north_east</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: HERITAGE TIMELINE (Hành Trình Kiến Tạo) */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-outline-variant/40 text-left">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary font-semibold">
              {isEn ? "JOURNEY THROUGH TIME" : "HÀNH TRÌNH QUA THỜI GIAN"}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-on-surface mt-2 uppercase tracking-[0.05em]">
              {isEn ? "Milestones of Sanctuary Creation" : "Dấu Ấn Kiến Tạo Khu Bảo Tồn"}
            </h2>
          </div>
          <p className="text-xs md:text-sm text-on-surface/75 max-w-md mt-4 md:mt-0 font-light">
            {isEn
              ? "From wild flooded wetlands to a premier luxury eco-sanctuary of the Mekong Delta."
              : "Từ vùng đất trũng nhiễm phèn ngập nước đến thiên đường sinh thái nghỉ dưỡng chuẩn mực của miền Tây Nam Bộ."}
          </p>
        </div>

        {/* Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative text-left">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-6 right-6 h-px bg-outline-variant/60 z-0" />

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col pt-4">
            <div className="w-12 h-12 bg-surface border-2 border-primary text-primary flex items-center justify-center font-serif-luxury font-bold text-lg mb-6 shadow-sm">
              01
            </div>
            <span className="text-xs font-sans text-primary font-bold uppercase tracking-[0.18em]">
              2003 – 2008
            </span>
            <h4 className="font-serif-luxury text-xl text-on-surface mt-2 mb-2">
              {isEn ? "Zoning & Conservation" : "Quy Hoạch & Khoanh Vùng Sinh Thái"}
            </h4>
            <p className="text-xs md:text-sm text-on-surface/75 leading-relaxed font-light">
              {isEn
                ? "Formally demarcating 135 hectares of pristine wetlands in Moc Hoa to prevent over-exploitation and preserve native species."
                : "Chính thức khoanh vùng 135ha rừng tràm ngập nước nguyên sinh của huyện Mộc Hóa nhằm ngăn chặn việc khai thác cạn kiệt và bảo tồn động thực vật bản địa."}
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col pt-4">
            <div className="w-12 h-12 bg-surface border-2 border-primary text-primary flex items-center justify-center font-serif-luxury font-bold text-lg mb-6 shadow-sm">
              02
            </div>
            <span className="text-xs font-sans text-primary font-bold uppercase tracking-[0.18em]">
              2009 – 2014
            </span>
            <h4 className="font-serif-luxury text-xl text-on-surface mt-2 mb-2">
              {isEn ? "5km Forest Walkway Feat" : "Kỳ Tích Con Đường Xuyên Rừng 5km"}
            </h4>
            <p className="text-xs md:text-sm text-on-surface/75 leading-relaxed font-light">
              {isEn
                ? "Thousands of cajeput piles and concrete slabs were transported by manual sampan to weave the iconic pathway deep into the core forest."
                : "Hàng ngàn cọc tràm và tấm đan bê tông được vận chuyển bằng xuồng thủ công để dệt nên con đường độc đạo uốn lượn sâu vào vùng lõi rừng tràm."}
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col pt-4">
            <div className="w-12 h-12 bg-surface border-2 border-primary text-primary flex items-center justify-center font-serif-luxury font-bold text-lg mb-6 shadow-sm">
              03
            </div>
            <span className="text-xs font-sans text-primary font-bold uppercase tracking-[0.18em]">
              2015 – 2018
            </span>
            <h4 className="font-serif-luxury text-xl text-on-surface mt-2 mb-2">
              {isEn ? "38m Tower & Crescent Lake" : "Tháp Quan Sát 38m & Hồ Bán Nguyệt"}
            </h4>
            <p className="text-xs md:text-sm text-on-surface/75 leading-relaxed font-light">
              {isEn
                ? "Inauguration of the iconic 38m observation tower and the 22ha Crescent Lake nurturing water lilies and purple aquatic blooms."
                : "Hoàn thiện tháp vọng cảnh biểu tượng vươn tầm mắt qua đại ngàn và quy hoạch hồ Bán Nguyệt rộng 22ha nuôi dưỡng thảm hoa súng, bèo tai chuột tím biếc."}
            </p>
          </div>

          {/* Step 4 (Highlighted in solid primary) */}
          <div className="relative z-10 flex flex-col pt-4 bg-surface-container-low p-4 border border-outline-variant/40 shadow-sm">
            <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-serif-luxury font-bold text-lg mb-6 shadow-sm">
              04
            </div>
            <span className="text-xs font-sans text-primary font-bold uppercase tracking-[0.18em]">
              {isEn ? "2019 – Present" : "2019 – Nay"}
            </span>
            <h4 className="font-serif-luxury text-xl text-on-surface mt-2 mb-2">
              {isEn ? "Luxury Eco-Sanctuary" : "Khu Nghỉ Dưỡng Sinh Thái Cao Cấp"}
            </h4>
            <p className="text-xs md:text-sm text-on-surface/75 leading-relaxed font-light">
              {isEn
                ? "Launching the 8-floor eco-hotel, heritage culinary center, and mindful slow-travel wellness retreats amidst untouched wilderness."
                : "Ra mắt khách sạn 8 tầng sinh thái, trung tâm ẩm thực dân gian khói lam chiều và chuỗi trải nghiệm du lịch chậm chữa lành thân tâm giữa tự nhiên."}
            </p>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: FULL BLEED ATMOSPHERIC MONOGRAPH (Quotes & Solitude) */}
      <section className="relative py-28 bg-cover bg-center text-white overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/about/history-boat.jpg`}
          alt="Traditional wooden sampan gliding through peaceful cajeput forest channel"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-5xl text-khaki-gold mb-4 inline-block">
            format_quote
          </span>
          <blockquote className="font-serif-luxury text-xl sm:text-2xl md:text-3xl italic font-normal leading-relaxed text-white drop-shadow">
            {isEn
              ? '"Coming to Tan Lap is not merely a sightseeing excursion, but a soulful homecoming to hear the wind in ancient cajeputs, inhale the fragrant marshland earth, and rediscover inner silence."'
              : '"Đến Làng Nổi Tân Lập không chỉ là một chuyến đi thưởng lãm cảnh sắc, mà là cuộc trở về lắng nghe tiếng tràm reo trong gió, ngửi mùi bùn non thơm nồng và tìm lại sự yên tĩnh trong chính tâm hồn."'}
          </blockquote>
          <div className="mt-8 flex flex-col items-center">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-khaki-gold font-semibold">
              {isEn
                ? "DEDICATED WORDS FROM THE GUARDIANS OF TAN LAP"
                : "LỜI TÂM HUYẾT TỪ NGƯỜI GIỮ RỪNG TÂN LẬP"}
            </span>
            <span className="text-xs text-white/70 mt-1 font-light">
              Long An, Miền Tây Nam Bộ
            </span>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: THE GUARDIANS & LOCAL ARTISANS (Đội Ngũ Con Người Bản Địa) */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto text-left">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary font-semibold">
            {isEn ? "DEVOTION OF LOCAL STEWARDS" : "TÌNH YÊU CỦA NGƯỜI BẢN XỨ"}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-on-surface mt-2 uppercase tracking-[0.05em]">
            {isEn ? "The Guardians Along Vam Co River" : "Những Con Người Bên Dòng Vàm Cỏ"}
          </h2>
          <p className="text-sm md:text-base text-on-surface/75 font-light mt-3">
            {isEn
              ? "The heart and soul of Tan Lap Floating Village reside in the warm hospitable smiles, resilient rowing hands, and lifelong attachment to the cajeput forest of local Moc Hoa natives."
              : "Linh hồn của Làng Nổi Tân Lập nằm ở chính những nụ cười đôn hậu, bàn tay dẻo dai chèo xuồng và tấm lòng gắn bó trọn đời với cánh rừng tràm của người dân địa phương Mộc Hóa."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Guardian 1 */}
          <div className="group bg-surface-container-low border border-outline-variant/40 p-4 shadow-sm hover:border-primary/50 transition-colors">
            <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-5 border border-outline-variant/40">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={`${import.meta.env.BASE_URL}images/about/person-tan.jpg`}
                alt="Bác Năm Chèo - Người Dẫn Luồng & Trợ Lực Rừng"
              />
            </div>
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-primary font-semibold block">
              {isEn ? "River Navigator & Forest Warden" : "Người Dẫn Luồng & Trợ Lực Rừng"}
            </span>
            <h4 className="font-serif-luxury text-2xl text-on-surface mt-1">Bác Năm Chèo</h4>
            <p className="text-xs md:text-sm text-on-surface/75 font-light mt-2 leading-relaxed">
              {isEn
                ? "Over 30 years intertwined with Vam Co Tay waters, knowing every ancient cajeput bend by heart and warmly sharing pioneering folklore with voyagers."
                : "Hơn 30 năm gắn bó với con nước Vàm Cỏ Tây, thuộc lòng từng ngách tràm cổ thụ và luôn kể những câu chuyện thuở khai hoang đầy hào sảng cho lữ khách."}
            </p>
          </div>

          {/* Guardian 2 */}
          <div className="group bg-surface-container-low border border-outline-variant/40 p-4 shadow-sm hover:border-primary/50 transition-colors">
            <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-5 border border-outline-variant/40">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={`${import.meta.env.BASE_URL}images/about/person-ba-huong.jpg`}
                alt="Kỹ Sư Mai Phương - Cán Bộ Nghiên Cứu Sinh Thái"
              />
            </div>
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-primary font-semibold block">
              {isEn ? "Ecological Botanical Researcher" : "Cán Bộ Nghiên Cứu Sinh Thái"}
            </span>
            <h4 className="font-serif-luxury text-2xl text-on-surface mt-1">Kỹ Sư Mai Phương</h4>
            <p className="text-xs md:text-sm text-on-surface/75 font-light mt-2 leading-relaxed">
              {isEn
                ? "Graduated in Tropical Forestry, choosing to dedicate her life to conserving native cajeput genetic stocks and restoring wild water lily communities."
                : "Tốt nghiệp chuyên ngành Lâm nghiệp nhiệt đới, chọn ở lại bảo tồn nguồn gen tràm cừ bản địa và phục hồi quần xã bèo hoa súng hoang dã."}
            </p>
          </div>

          {/* Guardian 3 */}
          <div className="group bg-surface-container-low border border-outline-variant/40 p-4 shadow-sm hover:border-primary/50 transition-colors">
            <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-5 border border-outline-variant/40">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={`${import.meta.env.BASE_URL}images/about/person-tu-loc.jpg`}
                alt="Bếp Trưởng Tư Đạt - Nghệ Nhân Ẩm Thực Đồng Bằng"
              />
            </div>
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-primary font-semibold block">
              {isEn ? "Mekong Delta Culinary Master" : "Nghệ Nhân Ẩm Thực Đồng Bằng"}
            </span>
            <h4 className="font-serif-luxury text-2xl text-on-surface mt-1">Bếp Trưởng Tư Đạt</h4>
            <p className="text-xs md:text-sm text-on-surface/75 font-light mt-2 leading-relaxed">
              {isEn
                ? "Preserving the authentic aroma of straw-roasted snakehead fish and wild sesbania hotpot through family recipes passed down over three generations."
                : "Gìn giữ trọn vẹn hương vị khói rơm cá lóc nướng trui, lẩu cá linh non bông điên điển mùa lũ theo công thức gia truyền lưu giữ qua 3 thế hệ."}
            </p>
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: ECO-PLEDGE & ZERO CARBON COMMITMENT (Cam Kết Xanh) */}
      <section className="py-16 bg-surface-container border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-2">
              <span className="material-symbols-outlined text-lg">eco</span>
              <span>{isEn ? "SUSTAINABLE GREEN PLEDGE" : "CAM KẾT XANH BỀN VỮNG"}</span>
            </div>
            <h3 className="font-serif-luxury text-2xl md:text-3xl text-on-surface uppercase tracking-[0.04em]">
              {isEn
                ? "Mission: 'Leave Nothing Behind Except Footprints'"
                : "Sứ Mệnh 'Không Để Lại Gì Ngoài Những Dấu Chân'"}
            </h3>
            <p className="text-xs md:text-sm text-on-surface/75 mt-2 leading-relaxed font-light">
              {isEn
                ? "We steadfastly eliminate 100% single-use plastic across the entire sanctuary, deploy silent electric boats to protect wildlife serenity, and commit 5% of annual revenue to native cajeput reforestation in Moc Hoa."
                : "Chúng tôi kiên định loại bỏ 100% đồ nhựa dùng một lần trong toàn bộ khu nghỉ dưỡng, sử dụng thuyền máy điện giảm thiểu tiếng ồn làm kinh động chim muông, và trích 5% doanh thu hàng năm cho quỹ trồng bù rừng tràm tự nhiên tại Mộc Hóa."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="px-6 py-4 bg-surface border border-outline-variant/40 flex items-center gap-3 shadow-sm">
              <span className="material-symbols-outlined text-primary text-2xl">water_drop</span>
              <div className="text-left">
                <span className="block text-xs font-sans uppercase text-primary font-bold">
                  {isEn ? "100% Water Treatment" : "100% Xử Lý Nước"}
                </span>
                <span className="text-xs text-on-surface/70">
                  {isEn ? "Natural biological system" : "Hệ thống vi sinh tự nhiên"}
                </span>
              </div>
            </div>

            <div className="px-6 py-4 bg-surface border border-outline-variant/40 flex items-center gap-3 shadow-sm">
              <span className="material-symbols-outlined text-primary text-2xl">solar_power</span>
              <div className="text-left">
                <span className="block text-xs font-sans uppercase text-primary font-bold">
                  {isEn ? "Clean Energy" : "Năng Lượng Sạch"}
                </span>
                <span className="text-xs text-on-surface/70">
                  {isEn ? "Rooftop solar network" : "Điện mặt trời mái nhà"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: NEWSLETTER STRIP (Ana Mandara Solid Moss Green Signature) */}
      <section className="bg-primary py-16 px-6 md:px-12 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif-luxury text-2xl md:text-3xl uppercase tracking-[0.08em] mb-8">
            {isEn
              ? "STAY INFORMED ON OUR EXCLUSIVE HERITAGE OFFERS"
              : "ĐỪNG BỎ LỠ THÔNG TIN VỀ ƯU ĐÃI MỚI NHẤT"}
          </h3>

          {newsletterSubmitted ? (
            <div className="p-6 bg-white/10 border border-white/30 text-white max-w-xl mx-auto">
              <p className="font-medium text-sm">
                {isEn
                  ? "✓ Thank you for subscribing to Tan Lap Eco Sanctuary updates!"
                  : "✓ Cảm ơn quý khách đã đăng ký nhận bản tin di sản Làng Nổi Tân Lập!"}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-xl mx-auto flex flex-col sm:flex-row items-stretch gap-0 mb-6"
            >
              <input
                required
                type="email"
                placeholder={isEn ? "ENTER YOUR EMAIL" : "EMAIL CỦA QUÝ KHÁCH"}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-white text-charcoal-vintage px-5 py-3.5 border-0 focus:ring-0 outline-none text-xs font-sans tracking-[0.12em] placeholder:text-gray-400 uppercase rounded-none"
              />
              <button
                type="submit"
                className="bg-khaki-gold text-charcoal-vintage px-8 py-3.5 font-bold text-xs uppercase tracking-[0.18em] hover:bg-white transition-colors duration-200 rounded-none"
              >
                {isEn ? "SUBMIT" : "GỬI"}
              </button>
            </form>
          )}

          {/* Square Indochine Checkbox */}
          <div className="flex items-center justify-center gap-2.5 text-xs text-white/90">
            <input
              id="terms"
              type="checkbox"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
              className="rounded-none border-white/50 text-khaki-gold focus:ring-0 bg-transparent w-4 h-4 cursor-pointer"
            />
            <label htmlFor="terms" className="cursor-pointer tracking-wider">
              {isEn ? (
                <>
                  AGREE TO{" "}
                  <a href="#" className="underline hover:text-khaki-gold transition-colors">
                    SANCTUARY ENVIRONMENTAL CODES
                  </a>
                  . *
                </>
              ) : (
                <>
                  CHẤP NHẬN{" "}
                  <a href="#" className="underline hover:text-khaki-gold transition-colors">
                    QUY ĐỊNH KHU NGHỈ DƯỠNG
                  </a>
                  . *
                </>
              )}
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}
