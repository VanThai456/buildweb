export default function TourItinerary({ currentLang }) {
  const daySteps = [
    {
      time: currentLang === 'vi' ? '08:30 - 10:00 • Sáng sớm trong trẻo' : '08:30 - 10:00 • Morning Crisp Air',
      title: currentLang === 'vi' ? 'Dạo Bước Cung Đường Đan 5km & Check-in Tháp 38m' : 'Strolling 5km Trail & 38m Tower Vista',
      desc: currentLang === 'vi'
        ? 'Đến Tân Lập, tản bộ dưới vòm tràm mát rượi, leo lên tháp quan sát đón gió lành và ngắm toàn cảnh rừng từ trên cao.'
        : 'Arrive at the sanctuary, take a walk under dense cajeput arches, ascend the viewing tower to take in breathtaking panoramas.',
      dotColor: 'bg-forest-moss',
    },
    {
      time: currentLang === 'vi' ? '10:15 - 11:30 • Trải nghiệm sông nước' : '10:15 - 11:30 • Waterway Adventure',
      title: currentLang === 'vi' ? 'Chèo Xuồng Ba Lá Lướt Trên Thảm Bèo Cám' : 'Rowing Sampan Over Duckweed Blankets',
      desc: currentLang === 'vi'
        ? 'Nghiêng mình theo nhịp chèo tay của người bản xứ lướt êm qua các lung sen, rạch bèo xanh ngắt màu ngọc lục bảo.'
        : 'Sway gently with the rhythm of the wooden oar, drifting through emerald water ferns and silent canals.',
      dotColor: 'bg-stream-jade',
    },
    {
      time: currentLang === 'vi' ? '11:45 - 13:30 • Ẩm thực miệt vườn' : '11:45 - 13:30 • Riverside Delicacies',
      title: currentLang === 'vi' ? 'Thưởng Thức Bữa Trưa Đặc Sản Ven Hồ' : 'Authentic Mekong Lakeside Lunch',
      desc: currentLang === 'vi'
        ? 'Cá lóc nướng trui cuốn lá sen non, lẩu chua cá linh bông điên điển và ốc bươu hấp tiêu gừng ấm nồng.'
        : 'Savor straw-roasted mudfish wrapped in young lotus leaves, sour soup with dien dien flowers, and steamed river snails.',
      dotColor: 'bg-alluvial-earth',
    },
    {
      time: currentLang === 'vi' ? '14:00 - 16:30 • Chiều êm dịu' : '14:00 - 16:30 • Gentle Afternoon',
      title: currentLang === 'vi' ? 'Cầu Chữ X, Đảo Chim & Mua Sắm Đặc Sản' : 'X-Bridge, Bird Haven & Local Souvenirs',
      desc: currentLang === 'vi'
        ? 'Dạo chơi bên đầm sen cầu chữ X, đón đàn chim sải cánh về tổ trước khi khởi hành về lại TP.HCM.'
        : 'Pose on the scenic X-bridge, watch wild waterbirds winging home at sunset before returning comfortably to HCMC.',
      dotColor: 'bg-melaleuca-canopy',
    },
  ];

  const overnightSteps = [
    {
      time: currentLang === 'vi' ? 'Ngày 1 - Chiều: Nhận phòng & Dỡ chà bắt cá' : 'Day 1 - PM: Check-in & Bush Fishing',
      title: currentLang === 'vi' ? 'Check-in Khách Sạn Làng Nổi & Hoạt Động Nông Dân' : 'Hotel Check-in & Farmer Experience',
      desc: currentLang === 'vi'
        ? 'Nhận phòng hướng mặt hồ, tham gia dỡ chà bắt cá đồng, tắm mát và nghỉ ngơi giữa khí hậu thuần khiết.'
        : 'Check in to a lake-view room, try lifting river fish traps, and relax amidst pristine oxygen-rich air.',
      dotColor: 'bg-forest-moss',
    },
    {
      time: currentLang === 'vi' ? 'Ngày 1 - Tối: Đêm rừng huyền diệu' : 'Day 1 - Night: Bonfire & Folk Songs',
      title: currentLang === 'vi' ? 'Tiệc Nướng BBQ Sân Vườn & Đờn Ca Tài Tử' : 'Lakeside BBQ Dinner & Traditional Folk Music',
      desc: currentLang === 'vi'
        ? 'Thưởng thức hải sản đồng nướng than củi, lắng nghe giai điệu đờn ca tài tử Nam Bộ và ngắm bầu trời sao đêm.'
        : 'Enjoy charcoal-grilled river specialties, listen to soulful UNESCO-recognized Đờn Ca Tài Tử, and gaze at night stars.',
      dotColor: 'bg-alluvial-earth',
    },
    {
      time: currentLang === 'vi' ? 'Ngày 2 - Sáng: Bình minh sương sớm' : 'Day 2 - AM: Morning Mist Cycling',
      title: currentLang === 'vi' ? 'Đạp Xe Rừng Tràm & Xuồng Ba Lá Bèo Cám' : 'Sunrise Trail Ride & Dawn Sampan Cruise',
      desc: currentLang === 'vi'
        ? 'Đạp xe qua con đường bìa rừng ngập sương sớm 06:00, đi xuồng ba lá lướt bèo khi mặt nước phẳng lặng như gương.'
        : 'Pedal along misty forest borders at 6:00 AM, board a quiet morning canoe when water reflections are mirrored glass.',
      dotColor: 'bg-mist-emerald',
    },
    {
      time: currentLang === 'vi' ? 'Ngày 2 - Trưa: Kết nối tâm linh' : 'Day 2 - Noon: Monastery Visit',
      title: currentLang === 'vi' ? 'Viếng Thiền Viện Trúc Lâm & Trả Phòng' : 'Pilgrimage to Zen Monastery & Farewell',
      desc: currentLang === 'vi'
        ? 'Dùng bữa trưa thanh đạm, ghé thăm ngôi thiền viện thanh tịnh lân cận trước khi kết thúc kỳ nghỉ tái tạo năng lượng.'
        : 'Enjoy wholesome cuisine, visit the grand nearby Zen sanctuary, and head home fully refreshed and revitalized.',
      dotColor: 'bg-melaleuca-canopy',
    },
  ];

  const tips = [
    {
      icon: 'apparel',
      bgColor: 'bg-stream-jade/15 text-forest-moss',
      title: currentLang === 'vi' ? 'Trang Phục Gợi Ý' : 'Recommended Attire',
      desc: currentLang === 'vi'
        ? 'Nên mặc trang phục nhẹ, thoáng khí, mang giày thể thao êm chân vì cung đường bộ dài 5km. Chuẩn bị thêm nón rộng vành, kính râm và kem chống muỗi sinh học.'
        : 'Wear light breathable clothes and comfortable sneakers for the 5km walk. Bring broad-rimmed hats, sunglasses, and eco-friendly bug spray.',
    },
    {
      icon: 'calendar_month',
      bgColor: 'bg-alluvial-earth/20 text-timeless-bark',
      title: currentLang === 'vi' ? 'Thời Điểm Đẹp Nhất' : 'Best Visiting Season',
      desc: currentLang === 'vi'
        ? 'Mùa nước nổi từ tháng 9 đến tháng 12 là thời khắc rực rỡ nhất khi thảm bèo xanh kín mặt nước và các đàn chim di cư quay về làm tổ. Khung giờ chụp ảnh đẹp nhất là 07:00 - 09:00 sáng.'
        : 'High flood season from September to December offers lush green duckweed carpets and migratory waterfowl. Ideal golden photography light is between 7:00 and 9:00 AM.',
    },
    {
      icon: 'nest_eco_leaf',
      bgColor: 'bg-melaleuca-canopy/10 text-melaleuca-canopy',
      title: currentLang === 'vi' ? 'Quy Định Bảo Tồn' : 'Conservation Etiquette',
      desc: currentLang === 'vi'
        ? 'Làng Nổi Tân Lập là khu bảo tồn sinh thái ngập nước nhạy cảm. Quý khách vui lòng không xả rác, không bẻ cành tràm, không dùng loa kéo công suất lớn gây ảnh hưởng đến nơi cư trú của chim.'
        : 'Tan Lap is a sensitive wetland reserve. Please dispose of trash responsibly, protect trees, and avoid loud speaker sound systems to respect bird habitats.',
    },
  ];

  return (
    <>
      <section className="py-20 md:py-28 bg-tranquil-sand" id="itinerary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
                <span className="w-8 h-[2px] bg-forest-moss"></span>
                <span>{currentLang === 'vi' ? 'Tối Ưu Thời Gian Của Bạn' : 'Optimized Travel Plan'}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight">
                {currentLang === 'vi' ? 'Gợi Ý Lịch Trình Khám Phá Lý Tưởng' : 'Recommended Travel Itineraries'}
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-md text-base leading-relaxed">
              {currentLang === 'vi'
                ? 'Được thiết kế tỉ mỉ bởi hướng dẫn viên bản địa giúp bạn tận hưởng trọn vẹn vẻ đẹp hoang sơ mà không bị vội vã.'
                : 'Carefully curated by local eco-guides so you immerse deeply in natural splendor without feeling rushed.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Timeline 1: 1 Ngày Trọn Vẹn */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-forest-moss/10 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-forest-moss/10 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-forest-moss/10 text-forest-moss flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-melaleuca-canopy">
                      {currentLang === 'vi' ? 'Lịch Trình 1: Khám Phá Trong Ngày' : '1-Day Complete Tour'}
                    </h3>
                    <span className="text-xs text-on-surface-variant">
                      {currentLang === 'vi' ? 'Thích hợp cho chuyến đi cuối tuần từ TP.HCM' : 'Perfect weekend gateway from HCMC'}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-forest-moss text-white text-xs font-semibold">
                  07:30 - 16:30
                </span>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-forest-moss/20">
                {daySteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 sm:gap-5 pl-8">
                    <div className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full ${step.dotColor} ring-4 ring-wetland-cream`}></div>
                    <div>
                      <span className="text-xs font-semibold text-forest-moss">{step.time}</span>
                      <h4 className="font-serif text-base text-melaleuca-canopy font-bold mt-0.5">
                        {step.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline 2: Kỳ Nghỉ Sinh Thái 2N1Đ */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-forest-moss/10 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-forest-moss/10 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-alluvial-earth/20 text-timeless-bark flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-melaleuca-canopy">
                      {currentLang === 'vi' ? 'Lịch Trình 2: Kỳ Nghỉ Sinh Thái 2N1Đ' : '2D1N Nature Retreat'}
                    </h3>
                    <span className="text-xs text-on-surface-variant">
                      {currentLang === 'vi' ? 'Chữa lành và tận hưởng đêm rừng huyền ảo' : 'Overnight healing & stargazing'}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-alluvial-earth text-white text-xs font-semibold">
                  {currentLang === 'vi' ? '2 Ngày 1 Đêm' : '2 Days 1 Night'}
                </span>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-forest-moss/20">
                {overnightSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 sm:gap-5 pl-8">
                    <div className={`absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full ${step.dotColor} ring-4 ring-wetland-cream`}></div>
                    <div>
                      <span className="text-xs font-semibold text-forest-moss">{step.time}</span>
                      <h4 className="font-serif text-base text-melaleuca-canopy font-bold mt-0.5">
                        {step.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Cẩm Nang & Lưu Ý Khi Trải Nghiệm */}
      <section className="py-20 bg-wetland-cream border-t border-forest-moss/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-melaleuca-canopy font-bold mb-3">
              {currentLang === 'vi' ? 'Cẩm Nang & Lưu Ý Khi Trải Nghiệm' : 'Visitor Guide & Essential Tips'}
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              {currentLang === 'vi'
                ? 'Những chuẩn bị chu đáo để chuyến đi của bạn thêm trọn vẹn và an toàn giữa môi trường đất ngập nước tự nhiên.'
                : 'Thoughtful suggestions ensuring your excursion into pristine wetlands is pleasant, safe, and respectful.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-8 rounded-2xl border border-forest-moss/10 flex flex-col items-center text-center shadow-xs"
              >
                <div className={`w-14 h-14 rounded-full ${tip.bgColor} flex items-center justify-center mb-4`}>
                  <span className="material-symbols-outlined text-2xl" data-icon={tip.icon}>
                    {tip.icon}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-melaleuca-canopy mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
