import { useNavigate } from 'react-router-dom';

export default function ServiceTiles({ onOpenBooking, currentLang }) {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL || '/';

  const tiles = [
    // Top Row: 2 large cards (PHÒNG NGHỈ & ẨM THỰC)
    {
      id: 'phong-nghi',
      title: currentLang === 'vi' ? 'PHÒNG NGHỈ' : 'ACCOMMODATION',
      desc:
        currentLang === 'vi'
          ? 'Hệ thống phòng nghỉ và biệt thự sinh thái view trọn rừng tràm cổ thụ, đầy đủ tiện nghi tiêu chuẩn nghỉ dưỡng cao cấp...'
          : 'Eco-sanctuary suites and villas overlooking ancient cajeput forests with bespoke hospitality amenities...',
      image: `${baseUrl}images/room-suite.jpg`,
      height: 'h-[380px] md:h-[460px]',
      titleSize: 'text-3xl md:text-4xl lg:text-5xl',
      action: () => navigate('/khach-san-am-thuc'),
    },
    {
      id: 'am-thuc',
      title: currentLang === 'vi' ? 'ẨM THỰC' : 'CUISINE & DINING',
      desc:
        currentLang === 'vi'
          ? 'Thưởng thức tinh hoa ẩm thực miền Tây sông nước với cá lóc nướng trui, lẩu mắm bông súng giữa đầm sen thanh bình...'
          : 'Savor authentic Southern riverway delicacies, grilled snakehead fish and wild water lily specialties...',
      image: `${baseUrl}images/resort/restaurant-ambience.jpg`,
      height: 'h-[380px] md:h-[460px]',
      titleSize: 'text-3xl md:text-4xl lg:text-5xl',
      action: () => navigate('/khach-san-am-thuc'),
    },
    // Bottom Row: 3 cards (CHĂM SÓC SỨC KHỎE & SPA, TIỆC CƯỚI, HỘI HỌP)
    {
      id: 'spa',
      title: currentLang === 'vi' ? 'CHĂM SÓC SỨC KHỎE & SPA' : 'WELLNESS & SPA',
      desc:
        currentLang === 'vi'
          ? 'Liệu trình phục hồi sức khỏe bằng tinh dầu tràm tự nhiên, ngâm chân thảo mộc và thanh lọc tâm hồn ven rạch...'
          : 'Holistic rejuvenation rituals with pure local cajeput essential oils, herbal baths, and riverside tranquility...',
      image: `${baseUrl}images/room-balcony.jpg`,
      height: 'h-[360px] md:h-[420px]',
      titleSize: 'text-2xl md:text-3xl',
      action: () => navigate('/tham-quan'),
    },
    {
      id: 'tiec-cuoi',
      title: currentLang === 'vi' ? 'TIỆC CƯỚI' : 'WEDDINGS',
      desc:
        currentLang === 'vi'
          ? 'Không gian tiệc cưới ngoài trời lãng mạn giữa vườn hoa súng và rừng tràm ngập nước, ghi dấu ngày hạnh phúc nhất...'
          : 'A dreamy destination wedding sanctuary surrounded by emerald cajeput foliage and blooming water lilies...',
      image: `${baseUrl}images/cau-chu-x.jpg`,
      height: 'h-[360px] md:h-[420px]',
      titleSize: 'text-2xl md:text-3xl',
      action: () => navigate('/khach-san-am-thuc'),
    },
    {
      id: 'hoi-hop',
      title: currentLang === 'vi' ? 'HỘI HỌP' : 'MEETINGS & MICE',
      desc:
        currentLang === 'vi'
          ? 'Không gian hội nghị và sự kiện hoàn hảo được trang bị những thiết bị hiện đại giữa cảnh quan thiên nhiên nguyên bản...'
          : 'State-of-the-art conference and event facilities surrounded by tranquil pristine wilderness...',
      image: `${baseUrl}images/pricing/promo-group.jpg`,
      height: 'h-[360px] md:h-[420px]',
      titleSize: 'text-2xl md:text-3xl',
      action: () => navigate('/khach-san-am-thuc'),
    },
  ];

  const renderCard = (tile) => (
    <div
      key={tile.id}
      onClick={tile.action}
      className={`group relative ${tile.height} overflow-hidden cursor-pointer select-none`}
    >
      {/* Background Image with Zoom on Hover */}
      <img
        alt={tile.title}
        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        src={tile.image}
      />

      {/* Dynamic Overlay: Subtle dark normally, deeper on hover */}
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/60 transition-colors duration-500"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8 text-white z-10">
        {/* Title: Always visible, slides up slightly on hover */}
        <h3
          className={`font-serif-luxury ${tile.titleSize} uppercase tracking-[0.2em] md:tracking-[0.24em] text-white font-normal drop-shadow-md transition-transform duration-500 group-hover:-translate-y-1.5`}
        >
          {tile.title}
        </h3>

        {/* Description: Hidden by default, reveals on hover */}
        <p className="font-sans text-xs md:text-sm font-light text-white/95 max-w-sm mt-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 line-clamp-2 md:line-clamp-3">
          {tile.desc}
        </p>

        {/* 'XEM THÊM' Button: Hidden by default, reveals on hover */}
        <div className="mt-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <span className="inline-block px-5 py-2 border border-white text-white text-xs font-medium uppercase tracking-[0.16em] hover:bg-white hover:text-charcoal-vintage transition-colors shadow-sm">
            {currentLang === 'vi' ? 'XEM THÊM' : 'LEARN MORE'}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white">
      {/* Top Row: 2 large cards (PHÒNG NGHỈ & ẨM THỰC) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-white">
        {tiles.slice(0, 2).map(renderCard)}
      </div>

      {/* Bottom Row: 3 cards (CHĂM SÓC SỨC KHỎE & SPA, TIỆC CƯỚI, HỘI HỌP) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-white">
        {tiles.slice(2, 5).map(renderCard)}
      </div>
    </section>
  );
}
