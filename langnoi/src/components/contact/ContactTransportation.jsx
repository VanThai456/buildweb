export default function ContactTransportation({ currentLang = "vi" }) {
  const isEn = currentLang === "en";

  const options = [
    {
      icon: "directions_car",
      badge: isEn ? "100% Free Parking" : "Miễn Phí 100%",
      badgeStyle: "bg-forest-moss/10 text-forest-moss",
      title: isEn ? "Private Cars & Motorbikes" : "Xe Ô Tô & Xe Máy Tự Lái",
      desc: isEn
        ? "Spacious 5,000m² parking facility right within the welcome plaza, featuring shade canopies, 24/7 CCTV surveillance, and security staff."
        : "Bãi đậu xe rộng hơn 5.000m² ngay trong khuôn viên đón tiếp, có hệ thống mái che râm mát, camera an ninh và bảo vệ trực 24/24.",
      features: isEn
        ? [
            "Capacity for 30+ 45-seat tour coaches and 150+ passenger cars",
            "Dedicated parking bays for over 500 touring motorbikes",
            "Completely free parking tickets for all resort visitors",
          ]
        : [
            "Sức chứa hơn 30 xe khách 45 chỗ và 150 xe ô tô con",
            "Khu vực riêng cho hơn 500 xe máy phượt",
            "Hoàn toàn miễn phí vé giữ xe cho du khách",
          ],
    },
    {
      icon: "airport_shuttle",
      badge: isEn ? "Door-to-Door Shuttle" : "Đưa Đón Tận Nơi",
      badgeStyle: "bg-alluvial-earth/15 text-alluvial-earth",
      title: isEn ? "HCMC VIP Limousine Shuttle" : "Xe Limousine VIP TP.HCM",
      desc: isEn
        ? "Daily 9 - 11 seat VIP Limousine services departing from District 1 & District 5 (HCMC) directly to Moc Hoa - Tan Lap with premium amenities."
        : "Các chuyến xe Limousine 9 - 11 chỗ xuất phát hàng ngày từ Quận 1, Quận 5 (TP.HCM) đi thẳng về Mộc Hóa - Tân Lập với tiện nghi cao cấp.",
      features: isEn
        ? [
            "Direct drop-off right at Tan Lap Floating Village front gate",
            "Massage leather seats, high-speed Wi-Fi, complimentary bottled water",
            "Contact our hotline for partnered transport operator assistance",
          ]
        : [
            "Đón trả tận cổng Khu Du Lịch Làng Nổi",
            "Ghế massage, wifi tốc độ cao, nước uống miễn phí",
            "Liên hệ Hotline để được nhân viên kết nối nhà xe đối tác",
          ],
    },
    {
      icon: "directions_bus",
      badge: isEn ? "Affordable & Convenient" : "Tiết Kiệm & Tiện Lợi",
      badgeStyle: "bg-melaleuca-canopy/10 text-melaleuca-canopy",
      title: isEn ? "Public Bus Route No. 07" : "Xe Buýt Tuyến Số 07",
      desc: isEn
        ? "High-quality public bus route departing from Tan An Bus Station to Vinh Hung District, passing directly in front of Tan Lap gate every 30 mins."
        : "Tuyến xe buýt công cộng chất lượng cao xuất phát từ Bến xe Tân An đi huyện Vĩnh Hưng, chạy ngang qua cổng KDL Tân Lập mỗi 30 phút.",
      features: isEn
        ? [
            "Frequency: Every 30 minutes (05:30 – 17:30 daily)",
            "Published fare: 25,000 VND – 35,000 VND / passenger",
            "Bus shelter situated directly in front of the main entrance",
          ]
        : [
            "Tần suất hoạt động: 30 phút / chuyến (5:30 – 17:30)",
            "Giá vé niêm yết: 25.000đ – 35.000đ / lượt",
            "Trạm dừng xe buýt nằm ngay trước cổng chào Làng Nổi",
          ],
    },
  ];

  return (
    <section id="transportation" className="py-20 bg-white border-b border-forest-moss/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-alluvial-earth text-xs font-bold uppercase tracking-widest">
            {isEn ? "Transit Infrastructure" : "Hạ Tầng Giao Thông"}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-melaleuca-canopy mt-1">
            {isEn
              ? "Transportation Options & Parking Facilities"
              : "Các Phương Tiện Di Chuyển & Tiện Ích Bến Bãi"}
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-2">
            {isEn
              ? "Tan Lap Floating Village provides extensive parking infrastructure and convenient transit connections for all visitors."
              : "Làng Nổi Tân Lập trang bị hạ tầng bến bãi rộng lớn, phục vụ chu đáo mọi phương tiện của du khách."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="bg-wetland-cream/40 rounded-2xl p-6 md:p-8 border border-forest-moss/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-moss/10 text-forest-moss flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">{opt.icon}</span>
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${opt.badgeStyle}`}>
                    {opt.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-melaleuca-canopy mb-2">
                  {opt.title}
                </h3>

                <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                  {opt.desc}
                </p>

                <ul className="space-y-2 text-xs text-gray-700">
                  {opt.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm text-stream-jade mt-0.5">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
