export default function ContactDepartments({ currentLang = "vi" }) {
  const isEn = currentLang === "en";

  const departments = [
    {
      icon: "location_on",
      badge: isEn ? "Eco Location" : "Vị Trí Sinh Thái",
      badgeStyle: "bg-forest-moss/10 text-forest-moss",
      title: isEn ? "Physical Address" : "Địa Chỉ Thực Tế",
      lines: isEn
        ? [
            "National Highway 62, Tan Lap Commune, Moc Hoa District, Long An Province.",
            "Eco Zone: Dong Thap Muoi center, ~100km from Ho Chi Minh City via QL62.",
          ]
        : [
            "Quốc lộ 62, Xã Tân Lập, Huyện Mộc Hóa, Tỉnh Long An.",
            "Vùng Sinh Thái: Trung tâm Đồng Tháp Mười, cách TP. Hồ Chí Minh ~100km theo trục QL62.",
          ],
      actionText: isEn ? "View map & directions" : "Xem sơ đồ & chỉ đường",
      actionHref: "#direction-guide",
      actionIcon: "arrow_downward",
    },
    {
      icon: "call",
      badge: isEn ? "24/7 Support" : "Hỗ Trợ 24/7",
      badgeStyle: "bg-stream-jade/20 text-forest-moss font-bold",
      title: isEn ? "Hotline Numbers" : "Đường Dây Nóng",
      lines: isEn
        ? [
            "Reception & ticket desk: 0272 3968 133",
            "Room booking & group tours: 0966 893 943",
            "Emergency assistance & directions: 0988 123 456",
          ]
        : [
            "Tổng đài tiếp đón & đặt vé: 0272 3968 133",
            "Tư vấn phòng & tour đoàn: 0966 893 943",
            "Hỗ trợ khẩn cấp & chỉ đường: 0988 123 456",
          ],
      actionText: isEn ? "Call support hotline" : "Gọi hotline tư vấn",
      actionHref: "tel:02723968133",
      actionIcon: "phone_forwarded",
    },
    {
      icon: "mail",
      badge: isEn ? "Fast Response" : "Phản Hồi Nhanh",
      badgeStyle: "bg-alluvial-earth/15 text-alluvial-earth font-bold",
      title: isEn ? "Email Inquiries" : "Hòm Thư Điện Tử",
      lines: isEn
        ? [
            "Tour quotes & corporate contracts: dulichtanlap@gmail.com",
            "Customer care & feedback: support@langnoitanlap.com.vn",
          ]
        : [
            "Báo giá tour & hợp đồng đoàn: dulichtanlap@gmail.com",
            "Chăm sóc khách hàng: support@langnoitanlap.com.vn",
          ],
      actionText: isEn ? "Send an email" : "Gửi thư điện tử",
      actionHref: "mailto:dulichtanlap@gmail.com",
      actionIcon: "send",
    },
    {
      icon: "schedule",
      badge: isEn ? "Open Year-Round" : "Mở Cửa Quanh Năm",
      badgeStyle: "bg-melaleuca-canopy/10 text-melaleuca-canopy font-bold",
      title: isEn ? "Operating Hours" : "Thời Gian Hoạt Động",
      lines: isEn
        ? [
            "Gate & Forest Walkway: 07:00 – 17:30 daily",
            "Hotel & Restaurant: Open 24/7 (including Tet & holidays)",
            "Check-in: 14:00 | Check-out: 12:00",
          ]
        : [
            "Cổng KDL & Cầu xuyên rừng: 07:00 – 17:30 hàng ngày",
            "Khách Sạn & Nhà Hàng: Phục vụ lưu trú 24/7 (kể cả Lễ, Tết)",
            "Giờ nhận phòng: 14:00 | Trả phòng: 12:00",
          ],
      actionText: isEn ? "Book room online" : "Đặt phòng trực tuyến",
      actionHref: "/dat-phong",
      actionIcon: "open_in_new",
    },
  ];

  return (
    <section id="contact-departments" className="py-16 bg-white border-b border-forest-moss/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-alluvial-earth text-xs font-bold uppercase tracking-widest">
            {isEn ? "Direct Contact Channels" : "Kênh Liên Lạc Trực Tiếp"}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-melaleuca-canopy mt-1">
            {isEn ? "Connect With Specialized Departments" : "Kết Nối Với Các Bộ Phận Phụ Trách"}
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-2">
            {isEn
              ? "Please select the dedicated contact channel for prompt and personalized assistance."
              : "Vui lòng lựa chọn kênh liên hệ chuyên biệt để yêu cầu của quý khách được tiếp nhận và xử lý chu đáo nhất."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="bg-wetland-cream/50 rounded-2xl p-6 border border-forest-moss/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-forest-moss/15 text-forest-moss flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">{dept.icon}</span>
                  </div>
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold ${dept.badgeStyle}`}>
                    {dept.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-melaleuca-canopy mb-3">
                  {dept.title}
                </h3>

                <div className="space-y-2 text-xs text-gray-700 leading-relaxed mb-6">
                  {dept.lines.map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
              </div>

              <a
                href={dept.actionHref}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-moss hover:text-melaleuca-canopy transition-colors pt-3 border-t border-forest-moss/10"
              >
                <span>{dept.actionText}</span>
                <span className="material-symbols-outlined text-sm">{dept.actionIcon}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
