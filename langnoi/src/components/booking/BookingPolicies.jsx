export default function BookingPolicies({ currentLang = "vi" }) {
  const isEn = currentLang === "en";

  const policies = [
    {
      icon: "schedule",
      title: isEn ? "Check-in & Check-out Hours" : "Thời Gian Nhận & Trả Phòng",
      items: isEn
        ? [
            "Check-in: From 14:00 (2:00 PM)",
            "Check-out: Before 12:00 noon next day",
            "Early check-in / Late check-out: Flexible upon room availability",
          ]
        : [
            "Nhận phòng (Check-in): Từ 14:00 chiều",
            "Trả phòng (Check-out): Trước 12:00 trưa hôm sau",
            "Nhận phòng sớm / Trả phòng muộn: Hỗ trợ linh hoạt tùy tình trạng phòng thực tế",
          ],
    },
    {
      icon: "change_circle",
      title: isEn ? "Cancellation & Date Change" : "Chính Sách Hoàn Hủy & Đổi Ngày",
      items: isEn
        ? [
            "Free date change or cancellation 48 hours prior to check-in",
            "Cancellation within 24 - 48 hours: 50% deposit fee applies",
            "Cancellation within 24 hours: 100% deposit fee applies",
            "100% full refund with no fee in case of severe storms or force majeure",
          ]
        : [
            "Miễn phí đổi ngày hoặc hủy phòng trước 48 giờ so với giờ check-in",
            "Hủy phòng trong vòng 24 - 48 giờ: Tính phí 50% tiền cọc giữ chỗ",
            "Hủy phòng dưới 24 giờ: Tính phí 100% tiền cọc giữ chỗ",
            "Hoàn tiền 100% không mất phí trong trường hợp thời tiết bão lũ bất khả kháng",
          ],
    },
    {
      icon: "eco",
      title: isEn ? "Forest Conservation Rules" : "Quy Định Bảo Vệ Môi Trường Rừng",
      items: isEn
        ? [
            "Strictly no flammable substances, lighters, or smoking in sanctuary",
            "No littering into waterways, preserve pristine water fern carpets",
            "Quiet hours after 22:00 (10 PM) for tranquil wildlife & peaceful sleep",
          ]
        : [
            "Tuyệt đối không mang chất dễ cháy nổ, bật lửa hoặc hút thuốc trong khu bảo tồn",
            "Không xả rác xuống lòng kênh rạch, chung tay bảo vệ thảm bèo hoa dâu tự nhiên",
            "Giữ trật tự yên tĩnh sau 22:00 để bảo đảm không gian thanh bình cho muông thú và khách nghỉ",
          ],
    },
  ];

  return (
    <div className="pt-6">
      <div className="bg-white rounded-2xl border border-forest-moss/15 p-6 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-melaleuca-canopy mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-forest-moss">policy</span>
          {isEn
            ? "Accommodation Policies & Cajeput Forest Conservation"
            : "Chính Sách Lưu Trú & Bảo Vệ Rừng Tràm Tân Lập"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {policies.map((pol, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-melaleuca-canopy flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-forest-moss">
                  {pol.icon}
                </span>
                {pol.title}
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600 leading-relaxed">
                {pol.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-1.5">
                    <span className="text-forest-moss font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
