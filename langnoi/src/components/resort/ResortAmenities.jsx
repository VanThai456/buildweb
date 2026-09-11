export default function ResortAmenities({ currentLang }) {
  const amenities = [
    {
      icon: 'pool',
      color: 'bg-waterway-blue/15 text-waterway-blue',
      title: currentLang === 'vi' ? 'Bể Bơi Sinh Thái Bìa Rừng' : 'Forest Edge Eco-Pool',
      desc:
        currentLang === 'vi'
          ? 'Làn nước mát lạnh bao quanh bởi rặng tràm cổ thụ rợp bóng, tạo cảm giác như hòa mình vào dòng chảy thiên nhiên bất tận.'
          : 'Refreshing waters embraced by towering cajeput trees, offering soothing immersion in wild nature.',
      tag: currentLang === 'vi' ? 'Miễn phí cho khách lưu trú' : 'Complimentary for guests',
    },
    {
      icon: 'camping',
      color: 'bg-forest-moss/15 text-forest-moss',
      title: currentLang === 'vi' ? 'Cắm Trại & Teambuilding' : 'Glamping & Outdoor Gathering',
      desc:
        currentLang === 'vi'
          ? 'Bãi cỏ xanh mướt trải dài ven rạch tràm, cho thuê lều trại chống thấm cao cấp, bếp nướng dã ngoại và hoạt động nhóm.'
          : 'Expansive lush lawn along the creek offering waterproof tent rentals, picnic grills, and group activities.',
      tag: currentLang === 'vi' ? 'Cho thuê lều trại từ 150k' : 'Tent rental from 150k',
    },
    {
      icon: 'outdoor_grill',
      color: 'bg-alluvial-earth/20 text-timeless-bark',
      title: currentLang === 'vi' ? 'Tiệc BBQ & Đờn Ca Tài Tử' : 'Lakeside BBQ & Folk Music',
      desc:
        currentLang === 'vi'
          ? 'Không gian chiếu cội ấm cúng bên ánh lửa trại, thưởng thức hải sản đồng nướng than và lắng nghe tiếng đờn kìm réo rắt.'
          : 'Cozy fireside mats, enjoying straw-roasted fish and listening to timeless soulful Southern UNESCO melodies.',
      tag: currentLang === 'vi' ? 'Phục vụ từ 18:30 hàng tối' : 'Daily from 18:30 PM',
    },
    {
      icon: 'local_bar',
      color: 'bg-stream-jade/20 text-melaleuca-canopy',
      title: currentLang === 'vi' ? 'Sky Bar Ngắm Sao Đêm' : 'Rooftop Stargazing Bar',
      desc:
        currentLang === 'vi'
          ? 'Quầy bar lộng gió trên tầng thượng khách sạn phục vụ nước dừa tươi, sinh tố nhiệt đới và ngắm toàn cảnh rừng đêm lung linh.'
          : 'Breezy rooftop lounge serving fresh coconut water, tropical juices, and wide night sky vistas.',
      tag: currentLang === 'vi' ? 'Mở cửa đến 22:30' : 'Open until 22:30 PM',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-wetland-cream" id="tien-ich">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
            <span className="w-6 h-[2px] bg-forest-moss"></span>
            <span>{currentLang === 'vi' ? 'Dịch Vụ & Trải Nghiệm Đi Kèm' : 'Resort Highlights & Experiences'}</span>
            <span className="w-6 h-[2px] bg-forest-moss"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight mb-4">
            {currentLang === 'vi' ? 'Tiện Ích Nghỉ Dưỡng Giữa Lòng Sinh Thái' : 'Eco-Resort Amenities & Leisure'}
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            {currentLang === 'vi'
              ? 'Kết hợp nghỉ ngơi thư thái với các hoạt động giải trí lành mạnh hòa mình vào thiên nhiên hoang dã.'
              : 'Seamlessly blend quiet relaxation with wholesome outdoor recreation amidst untouched nature.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-7 rounded-2xl border border-forest-moss/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-3xl" data-icon={item.icon}>
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-melaleuca-canopy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-forest-moss/10 text-xs font-semibold text-forest-moss">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
