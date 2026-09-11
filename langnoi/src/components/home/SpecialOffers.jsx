import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SpecialOffers({ onOpenBooking, currentLang }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const navigate = useNavigate();

  const baseUrl = import.meta.env.BASE_URL || '/';

  // 8 Unique, Rich & Crystal-Sharp Offers for Tan Lap
  const offers = [
    {
      id: 'wedding',
      title: currentLang === 'vi' ? 'ĐÁM CƯỚI CỔ TÍCH TRÊN SÔNG' : 'FAIRYTALE RIVER WEDDING',
      desc:
        currentLang === 'vi'
          ? 'Gói tiệc cưới ngoài trời lãng mạn giữa vườn hoa súng nở rộ ngát hương và không gian sông nước thanh bình.'
          : 'Romantic outdoor wedding package amidst blooming lotus and serene water lily wetland sanctuary.',
      image: `${baseUrl}images/cau-chu-x.jpg`,
      action: () => navigate('/khach-san-am-thuc'),
    },
    {
      id: 'boarding-pass',
      title: currentLang === 'vi' ? 'BOARDING PASS PRIVILEGES' : 'BOARDING PASS PRIVILEGES',
      desc:
        currentLang === 'vi'
          ? 'Giảm ngay 20% và tặng xuồng ba lá khi xuất trình vé máy bay đến TP.HCM hoặc Long An trong vòng 5 ngày.'
          : 'Enjoy 20% privilege off and a complimentary sampan cruise when presenting your flight boarding pass.',
      image: `${baseUrl}images/promo-tickets.jpg`,
      action: () => navigate('/bang-gia-khuyen-mai'),
    },
    {
      id: 'healing-2d1n',
      title: currentLang === 'vi' ? 'KỲ NGHỈ CHỮA LÀNH 2N1Đ' : '2D1N HEALING ESCAPE',
      desc:
        currentLang === 'vi'
          ? 'Trọn gói phòng nghỉ ven sông, xuồng chèo ngắm chim buổi sớm và ẩm thực đồng quê thuần tự nhiên.'
          : 'All-inclusive riverside suite, sunrise sampan birdwatching safari, and organic countryside cuisine.',
      image: `${baseUrl}images/cheo-xuong.jpg`,
      action: () => {
        if (onOpenBooking) {
          onOpenBooking('Gói Nghỉ Dưỡng Chữa Lành 2N1Đ');
        } else {
          navigate('/dat-phong');
        }
      },
    },
    {
      id: 'bbq-sunset',
      title: currentLang === 'vi' ? 'TIỆC BBQ HOÀNG HÔN BÊN HỒ' : 'LAKESIDE SUNSET BBQ',
      desc:
        currentLang === 'vi'
          ? 'Thưởng thức cá lóc nướng trui rơm lá sen non, ếch đồng nướng lu bên lửa trại tịch mịch giữa rừng già.'
          : 'Savor straw-grilled snakehead fish, river prawns, and fragrant campfire barbecue in the quiet forest.',
      image: `${baseUrl}images/pricing/promo-culinary.jpg`,
      action: () => navigate('/khach-san-am-thuc'),
    },
    {
      id: 'tower-conquest',
      title: currentLang === 'vi' ? 'THÁP VỌNG CẢNH 38M' : '38M CANOPY TOWER',
      desc:
        currentLang === 'vi'
          ? 'Chinh phục ngọn tháp cao nhất Đồng Tháp Mười, phóng tầm mắt 360 độ ngắm trọn biển tràm ngút ngàn mây trời.'
          : 'Ascend the tallest observation tower in Dong Thap Muoi for breathtaking 360-degree wetland vistas.',
      image: `${baseUrl}images/thap-quan-sat.jpg`,
      action: () => navigate('/tham-quan'),
    },
    {
      id: 'team-building',
      title: currentLang === 'vi' ? 'TEAM BUILDING & GALA DI SẢN' : 'TEAM BUILDING & GALA',
      desc:
        currentLang === 'vi'
          ? 'Sân bãi trò chơi dân gian sông nước, âm thanh ánh sáng chuyên nghiệp và sảnh tiệc nổi sức chứa 350 khách.'
          : 'Folk river games, professional sound & lighting, and floating banquet hall for up to 350 guests.',
      image: `${baseUrl}images/pricing/promo-group.jpg`,
      action: () => navigate('/bang-gia-khuyen-mai'),
    },
    {
      id: 'trail-walkway',
      title: currentLang === 'vi' ? 'ĐƯỜNG MÒN XUYÊN LÕI 5KM' : '5KM PRIMAL BOARDWALK',
      desc:
        currentLang === 'vi'
          ? 'Cung đường xi măng ngoạn mục dài nhất Việt Nam uốn lượn sâu vào lòng rừng tràm rợp bóng thanh tịnh.'
          : 'Vietnam’s most iconic elevated concrete boardwalk meandering deep into the pristine cajuput canopy.',
      image: `${baseUrl}images/con-duong-dan.jpg`,
      action: () => navigate('/tham-quan'),
    },
    {
      id: 'sanctuary-resort',
      title: currentLang === 'vi' ? 'BIỆT THỰ SINH THÁI MẶT NƯỚC' : 'WATERSIDE ECO VILLAS',
      desc:
        currentLang === 'vi'
          ? 'Nghỉ ngơi tại các phòng nghỉ tiện nghi chuẩn di sản, hòa mình vào không gian sinh thái nguyên sơ.'
          : 'Rest in heritage suites nestled directly over pristine waterways with unhurried natural tranquility.',
      image: `${baseUrl}images/hotel-exterior.jpg`,
      action: () => navigate('/khach-san-am-thuc'),
    },
  ];

  // Dynamically detect screen width for smooth sliding
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const maxIndex = Math.max(0, offers.length - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-24 bg-linen-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title & Subtitle in Centered Ana Mandara Aesthetics */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-charcoal-vintage font-normal tracking-wide mb-3">
            {currentLang === 'vi' ? 'Cùng Bạn Hưởng Thụ Cuộc Sống' : 'Embrace The Serenity of Life'}
          </h2>
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.24em] text-charcoal-muted font-medium">
            {currentLang === 'vi'
              ? 'KHÁM PHÁ NHỮNG ƯU ĐÃI ĐẶC BIỆT TỪ CHÚNG TÔI'
              : 'EXPLORE OUR EXCLUSIVE SANCTUARY PRIVILEGES'}
          </p>
        </div>

        {/* Carousel Container with Left & Right Arrow Controls */}
        <div className="relative">
          {/* Left Chevron Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous offers"
            className="absolute -left-3 sm:-left-5 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border border-charcoal-vintage/20 bg-white shadow-lg flex items-center justify-center text-charcoal-vintage hover:bg-olive-moss hover:text-white hover:border-olive-moss transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg" data-icon="chevron_left">
              chevron_left
            </span>
          </button>

          {/* Right Chevron Button */}
          <button
            onClick={handleNext}
            aria-label="Next offers"
            className="absolute -right-3 sm:-right-5 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border border-charcoal-vintage/20 bg-white shadow-lg flex items-center justify-center text-charcoal-vintage hover:bg-olive-moss hover:text-white hover:border-olive-moss transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg" data-icon="chevron_right">
              chevron_right
            </span>
          </button>

          {/* Overflow Hidden Window */}
          <div className="overflow-hidden w-full py-2">
            {/* Smooth Sliding Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 md:px-4"
                >
                  <div
                    onClick={offer.action}
                    className="group relative aspect-[3/4] overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#e2e2d0]/60"
                  >
                    {/* Crystal-Sharp High-Resolution Image */}
                    <img
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      src={offer.image}
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80';
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 group-hover:from-black/90 transition-all duration-300"></div>

                    {/* Card Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-center text-white z-10">
                      <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.14em] md:tracking-[0.18em] text-white font-normal mb-3 leading-snug drop-shadow-md">
                        {offer.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 font-light tracking-wide mb-4 line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                        {offer.desc}
                      </p>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#d6dfb8] font-medium group-hover:text-white group-hover:underline transition-colors">
                        {currentLang === 'vi' ? 'Chi tiết ưu đãi >' : 'View Privileges >'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Pagination Dots (Ana Mandara Style) */}
        <div className="flex items-center justify-center gap-2.5 mt-12">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`transition-all rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-3 h-3 border border-charcoal-vintage/80 bg-charcoal-vintage'
                  : 'w-2 h-2 border border-charcoal-vintage/40 bg-transparent hover:border-charcoal-vintage'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
