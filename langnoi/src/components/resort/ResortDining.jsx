export default function ResortDining({ currentLang, onOpenBooking }) {
  const dishes = [
    {
      name: currentLang === 'vi' ? 'Cá Lóc Nướng Trui Cuộn Lá Sen' : 'Straw-Grilled Snakehead in Young Lotus Leaf',
      price: '180.000đ - 220.000đ',
      tag: currentLang === 'vi' ? 'Món Ngon Biểu Tượng' : 'Chef Signature',
      tagColor: 'bg-alluvial-earth text-white',
      image: '/images/resort/dish-grilled-fish.jpg',
      desc:
        currentLang === 'vi'
          ? 'Cá lóc đồng nướng rơm nguyên con thơm lừng, thịt cá ngọt đậm cuốn cùng lá sen non Tân Lập chấm mắm me chua cay mặn ngọt.'
          : 'Wild mudfish roasted over straw embers, wrapped in fresh young wetland lotus leaves with spicy tamarind dipping sauce.',
    },
    {
      name: currentLang === 'vi' ? 'Lẩu Chua Cá Linh Bông Điên Điển' : 'Linh Fish & Sesban Flower Sour Hotpot',
      price: '250.000đ - 320.000đ',
      tag: currentLang === 'vi' ? 'Mùa Nước Nổi' : 'High Water Season',
      tagColor: 'bg-forest-moss text-white',
      image: '/images/resort/dish-sour-soup.jpg',
      desc:
        currentLang === 'vi'
          ? 'Hương vị trứ danh miền Tây với cá linh non mềm ngọt xương, bông điên điển vàng rực, bông súng và nước lẩu me chua thanh giải nhiệt.'
          : 'Mekong staple featuring tender freshwater fish simmered with golden sesban flowers and water lily stems in tangy broth.',
    },
    {
      name: currentLang === 'vi' ? 'Chuột Đồng Nướng Lu Da Giòn' : 'Crispy Roasted Field Delicacy',
      price: '150.000đ / phần',
      tag: currentLang === 'vi' ? 'Đặc Sản Mùa Gặt' : 'Harvest Special',
      tagColor: 'bg-melaleuca-canopy text-primary-fixed',
      image: '/images/resort/dish-roasted-meat.jpg',
      desc:
        currentLang === 'vi'
          ? 'Chuột đồng ăn lúa thơm béo ngậy, tẩm ướp ngũ vị hương rồi nướng trong lu đất cho lớp da vàng giòn rụm, thịt thơm ngọt lạ miệng.'
          : 'Paddy-fed field game marinated with traditional spices and roasted inside clay urns to golden crisp perfection.',
    },
    {
      name: currentLang === 'vi' ? 'Ốc Bươu Rừng Nướng Tiêu Xanh' : 'Grilled River Snails with Green Peppercorns',
      price: '120.000đ / đĩa',
      tag: currentLang === 'vi' ? 'Món Nhậu Khoái Khẩu' : 'Local Favorite',
      tagColor: 'bg-stream-jade/30 text-melaleuca-canopy',
      image: '/images/resort/dish-grilled-snails.jpg',
      desc:
        currentLang === 'vi'
          ? 'Ốc bươu tự nhiên bắt tại lung tràm, thịt ốc béo giòn sần sật quyện với nước sốt tiêu xanh Phú Quốc cay nồng kích thích vị giác.'
          : 'Fresh plump wetland snails grilled with aromatic green peppercorn sauce and scallion oil.',
    },
    {
      name: currentLang === 'vi' ? 'Gà Thả Vườn Hấp Lá Chúc' : 'Steamed Free-Range Chicken with Kaffir Leaf',
      price: '320.000đ / con',
      tag: currentLang === 'vi' ? 'Thơm Lừng Tinh Dầu' : 'Herbal Scented',
      tagColor: 'bg-alluvial-earth/80 text-white',
      image: '/images/resort/dish-steamed-chicken.jpg',
      desc:
        currentLang === 'vi'
          ? 'Gà ta thả vườn Long An thịt dai ngọt tự nhiên, hấp cùng lá chúc thơm nức mũi, chấm muối ớt tiêu chanh mộc mạc mà khó quên.'
          : 'Locally raised free-range chicken steamed with intensely aromatic wild kaffir lime leaves and chili lime salt.',
    },
    {
      name: currentLang === 'vi' ? 'Cá Trê Vàng Kho Nghệ Niêu Đất' : 'Yellow Catfish Simmered with Fresh Turmeric',
      price: '140.000đ / niêu',
      tag: currentLang === 'vi' ? 'Đậm Vị Quê Nhà' : 'Homestyle Classic',
      tagColor: 'bg-forest-moss/80 text-white',
      image: '/images/resort/dish-simmered-catfish.jpg',
      desc:
        currentLang === 'vi'
          ? 'Cá trê vàng óng đồng quê kho tộ đất cùng củ nghệ tươi giã nhuyễn, tiêu sọ cay ấm, chan với cơm trắng nóng hổi ăn kèm rau luộc.'
          : 'Golden river catfish slow-braised in clay pots with ground fresh turmeric and whole peppercorns.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-tranquil-sand" id="am-thuc">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
              <span className="w-8 h-[2px] bg-forest-moss"></span>
              <span>{currentLang === 'vi' ? 'Ẩm Thực Khẩn Hoang Nam Bộ' : 'Authentic Mekong Cuisine'}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight">
              {currentLang === 'vi'
                ? 'Nhà Hàng Sinh Thái Làng Nổi Tân Lập'
                : 'Tan Lap Eco-Restaurant by the River'}
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-base leading-relaxed">
            {currentLang === 'vi'
              ? 'Thưởng ngoạn gió sông lồng lộng và thưởng thức những đặc sản khẩn hoang tươi rói được chế biến theo bí quyết dân dã người bản địa.'
              : 'Feel the refreshing river breeze while savoring harvest specialties prepared according to time-honored local recipes.'}
          </p>
        </div>

        {/* Large Restaurant Atmosphere Feature Banner */}
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden border border-melaleuca-canopy/10 shadow-lg mb-16 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 h-72 sm:h-96 overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="/images/resort/restaurant-ambience.jpg"
              alt="Traditional open-air riverside restaurant with bamboo roof"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10">
            <span className="px-3.5 py-1.5 rounded-full bg-forest-moss/10 text-forest-moss text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
              {currentLang === 'vi' ? 'Không Gian Mở Bên Rạch Tràm' : 'Open-air Waterside Dining'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-melaleuca-canopy font-bold mb-4">
              {currentLang === 'vi' ? 'Đậm Đà Tình Đất Phương Nam' : 'Hearty Flavors of the South'}
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
              {currentLang === 'vi'
                ? 'Được dựng từ tre nứa mộc mạc và mái lợp lá dừa nước truyền thống, nhà hàng đón trọn luồng gió mát lành từ rạch tràm tự nhiên. Sức chứa rộng rãi lên đến hơn 500 khách cùng lúc, lý tưởng cho các buổi tiệc đoàn thể, họp mặt gia đình ấm cúng.'
                : 'Crafted from bamboo and thatched water coconut palms, the dining pavilion welcomes pure wetland breeze. With seating for up to 500 guests, it is ideal for family reunions and corporate tours.'}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-melaleuca-canopy">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-stream-jade text-base" data-icon="soup_kitchen">
                  soup_kitchen
                </span>
                {currentLang === 'vi' ? 'Nông sản & thủy sản hữu cơ' : 'Organic farm & fish'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-stream-jade text-base" data-icon="groups">
                  groups
                </span>
                {currentLang === 'vi' ? 'Sức chứa 500+ khách' : '500+ Seating Capacity'}
              </span>
            </div>
          </div>
        </div>

        {/* 6 Signature Dishes Grid */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-melaleuca-canopy mb-2">
            {currentLang === 'vi' ? '6 Món Ngon Khuyên Thử Tại Làng Nổi Tân Lập' : '6 Must-Try Mekong Specialties'}
          </h3>
          <p className="text-sm text-on-surface-variant">
            {currentLang === 'vi'
              ? 'Nguyên liệu thu hái tự nhiên theo mùa nước nổi, giữ trọn vị tươi nguyên thuần phác.'
              : 'Locally harvested in season to preserve pristine freshness and authentic natural sweetness.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {dishes.map((dish, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                  />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${dish.tagColor}`}>
                    {dish.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-melaleuca-canopy">
                      {dish.name}
                    </h4>
                  </div>
                  <div className="text-xs font-bold text-forest-moss mb-3">{dish.price}</div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{dish.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Group Booking Banner */}
        <div className="bg-melaleuca-canopy text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <h4 className="font-serif text-2xl font-bold text-wetland-cream mb-2">
              {currentLang === 'vi'
                ? 'Quý khách đi đoàn gia đình hoặc công ty trên 10 người?'
                : 'Traveling with family or corporate group over 10 guests?'}
            </h4>
            <p className="text-sm text-wetland-cream/85 leading-relaxed">
              {currentLang === 'vi'
                ? 'Liên hệ đặt trước thực đơn set menu để được chuẩn bị chu đáo, miễn phí phòng tiệc riêng và nhận ưu đãi giảm 10% tổng hóa đơn.'
                : 'Pre-book customized group set menus for dedicated dining arrangements, complimentary private pavilion, and a 10% bill discount.'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking && onOpenBooking('Đặt bàn ăn Nhà hàng Sinh Thái (Đoàn >10 khách)')}
            className="px-8 py-3.5 rounded-full bg-alluvial-earth hover:bg-tertiary-fixed text-melaleuca-canopy font-bold text-sm shadow-md transition-colors whitespace-nowrap cursor-pointer"
          >
            {currentLang === 'vi' ? 'Đặt Bàn Ăn Ngay' : 'Reserve Group Table'}
          </button>
        </div>
      </div>
    </section>
  );
}
