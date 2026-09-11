import { useState } from 'react';

export default function PricingTableTabs({ currentLang, onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('tours');

  const tourPrices = [
    {
      name: currentLang === 'vi' ? 'Vé cổng tham quan cơ bản' : 'General Admission Ticket',
      time: currentLang === 'vi' ? 'Không giới hạn trong ngày' : 'Unlimited daily access',
      adult: '70.000đ',
      child: currentLang === 'vi' ? 'Miễn phí' : 'Free',
      note: currentLang === 'vi' ? 'Cung đường đan 5km, Tháp 38m, Cầu chữ X, Đảo chim' : '5km walkway, 38m tower, X-bridge, Bird haven',
      icon: 'confirmation_number',
    },
    {
      name: currentLang === 'vi' ? 'Chèo xuồng ba lá trên bèo cám' : 'Wooden Sampan Duckweed Tour',
      time: currentLang === 'vi' ? '30 - 45 phút / tuyến' : '30 - 45 mins / trip',
      adult: '80.000đ',
      child: '40.000đ',
      note: currentLang === 'vi' ? 'Kèm áo phao và người chèo lái kinh nghiệm địa phương' : 'Life vest & local guide rowing included',
      icon: 'kayaking',
    },
    {
      name: currentLang === 'vi' ? 'Thuyền cáp kéo mui trần ngắm cảnh' : 'Silent Cable Boat Cruise',
      time: currentLang === 'vi' ? '30 phút / chuyến' : '30 mins / trip',
      adult: '70.000đ',
      child: '35.000đ',
      note: currentLang === 'vi' ? 'Hệ thống kéo ngầm không tiếng động cơ, an toàn tuyệt đối' : 'Whisper-quiet submerged cable, 100% safe',
      icon: 'directions_boat',
    },
    {
      name: currentLang === 'vi' ? 'Dỡ chà bắt cá & Nướng rơm tại chỗ' : 'Fish Trap Lifting & Straw Grilling',
      time: currentLang === 'vi' ? '60 - 90 phút (Đặt trước)' : '60 - 90 mins (Reservation)',
      adult: '150.000đ',
      child: '100.000đ',
      note: currentLang === 'vi' ? 'Bao gồm đồ bà ba, dụng cụ và nướng cá thưởng thức' : 'Includes bà ba outfit, catch & straw barbecue',
      icon: 'set_meal',
    },
    {
      name: currentLang === 'vi' ? 'Thuê xe đạp địa hình khám phá bìa rừng' : 'All-terrain Bicycle Rental',
      time: currentLang === 'vi' ? '2 Giờ' : '2 Hours',
      adult: '50.000đ',
      child: '50.000đ',
      note: currentLang === 'vi' ? 'Kèm nón bảo hộ và bản đồ chỉ dẫn lối đi sinh thái' : 'Helmet & trail orientation map included',
      icon: 'directions_bike',
    },
    {
      name: currentLang === 'vi' ? 'Thuê cần câu cá giải trí ven hồ' : 'Lakeside Recreational Fishing',
      time: currentLang === 'vi' ? 'Trọn buổi (Nửa ngày)' : 'Half Day (4 hours)',
      adult: '50.000đ',
      child: '50.000đ',
      note: currentLang === 'vi' ? 'Bao gồm cần câu tre, phao và mồi câu cơ bản' : 'Bamboo rod, float and bait included',
      icon: 'phishing',
    },
  ];

  const hotelRooms = [
    {
      name: currentLang === 'vi' ? 'Phòng Đơn View Sông' : 'Standard Riverview Single',
      specs: currentLang === 'vi' ? '20m² • 1 Giường Đơn 1m4 • 1 Khách' : '20m² • 1 Single Bed • 1 Guest',
      price: '550.000đ',
      unit: currentLang === 'vi' ? '/ đêm' : '/ night',
      features: [
        currentLang === 'vi' ? 'View sông rạch thoáng mát' : 'Cool river breeze view',
        currentLang === 'vi' ? 'Wifi tốc độ cao & máy lạnh' : 'High-speed Wi-Fi & AC',
        currentLang === 'vi' ? 'Miễn phí vé cổng tham quan' : 'Free forest admission',
      ],
    },
    {
      name: currentLang === 'vi' ? 'Phòng Đôi Ban Công View Tràm' : 'Cajeput Garden Double Balcony',
      specs: currentLang === 'vi' ? '28m² • 1 Giường Queen 1m6 • 2 Khách' : '28m² • 1 Queen Bed • 2 Guests',
      price: '750.000đ',
      unit: currentLang === 'vi' ? '/ đêm' : '/ night',
      features: [
        currentLang === 'vi' ? 'Ban công riêng đón gió mát' : 'Private balcony with chairs',
        currentLang === 'vi' ? 'Bàn trang điểm và trà miễn phí' : 'Vanity desk & complimentary tea',
        currentLang === 'vi' ? 'Tặng 2 vé cổng cung đường 5km' : 'Includes 2 admission tickets',
      ],
    },
    {
      name: currentLang === 'vi' ? 'Phòng Đôi Tầng Cao Panorama' : 'High-Floor Panorama Luxury',
      specs: currentLang === 'vi' ? '32m² • 1 Giường King 1m8 • 2 Khách' : '32m² • 1 King Bed • 2 Guests',
      price: '850.000đ',
      unit: currentLang === 'vi' ? '/ đêm' : '/ night',
      features: [
        currentLang === 'vi' ? 'Tầng 5 - 8 ngắm toàn cảnh rừng' : 'Floors 5-8 canopy panorama',
        currentLang === 'vi' ? 'Bồn tắm ngâm thảo mộc view rừng' : 'Herbal soaking tub',
        currentLang === 'vi' ? 'Ăn sáng buffet & vé tham quan' : 'Breakfast buffet & free tickets',
      ],
    },
    {
      name: currentLang === 'vi' ? 'Phòng Triple Gia Đình' : 'Family Triple Room Suite',
      specs: currentLang === 'vi' ? '38m² • 1 King + 1 Đơn • 3-4 Khách' : '38m² • 1 King + 1 Single • 3-4 Guests',
      price: '1.050.000đ',
      unit: currentLang === 'vi' ? '/ đêm' : '/ night',
      features: [
        currentLang === 'vi' ? 'Không gian rộng rãi cho cả nhà' : 'Spacious family layout',
        currentLang === 'vi' ? 'Sofa tiếp khách và ban công đôi' : 'Lounge sofa & dual balcony',
        currentLang === 'vi' ? 'Tặng vé cổng trọn gói cả nhà' : 'Free full family admission',
      ],
    },
  ];

  const diningServices = [
    {
      name: currentLang === 'vi' ? 'Set Menu Cơm Đồng Quê (Tân Lập)' : 'Traditional Countryside Set Menu',
      price: currentLang === 'vi' ? '150.000đ - 250.000đ / suất' : '150k - 250k / person',
      desc:
        currentLang === 'vi'
          ? 'Thực đơn 5 - 7 món gồm cá lóc nướng trui lá sen, lẩu chua cá linh bông điên điển, cá kho tộ, rau luộc kho quẹt và cơm gạo huyết rồng.'
          : '5 to 7 authentic courses: grilled snakehead, sour fish hotpot, caramelized fish in clay pot, and wild vegetables.',
      badge: currentLang === 'vi' ? 'Tối thiểu 2 khách' : 'Min 2 guests',
    },
    {
      name: currentLang === 'vi' ? 'Tiệc Nướng BBQ Ven Rạch & Lửa Trại' : 'Riverside BBQ & Bonfire Gathering',
      price: currentLang === 'vi' ? '250.000đ - 350.000đ / suất' : '250k - 350k / person',
      desc:
        currentLang === 'vi'
          ? 'Hải sản sông nước, gà thả vườn nướng than, sườn ướp lá chúc, khoai bắp nướng rơm và không gian lửa trại giao lưu ấm cúng.'
          : 'Charcoal-grilled river seafood, free-range chicken, kaffir pork ribs, straw-roasted corn and fireside gathering.',
      badge: currentLang === 'vi' ? 'Phục vụ buổi tối' : 'Evening service',
    },
    {
      name: currentLang === 'vi' ? 'Thuê Bãi Cắm Trại & Lều Dã Ngoại' : 'Glamping Lawn & Waterproof Tent Rental',
      price: currentLang === 'vi' ? '150.000đ / lều / đêm' : '150k / tent / night',
      desc:
        currentLang === 'vi'
          ? 'Bao gồm lều 2 - 4 người cao cấp chống thấm nước, bạt cách nhiệt, đèn pin dã ngoại và vị trí bãi cỏ ven rạch tràm thoáng mát.'
          : 'Includes waterproof 2-4 person tent, insulated mat, camping lantern, and riverside lawn pitch.',
      badge: currentLang === 'vi' ? 'Trọn gói dã ngoại' : 'All-in camp gear',
    },
    {
      name: currentLang === 'vi' ? 'Biểu Diễn Đờn Ca Tài Tử Nam Bộ' : 'UNESCO Traditional Folk Music Performance',
      price: currentLang === 'vi' ? '1.200.000đ / suất (90 phút)' : '1.200.000đ / 90 mins',
      desc:
        currentLang === 'vi'
          ? 'Biểu diễn trực tiếp bởi các nghệ nhân đờn kìm, đờn tranh và ca sĩ tài tử bản địa trong suốt bữa tiệc hoặc bên đống lửa trại.'
          : 'Live performance by local master instrumentalists playing traditional moon lutes and zithers during dinner.',
      badge: currentLang === 'vi' ? 'Dành cho đoàn riêng' : 'Private booking',
    },
  ];

  return (
    <section className="py-20 bg-tranquil-sand" id="bang-gia">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
            <span className="w-8 h-[2px] bg-forest-moss"></span>
            <span>{currentLang === 'vi' ? 'Biểu Phí Chi Tiết' : 'Official Rate Schedule'}</span>
            <span className="w-8 h-[2px] bg-forest-moss"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight mb-4">
            {currentLang === 'vi' ? 'Bảng Giá Dịch Vụ Niêm Yết Chi Tiết' : 'Transparent Service Rate Card'}
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            {currentLang === 'vi'
              ? 'Minh bạch 100%, không phụ phí ẩn. Quý khách có thể lựa chọn từng dịch vụ riêng lẻ hoặc kết hợp linh hoạt theo nhu cầu.'
              : '100% transparent with no hidden surcharges. Enjoy complete freedom to choose single services or mix and match.'}
          </p>
        </div>

        {/* Tab Switcher Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-surface-container-lowest border border-forest-moss/15 shadow-sm max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('tours')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'tours'
                  ? 'bg-melaleuca-canopy text-white shadow-md'
                  : 'text-on-surface-variant hover:text-melaleuca-canopy'
              }`}
            >
              <span className="material-symbols-outlined text-base" data-icon="tour">
                tour
              </span>
              <span>{currentLang === 'vi' ? 'Vé Tham Quan & Phương Tiện' : 'Admission & Watercraft'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('rooms')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'rooms'
                  ? 'bg-melaleuca-canopy text-white shadow-md'
                  : 'text-on-surface-variant hover:text-melaleuca-canopy'
              }`}
            >
              <span className="material-symbols-outlined text-base" data-icon="hotel">
                hotel
              </span>
              <span>{currentLang === 'vi' ? 'Phòng Khách Sạn & Lưu Trú' : 'Hotel Rooms'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('dining')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'dining'
                  ? 'bg-melaleuca-canopy text-white shadow-md'
                  : 'text-on-surface-variant hover:text-melaleuca-canopy'
              }`}
            >
              <span className="material-symbols-outlined text-base" data-icon="restaurant">
                restaurant
              </span>
              <span>{currentLang === 'vi' ? 'Ẩm Thực & Dịch Vụ Đoàn' : 'Dining & Group Services'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Tours Table */}
        {activeTab === 'tours' && (
          <div className="bg-surface-container-lowest rounded-2xl border border-forest-moss/15 shadow-sm overflow-hidden animate-fadeIn">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-tranquil-sand border-b border-forest-moss/10 text-melaleuca-canopy font-bold text-sm md:text-base">
                    <th className="py-4 px-6">{currentLang === 'vi' ? 'Hạng Mục Dịch Vụ' : 'Service Item'}</th>
                    <th className="py-4 px-6">{currentLang === 'vi' ? 'Quy Cách / Thời Gian' : 'Duration / Specs'}</th>
                    <th className="py-4 px-6">{currentLang === 'vi' ? 'Vé Người Lớn' : 'Adult Rate'}</th>
                    <th className="py-4 px-6">{currentLang === 'vi' ? 'Trẻ Em (<1m2)' : 'Child Rate (<1.2m)'}</th>
                    <th className="py-4 px-6 text-right">{currentLang === 'vi' ? 'Quyền Lợi Kèm Theo' : 'Included Perks'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-moss/10 text-sm text-on-surface-variant">
                  {tourPrices.map((row, idx) => (
                    <tr key={idx} className="hover:bg-tranquil-sand/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-melaleuca-canopy flex items-center gap-2">
                        <span className="material-symbols-outlined text-forest-moss text-lg" data-icon={row.icon}>
                          {row.icon}
                        </span>
                        <span>{row.name}</span>
                      </td>
                      <td className="py-4 px-6">{row.time}</td>
                      <td className="py-4 px-6 font-bold text-melaleuca-canopy text-base">{row.adult}</td>
                      <td className="py-4 px-6 font-bold text-forest-moss text-base">{row.child}</td>
                      <td className="py-4 px-6 text-right text-xs leading-relaxed">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Hotel Rooms Grid */}
        {activeTab === 'rooms' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {hotelRooms.map((room, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-forest-moss/15 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg font-bold text-melaleuca-canopy mb-1">
                    {room.name}
                  </h3>
                  <div className="text-xs text-on-surface-variant mb-4">{room.specs}</div>
                  <div className="mb-6">
                    <span className="font-serif text-2xl font-bold text-forest-moss">
                      {room.price}
                    </span>
                    <span className="text-xs text-on-surface-variant ml-1">{room.unit}</span>
                  </div>
                  <ul className="space-y-2 text-xs text-on-surface-variant mb-6 border-t border-forest-moss/10 pt-4">
                    {room.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-stream-jade text-sm" data-icon="check_circle">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking(`Đặt phòng: ${room.name}`)}
                  className="w-full py-2.5 rounded-full bg-melaleuca-canopy hover:bg-forest-moss text-white text-xs font-semibold transition cursor-pointer"
                >
                  {currentLang === 'vi' ? 'Đặt Phòng Này' : 'Book Room'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Dining & Group Services */}
        {activeTab === 'dining' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {diningServices.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-7 rounded-2xl border border-forest-moss/15 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-xl font-bold text-melaleuca-canopy">
                      {item.name}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-forest-moss/10 text-forest-moss text-xs font-semibold shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-forest-moss mb-3">{item.price}</div>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{item.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking(`Dịch vụ: ${item.name}`)}
                  className="w-fit px-6 py-2.5 rounded-full border border-forest-moss text-forest-moss hover:bg-forest-moss hover:text-white text-xs font-bold transition cursor-pointer"
                >
                  {currentLang === 'vi' ? 'Đặt Dịch Vụ Này' : 'Reserve Service'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
