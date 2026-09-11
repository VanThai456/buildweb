export default function PricingPromos({ currentLang, onOpenBooking }) {
  const promos = [
    {
      title: currentLang === 'vi' ? 'Combo Đón Mùa Nước Nổi' : 'High Water Season Combo',
      badge: currentLang === 'vi' ? 'GIẢM 25%' : 'SAVE 25%',
      badgeColor: 'bg-error text-white',
      tag: currentLang === 'vi' ? 'HOT NHẤT MÙA NÀY' : 'TRENDING DEAL',
      image: '/images/pricing/promo-sampan.jpg',
      price: '360.000đ',
      oldPrice: '480.000đ',
      desc:
        currentLang === 'vi'
          ? 'Trọn gói vé cổng + xuồng ba lá lướt thảm bèo cám + bữa trưa đặc sản 5 món tại nhà hàng sinh thái ven rạch.'
          : 'Full package including admission, rowing sampan over duckweed carpet, and 5-course specialty lunch.',
      validity: currentLang === 'vi' ? 'Áp dụng đến 30/11/2024' : 'Valid until Nov 30, 2024',
      serviceName: 'Ưu đãi: Combo Đón Mùa Nước Nổi (360k)',
    },
    {
      title: currentLang === 'vi' ? 'Nghỉ Dưỡng Giữa Rừng Tràm' : 'Forest Canopy Staycation',
      badge: currentLang === 'vi' ? 'GIẢM 20%' : 'SAVE 20%',
      badgeColor: 'bg-forest-moss text-white',
      tag: currentLang === 'vi' ? 'ƯU ĐÃI LƯU TRÚ' : 'HOTEL SPECIAL',
      image: '/images/pricing/promo-hotel.jpg',
      price: '680.000đ',
      oldPrice: '850.000đ',
      desc:
        currentLang === 'vi'
          ? 'Áp dụng khi đặt từ 2 đêm phòng khách sạn view rừng. Tặng thêm 2 vé trải nghiệm thuyền cáp kéo mui trần.'
          : 'Applies to 2+ nights hotel stays. Includes 2 complimentary silent cable boat tour tickets.',
      validity: currentLang === 'vi' ? 'Áp dụng Thứ 2 - Thứ 6' : 'Valid Monday to Friday',
      serviceName: 'Ưu đãi: Nghỉ Dưỡng Giữa Rừng Tràm (680k/đêm)',
    },
    {
      title: currentLang === 'vi' ? 'Tặng HDV & Nón Lá Tân Lập' : 'Free Local Guide & Conical Hats',
      badge: currentLang === 'vi' ? 'QUÀ TẶNG ĐOÀN' : 'GROUP BONUS',
      badgeColor: 'bg-alluvial-earth text-white',
      tag: currentLang === 'vi' ? 'ĐOÀN TỪ 15 KHÁCH' : 'GROUPS 15+ GUESTS',
      image: '/images/pricing/promo-group.jpg',
      price: currentLang === 'vi' ? 'Miễn Phí 100%' : '100% Free Gift',
      oldPrice: '500.000đ',
      desc:
        currentLang === 'vi'
          ? 'Tặng 1 hướng dẫn viên bản địa thuyết minh suốt tuyến tham quan và tặng nón lá Tân Lập lưu niệm cho tất cả thành viên.'
          : 'Complimentary dedicated tour guide plus authentic souvenir conical hats for every group member.',
      validity: currentLang === 'vi' ? 'Cần đặt trước 3 ngày' : 'Requires 3-day advance booking',
      serviceName: 'Ưu đãi: Gói Đoàn Tặng HDV & Nón Lá',
    },
    {
      title: currentLang === 'vi' ? 'Ưu Đãi Đặt Sớm 7 Ngày' : 'Early Bird 7-Day Discount',
      badge: currentLang === 'vi' ? 'GIẢM 10%' : 'SAVE 10%',
      badgeColor: 'bg-melaleuca-canopy text-primary-fixed',
      tag: currentLang === 'vi' ? 'EARLY BIRD' : 'ADVANCE BOOKING',
      image: '/images/pricing/promo-culinary.jpg',
      price: currentLang === 'vi' ? 'Tiết kiệm tới 150k' : 'Save up to 150k',
      oldPrice: '',
      desc:
        currentLang === 'vi'
          ? 'Giảm trực tiếp 10% trên tổng hóa đơn ẩm thực và các gói combo khi thanh toán cọc trước ít nhất 7 ngày khởi hành.'
          : 'Direct 10% discount on restaurant set menus and tour combos when depositing 7 days ahead.',
      validity: currentLang === 'vi' ? 'Áp dụng quanh năm' : 'Available all year round',
      serviceName: 'Ưu đãi: Early Bird Giảm 10%',
    },
  ];

  return (
    <section className="py-20 bg-wetland-cream" id="uu-dai">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
              <span className="w-8 h-[2px] bg-forest-moss"></span>
              <span>{currentLang === 'vi' ? 'Ưu Đãi Hấp Dẫn' : 'Limited-Time Offers'}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight">
              {currentLang === 'vi' ? 'Chương Trình Khuyến Mãi Đang Diễn Ra' : 'Active Promotional Programs'}
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-base leading-relaxed">
            {currentLang === 'vi'
              ? 'Các gói ưu đãi có giới hạn thời gian, nhanh tay đặt sớm để tận hưởng kỳ nghỉ trọn vẹn với chi phí tiết kiệm nhất.'
              : 'Special seasonal deals designed for maximum savings while exploring the Mekong cajeput sanctuary.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-forest-moss/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/65 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[11px] font-medium">
                    {item.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-melaleuca-canopy mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-serif text-xl font-bold text-forest-moss">
                      {item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-xs text-on-surface-variant/70 line-through">
                        {item.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">{item.desc}</p>
                  <div className="text-[11px] text-forest-moss font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm" data-icon="event_available">
                      event_available
                    </span>
                    <span>{item.validity}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking(item.serviceName)}
                  className="w-full py-2.5 rounded-full bg-forest-moss/10 hover:bg-forest-moss hover:text-white text-forest-moss font-semibold text-xs transition-colors cursor-pointer"
                >
                  {currentLang === 'vi' ? 'Nhận Ưu Đãi Này' : 'Claim Offer'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
