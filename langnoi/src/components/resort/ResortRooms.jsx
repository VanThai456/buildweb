export default function ResortRooms({ currentLang, onOpenBooking }) {
  const rooms = [
    {
      name: currentLang === 'vi' ? 'Phòng Đôi View Rừng Sông Tầng Cao' : 'High-Floor River & Forest View Double',
      tag: currentLang === 'vi' ? 'Tầng 5 - 8 • Hạng Sang Nhất' : 'Floors 5-8 • Luxury View',
      tagColor: 'bg-melaleuca-canopy text-primary-fixed',
      price: '850.000đ',
      unit: currentLang === 'vi' ? '/ đêm' : '/ night',
      image: '/images/resort/room-double-highfloor.jpg',
      specs: currentLang === 'vi' ? '32m² • 1 Giường King 1m8 • 2 Người lớn' : '32m² • 1 King Bed • 2 Adults',
      features: [
        currentLang === 'vi' ? 'Ban công riêng đón gió lộng' : 'Private scenic balcony',
        currentLang === 'vi' ? 'Bồn tắm ngâm thảo mộc view rừng' : 'Herbal soaking tub overlooking canopy',
        currentLang === 'vi' ? 'Smart TV, minibar, trà & cafe miễn phí' : 'Smart TV, minibar & free tea/coffee',
      ],
      roomType: 'Phòng Đôi Tầng Cao (850k/đêm)',
    },
    {
      name: currentLang === 'vi' ? 'Phòng Đôi Ban Công View Vườn Tràm' : 'Cajeput Garden Balcony Double',
      tag: currentLang === 'vi' ? 'Tầng 2 - 4 • Được Chọn Nhiều Nhất' : 'Floors 2-4 • Best Seller',
      tagColor: 'bg-forest-moss text-white',
      price: '750.000đ',
      unit: currentLang === 'vi' ? '/ đêm' : '/ night',
      image: '/images/resort/room-double-garden.jpg',
      specs: currentLang === 'vi' ? '28m² • 1 Giường Queen 1m6 • 2 Người lớn' : '28m² • 1 Queen Bed • 2 Adults',
      features: [
        currentLang === 'vi' ? 'Ban công với bàn ghế mây thư giãn' : 'Balcony with rustic wicker seating',
        currentLang === 'vi' ? 'Vòi sen đứng tăng áp cao cấp' : 'High-pressure rain shower',
        currentLang === 'vi' ? 'Bàn trang điểm và bàn trà gỗ mộc' : 'Timber vanity & tea desk',
      ],
      roomType: 'Phòng Đôi Vườn Tràm (750k/đêm)',
    },
    {
      name: currentLang === 'vi' ? 'Phòng Đơn Tiêu Chuẩn View Sông' : 'Standard Riverview Single Room',
      tag: currentLang === 'vi' ? 'Tầng 2 - 5 • Tiết Kiệm & Tiện Nghi' : 'Floors 2-5 • Great Value',
      tagColor: 'bg-stream-jade/25 border border-stream-jade/40 text-melaleuca-canopy',
      price: '550.000đ',
      unit: currentLang === 'vi' ? '/ đêm' : '/ night',
      image: '/images/resort/room-single-standard.jpg',
      specs: currentLang === 'vi' ? '20m² • 1 Giường Đơn 1m4 • 1 Người lớn' : '20m² • 1 Single Bed • 1 Adult',
      features: [
        currentLang === 'vi' ? 'Cửa sổ kịch trần đón gió mát tự nhiên' : 'Floor-to-ceiling panoramic window',
        currentLang === 'vi' ? 'Bàn làm việc yên tĩnh cho khách công tác' : 'Quiet desk ideal for remote work',
        currentLang === 'vi' ? 'Điều hòa 2 chiều và wifi tốc độ cao' : 'Climate control & high-speed Wi-Fi',
      ],
      roomType: 'Phòng Đơn Tiêu Chuẩn (550k/đêm)',
    },
    {
      name: currentLang === 'vi' ? 'Phòng Gia Đình 3 Người (Triple Room)' : 'Spacious Family Triple Room',
      tag: currentLang === 'vi' ? 'Tầng 3 - 6 • Không Gian Rộng Rãi' : 'Floors 3-6 • Family Suite',
      tagColor: 'bg-alluvial-earth text-white',
      price: '1.050.000đ',
      unit: currentLang === 'vi' ? '/ đêm' : '/ night',
      image: '/images/resort/room-family-triple.jpg',
      specs: currentLang === 'vi' ? '38m² • 1 Giường King + 1 Giường Đơn • 3-4 Khách' : '38m² • 1 King + 1 Single • 3-4 Guests',
      features: [
        currentLang === 'vi' ? 'Không gian sinh hoạt ấm cúng cho cả nhà' : 'Cozy open layout for parents & kids',
        currentLang === 'vi' ? 'Sofa góc tiếp khách thư thái' : 'Comfortable corner lounge sofa',
        currentLang === 'vi' ? 'Ban công đôi view toàn cảnh rốn tràm' : 'Dual balcony with expansive forest views',
      ],
      roomType: 'Phòng Gia Đình Triple (1.050k/đêm)',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-tranquil-sand" id="phong-nghi">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
              <span className="w-8 h-[2px] bg-forest-moss"></span>
              <span>{currentLang === 'vi' ? 'Nghỉ Ngơi Giữa Thiên Nhiên' : 'Comfortable Eco-Living'}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight">
              {currentLang === 'vi' ? 'Bộ Sưu Tập Phòng Khách Sạn View Rừng' : 'Forest-View Room Collection'}
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-base leading-relaxed">
            {currentLang === 'vi'
              ? 'Tất cả các phòng đều được trang bị máy lạnh, wifi tốc độ cao, phòng tắm riêng hiện đại và cửa sổ kịch trần hướng ra thiên nhiên hoang sơ.'
              : 'Each room is thoughtfully outfitted with climate control, high-speed Wi-Fi, private bathroom, and floor-to-ceiling wetland views.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                  />
                  <span className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm ${room.tagColor}`}>
                    {room.tag}
                  </span>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl text-xs font-medium">
                    {room.specs}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-melaleuca-canopy font-bold">
                      {room.name}
                    </h3>
                    <div className="shrink-0">
                      <span className="font-serif text-2xl font-bold text-forest-moss">
                        {room.price}
                      </span>
                      <span className="text-xs text-on-surface-variant ml-1">{room.unit}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-sm text-on-surface-variant mb-6 border-t border-forest-moss/10 pt-4">
                    {room.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-stream-jade text-base" data-icon="check_circle">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex gap-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking(`Đặt phòng: ${room.roomType}`)}
                  className="w-full py-3.5 rounded-full bg-melaleuca-canopy hover:bg-forest-moss text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{currentLang === 'vi' ? 'Đặt Phòng Này' : 'Book This Room'}</span>
                  <span className="material-symbols-outlined text-base" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
