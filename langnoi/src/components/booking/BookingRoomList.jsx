export default function BookingRoomList({ selectedRoomId, onSelectRoom, currentLang = "vi" }) {
  const isEn = currentLang === "en";

  const rooms = [
    {
      id: "double-river",
      title: isEn ? "High-Floor Double Room • Forest & River View" : "Phòng Đôi Tầng Cao View Rừng Sông",
      image: "/images/booking/room-double-river.jpg",
      badge: isEn ? "360° Forest & River View" : "View Rừng & Sông 360°",
      badgeStyle: "bg-forest-moss/90 text-white",
      price: 850000,
      formattedPrice: "850.000 đ",
      originalPrice: "1.050.000 đ",
      floor: isEn ? "Floor 5 – 8" : "Tầng 5 – 8",
      bed: isEn ? "1 King Bed (1.8m × 2m)" : "1 Giường King (1m8 × 2m)",
      area: "32 m²",
      view: isEn ? "Panoramic view of cajeput canopy & Vam Co stream" : "View Panorama rừng tràm & rạch Vàm Cỏ",
      guestsText: isEn ? "2 Adults + 1 Child under 6" : "2 Người lớn + 1 Trẻ em dưới 6 tuổi",
      perks: isEn
        ? [
            "Complimentary daily buffet breakfast at lakeside restaurant",
            "Free 02 tickets to 5km Cajeput Forest Trail (valued at 140,000 VND)",
            "Free bottled water, lotus herbal tea & coffee in room",
            "Free access to outdoor eco-pool",
          ]
        : [
            "01 bữa sáng buffet đặc sản Nam Bộ tại nhà hàng ven hồ",
            "Tặng 02 vé tham quan Cầu xuyên rừng tràm (trị giá 140.000đ)",
            "Miễn phí nước suối, trà thảo mộc hoa sen & cà phê tại phòng",
            "Miễn phí sử dụng bể bơi sinh thái ngoài trời",
          ],
      urgencyBadge: isEn ? "Only 2 rooms left today" : "Chỉ còn 2 phòng trống hôm nay",
    },
    {
      id: "double-garden",
      title: isEn ? "Balcony Double Room • Cajeput Garden View" : "Phòng Đôi Ban Công View Vườn Tràm",
      image: "/images/booking/room-double-garden.jpg",
      badge: isEn ? "Private Balcony" : "Ban Công Riêng Biệt",
      badgeStyle: "bg-alluvial-earth text-white",
      price: 750000,
      formattedPrice: "750.000 đ",
      originalPrice: "900.000 đ",
      floor: isEn ? "Floor 2 – 4" : "Tầng 2 – 4",
      bed: isEn ? "1 Queen Bed (1.6m × 2m)" : "1 Giường Queen (1m6 × 2m)",
      area: "28 m²",
      view: isEn ? "Cajeput botanical garden & quiet lotus pond" : "View vườn tràm & đầm sen tĩnh lặng",
      guestsText: isEn ? "2 Adults" : "2 Người lớn",
      perks: isEn
        ? [
            "Complimentary Southern specialty buffet breakfast",
            "Free 02 entrance tickets to cajeput forest sanctuary",
            "Private timber balcony for sunrise & sunset viewing",
            "Complimentary bottled water & lotus herbal tea",
          ]
        : [
            "01 bữa sáng buffet đặc sản Nam Bộ",
            "Tặng 02 vé cổng tham quan rừng tràm",
            "Ban công gỗ riêng ngắm bình minh và hoàng hôn",
            "Nước suối & trà thảo mộc hoa sen miễn phí",
          ],
      urgencyBadge: isEn ? "5 rooms available" : "Còn 5 phòng trống",
    },
    {
      id: "family-suite",
      title: isEn ? "Triple Family Suite • 3 Guests" : "Phòng Gia Đình 3 Người - Triple Suite",
      image: "/images/booking/room-family-suite.jpg",
      badge: isEn ? "Family & Groups" : "Gia Đình & Nhóm Bạn",
      badgeStyle: "bg-melaleuca-canopy text-white",
      price: 1050000,
      formattedPrice: "1.050.000 đ",
      originalPrice: "1.350.000 đ",
      floor: isEn ? "Floor 6 – 8" : "Tầng 6 – 8",
      bed: isEn ? "1 King Bed + 1 Single Bed" : "1 Giường King + 1 Giường Đơn",
      area: "42 m²",
      view: isEn ? "Corner panoramic dual-aspect view of Dong Thap Muoi" : "Góc nhìn 2 mặt thoáng bao trọn Đồng Tháp Mười",
      guestsText: isEn ? "3 Adults or 2 Adults + 2 Children" : "3 Người lớn hoặc 2 Lớn + 2 Trẻ em",
      perks: isEn
        ? [
            "03 buffet breakfast servings with regional specialties",
            "Free 03 all-inclusive forest tickets",
            "Herbal bathtub overlooking flooded wetland forest",
            "Living lounge area and complimentary lotus tea minibar",
          ]
        : [
            "03 suất ăn sáng buffet đặc sản Nam Bộ",
            "Tặng 03 vé tham quan rừng tràm trọn gói",
            "Bồn tắm ngâm thảo dược view tràm ngập nước",
            "Phòng khách nhỏ và minibar trà sen miễn phí",
          ],
      urgencyBadge: isEn ? "Only 1 suite remaining" : "Chỉ còn 1 phòng duy nhất",
    },
    {
      id: "single-standard",
      title: isEn ? "Standard Single Room • River View" : "Phòng Đơn Tiêu Chuẩn View Sông",
      image: "/images/booking/room-single-standard.jpg",
      badge: isEn ? "Best Value" : "Tiết Kiệm Nhất",
      badgeStyle: "bg-forest-moss/80 text-white",
      price: 550000,
      formattedPrice: "550.000 đ",
      originalPrice: "650.000 đ",
      floor: isEn ? "Floor 2 – 3" : "Tầng 2 – 3",
      bed: isEn ? "1 Single Bed (1.4m × 2m)" : "1 Giường Đơn (1m4 × 2m)",
      area: "22 m²",
      view: isEn ? "Tranquil river delta canal view" : "View rạch nước mát mẻ",
      guestsText: isEn ? "1 Adult (+ 1 small child)" : "1 Người lớn (+ 1 bé nhỏ)",
      perks: isEn
        ? [
            "01 Southern buffet breakfast serving",
            "Free 01 forest entrance ticket",
            "Quiet work desk & high-speed Wi-Fi",
          ]
        : [
            "01 suất ăn sáng buffet Nam Bộ",
            "Tặng 01 vé cổng tham quan rừng tràm",
            "Bàn làm việc yên tĩnh & wifi tốc độ cao",
          ],
      urgencyBadge: isEn ? "3 rooms available" : "Còn 3 phòng trống",
    },
  ];

  return (
    <div id="room-selection" className="space-y-6">
      <div className="flex items-center justify-between border-b border-forest-moss/10 pb-3">
        <div>
          <h2 className="font-serif text-2xl font-bold text-melaleuca-canopy">
            {isEn ? "1. Select Accommodation" : "1. Chọn Hạng Phòng Lưu Trú"}
          </h2>
          <p className="text-xs text-gray-600 mt-0.5">
            {isEn
              ? "All rates include forest entrance ticket, buffet breakfast, and eco-resort amenities"
              : "Giá đã bao gồm vé tham quan rừng tràm, ăn sáng buffet và các tiện ích sinh thái"}
          </p>
        </div>
        <span className="text-xs text-forest-moss font-bold bg-forest-moss/10 px-3 py-1 rounded-full hidden sm:inline-block">
          {isEn ? "4 available room categories" : "4 hạng phòng khả dụng"}
        </span>
      </div>

      <div className="space-y-5">
        {rooms.map((room) => {
          const isSelected = selectedRoomId === room.id;

          return (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room)}
              className={`bg-white rounded-2xl border-2 p-5 transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-forest-moss shadow-lg ring-2 ring-forest-moss/20"
                  : "border-forest-moss/15 shadow-sm hover:border-forest-moss/40 hover:shadow-md"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                {/* Room Image */}
                <div className="md:col-span-4 relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-2.5 left-2.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm ${room.badgeStyle}`}
                  >
                    {room.badge}
                  </span>
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] bg-black/60 text-white backdrop-blur-sm px-2 py-0.5 rounded font-medium">
                    {room.floor}
                  </span>
                </div>

                {/* Room Info */}
                <div className="md:col-span-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-lg md:text-xl font-bold text-melaleuca-canopy">
                          {room.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs text-forest-moss">
                            visibility
                          </span>
                          {room.view}
                        </p>
                      </div>

                      {/* Urgency Badge */}
                      <span className="text-[11px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full whitespace-nowrap self-start">
                        {room.urgencyBadge}
                      </span>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-3 py-2.5 border-y border-gray-100 text-xs text-gray-700">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-forest-moss">
                          bed
                        </span>
                        <span>{room.bed}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-forest-moss">
                          square_foot
                        </span>
                        <span>{room.area}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-forest-moss">
                          person
                        </span>
                        <span>{room.guestsText}</span>
                      </div>
                    </div>

                    {/* Included Perks */}
                    <ul className="space-y-1.5 text-xs text-gray-600 mb-4">
                      {room.perks.slice(0, 3).map((perk, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span
                            className="material-symbols-outlined text-sm text-stream-jade mt-0.5 flex-shrink-0"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check_circle
                          </span>
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & Selection Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-2xl font-bold text-forest-moss">
                          {room.formattedPrice}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          {room.originalPrice}
                        </span>
                        <span className="text-xs text-gray-500">{isEn ? "/ night" : "/ đêm"}</span>
                      </div>
                      <span className="text-[11px] text-stream-jade font-semibold block">
                        {isEn ? "Taxes & service charges included" : "Đã bao gồm thuế & phí dịch vụ"}
                      </span>
                    </div>

                    <button
                      type="button"
                      className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                        isSelected
                          ? "bg-forest-moss text-white shadow-md ring-2 ring-forest-moss/30"
                          : "border border-forest-moss text-forest-moss hover:bg-forest-moss hover:text-white"
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {isSelected ? "check_circle" : "radio_button_unchecked"}
                      </span>
                      <span>
                        {isSelected
                          ? isEn
                            ? "Selected"
                            : "Đang chọn"
                          : isEn
                          ? "Select Room"
                          : "Chọn phòng"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
