import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GuidePage({ currentLang = "vi", onOpenBooking }) {
  const [emailInput, setEmailInput] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title =
      currentLang === "vi"
        ? "Cẩm Nang Du Lịch & Kinh Nghiệm - Phong Cách Di Sản Làng Nổi Tân Lập"
        : "Travel Guide & Field Notes | Tan Lap Floating Village Eco Sanctuary";
  }, [currentLang]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-surface text-on-surface font-body-md selection:bg-[#555555] selection:text-white">
      {/* SECTION 1: HERO BANNER (No video button, sharp photography, luxury editorial) */}
      <section className="relative w-full h-[620px] md:h-[720px] flex items-center justify-center overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZOdhoDn6PFk1gf0vats942C_UUWbNmsluEInjXJOW8DQhv3S6f5Yxjz-rryZxcdSGmKbBgc0p5IUfaZCRwvTd5peSOC2T7ZkYUMvNGl6XKXHePa_-QXAexi2kuF3_DxJ0c7CPj1gDxNRC5lzFrCGOnNJSirBroJXFXKAM1jB_J2vs8ag_2eZEb2p7b-KByuQIwhSeFyDqSyse1nhcJWJmOF23_I6KvK471YtJu5FVWPJiQhkEgEaFXg"
          alt="Tranquil raised walkway curving gracefully deep through ancient flooded melaleuca cajuput forest in Tan Lap"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=85";
          }}
        />
        {/* Editorial Tint & Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

        {/* Hero Content Anchor */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.22em] text-khaki-gold mb-4 inline-block uppercase drop-shadow">
            {currentLang === "vi"
              ? "Khu Du Lịch Sinh Thái Đặc Dụng Đồng Tháp Mười"
              : "Dong Thap Muoi Eco-Reserve & Sanctuary"}
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl leading-tight mb-6 uppercase tracking-[0.08em] md:tracking-[0.12em] font-normal text-white drop-shadow-md">
            {currentLang === "vi"
              ? "Cẩm Nang Du Ngoạn Vùng Nước Nổi"
              : "Field Guide to the Wetlands"}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow">
            {currentLang === "vi"
              ? "Những kinh nghiệm quý báu cho chuyến hành trình trọn vẹn giữa đại ngàn tràm nguyên bản, đắm mình trong bản giao hưởng an yên của đất trời Tây Nam Bộ."
              : "Essential notes and seasonal wisdom for a serene retreat amidst pristine cajuput wetlands and authentic Mekong hospitality."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#mua-nao-dep"
              className="border border-white/80 bg-black/30 backdrop-blur-sm text-white hover:bg-white hover:text-charcoal-vintage text-xs font-semibold px-8 py-3.5 tracking-[0.18em] uppercase transition-all duration-300"
            >
              {currentLang === "vi" ? "Xem Mùa Khám Phá" : "Explore Seasons"}
            </a>
            <a
              href="#lich-trinh"
              className="bg-primary hover:bg-[#325217] text-white text-xs font-semibold px-8 py-3.5 tracking-[0.18em] uppercase transition-colors shadow-sm"
            >
              {currentLang === "vi" ? "Gợi Ý Lịch Trình" : "Sample Itineraries"}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRO EDITORIAL SPLIT (Classical Indochine Monograph) */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                {currentLang === "vi" ? "Di Sản Miền Sông Nước" : "Wetland Heritage"}
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl md:text-4xl text-on-surface leading-tight font-normal">
              {currentLang === "vi" ? (
                <>
                  Hành Trình Tĩnh Lặng <br className="hidden sm:inline" />
                  <span className="italic text-primary">Giữa Miền Tràm Cổ Thụ</span>
                </>
              ) : (
                <>
                  A Mindful Journey <br className="hidden sm:inline" />
                  <span className="italic text-primary">Through Ancient Cajuput Groves</span>
                </>
              )}
            </h2>
            <p className="text-on-surface/75 text-sm md:text-base leading-relaxed text-justify">
              {currentLang === "vi"
                ? "Chỉ cách Sài Gòn hơn hai giờ di chuyển theo ngả quốc lộ N2, Làng Nổi Tân Lập hiện lên như một ốc đảo biệt lập thanh bình. Với hơn 135ha rừng tràm lõi cổ thụ và 500ha vùng đệm ngập nước theo mùa, nơi đây gìn giữ nguyên vẹn hệ sinh cảnh hoang sơ của cánh đồng tràm ngập nước Đồng Tháp Mười thuở sơ khai."
                : "Located merely two hours away from Saigon via route N2, Tan Lap Floating Village emerges as an idyllic secluded oasis. Encompassing 135 hectares of ancient core cajuput forest and 500 hectares of seasonal wetlands, it preserves the authentic landscape of the primal Mekong Delta."}
            </p>
            <p className="text-on-surface/75 text-sm md:text-base leading-relaxed text-justify">
              {currentLang === "vi"
                ? "Trang cẩm nang này được biên soạn kỹ lưỡng bởi các chuyên viên bảo tồn bản địa, chia sẻ đầy đủ kinh nghiệm di chuyển tự túc, thời điểm chiêm bái mùa nước son và phong vị ẩm thực mộc mạc mà tinh tế nhất."
                : "Curated by local sanctuary stewards, this field guide delivers comprehensive guidance on self-guided transit, optimal high-water seasons, and delicate Southern culinary heritage."}
            </p>
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-outline-variant/40">
              <div>
                <div className="font-serif-luxury text-3xl text-primary font-medium">135+</div>
                <div className="text-[11px] text-on-surface/60 uppercase tracking-[0.15em] mt-1 font-medium">
                  {currentLang === "vi" ? "Hecta Rừng Tràm" : "Hectares of Forest"}
                </div>
              </div>
              <div>
                <div className="font-serif-luxury text-3xl text-primary font-medium">5.0 km</div>
                <div className="text-[11px] text-on-surface/60 uppercase tracking-[0.15em] mt-1 font-medium">
                  {currentLang === "vi" ? "Đường Mòn Xuyên Lõi" : "Core Boardwalk"}
                </div>
              </div>
              <div>
                <div className="font-serif-luxury text-3xl text-primary font-medium">38 m</div>
                <div className="text-[11px] text-on-surface/60 uppercase tracking-[0.15em] mt-1 font-medium">
                  {currentLang === "vi" ? "Tháp Vọng Toàn Cảnh" : "Observation Tower"}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 relative">
            <div className="relative p-3 bg-surface-container-low border border-outline-variant/40 shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEe26X4ydkheA_xXN1CpEytsLFPyBTUVPopLG2VOJmZsDLS0Y4g7RB12Fpc2No5VZ7ivOJMCOfcg98L6i8zuFLrzr3USkJUvrGILV2k7sbI0RNvRHB5iTUHWjRzcvAfH-rcNYKMathk3SYx6WUq_9zhjJoI2fhGQdjD6Dh33nIXAaUvLGwiHvBV81bEzjZ0P31IR3MWh6PwGNQEcBsRftRV7Jwiv159sIaaG8-zBXW1gh5R85TxpbCcg"
                alt="Vintage wooden rowboat gently gliding through carpet of floating duckweeds in Tan Lap"
                className="w-full h-[460px] object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 bg-surface/95 p-5 border border-outline-variant/30 backdrop-blur-sm shadow-md">
                <span className="text-[10px] font-semibold text-primary tracking-[0.15em] uppercase block mb-1">
                  {currentLang === "vi" ? "Tọa độ sinh thái" : "Sanctuary Coordinates"}
                </span>
                <p className="font-serif-luxury text-base md:text-lg text-on-surface">
                  QL62, Huyện Mộc Hóa, Tỉnh Long An
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MÙA NÀO ĐẸP NHẤT? (Best Time to Visit - Editorial Split Cards) */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/30" id="mua-nao-dep">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase block mb-2">
              {currentLang === "vi" ? "Nhịp Điệu Đất Trời" : "Seasonal Cycles"}
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl text-on-surface font-normal">
              {currentLang === "vi" ? "Nên Đi Mùa Nào Trong Năm?" : "Best Time to Visit"}
            </h2>
            <p className="text-on-surface/70 text-sm md:text-base mt-3">
              {currentLang === "vi"
                ? "Khác biệt với nhịp sống thị thành, Tân Lập chuyển mình sâu sắc qua hai chu kỳ thủy văn rõ rệt. Mỗi thời khắc đều sở hữu một nét quyến rũ độc bản."
                : "Unlike urban landscapes, Tan Lap breathes through two distinct hydrological cycles, each imparting its own poetry and beauty."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Mùa Nước Nổi */}
            <div className="bg-surface border border-outline-variant/40 flex flex-col justify-between group hover:border-primary transition-all duration-300 shadow-sm">
              <div>
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJjsQQF-C45NTHEZc_bbo5tpz5G51kVOgoAnYpCzryvXfrtaxx-i8e2BzQpeqqd03uu4JMZCyJayTPI4Cqo70HoyNHM2JXZu1Mra3lexUSfprJboqzVwaAV_QqaxKDAlzFc5fjgWj9Th_fo6t6H_EKlraJfzd0tsGtC0yrOtXBLYVOzkw3BvAqSe-xraslXwvGvBbRIyqFMhG96n_8calcVK7e8B7AQZeNdEeSvEa5gS-ySBYg0D9s-Q"
                    alt="Scenic flooded water forest in Mekong Delta during high water season"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[11px] font-semibold px-3 py-1.5 tracking-[0.18em] uppercase">
                    {currentLang === "vi" ? "Mùa Đẹp Nhất" : "Peak Season"}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif-luxury text-sm text-primary tracking-[0.15em] uppercase font-semibold">
                      {currentLang === "vi" ? "Tháng 8 — Tháng 11 (Âm Lịch)" : "August — November (Lunar Calendar)"}
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">water</span>
                  </div>
                  <h3 className="font-serif-luxury text-2xl text-on-surface mb-4">
                    {currentLang === "vi" ? "Mùa Nước Nổi & Ẩm Thực Phù Sa" : "Floating High Water & Alluvial Cuisine"}
                  </h3>
                  <p className="text-on-surface/75 text-sm leading-relaxed mb-6">
                    {currentLang === "vi"
                      ? "Thời điểm sông Tiền đưa nguồn nước son dạt dào về tưới tắm cả cánh rừng tràm. Nước dâng ngập chân rễ cổ thụ, thảm bèo cám xanh non mượt mà bao phủ từng luồng lạch. Đây cũng là mùa bầy chim thiên di về sinh sản náo nhiệt và thưởng thức trọn vẹn lẩu cá linh bông điên điển non đầu mùa."
                      : "The Mekong waters crest gently, submerging ancient buttress roots under emerald duckweed mats. Flocks of migratory birds return to nest, and wild sesbania flowers grace authentic earthen hotpots."}
                  </p>
                  <ul className="space-y-3 border-t border-outline-variant/30 pt-4 text-xs md:text-sm text-on-surface/70">
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                      <span>
                        {currentLang === "vi"
                          ? "Xuồng ba lá len sâu vào vùng đầm sen và súng nở rộ"
                          : "Wooden sampans glide into blooming pink water lily reserves"}
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                      <span>
                        {currentLang === "vi"
                          ? "Tận hưởng đặc sản cá linh béo ngậy và bông súng ma thanh mát"
                          : "Feast on tender young linh fish and crisp wild water lily stalks"}
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                      <span>
                        {currentLang === "vi"
                          ? "Khí hậu mát mẻ, hơi nước trong lành xoa dịu tâm trí"
                          : "Cool gentle breezes and high air humidity soothing the mind"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-8 pb-8 pt-2">
                <span className="text-xs text-primary font-semibold tracking-[0.15em] uppercase inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  {currentLang === "vi"
                    ? "Lý tưởng cho: Nhiếp ảnh, gia đình, tĩnh dưỡng"
                    : "Ideal for: Photography, families, wellness"}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Card 2: Mùa Khô & Nắng Ấm */}
            <div className="bg-surface border border-outline-variant/40 flex flex-col justify-between group hover:border-primary transition-all duration-300 shadow-sm">
              <div>
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxrjZwreBZs-7MbtCYi1NW_TDXcwwuK9L6aBN-UyARZ6VEwzediRt-fD3rQY1uwleTg1IchP1QJy8gHLoDFC-5DCyKvXgsqd_GFqEzb1QDYF7EaomKE2zt9VvB6wpSPZIIqn-ycNeA6b1RhBrNtuGdXEheSVsNE9ZN0sLc8gue_k7BwIxGjPj594H6f_HDOBnv8mpRskJQ3vazM2_C0VFFHXeop9LjYRM4yylodcQZtnhHlUDJ0K3yJg"
                    alt="Sunny dry season path through peaceful Vietnamese cajuput forest"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-olive-moss text-white text-[11px] font-semibold px-3 py-1.5 tracking-[0.18em] uppercase">
                    {currentLang === "vi" ? "Mùa Cắm Trại & Đi Bộ" : "Camping & Trekking"}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif-luxury text-sm text-primary tracking-[0.15em] uppercase font-semibold">
                      {currentLang === "vi" ? "Tháng 12 — Tháng 7 (Âm Lịch)" : "December — July (Lunar Calendar)"}
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">sunny</span>
                  </div>
                  <h3 className="font-serif-luxury text-2xl text-on-surface mb-4">
                    {currentLang === "vi" ? "Mùa Nắng Ấm & Cung Đường Rợp Bóng" : "Sunny Canopy & Dry Trails"}
                  </h3>
                  <p className="text-on-surface/75 text-sm leading-relaxed mb-6">
                    {currentLang === "vi"
                      ? "Nước rút dần nhường chỗ cho nền đất ẩm xốp thơm nồng hương tinh dầu tràm tự nhiên. Bầu trời xanh biếc với nắng vàng rực rỡ, toàn bộ 5km cầu bộ hành xuyên rừng khô ráo tuyệt đối, là điều kiện hoàn hảo để đạp xe, tản bộ ngắm chim và tổ chức lửa trại ngủ đêm ngắm ngàn sao."
                      : "Waters recede, uncovering rich earthen soil scented with therapeutic cajuput essential oils. The 5km forest trail remains crisp and dry, inviting long nature walks, panoramic tower climbs, and glamping beneath starry skies."}
                  </p>
                  <ul className="space-y-3 border-t border-outline-variant/30 pt-4 text-xs md:text-sm text-on-surface/70">
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                      <span>
                        {currentLang === "vi"
                          ? "Tản bộ an toàn trên con đường xi măng ngoạn mục giữa rừng"
                          : "Leisurely trekking on the picturesque 5km dry boardwalk"}
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                      <span>
                        {currentLang === "vi"
                          ? "Trèo lên Tháp canh 38m chiêm ngưỡng thảm xanh vô tận"
                          : "Ascend the 38m observation tower for boundless 360-degree vistas"}
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                      <span>
                        {currentLang === "vi"
                          ? "Cắm trại glamping bên hồ Bán Nguyệt dưới trời sao trong vắt"
                          : "Lakeside glamping under clear constellations at Crescent Lake"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-8 pb-8 pt-2">
                <span className="text-xs text-primary font-semibold tracking-[0.15em] uppercase inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  {currentLang === "vi"
                    ? "Lý tưởng cho: Tản bộ trekking, Team Building, Cắm trại"
                    : "Ideal for: Trekking, Team Building, Glamping"}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TOP TRẢI NGHIỆM NHẤT ĐỊNH PHẢI THỬ (Must-Try Highlights) */}
      <section className="py-24 bg-surface" id="trai-nghiem">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-outline-variant/40 pb-8">
            <div>
              <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase block mb-2">
                {currentLang === "vi" ? "Trải Nghiệm Độc Bản" : "Signature Highlights"}
              </span>
              <h2 className="font-serif-luxury text-3xl md:text-4xl text-on-surface font-normal">
                {currentLang === "vi" ? "Bốn Khắc Ghi Không Thể Bỏ Lỡ" : "Four Unmissable Encounters"}
              </h2>
            </div>
            <p className="text-on-surface/70 text-sm md:text-base max-w-md mt-4 md:mt-0">
              {currentLang === "vi"
                ? "Mỗi góc chạm tại Tân Lập là một câu chuyện sinh thái thuần khiết, đánh thức trọn vẹn ngũ giác của lữ khách."
                : "Every encounter awakens the five senses with pure, unhurried Mekong ecology."}
            </p>
          </div>

          {/* 4 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 01 */}
            <div className="bg-surface border border-outline-variant/30 group p-6 flex flex-col justify-between hover:border-primary transition-colors shadow-sm">
              <div>
                <div className="relative h-64 overflow-hidden mb-6">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjyq4ydUOpxRCTkTJACfw8Xww26u5pOmJDuYV_oY9PMcEROAFwX9xoXJCsNX8jGcZiQ4ImIZU8TbtYUmHVLng_vLho_PG6VTIfJtZV4E6EfTHxhWWu_CYMGIZBue_8StGgfj0_tEZ7wG5UpQdV4H5zM0quoWlpsjznsxTkrNTXRTQ9mboiFeURDifGKnRf6PqummxFz-Y9_qLczFGhiCrn2kzXjdAzEsL7NMdSw2NVMYgfyjbCIJYgSA"
                    alt="Endless winding narrow stone path cutting through dense cajuput wetland"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 text-primary font-serif-luxury text-lg px-3 py-1 font-semibold">
                    01
                  </div>
                </div>
                <h3 className="font-serif-luxury text-xl text-on-surface mb-3 leading-snug">
                  {currentLang === "vi" ? "Con Đường Xuyên Rừng 5km" : "5km Primal Forest Walkway"}
                </h3>
                <p className="text-on-surface/75 text-xs md:text-sm leading-relaxed">
                  {currentLang === "vi"
                    ? "Cung đường xi măng uốn lượn kỳ vĩ sâu vào lòng rừng tràm bí ẩn, nơi tán cây đan vòm râm mát và bạn có thể chậm rãi lắng nghe tiếng lá xào xạc trong gió mai."
                    : "Winding concrete walkway venturing deep into ancient cajuput canopy, shaded by arching branches and whispering swamp breezes."}
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
                <span className="text-[11px] text-on-surface/60 uppercase tracking-[0.1em] font-medium">
                  {currentLang === "vi" ? "Thời lượng: 1 - 2 Giờ" : "Duration: 1 - 2 Hours"}
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">directions_walk</span>
              </div>
            </div>

            {/* Item 02 */}
            <div className="bg-surface border border-outline-variant/30 group p-6 flex flex-col justify-between hover:border-primary transition-colors shadow-sm">
              <div>
                <div className="relative h-64 overflow-hidden mb-6">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSpCW0uEnGcHgncCTbUh3RRYouHXW-47KcmKJ5SWQoX6kKn1kgzCmm8Uptt8hlaqk0ol_msCRwHNUh8vEngu2sd1_BA0XlTtMIB2KEPHVlX9tIO08Kv67NQJvF0YIF_eldweeKmnZaLxHgC91fT88KBw_gFE-i0fty4niNRiQvHEKinUYO1dux8TiMsBQLF9iBM9KZ3Mb83_VXtvwHxM1NPUE_wC8o9kIjVCFJHeN9auhYeYfIiPB0LA"
                    alt="Wooden sampan boat through green waterway"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 text-primary font-serif-luxury text-lg px-3 py-1 font-semibold">
                    02
                  </div>
                </div>
                <h3 className="font-serif-luxury text-xl text-on-surface mb-3 leading-snug">
                  {currentLang === "vi" ? "Chèo Xuồng Ba Lá Cổ Truyền" : "Handcrafted Sampan Cruise"}
                </h3>
                <p className="text-on-surface/75 text-xs md:text-sm leading-relaxed">
                  {currentLang === "vi"
                    ? "Thả mình lướt nhẹ trên mặt nước rẽ sóng bèo tấm biếc. Những người chèo đò bản xứ trong áo bà ba sẽ dẫn bạn luồn lách qua các lạch tràm hoang sơ nhất."
                    : "Gently drifting over emerald duckweeds steered by local rowers in traditional Ba Ba silk attire into quiet pristine channels."}
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
                <span className="text-[11px] text-on-surface/60 uppercase tracking-[0.1em] font-medium">
                  {currentLang === "vi" ? "Thời lượng: 45 Phút" : "Duration: 45 Mins"}
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">rowing</span>
              </div>
            </div>

            {/* Item 03 */}
            <div className="bg-surface border border-outline-variant/30 group p-6 flex flex-col justify-between hover:border-primary transition-colors shadow-sm">
              <div>
                <div className="relative h-64 overflow-hidden mb-6">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTV-R_fpykCamUAz76lVuHzeFLmddGcfCmYZ0hisrAwOKP7dTLwErRSDypTRe14uMu2QzKhPOrDr-WKyUo6bbcLvfZ8t4-hJ_5PNpwLjY8MWJ6p26v-KFvdHCNpBV__p-I1PEmm5jXWa86h41K9QbuDpBtnqJIYebJs7AFza1Phf301IIBUDRSCK7EgL6j3x6bHk4wW3TA1xheRDBSSar9D7mk3w52dp5BiDG5q9TFwaDFGqla-DeAsw"
                    alt="Tall observation lookout tower rising high above green treetops"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 text-primary font-serif-luxury text-lg px-3 py-1 font-semibold">
                    03
                  </div>
                </div>
                <h3 className="font-serif-luxury text-xl text-on-surface mb-3 leading-snug">
                  {currentLang === "vi" ? "Tháp Quan Sát Kỳ Vĩ 38m" : "Panoramic 38m Tower"}
                </h3>
                <p className="text-on-surface/75 text-xs md:text-sm leading-relaxed">
                  {currentLang === "vi"
                    ? "Đỉnh cao nhất của toàn vùng Đồng Tháp Mười. Đứng trên đỉnh tháp, phóng tầm mắt 360 độ ngắm toàn bộ đại ngàn tràm bạt ngàn ôm trọn mây trời và chim trời lượn cánh."
                    : "The highest vantage point across Dong Thap Muoi. Enjoy 360-degree views over endless forests, gliding birds, and rolling clouds."}
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
                <span className="text-[11px] text-on-surface/60 uppercase tracking-[0.1em] font-medium">
                  {currentLang === "vi" ? "Độ cao: 38 Mét" : "Elevation: 38m"}
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">visibility</span>
              </div>
            </div>

            {/* Item 04 */}
            <div className="bg-surface border border-outline-variant/30 group p-6 flex flex-col justify-between hover:border-primary transition-colors shadow-sm">
              <div>
                <div className="relative h-64 overflow-hidden mb-6">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy5pXNhQWpBmQtge_zg2_wc-BvH723ZdC_e7FvLUWyHXDuG64drXW2FXmHJwXUZCY0PzwmKmkypnG4N3MSkd5fRwiv4qWvsDb15EBF5sApmwOXkac-sVI2HVJ2aTwmEhuAqaA4C1zxFpIBFl6atWjMPCCqDGUVi8meDE5T0htytc0gldSIY6-I1RM1djbWrpmRuNKBaeDN2HUP9rTEvk_Prkqj2f45IqzvnLf0uG7xx1Buoom_x03Y-A"
                    alt="Traditional grilled snakehead fish wrapped in young fragrant lotus leaves"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 text-primary font-serif-luxury text-lg px-3 py-1 font-semibold">
                    04
                  </div>
                </div>
                <h3 className="font-serif-luxury text-xl text-on-surface mb-3 leading-snug">
                  {currentLang === "vi" ? "Cá Lóc Nướng Trui Lá Sen" : "Straw-Grilled Snakehead Fish"}
                </h3>
                <p className="text-on-surface/75 text-xs md:text-sm leading-relaxed">
                  {currentLang === "vi"
                    ? "Món quà ẩm thực dân dã mà trác tuyệt: cá lóc đồng nướng rơm thơm lừng, thịt ngọt bùi cuộn kèm đọt sen non thanh chát và chấm nước mắm me sánh chua ngọt."
                    : "Wild Mekong fish roasted in aromatic rice straw, wrapped in tender young lotus leaves and dipped into tangy tamarind fish sauce."}
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center justify-between">
                <span className="text-[11px] text-on-surface/60 uppercase tracking-[0.1em] font-medium">
                  {currentLang === "vi" ? "Ẩm thực: Nhà Hàng Tràm" : "Dining: Tram Restaurant"}
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">restaurant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GỢI Ý LỊCH TRÌNH KHÁM PHÁ (Itinerary Timetable) */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/30" id="lich-trinh">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase block mb-2">
              {currentLang === "vi" ? "Chương Trình Mẫu" : "Sample Curations"}
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl text-on-surface font-normal">
              {currentLang === "vi" ? "Gợi Ý Lịch Trình Khám Phá Hoàn Hảo" : "Curated Discovery Itineraries"}
            </h2>
            <p className="text-on-surface/70 text-sm md:text-base mt-3">
              {currentLang === "vi"
                ? "Tối ưu hóa hành trình của bạn với các mốc thời gian thư thả, tránh nắng gắt và tận hưởng trọn vẹn những khoảnh khắc đẹp nhất trong ngày."
                : "Maximize your wetland immersion with balanced timelines, serene morning light, and authentic local flavours."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Column A: Tour 1 Ngày */}
            <div className="bg-surface border border-outline-variant/40 p-8 md:p-10 relative shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-outline-variant/30 mb-8">
                <div>
                  <span className="text-[11px] font-semibold text-primary tracking-[0.18em] uppercase block mb-1">
                    {currentLang === "vi" ? "Phương Án Đi Về Trong Ngày" : "Day Trip Odyssey"}
                  </span>
                  <h3 className="font-serif-luxury text-xl md:text-2xl text-on-surface">
                    {currentLang === "vi" ? "Lịch Trình 1 Ngày: Chạm Sâu Cội Nguồn" : "1-Day: Primal Immersion"}
                  </h3>
                </div>
                <span className="font-serif-luxury text-2xl text-tertiary font-medium">01 NGÀY</span>
              </div>

              {/* Timeline Elements */}
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-outline-variant/50">
                <div className="relative pl-10">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-surface" />
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.15em] block mb-1">
                    07:00 — 09:00
                  </span>
                  <h4 className="font-serif-luxury text-lg text-on-surface mb-1">
                    {currentLang === "vi" ? "Xuất phát từ TP. Hồ Chí Minh" : "Departure from Ho Chi Minh City"}
                  </h4>
                  <p className="text-on-surface/70 text-xs md:text-sm leading-relaxed">
                    {currentLang === "vi"
                      ? "Di chuyển theo đường cao tốc TP.HCM - Trung Lương hoặc QL1A rẽ vào QL62 hướng Mộc Hóa. Thong thả ăn sáng bánh canh cá lóc ven đường."
                      : "Cruise via expressway or Route 1A onto Route 62. Stop for regional breakfast noodles along the scenic road."}
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-surface" />
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.15em] block mb-1">
                    09:15 — 11:30
                  </span>
                  <h4 className="font-serif-luxury text-lg text-on-surface mb-1">
                    {currentLang === "vi" ? "Đường Mòn 5km & Tháp Vọng Cảnh" : "5km Boardwalk & Observation Tower"}
                  </h4>
                  <p className="text-on-surface/70 text-xs md:text-sm leading-relaxed">
                    {currentLang === "vi"
                      ? "Nhận vé, lên xuồng máy trung chuyển qua kênh dẫn vào rừng. Tản bộ trên cung đường xi măng rợp bóng mát, chụp ảnh check-in và trèo lên tháp 38m hít căng lồng ngực không khí đại ngàn."
                      : "Shuttle boat into core forest. Stroll along the shaded 5km path and ascend the 38m tower for panoramic breaths of fresh air."}
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-surface" />
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.15em] block mb-1">
                    11:45 — 13:30
                  </span>
                  <h4 className="font-serif-luxury text-lg text-on-surface mb-1">
                    {currentLang === "vi" ? "Thưởng Trọn Hương Vị Tây Nam Bộ" : "Mekong Delta Culinary Feast"}
                  </h4>
                  <p className="text-on-surface/70 text-xs md:text-sm leading-relaxed">
                    {currentLang === "vi"
                      ? "Dùng bữa trưa tại Nhà hàng bên hồ: cá lóc nướng trui cuốn lá sen, canh chua lươn, gà thả vườn nướng muối ớt và trà hoa sen ướp lạnh."
                      : "Lunch at lakeside restaurant: roasted fish in lotus wraps, sour eel soup, and iced lotus blossom tea."}
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-surface" />
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.15em] block mb-1">
                    14:00 — 15:30
                  </span>
                  <h4 className="font-serif-luxury text-lg text-on-surface mb-1">
                    {currentLang === "vi" ? "Ngồi Xuồng Ba Lá & Mua Quà Đặc Sản" : "Sampan Drifting & Honey Souvenirs"}
                  </h4>
                  <p className="text-on-surface/70 text-xs md:text-sm leading-relaxed">
                    {currentLang === "vi"
                      ? "Trải nghiệm ngồi xuồng chèo tay lướt trên thảm bèo xanh biếc. Ghé quầy mua mật ong hoa tràm nguyên chất và tinh dầu tràm tự nhiên trước khi khởi hành về lại thành phố."
                      : "Hand-paddled boat over green duckweeds. Shop for 100% wild cajeput blossom honey before returning to Saigon."}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="text-xs md:text-sm text-on-surface/70">
                  {currentLang === "vi" ? (
                    <>
                      Chi phí tham khảo: <strong className="text-on-surface">350.000đ — 550.000đ / khách</strong>
                    </>
                  ) : (
                    <>
                      Estimated budget: <strong className="text-on-surface">350,000 — 550,000 VND / guest</strong>
                    </>
                  )}
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">today</span>
              </div>
            </div>

            {/* Column B: Tour 2N1Đ */}
            <div className="bg-surface border border-outline-variant/40 p-8 md:p-10 relative shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-outline-variant/30 mb-8">
                <div>
                  <span className="text-[11px] font-semibold text-primary tracking-[0.18em] uppercase block mb-1">
                    {currentLang === "vi" ? "Trải Nghiệm Nghỉ Dưỡng Trọn Vẹn" : "Immersive Retreat"}
                  </span>
                  <h3 className="font-serif-luxury text-xl md:text-2xl text-on-surface">
                    {currentLang === "vi" ? "Lịch Trình 2N1Đ: Đêm Đại Ngàn & Mộc Mạc" : "2D1N: Ancient Night & Awakening"}
                  </h3>
                </div>
                <span className="font-serif-luxury text-2xl text-primary font-medium">2N1Đ</span>
              </div>

              {/* Timeline Elements */}
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-outline-variant/50">
                <div className="relative pl-10">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-secondary border-2 border-surface" />
                  <span className="text-[11px] font-semibold text-secondary uppercase tracking-[0.15em] block mb-1">
                    {currentLang === "vi" ? "NGÀY 1 • CHIỀU HOÀNG HÔN" : "DAY 1 • GOLDEN TWILIGHT"}
                  </span>
                  <h4 className="font-serif-luxury text-lg text-on-surface mb-1">
                    {currentLang === "vi" ? "Nhận Phòng Khách Sạn / Villa Cổ Hoặc Lều" : "Check-in Heritage Villa or Glamping"}
                  </h4>
                  <p className="text-on-surface/70 text-xs md:text-sm leading-relaxed">
                    {currentLang === "vi"
                      ? "Đến Tân Lập đầu giờ chiều, nhận phòng nghỉ dưỡng hoặc dựng lều Glamping ven hồ Bán Nguyệt. Thong dong chèo kayak hoặc đạp xe trên đường tràm vắng bóng khách tour ngày."
                      : "Check into heritage villa or lakeside glamping tent. Enjoy quiet bicycle rides or kayaking as day visitors depart."}
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-secondary border-2 border-surface" />
                  <span className="text-[11px] font-semibold text-secondary uppercase tracking-[0.15em] block mb-1">
                    {currentLang === "vi" ? "NGÀY 1 • 18:30 TỐI" : "DAY 1 • 18:30 EVENING"}
                  </span>
                  <h4 className="font-serif-luxury text-lg text-on-surface mb-1">
                    {currentLang === "vi" ? "Tiệc Nướng BBQ Bên Lửa Trại" : "Campfire BBQ Under The Stars"}
                  </h4>
                  <p className="text-on-surface/70 text-xs md:text-sm leading-relaxed">
                    {currentLang === "vi"
                      ? "Thưởng thức thịt nướng than hoa, ếch đồng chiên giòn, nhâm nhi rượu nếp Long An bên đống lửa bập bùng giữa không gian hoàn toàn tịch mịch của rừng già lúc nửa đêm."
                      : "Charcoal BBQ, crispy spiced frog, and traditional Long An sticky rice wine beside a crackling forest campfire."}
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-secondary border-2 border-surface" />
                  <span className="text-[11px] font-semibold text-secondary uppercase tracking-[0.15em] block mb-1">
                    {currentLang === "vi" ? "NGÀY 2 • 05:45 BÌNH MINH" : "DAY 2 • 05:45 SUNRISE"}
                  </span>
                  <h4 className="font-serif-luxury text-lg text-on-surface mb-1">
                    {currentLang === "vi" ? "Đón Tia Nắng Sớm & Tiếng Chim Hót" : "Morning Mist & Egret Flight"}
                  </h4>
                  <p className="text-on-surface/70 text-xs md:text-sm leading-relaxed">
                    {currentLang === "vi"
                      ? "Thức dậy sớm đón sương mai bảng lảng bốc lên từ mặt hồ. Thưởng trà thảo mộc ngắm từng đàn cò trắng thức giấc bay vút lên bầu trời ửng hồng."
                      : "Rise with ethereal lake mist. Sip herbal tea as flocks of white egrets take flight into the rosy dawn sky."}
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-secondary border-2 border-surface" />
                  <span className="text-[11px] font-semibold text-secondary uppercase tracking-[0.15em] block mb-1">
                    {currentLang === "vi" ? "NGÀY 2 • 08:30 — 11:30" : "DAY 2 • 08:30 — 11:30"}
                  </span>
                  <h4 className="font-serif-luxury text-lg text-on-surface mb-1">
                    {currentLang === "vi" ? "Chèo Xuồng & Tắm Bể Bơi Sinh Thái" : "Sampan Exploration & Forest Pool"}
                  </h4>
                  <p className="text-on-surface/70 text-xs md:text-sm leading-relaxed">
                    {currentLang === "vi"
                      ? "Chèo xuồng ba lá khám phá sâu vùng lõi không người, thư giãn tại hồ bơi view rừng trước khi hoàn tất thủ tục trả phòng và trở về."
                      : "Handcrafted sampan exploration into peaceful secluded bays, swimming at the forest pool before checking out."}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="text-xs md:text-sm text-on-surface/70">
                  {currentLang === "vi" ? (
                    <>
                      Chi phí tham khảo: <strong className="text-on-surface">950.000đ — 1.650.000đ / khách</strong>
                    </>
                  ) : (
                    <>
                      Estimated budget: <strong className="text-on-surface">950,000 — 1,650,000 VND / guest</strong>
                    </>
                  )}
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">nightlight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HÀNH TRANG & LƯU Ý QUAN TRỌNG (Travel Tips & Essentials) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase block mb-2">
              {currentLang === "vi" ? "Hành Trang Tự Túc" : "Field Essentials"}
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl text-on-surface font-normal">
              {currentLang === "vi" ? "Kinh Nghiệm Chuẩn Bị & Quy Tắc Bảo Tồn" : "Essential Packing & Eco Code"}
            </h2>
            <p className="text-on-surface/70 text-sm md:text-base mt-3">
              {currentLang === "vi"
                ? "Những lưu ý cốt lõi giúp bạn vừa tận hưởng kỳ nghỉ an lành tuyệt đối, vừa giữ gìn sự nguyên vẹn của môi trường tự nhiên."
                : "Mindful practices that ensure a peaceful sanctuary retreat while safeguarding wild habitats."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: Trang Phục */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 shadow-sm">
              <div className="w-12 h-12 bg-surface flex items-center justify-center mb-6 text-primary border border-outline-variant/30">
                <span className="material-symbols-outlined text-[28px]">apparel</span>
              </div>
              <h3 className="font-serif-luxury text-xl text-on-surface mb-3">
                {currentLang === "vi" ? "Trang Phục & Giày Dép" : "Attire & Footwear"}
              </h3>
              <p className="text-on-surface/75 text-sm leading-relaxed mb-4">
                {currentLang === "vi"
                  ? "Ưu tiên giày thể thao đế bệt có độ bám tốt hoặc giày lười chống trơn trượt. Trang phục nên chọn chất liệu linen, cotton sáng màu (trắng, be, nâu) để vừa thoáng mát vừa nổi bật trên nền xanh của rừng khi chụp ảnh. Đừng quên nón vành rộng."
                  : "Opt for flat shoes with good tread. Breathable linen and light cotton (white, beige, earth tones) look stunning against forest greenery and keep you cool. Wide-brimmed hats are highly recommended."}
              </p>
              <div className="text-[11px] text-outline uppercase tracking-[0.15em] font-medium">
                {currentLang === "vi" ? "Khuyến nghị: Hạn chế giày cao gót" : "Tip: Avoid high heels"}
              </div>
            </div>

            {/* Box 2: Côn Trùng & Nắng */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 shadow-sm">
              <div className="w-12 h-12 bg-surface flex items-center justify-center mb-6 text-primary border border-outline-variant/30">
                <span className="material-symbols-outlined text-[28px]">sanitizer</span>
              </div>
              <h3 className="font-serif-luxury text-xl text-on-surface mb-3">
                {currentLang === "vi" ? "Chống Côn Trùng & Nắng" : "Sun & Insect Protection"}
              </h3>
              <p className="text-on-surface/75 text-sm leading-relaxed mb-4">
                {currentLang === "vi"
                  ? "Môi trường đất ngập nước nguyên sơ có muỗi và côn trùng tự nhiên vào chập tối. Hãy chuẩn bị sẵn chai xịt chống côn trùng sinh thái (chiết xuất sả chanh hoặc dầu tràm), kem chống nắng vật lý an toàn với nguồn nước và áo khoác mỏng chống nắng khi dạo bước."
                  : "Wetlands host natural insects at dusk. Pack organic lemongrass or cajuput insect repellent, reef/water-safe sunscreen, and a light cover-up for sunny strolls."}
              </p>
              <div className="text-[11px] text-outline uppercase tracking-[0.15em] font-medium">
                {currentLang === "vi" ? "Khuyến nghị: Mang kem bôi côn trùng" : "Tip: Pack natural insect spray"}
              </div>
            </div>

            {/* Box 3: Bảo Tồn */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 shadow-sm">
              <div className="w-12 h-12 bg-surface flex items-center justify-center mb-6 text-primary border border-outline-variant/30">
                <span className="material-symbols-outlined text-[28px]">eco</span>
              </div>
              <h3 className="font-serif-luxury text-xl text-on-surface mb-3">
                {currentLang === "vi" ? "Quy Tắc Bảo Tồn 'Không Rác'" : "Leave No Trace Principles"}
              </h3>
              <p className="text-on-surface/75 text-sm leading-relaxed mb-4">
                {currentLang === "vi"
                  ? "Tuyệt đối không xả chai nhựa, túi nylon xuống luồng nước hay đường mòn. Không tự ý bẻ cành tràm, hái hoa sen hoa súng hoang dã. Giữ âm lượng vừa phải khi chèo xuồng qua các đầm chim để không làm xáo trộn không gian làm tổ yên lành."
                  : "Never discard plastics into waterways or walkways. Do not pick wild lotus or cajuput branches. Maintain low speech volume near bird sanctuaries to protect nesting colonies."}
              </p>
              <div className="text-[11px] text-outline uppercase tracking-[0.15em] font-medium">
                {currentLang === "vi" ? "Nguyên tắc: Chỉ để lại dấu chân" : "Rule: Take memories, leave footprints"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: VÉ THAM QUAN & DỊCH VỤ NIÊM YẾT (Pricing Transparency) */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase block">
                {currentLang === "vi" ? "Minh Bạch & Chu Đáo" : "Transparent Tariffs"}
              </span>
              <h2 className="font-serif-luxury text-3xl md:text-4xl text-on-surface font-normal">
                {currentLang === "vi" ? "Bảng Giá Vé & Dịch Vụ Niêm Yết" : "Published Passes & Tariffs"}
              </h2>
              <p className="text-on-surface/70 text-sm md:text-base leading-relaxed">
                {currentLang === "vi"
                  ? "Mọi dịch vụ tại Làng Nổi Tân Lập đều được kiểm định chất lượng và niêm yết công khai, bảo đảm trải nghiệm văn minh không phát sinh phụ phí ngoài ý muốn."
                  : "All admissions and activities adhere to strictly published transparent pricing with zero surprise charges."}
              </p>
              <div className="pt-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.18em] hover:underline cursor-pointer"
                >
                  {currentLang === "vi" ? "Đặt Vé Trực Tuyến Để Nhận Ưu Đãi" : "Reserve Online For Privileges"}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-surface border border-outline-variant/40 divide-y divide-outline-variant/30 shadow-sm">
                <div className="p-5 sm:p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-lg text-on-surface">
                      {currentLang === "vi" ? "Vé Cổng & Cầu Bộ Hành 5km" : "Gate Admission & 5km Boardwalk"}
                    </h4>
                    <p className="text-on-surface/70 text-xs sm:text-sm">
                      {currentLang === "vi"
                        ? "Bao gồm thuyền máy vận chuyển 2 chiều ra vào rừng lõi"
                        : "Includes round-trip motorboat shuttle to core forest"}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif-luxury text-xl text-primary font-semibold">70.000đ</span>
                    <span className="text-outline text-[12px] block">/ Khách</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-lg text-on-surface">
                      {currentLang === "vi" ? "Vé Trải Nghiệm Xuồng Ba Lá" : "Handcrafted Sampan Tour"}
                    </h4>
                    <p className="text-on-surface/70 text-xs sm:text-sm">
                      {currentLang === "vi"
                        ? "Chèo tay truyền thống len lỏi qua rạch tràm hoang sơ (45 phút)"
                        : "Traditional hand-paddled boat through shaded streams (45 mins)"}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif-luxury text-xl text-primary font-semibold">80.000đ</span>
                    <span className="text-outline text-[12px] block">/ Khách</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-lg text-on-surface">
                      {currentLang === "vi" ? "Tháp Vọng Cảnh 38m" : "38m Observation Tower"}
                    </h4>
                    <p className="text-on-surface/70 text-xs sm:text-sm">
                      {currentLang === "vi"
                        ? "Miễn phí hoàn toàn khi đã mua vé vào cổng"
                        : "Complimentary for all ticket holders"}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-secondary font-bold uppercase tracking-[0.15em]">
                      {currentLang === "vi" ? "Miễn Phí" : "Free"}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-lg text-on-surface">
                      {currentLang === "vi" ? "Gói Trọn Gói Combo Đồng Tháp Mười" : "All-Inclusive Dong Thap Muoi Combo"}
                    </h4>
                    <p className="text-on-surface/70 text-xs sm:text-sm">
                      {currentLang === "vi"
                        ? "Vé cổng + Thuyền máy + Xuồng ba lá + Bữa trưa đặc sản set menu"
                        : "Gate pass + Motorboat + Sampan + Set-menu lunch"}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif-luxury text-xl text-primary font-bold">290.000đ</span>
                    <span className="text-outline text-[12px] block">/ Khách</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: NEWSLETTER & FORM HỖ TRỢ (Monolithic Style) */}
      <section className="py-24 bg-primary text-white" id="booking">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-serif-luxury text-xs sm:text-sm tracking-[0.22em] text-khaki-gold mb-4 inline-block uppercase">
            {currentLang === "vi" ? "Tư Vấn Chuyến Đi Tận Tâm" : "Personalized Field Assistance"}
          </span>
          <h2 className="font-serif-luxury text-2xl md:text-4xl leading-tight mb-4 font-normal text-white">
            {currentLang === "vi"
              ? "Nhận Bản Đồ Cầm Tay & Cẩm Nang PDF Chi Tiết"
              : "Download Portable Field Map & PDF Guide"}
          </h2>
          <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            {currentLang === "vi"
              ? "Điền thông tin để chúng tôi gửi trọn bộ file GPS tọa độ điểm check-in, lịch nở hoa súng và phiếu voucher giảm 10% dịch vụ ẩm thực cho bạn."
              : "Enter your email to receive our high-res GPS field map, blooming calendar, and a 10% specialty dining voucher."}
          </p>

          {emailSubmitted ? (
            <div className="p-6 bg-white/10 border border-white/30 text-white max-w-xl mx-auto">
              <p className="font-medium text-sm">
                {currentLang === "vi"
                  ? "✓ Cảm ơn bạn! Cẩm nang điện tử và bản đồ GPS đã được gửi vào hòm thư của bạn."
                  : "✓ Thank you! The digital guide and GPS map are on their way to your inbox."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-0 shadow-lg">
              <input
                required
                type="email"
                placeholder={
                  currentLang === "vi" ? "NHẬP ĐỊA CHỈ EMAIL CỦA BẠN..." : "ENTER YOUR EMAIL ADDRESS..."
                }
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-6 py-4 bg-white text-charcoal-vintage placeholder:text-outline text-xs tracking-[0.15em] uppercase focus:outline-none border-0 focus:ring-0 rounded-none"
              />
              <button
                type="submit"
                className="bg-khaki-gold hover:bg-white text-charcoal-vintage font-bold text-xs px-10 py-4 uppercase tracking-[0.18em] transition-colors whitespace-nowrap rounded-none cursor-pointer"
              >
                {currentLang === "vi" ? "GỬI CẨM NANG" : "SEND GUIDE"}
              </button>
            </form>
          )}

          <p className="text-white/70 text-xs mt-4">
            {currentLang === "vi"
              ? "Chúng tôi trân trọng quyền riêng tư của bạn. Không gửi spam, không bán thông tin."
              : "We respect your privacy. Zero spam, complete respect for your data."}
          </p>
        </div>
      </section>
    </div>
  );
}
