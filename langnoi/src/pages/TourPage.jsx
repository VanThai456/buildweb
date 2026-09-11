import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TourPage({ currentLang = "vi", onOpenBooking }) {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title =
      currentLang === "vi"
        ? "Tham Quan & Trải Nghiệm - Phong Cách Di Sản Làng Nổi Tân Lập"
        : "Tours & Eco Experiences | Tan Lap Floating Village Eco Sanctuary";
  }, [currentLang]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  const handleBookExperience = (experienceName) => {
    if (onOpenBooking) {
      onOpenBooking(experienceName);
    } else {
      navigate("/dat-phong");
    }
  };

  const isEn = currentLang === "en";

  return (
    <div className="w-full bg-surface text-on-surface font-body-md selection:bg-[#555555] selection:text-white">
      {/* 1. HERO HEADER: Panorama Rừng Tràm Nghệ Thuật (Zero Play Button, Ultra-Sharp) */}
      <section className="relative w-full h-[620px] md:h-[737px] min-h-[520px] max-h-[780px] overflow-hidden flex items-end">
        {/* Full-bleed background image */}
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.jpg`}
          alt="Breathtaking panoramic view of melaleuca forest at Tan Lap Floating Village"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
        {/* Editorial Cinematic Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />

        {/* Hero Header Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-14 md:pb-20 text-white">
          <div className="max-w-4xl text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-khaki-gold" />
              <span className="font-serif-luxury text-sm tracking-[0.22em] text-khaki-gold uppercase">
                {isEn ? "Attractions & Eco Experiences" : "Tham Quan & Trải Nghiệm Di Sản"}
              </span>
            </div>
            <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl uppercase text-white tracking-[0.06em] md:tracking-[0.1em] leading-tight mb-6">
              {isEn ? "Journey into Primal Nature" : "Hành Trình Chạm Vào Thiên Nhiên Hoang Sơ"}
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-light leading-relaxed border-l-2 border-khaki-gold pl-5">
              {isEn
                ? "Discover the ancient cajeput heritage of Dong Thap Muoi through iconic landmarks and signature riverway cruises, preserving pure serenity and poetic Southern charm."
                : "Khám phá miền di sản tràm nguyên sinh Đồng Tháp Mười qua những biểu tượng cảnh quan và hải trình sông nước độc bản, lưu giữ trọn vẹn nét thanh tịnh và thi vị đất phương Nam."}
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO STRIP */}
      <section className="w-full py-16 md:py-24 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center text-left">
            <div className="lg:col-span-5">
              <span className="text-xs font-sans uppercase tracking-[0.18em] text-primary block mb-2 font-semibold">
                {isEn ? "Tan Lap Ecosystem" : "Hệ Sinh Thái Tân Lập"}
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-on-surface leading-snug">
                {isEn
                  ? "Ancient Melaleuca Forest & Pristine Wetlands"
                  : "Miền Tràm Cổ Thụ & Vùng Đất Ngập Nước Nguyên Bản"}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm md:text-base text-on-surface/75 leading-relaxed mb-6 font-light">
                {isEn
                  ? "Nestled in the heart of Dong Thap Muoi, Tan Lap Floating Village preserves over 135 hectares of primal cajeput forest alongside abundant seasonal buffer wetlands. Every path and journey here is curated with deep reverence for nature, honoring rustic architecture and Indochine heritage."
                  : "Nằm ẩn mình giữa trung tâm Đồng Tháp Mười, Làng Nổi Tân Lập bảo tồn hơn 135 hécta rừng tràm nguyên sinh cùng vùng đệm ngập nước phong phú. Từng công trình và hành trình trải nghiệm tại đây được kiến tạo với tinh thần nương náu vào tự nhiên, tôn vinh kiến trúc mộc mạc và phong vị di sản Đông Dương."}
              </p>
              <div className="flex items-center gap-8 pt-2">
                <div>
                  <span className="font-serif-luxury text-2xl md:text-3xl text-primary font-bold block">
                    135+ ha
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-on-surface/60 font-medium">
                    {isEn ? "Ancient Forest" : "Rừng tràm cổ"}
                  </span>
                </div>
                <div className="w-[1px] h-10 bg-outline-variant/60" />
                <div>
                  <span className="font-serif-luxury text-2xl md:text-3xl text-primary font-bold block">
                    38 mét
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-on-surface/60 font-medium">
                    {isEn ? "Lookout Summit" : "Đỉnh vọng cảnh"}
                  </span>
                </div>
                <div className="w-[1px] h-10 bg-outline-variant/60" />
                <div>
                  <span className="font-serif-luxury text-2xl md:text-3xl text-primary font-bold block">
                    5 km
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-on-surface/60 font-medium">
                    {isEn ? "Forest Boardwalk" : "Đường đan xuyên rừng"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: CÁC ĐIỂM THAM QUAN BIỂU TƯỢNG */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-serif-luxury text-sm tracking-[0.22em] text-primary uppercase block mb-3 font-semibold">
            {isEn ? "Landmark Icons" : "Biểu Tượng Cảnh Quan"}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-on-surface uppercase tracking-[0.06em]">
            {isEn ? "Heritage Attractions of Tan Lap" : "Điểm Tham Quan Di Sản Tân Lập"}
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto my-4" />
          <p className="text-sm md:text-base text-on-surface/75 font-light">
            {isEn
              ? "Each touchpoint is a masterpiece sculpted by magnificent nature and guarded by the warm hospitality of Southern wetlands."
              : "Mỗi điểm chạm là một tuyệt tác được thiên nhiên kỳ vĩ điêu khắc cùng dấu ấn bàn tay gìn giữ của con người xứ sen tháp."}
          </p>
        </div>

        {/* Editorial Asymmetric Feature 1: Cung đường đan xuyên rừng tràm 5km */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-24 pb-20 border-b border-outline-variant/30 text-left">
          <div className="lg:col-span-7 relative group">
            <div className="overflow-hidden aspect-[16/10] bg-surface-container shadow-md border border-outline-variant/40">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={`${import.meta.env.BASE_URL}images/thamquan/attraction-pathway.jpg`}
                alt="Cung đường đan xuyên rừng tràm dài 5km"
              />
            </div>
            <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-4 py-2 border border-outline-variant/40 shadow-sm">
              <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-primary font-bold">
                01 / {isEn ? "Record Marvel" : "Biểu Tượng Kỷ Lục"}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-on-surface/60 block mb-2 font-medium">
              The Alley Through Melaleuca Forest
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-on-surface mb-4 leading-tight">
              {isEn
                ? "5km Concrete Trail Through Cajeput Forest"
                : "Cung Đường Đan Xuyên Rừng Tràm Dài 5km"}
            </h3>
            <p className="text-sm md:text-base text-on-surface/75 mb-6 leading-relaxed font-light">
              {isEn
                ? "Celebrated as Vietnam's longest cajeput forest trail, the slender concrete path winds gently under towering green canopies. Pure stillness echoes with whispering breeze, delicate essential oils, and wild birds chirping in harmony."
                : "Được mệnh danh là con đường xuyên rừng tràm dài nhất Việt Nam, tuyến đường mòn xi-măng uốn lượn mềm mại dưới những vòm tràm cổ thụ xanh ngút ngàn. Không gian tĩnh mịch chỉ còn tiếng lá tràm rì rào thoảng hương tinh dầu thoang thoảng và tiếng chim rừng ríu rít gọi bầy."}
            </p>
            <ul className="space-y-3 mb-8 text-xs md:text-sm text-on-surface/75">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                <span>
                  {isEn
                    ? "Distance: 5,000m meandering peaceful boardwalk"
                    : "Chiều dài trải nghiệm: 5.000m uốn khúc quanh co tĩnh lặng"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                <span>
                  {isEn
                    ? "Golden hours: 7:00 - 9:30 AM when morning sunbeams pierce through leaves"
                    : "Thời điểm lý tưởng: 7:00 - 9:30 sáng khi nắng sớm rọi xuyên kẽ lá"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                <span>
                  {isEn
                    ? "Ideal for meditative walking, deep reflection, and heritage photography"
                    : "Phù hợp tản bộ dưỡng sinh, chiêm nghiệm và nhiếp ảnh di sản"}
                </span>
              </li>
            </ul>
            <button
              onClick={() => handleBookExperience("Vé Vào Cổng & Đường Mòn 5km")}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary hover:text-primary-container transition-colors border-b border-primary pb-1 cursor-pointer"
            >
              <span>{isEn ? "EXPLORE TRAIL DETAILS" : "Chi Tiết Lộ Trình"}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Bento Grid for Other 3 Key Attractions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Attraction 2: Tháp quan sát 38m */}
          <div className="flex flex-col bg-surface border border-outline-variant/30 group shadow-sm hover:border-primary/50 transition-colors">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={`${import.meta.env.BASE_URL}images/thamquan/attraction-tower.jpg`}
                alt="Tháp Quan Sát Vọng Cảnh 38m"
              />
              <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1 border border-outline-variant/40 shadow-xs">
                <span className="text-xs font-sans uppercase tracking-[0.18em] text-primary font-bold">
                  02
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-on-surface/60 mb-1 block font-medium">
                  Observation Tower 38m
                </span>
                <h3 className="font-serif-luxury text-xl md:text-2xl text-on-surface mb-3">
                  {isEn ? "38m Panoramic Tower" : "Tháp Quan Sát Vọng Cảnh 38m"}
                </h3>
                <p className="text-xs md:text-sm text-on-surface/75 font-light mb-6 leading-relaxed">
                  {isEn
                    ? "The sanctuary's highest vantage point offering 360-degree panoramic views over boundless emerald forests and the horizon."
                    : "Điểm cao nhất khu bảo tồn mang lại góc nhìn toàn cảnh 360 độ ngắm trọn đại ngàn tràm bao la ngút tầm mắt và hệ sinh thái đất ngập nước phía chân trời."}
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-wider text-primary font-semibold">
                  {isEn ? "Elevation: 38 Meters" : "Độ cao: 38 Mét"}
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  north_east
                </span>
              </div>
            </div>
          </div>

          {/* Attraction 3: Cầu chữ X */}
          <div className="flex flex-col bg-surface border border-outline-variant/30 group shadow-sm hover:border-primary/50 transition-colors">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={`${import.meta.env.BASE_URL}images/thamquan/attraction-x-bridge.jpg`}
                alt="Cầu Chữ X Đầm Sen Súng"
              />
              <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1 border border-outline-variant/40 shadow-xs">
                <span className="text-xs font-sans uppercase tracking-[0.18em] text-primary font-bold">
                  03
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-on-surface/60 mb-1 block font-medium">
                  Scene Of X-Shape Bridge
                </span>
                <h3 className="font-serif-luxury text-xl md:text-2xl text-on-surface mb-3">
                  {isEn ? "Scenic X-Bridge Lotus Lagoon" : "Cầu Chữ X Đầm Sen Súng"}
                </h3>
                <p className="text-xs md:text-sm text-on-surface/75 font-light mb-6 leading-relaxed">
                  {isEn
                    ? "An artistic wooden junction spanning serene waters blooming with pink lotus and purple water lilies, preserving pure cinematic photography moments."
                    : "Giao lộ độc đáo của hai cung cầu bắc ngang qua mặt nước tĩnh lặng nở rộ bông súng hồng và sen ngát hương, nơi lưu giữ những khoảnh khắc điện ảnh tinh khôi."}
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-wider text-primary font-semibold">
                  {isEn ? "Blooms: All Year" : "Mùa hoa: Quanh năm"}
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  north_east
                </span>
              </div>
            </div>
          </div>

          {/* Attraction 4: Hồ Bán Nguyệt & Đảo chim */}
          <div className="flex flex-col bg-surface border border-outline-variant/30 group shadow-sm hover:border-primary/50 transition-colors">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={`${import.meta.env.BASE_URL}images/thamquan/attraction-lake-birds.jpg`}
                alt="Hồ Bán Nguyệt & Đảo Chim"
              />
              <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1 border border-outline-variant/40 shadow-xs">
                <span className="text-xs font-sans uppercase tracking-[0.18em] text-primary font-bold">
                  04
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-on-surface/60 mb-1 block font-medium">
                  Half-Moon Lake & Birds Island
                </span>
                <h3 className="font-serif-luxury text-xl md:text-2xl text-on-surface mb-3">
                  {isEn ? "Crescent Lake & Bird Island" : "Hồ Bán Nguyệt & Đảo Chim"}
                </h3>
                <p className="text-xs md:text-sm text-on-surface/75 font-light mb-6 leading-relaxed">
                  {isEn
                    ? "A secluded core sanctuary home to thousands of wild birds, white egrets, and cormorants returning to roost at sunset, preserving primal ecosystems."
                    : "Vùng lõi bảo tồn tách biệt nơi cư ngụ của hàng vạn cá thể chim hoang dã, cò trắng và cồng cộc về tổ mỗi buổi hoàng hôn, bảo lưu trọn vẹn nhịp sống tự nhiên sơ khởi."}
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-wider text-primary font-semibold">
                  {isEn ? "Wildlife Reserve" : "Bảo tồn hoang dã"}
                </span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  north_east
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: BỘ SƯU TẬP TRẢI NGHIỆM SÔNG NƯỚC BẢN ĐỊA */}
      <section className="py-20 md:py-28 bg-surface-container-low border-y border-outline-variant/30 text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-outline-variant/30 gap-6">
            <div>
              <span className="font-serif-luxury text-sm tracking-[0.22em] text-primary uppercase block mb-2 font-semibold">
                {isEn ? "Indigenous Privileges" : "Đặc Quyền Bản Địa"}
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-on-surface uppercase tracking-[0.06em]">
                {isEn ? "Signature Riverway Experiences" : "Bộ Sưu Tập Trải Nghiệm Sông Nước"}
              </h2>
            </div>
            <p className="text-sm md:text-base text-on-surface/75 max-w-md font-light">
              {isEn
                ? "Savor the quiet beauty along emerald water channels through smooth river voyages and genuine Mekong lifestyle culture."
                : "Thưởng ngoạn vẻ đẹp lắng đọng trên từng nhánh kênh xanh ngắt qua các hình thức du hành êm ả và phong vị văn hóa miệt vườn chân thực."}
            </p>
          </div>

          {/* 3 Rich Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Experience 1: Chèo xuồng ba lá */}
            <div className="bg-surface border border-outline-variant/30 flex flex-col justify-between shadow-sm">
              <div>
                <div className="relative overflow-hidden aspect-[16/11]">
                  <img
                    className="w-full h-full object-cover"
                    src={`${import.meta.env.BASE_URL}images/thamquan/experience-sampan.jpg`}
                    alt="Chèo Xuồng Ba Lá Lướt Bèo Cám Xanh"
                  />
                  <span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm text-on-surface text-[10px] font-sans uppercase tracking-wider px-3 py-1 font-semibold">
                    Rowing Boat Tour
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-serif-luxury text-xl md:text-2xl text-on-surface mb-3">
                    {isEn
                      ? "Handcrafted Sampan Over Green Duckweed"
                      : "Chèo Xuồng Ba Lá Lướt Bèo Cám Xanh"}
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface/75 font-light mb-6 leading-relaxed">
                    {isEn
                      ? "Feel each gentle paddle stroke steering your boat across silky jade duckweed mats. Listen to local rowers in traditional attire humming folk melodies."
                      : "Cảm nhận từng nhịp chèo khua nhẹ đưa con thuyền lướt êm qua thảm bèo cám xanh ngọc bích mịn màng. Lắng nghe người chèo xuồng bản xứ ngân nga điệu hò sông nước mộc mạc."}
                  </p>
                  <div className="space-y-2.5 text-xs text-on-surface/75 border-t border-outline-variant/20 pt-4">
                    <div className="flex justify-between">
                      <span className="text-on-surface/60">{isEn ? "Duration:" : "Thời lượng:"}</span>
                      <span className="font-semibold text-on-surface">30 - 45 Phút</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface/60">{isEn ? "Format:" : "Hình thức:"}</span>
                      <span className="font-semibold text-on-surface">
                        {isEn ? "Traditional hand-paddled boat" : "Xuồng chèo tay truyền thống"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 md:px-8 pb-8">
                <button
                  onClick={() => handleBookExperience("Xuồng Ba Lá Lướt Bèo Cám")}
                  className="block w-full py-3.5 text-center border border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold uppercase tracking-[0.18em] transition-colors rounded-none cursor-pointer"
                >
                  {isEn ? "RESERVE EXPERIENCE" : "Đặt Vé Trải Nghiệm"}
                </button>
              </div>
            </div>

            {/* Experience 2: Thuyền cáp kéo */}
            <div className="bg-surface border border-outline-variant/30 flex flex-col justify-between shadow-sm">
              <div>
                <div className="relative overflow-hidden aspect-[16/11]">
                  <img
                    className="w-full h-full object-cover"
                    src={`${import.meta.env.BASE_URL}images/thamquan/experience-cable-boat.jpg`}
                    alt="Du Ngoạn Thuyền Cáp Kéo Tĩnh Lặng"
                  />
                  <span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm text-on-surface text-[10px] font-sans uppercase tracking-wider px-3 py-1 font-semibold">
                    Cable Boat Tour
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-serif-luxury text-xl md:text-2xl text-on-surface mb-3">
                    {isEn ? "Silent Underwater Cable Guided Cruise" : "Du Ngoạn Thuyền Cáp Kéo Tĩnh Lặng"}
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface/75 font-light mb-6 leading-relaxed">
                    {isEn
                      ? "Modern submerged cable propulsion operates with zero emissions and zero engine noise, returning pure unblemished nature for voyagers to contemplate."
                      : "Hệ thống thuyền cáp kéo ngầm tân tiến vận hành hoàn toàn không khói bụi và không tiếng ồn động cơ. Không gian trả lại trọn vẹn sự tinh khiết của thiên nhiên cho du khách thưởng ngoạn."}
                  </p>
                  <div className="space-y-2.5 text-xs text-on-surface/75 border-t border-outline-variant/20 pt-4">
                    <div className="flex justify-between">
                      <span className="text-on-surface/60">{isEn ? "Duration:" : "Thời lượng:"}</span>
                      <span className="font-semibold text-on-surface">45 - 60 Phút</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface/60">{isEn ? "Standard:" : "Tiêu chuẩn:"}</span>
                      <span className="font-semibold text-on-surface">
                        {isEn ? "Eco-cable underwater technology" : "Công nghệ cáp ngầm sinh thái"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 md:px-8 pb-8">
                <button
                  onClick={() => handleBookExperience("Du Ngoạn Thuyền Cáp Kéo")}
                  className="block w-full py-3.5 text-center border border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold uppercase tracking-[0.18em] transition-colors rounded-none cursor-pointer"
                >
                  {isEn ? "RESERVE EXPERIENCE" : "Đặt Vé Trải Nghiệm"}
                </button>
              </div>
            </div>

            {/* Experience 3: Dỡ lợp bắt cá */}
            <div className="bg-surface border border-outline-variant/30 flex flex-col justify-between shadow-sm">
              <div>
                <div className="relative overflow-hidden aspect-[16/11]">
                  <img
                    className="w-full h-full object-cover"
                    src={`${import.meta.env.BASE_URL}images/thamquan/experience-fishing.jpg`}
                    alt="Dỡ Lợp Bắt Cá Đồng & Câu Cá Giải Trí"
                  />
                  <span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm text-on-surface text-[10px] font-sans uppercase tracking-wider px-3 py-1 font-semibold">
                    Fish Trap & Fishing
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-serif-luxury text-xl md:text-2xl text-on-surface mb-3">
                    {isEn ? "Traditional Fish Trapping & Angling" : "Dỡ Lợp Bắt Cá Đồng & Câu Cá Giải Trí"}
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface/75 font-light mb-6 leading-relaxed">
                    {isEn
                      ? "Become a true Mekong farmer: try hands-on woven bamboo fish traps to catch wild snakehead and catfish, or relax fishing beside thatched huts."
                      : "Trở thành một nông phu miệt vườn thực thụ khi tự tay trải nghiệm kỹ nghệ dỡ lợp, dỡ lờ bắt cá lóc, cá trê đồng tự nhiên hoặc thư thả câu cá bên chòi lá cạnh đầm hoa."}
                  </p>
                  <div className="space-y-2.5 text-xs text-on-surface/75 border-t border-outline-variant/20 pt-4">
                    <div className="flex justify-between">
                      <span className="text-on-surface/60">{isEn ? "Duration:" : "Thời lượng:"}</span>
                      <span className="font-semibold text-on-surface">
                        {isEn ? "Half-day (Flexible)" : "Nửa ngày (Tự do)"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface/60">{isEn ? "Feature:" : "Trải nghiệm:"}</span>
                      <span className="font-semibold text-on-surface">
                        {isEn ? "On-site chef preparation available" : "Kèm đầu bếp chế biến tại chỗ"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 md:px-8 pb-8">
                <button
                  onClick={() => handleBookExperience("Trải Nghiệm Dỡ Lợp Bắt Cá Đồng")}
                  className="block w-full py-3.5 text-center border border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold uppercase tracking-[0.18em] transition-colors rounded-none cursor-pointer"
                >
                  {isEn ? "RESERVE EXPERIENCE" : "Đặt Vé Trải Nghiệm"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: CẨM NANG TRẢI NGHIỆM THEO MÙA & LỊCH TRÌNH GỢI Ý */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Seasonal Comparison Monograph (5 Cols) */}
          <div className="lg:col-span-5">
            <span className="font-serif-luxury text-sm tracking-[0.22em] text-primary uppercase block mb-2 font-semibold">
              {isEn ? "Travel Field Notes" : "Cẩm Nang Du Ngoạn"}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-on-surface uppercase tracking-[0.06em] mb-6">
              {isEn ? "Seasonal Colors of Tan Lap" : "Sắc Màu Theo Mùa Tại Tân Lập"}
            </h2>
            <p className="text-sm md:text-base text-on-surface/75 leading-relaxed mb-8 font-light">
              {isEn
                ? "The ecosystem of Tan Lap transforms across two distinct Southern seasons. Each period unveils an extraordinary visual symphony crafted for you."
                : "Hệ sinh thái Tân Lập chuyển mình theo hai mùa khí hậu đặc trưng miền Nam. Mỗi thời khắc lại mở ra một trường khúc thị giác diệu kỳ dành riêng cho bạn."}
            </p>

            {/* Stacked seasonal cards */}
            <div className="space-y-6">
              {/* Card 1: Mùa Nước Nổi */}
              <div className="p-6 bg-surface-container-low border-l-4 border-primary shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif-luxury text-xl text-on-surface font-semibold">
                    {isEn ? "Floating Water Season" : "Mùa Nước Nổi"}
                  </h4>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-primary font-bold">
                    {isEn ? "Aug - Nov (Lunar)" : "Tháng 8 - Tháng 11 Âm Lịch"}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-on-surface/75 mb-4 leading-relaxed font-light">
                  {isEn
                    ? "The entire forest immerses in fertile alluvial floods. Green duckweeds blanket canals like velvet carpets. Peak season for fresh linh fish and wild water lilies."
                    : "Toàn bộ rừng tràm chìm trong biển nước phù sa màu mỡ. Bèo hoa dâu và bèo cám phủ xanh mướt kín mặt nước như tấm thảm nhung ngọc bích. Đây là mùa trù phú nhất với các sản vật cá linh, bông điên điển và bông súng đồng."}
                </p>
                <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-wide">
                  <span className="material-symbols-outlined text-[18px]">water_drop</span>
                  <span>
                    {isEn
                      ? "Golden Activity: Sampan paddling deep into forest core"
                      : "Hoạt động vàng: Chèo xuồng ba lá len lỏi rừng sâu"}
                  </span>
                </div>
              </div>

              {/* Card 2: Mùa Khô */}
              <div className="p-6 bg-surface-container-low border-l-4 border-olive-moss shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif-luxury text-xl text-on-surface font-semibold">
                    {isEn ? "Serene Dry Season" : "Mùa Khô Yên Ả"}
                  </h4>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-olive-moss font-bold">
                    {isEn ? "Dec - Jul (Lunar)" : "Tháng 12 - Tháng 7 Âm Lịch"}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-on-surface/75 mb-4 leading-relaxed font-light">
                  {isEn
                    ? "Crisp air with warm golden sunshine. The 5km trail is completely dry and shaded, perfect for meditative trekking, forest cycling, and bird-nesting watches."
                    : "Không khí trong trẻo ngập tràn ánh nắng ấm áp. Cung đường đan 5km khô ráo rợp bóng mát hoàn hảo cho những chuyến tản bộ thiền hành, đạp xe xuyên rừng và cắm trại ngắm chim muông làm tổ."}
                </p>
                <div className="flex items-center gap-2 text-olive-moss text-xs font-semibold tracking-wide">
                  <span className="material-symbols-outlined text-[18px]">wb_sunny</span>
                  <span>
                    {isEn
                      ? "Golden Activity: Restorative walking & tower climbs"
                      : "Hoạt động vàng: Tản bộ dưỡng sinh, leo tháp vọng cảnh"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Suggested 1-Day Heritage Itinerary (7 Cols) */}
          <div className="lg:col-span-7 bg-surface border border-outline-variant/40 p-8 md:p-12 shadow-sm">
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-8">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-on-surface/60 block font-medium">
                  {isEn ? "Suggested Itinerary" : "Hành Trình Gợi Ý"}
                </span>
                <h3 className="font-serif-luxury text-2xl md:text-3xl text-on-surface">
                  {isEn
                    ? "One Day Touching Primal Heritage (Full-Day)"
                    : "Một Ngày Chạm Sâu Di Sản (Full-Day)"}
                </h3>
              </div>
              <span className="material-symbols-outlined text-primary text-[32px]">schedule</span>
            </div>

            {/* Timeline list with connecting line */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-[17px] before:w-[1px] before:bg-outline-variant/50">
              {/* Step 1 */}
              <div className="relative flex items-start gap-6">
                <div className="relative z-10 w-9 h-9 bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  01
                </div>
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-primary font-bold">
                    07:30 - 09:30
                  </span>
                  <h4 className="font-serif-luxury text-lg md:text-xl text-on-surface mt-1 mb-1.5 font-semibold">
                    {isEn
                      ? "5km Forest Walkway & 38m Observation Tower"
                      : "Tản Bộ Cung Đường Đan 5km & Tháp Vọng Cảnh"}
                  </h4>
                  <p className="text-xs md:text-sm text-on-surface/75 font-light leading-relaxed">
                    {isEn
                      ? "Catch early morning sunbeams piercing cajeput branches, inhale essential forest aromas, and take in the 360° panoramic horizon from the 38m observation summit."
                      : "Đón ánh nắng ban mai rọi xiên qua kẽ lá tràm, hít thở bầu không khí ngát hương tinh dầu rừng và phóng tầm mắt bao quát toàn vùng ngập nước từ đài cao 38m."}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6">
                <div className="relative z-10 w-9 h-9 bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  02
                </div>
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-primary font-bold">
                    10:00 - 11:30
                  </span>
                  <h4 className="font-serif-luxury text-lg md:text-xl text-on-surface mt-1 mb-1.5 font-semibold">
                    {isEn
                      ? "Sampan Glide Over Duckweed & X-Bridge Visit"
                      : "Chèo Xuồng Ba Lá Lướt Thảm Bèo Cám & Thăm Cầu Chữ X"}
                  </h4>
                  <p className="text-xs md:text-sm text-on-surface/75 font-light leading-relaxed">
                    {isEn
                      ? "Drift with gentle rowing strokes over emerald duckweeds and pause to capture pure moments beside blooming water lilies at the scenic X-bridge."
                      : "Thả hồn theo nhịp chèo xuồng của thôn nữ miền Tây trên thảm bèo xanh biếc và dừng chân ghi lại khoảnh khắc thanh khiết bên đầm hoa súng nở rộ."}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6">
                <div className="relative z-10 w-9 h-9 bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  03
                </div>
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-primary font-bold">
                    12:00 - 14:00
                  </span>
                  <h4 className="font-serif-luxury text-lg md:text-xl text-on-surface mt-1 mb-1.5 font-semibold">
                    {isEn
                      ? "Lakeside Southern Heritage Luncheon"
                      : "Ẩm Thực Khẩn Hoang Miệt Vườn Bên Hồ"}
                  </h4>
                  <p className="text-xs md:text-sm text-on-surface/75 font-light leading-relaxed">
                    {isEn
                      ? "Feast on iconic culinary treats: straw-roasted snakehead fish in tender lotus wraps and steaming wild sesbania hotpot at the riverside pavilion."
                      : "Thưởng thức mâm cơm di sản: Cá lóc nướng trui cuộn lá sen non, lẩu mắm cá linh bông điên điển nghi ngút khói bên nhà hàng thủy tạ ven sông."}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-6">
                <div className="relative z-10 w-9 h-9 bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  04
                </div>
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-primary font-bold">
                    14:30 - 17:00
                  </span>
                  <h4 className="font-serif-luxury text-lg md:text-xl text-on-surface mt-1 mb-1.5 font-semibold">
                    {isEn
                      ? "Cable Boat Cruise & Flocks Roosting at Sunset"
                      : "Du Thuyền Cáp Kéo & Ngắm Đàn Chim Về Tổ"}
                  </h4>
                  <p className="text-xs md:text-sm text-on-surface/75 font-light leading-relaxed">
                    {isEn
                      ? "Glide silently on electric cable ferries to Bird Island and Crescent Lake, marveling at thousands of white herons circling home in rosy twilight."
                      : "Lướt êm bằng thuyền cáp không tiếng ồn đến Đảo Chim và Hồ Bán Nguyệt, chiêm ngưỡng cảnh tượng hàng ngàn cánh cò trắng liệng về tổ trong hoàng hôn thẫm tím."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-on-surface/70 italic">
                {isEn
                  ? "Includes local eco-guide & private chartered boat"
                  : "Bao gồm hướng dẫn viên sinh thái địa phương & thuyền riêng"}
              </span>
              <button
                onClick={() => handleBookExperience("Tour Trọn Gói 1 Ngày Chạm Sâu Di Sản")}
                className="px-6 py-3.5 bg-primary text-white text-xs font-bold uppercase tracking-[0.18em] rounded-none hover:bg-[#48692c] transition-colors cursor-pointer"
              >
                {isEn ? "REGISTER THIS TOUR" : "Đăng Ký Tour Này"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: NEWSLETTER / ĐĂNG KÝ NHẬN ƯU ĐÃI (Dải Xanh Ô-liu #608a3d) */}
      <section className="w-full bg-[#608a3d] text-white py-16 md:py-20 text-left" id="dat-ngay">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-serif-luxury text-sm tracking-[0.22em] text-khaki-gold uppercase block mb-3 font-semibold">
                Eco Sanctuary Privileges
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white uppercase tracking-[0.06em] mb-4">
                {isEn ? "Receive Privileges & Tailored Itineraries" : "Nhận Đặc Quyền & Lịch Trình Riêng Tư"}
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl font-light leading-relaxed">
                {isEn
                  ? "Sign up for our exclusive high-water season guide, lotus blooming updates, and seasonal privileges at Tan Lap Floating Village."
                  : "Đăng ký để nhận cẩm nang mùa nước nổi độc quyền, cập nhật thời điểm hoa súng nở và những ưu đãi giới hạn cho hành trình nghỉ dưỡng tại Làng Nổi Tân Lập."}
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterSubmitted ? (
                <div className="p-6 bg-white/10 border border-white/30 text-white">
                  <p className="font-medium text-sm">
                    {isEn
                      ? "✓ Thank you for registering! The itinerary guide has been sent to your email."
                      : "✓ Cảm ơn bạn! Cẩm nang lịch trình đã được gửi đến email của bạn."}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row w-full max-w-md gap-0"
                >
                  <input
                    required
                    type="email"
                    placeholder={isEn ? "YOUR EMAIL ADDRESS" : "ĐỊA CHỈ EMAIL CỦA BẠN"}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-5 py-4 bg-white text-charcoal-vintage placeholder:text-gray-400 text-xs font-sans tracking-[0.15em] uppercase border-0 focus:ring-2 focus:ring-white rounded-none"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-khaki-gold hover:bg-white text-charcoal-vintage font-bold text-xs tracking-[0.18em] uppercase transition-colors rounded-none shrink-0"
                  >
                    {isEn ? "SEND NOW" : "GỬI NGAY"}
                  </button>
                </form>
              )}
              <p className="text-[11px] text-white/75 mt-3 tracking-wide font-light">
                {isEn
                  ? "We respect your privacy completely. Unsubscribe anytime."
                  : "Chúng tôi tôn trọng quyền riêng tư của bạn tuyệt đối. Hủy đăng ký bất kỳ lúc nào."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
