export default function TourExperiences({ currentLang, onOpenBooking }) {
  const experiences = [
    {
      title: currentLang === 'vi' ? 'Chèo Xuồng Ba Lá Lướt Trên Thảm Bèo Cám' : 'Rowing Wooden Sampan on Duckweed',
      category: currentLang === 'vi' ? 'Xuồng chèo tay' : 'Hand-rowed sampan',
      tag: currentLang === 'vi' ? 'Trải nghiệm đặc sắc nhất' : 'Most Popular Experience',
      tagColor: 'bg-melaleuca-canopy text-primary-fixed',
      price: '80.000đ',
      unit: currentLang === 'vi' ? '/ khách' : '/ person',
      duration: currentLang === 'vi' ? '30 - 45 Phút' : '30 - 45 Mins',
      image: '/images/thamquan/experience-sampan.jpg',
      description:
        currentLang === 'vi'
          ? 'Trải nghiệm đậm chất Nam Bộ cùng nhân viên chèo tay luồn lách qua các rạch nhỏ rợp bóng mát rượi, ngắm thảm bèo cám dạt theo mạn thuyền và hít thở mùi hương tinh dầu tràm nồng nàn.'
          : 'Gliding silently on a traditional three-plank wooden sampan rowed by a local, meandering through secluded shady channels covered by emerald water ferns.',
      serviceName: 'Chèo xuồng ba lá trên bèo cám',
    },
    {
      title: currentLang === 'vi' ? 'Thuyền Cáp Kéo Mui Trần Ngắm Cảnh' : 'Silent Cable-Pulled Open-Air Boat',
      category: currentLang === 'vi' ? 'Hệ thống cáp kéo' : 'Electric cable boat',
      tag: currentLang === 'vi' ? 'Du thuyền sinh thái xanh' : 'Eco Green Boat',
      tagColor: 'bg-stream-jade/20 border border-stream-jade/30 text-melaleuca-canopy',
      price: '70.000đ',
      unit: currentLang === 'vi' ? '/ khách' : '/ person',
      duration: currentLang === 'vi' ? 'Khoảng 30 Phút' : 'Approx 30 Mins',
      image: '/images/thamquan/experience-cable-boat.jpg',
      description:
        currentLang === 'vi'
          ? 'Hệ thống thuyền cáp kéo ngầm tân tiến vận hành êm ả dưới mặt nước, hoàn toàn không tiếng động cơ và không phát thải khí, giúp bảo tồn tối đa không gian tĩnh lặng tự nhiên của chim muông.'
          : 'An advanced whisper-quiet electric submerged cable boat system gliding effortlessly without engine rumble, preserving pristine tranquility for wildlife.',
      serviceName: 'Thuyền cáp kéo mui trần sinh thái',
    },
    {
      title: currentLang === 'vi' ? 'Hoạt Động Đổ Lợp, Dỡ Chà Bắt Cá Đồng' : 'Traditional Mudfish Trap & Bush Fishing',
      category: currentLang === 'vi' ? 'Nông dân tập sự' : 'Mekong Farmer Experience',
      tag: currentLang === 'vi' ? 'Trải nghiệm dân dã' : 'Rustic Life Activity',
      tagColor: 'bg-alluvial-earth text-white',
      price: '150.000đ',
      unit: currentLang === 'vi' ? '/ khách' : '/ person',
      duration: currentLang === 'vi' ? '60 - 90 Phút' : '60 - 90 Mins',
      image: '/images/thamquan/experience-fishing.jpg',
      description:
        currentLang === 'vi'
          ? 'Khoác lên mình bộ đồ bà ba mộc mạc, tự tay dỡ chà bắt cá lóc, cá trê vàng trên đồng nước ngập và thưởng thức mẻ cá nướng rơm thơm nức ngay tại chỗ bên bờ rạch.'
          : 'Don rustic ao ba ba garments, participate in lifting traditional fish traps, catch wild river mudfish, and roast fresh catch over straw right on the bank.',
      serviceName: 'Dỡ chà bắt cá & Nướng cá tại chỗ',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-tranquil-sand relative" id="experiences">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-3">
            <span className="w-6 h-[2px] bg-forest-moss"></span>
            <span>{currentLang === 'vi' ? 'Nếp Sống Miệt Vườn Nam Bộ' : 'Mekong Riverway Lifestyle'}</span>
            <span className="w-6 h-[2px] bg-forest-moss"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight mb-4">
            {currentLang === 'vi' ? 'Trải Nghiệm Sông Nước & Dân Dã Đặc Sắc' : 'Signature Riverway & Countryside Experiences'}
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            {currentLang === 'vi'
              ? 'Chạm tay vào làn nước mát rượi, luồn qua từng con rạch tràm cổ thụ và cảm nhận đời sống hào sảng của người dân miền châu thổ.'
              : 'Touch cool freshwater ripples, cruise underneath towering cajeput branches, and embrace the warm Southern river hospitality.'}
          </p>
        </div>

        {/* Experience Cards Horizontal Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-forest-moss/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden mb-6 h-56">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                  />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${exp.tagColor}`}>
                    {exp.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-forest-moss uppercase tracking-wider">
                    {exp.category}
                  </span>
                  <span className="font-serif text-melaleuca-canopy font-bold text-lg">
                    {exp.price} <span className="text-xs font-normal text-on-surface-variant">{exp.unit}</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl text-melaleuca-canopy font-bold mb-3">
                  {exp.title}
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-forest-moss/10 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" data-icon="schedule">
                    schedule
                  </span>
                  {exp.duration}
                </span>
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking(exp.serviceName)}
                  className="px-4 py-2 rounded-full bg-forest-moss/10 hover:bg-forest-moss hover:text-white text-forest-moss text-xs font-bold transition-colors cursor-pointer"
                >
                  {currentLang === 'vi' ? 'Đặt dịch vụ' : 'Book Service'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Activities Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest/90 rounded-2xl p-6 border border-forest-moss/10 flex items-center gap-5 shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-forest-moss/10 text-forest-moss flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl" data-icon="phishing">
                phishing
              </span>
            </div>
            <div>
              <h4 className="font-serif text-lg text-melaleuca-canopy font-bold mb-1">
                {currentLang === 'vi' ? 'Câu Cá Giải Trí Giữa Rừng Tràm' : 'Recreational Forest Fishing'}
              </h4>
              <p className="text-xs md:text-sm text-on-surface-variant mb-2">
                {currentLang === 'vi'
                  ? 'Dịch vụ cho thuê cần câu, mồi câu giải trí ven hồ hoặc trên các chòi lá tĩnh lặng giữa hương tràm dịu ngát.'
                  : 'Renting fishing rods & bait at lakeside thatched huts surrounded by aromatic cajeput breeze.'}
              </p>
              <span className="text-xs text-forest-moss font-bold">
                {currentLang === 'vi' ? 'Chỉ từ 50.000đ / cần câu' : 'From 50.000đ / fishing rod'}
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest/90 rounded-2xl p-6 border border-forest-moss/10 flex items-center gap-5 shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-stream-jade/15 text-forest-moss flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl" data-icon="pedal_bike">
                pedal_bike
              </span>
            </div>
            <div>
              <h4 className="font-serif text-lg text-melaleuca-canopy font-bold mb-1">
                {currentLang === 'vi' ? 'Thuê Xe Đạp Địa Hình Khám Phá Bìa Rừng' : 'Trail Cycling Along Forest Perimeters'}
              </h4>
              <p className="text-xs md:text-sm text-on-surface-variant mb-2">
                {currentLang === 'vi'
                  ? 'Đạp xe thong dong hít thở ion âm tươi mát buổi sáng trên đường đan len lỏi giữa rừng tràm và đồng lúa trổ đòng.'
                  : 'Breeze peacefully along boundary trails between dense cajeput woods and fragrant rice paddies.'}
              </p>
              <span className="text-xs text-forest-moss font-bold">
                {currentLang === 'vi' ? '50.000đ / xe / 2 giờ' : '50.000đ / bike / 2 hours'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
