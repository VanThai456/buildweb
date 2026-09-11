import { useState } from "react";

export default function PricingInquiryForm({ currentLang = "vi" }) {
  const isEn = currentLang === "en";

  const defaultService = isEn
    ? "Same-Day Tour (Eco Day Tour)"
    : "Tour Trong Ngày (Eco Day Tour)";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: defaultService,
    guests: "",
    date: "",
    promoCode: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      service: defaultService,
      guests: "",
      date: "",
      promoCode: "",
      notes: "",
    });
    setSubmitted(false);
  };

  const serviceOptions = isEn
    ? [
        "Same-Day Tour (Eco Day Tour)",
        "2D1N Staycation (Sanctuary Retreat)",
        "Tan Lap Hotel Room",
        "Teambuilding & Company Banquet",
        "Independent Forest & Sampan Tickets",
      ]
    : [
        "Tour Trong Ngày (Eco Day Tour)",
        "Nghỉ Dưỡng 2N1Đ (Sanctuary Retreat)",
        "Phòng Khách Sạn Làng Nổi",
        "Đoàn Teambuilding & Tiệc Công Ty",
        "Vé Rừng & Xuồng Ba Lá Tự Túc",
      ];

  return (
    <section
      className="py-20 bg-melaleuca-canopy text-white relative overflow-hidden"
      id="dat-ve"
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-forest-moss/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-alluvial-earth/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-5">
            <span className="text-alluvial-earth font-label-sm tracking-widest uppercase font-semibold text-xs">
              {isEn ? "Dedicated 24/7 Support" : "Tư Vấn Tận Tâm 24/7"}
            </span>
            <h2 className="font-headline-lg font-serif text-3xl md:text-4xl font-bold text-wetland-cream mt-2 mb-4 leading-tight">
              {isEn
                ? "Get Group Quotes & Custom Itineraries"
                : "Nhận Báo Giá Đoàn & Tư Vấn Tour Riêng Biệt"}
            </h2>
            <p className="text-wetland-cream/80 mb-8 leading-relaxed text-sm md:text-base">
              {isEn
                ? "Please leave your contact info, our tour operator will send a detailed itinerary and best promotional quote within 15 minutes."
                : "Quý khách vui lòng để lại thông tin, nhân viên điều hành tour Làng Nổi Tân Lập sẽ gửi lịch trình chi tiết và bảng giá ưu đãi tốt nhất trong vòng 15 phút."}
            </p>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-moss/40 flex items-center justify-center text-wetland-cream flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg">call</span>
                </div>
                <div>
                  <div className="text-wetland-cream/70 text-xs">
                    {isEn ? "Booking hotline & group advisory:" : "Hotline đặt vé & tư vấn đoàn:"}
                  </div>
                  <div className="text-base font-bold text-white tracking-wide">
                    0272 3968 133 &nbsp;|&nbsp; 0966 893 943
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-moss/40 flex items-center justify-center text-wetland-cream flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <div>
                  <div className="text-wetland-cream/70 text-xs">
                    {isEn ? "Quotes & contract requests:" : "Hòm thư báo giá & hợp đồng:"}
                  </div>
                  <div className="text-base font-medium text-white">
                    dulichtanlap@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-moss/40 flex items-center justify-center text-wetland-cream flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div>
                  <div className="text-wetland-cream/70 text-xs">
                    {isEn ? "Resort location:" : "Vị trí khu du lịch:"}
                  </div>
                  <div className="text-sm font-medium text-white leading-snug">
                    {isEn
                      ? "National Highway 62, Tan Lap Commune, Moc Hoa District, Long An"
                      : "Quốc Lộ 62, Xã Tân Lập, Huyện Mộc Hóa, Long An"}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-moss/40 flex items-center justify-center text-wetland-cream flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                </div>
                <div>
                  <div className="text-wetland-cream/70 text-xs">
                    {isEn ? "Visiting & opening hours:" : "Thời gian mở cửa đón khách:"}
                  </div>
                  <div className="text-sm font-medium text-white">
                    {isEn
                      ? "7:00 – 18:00 every day of the week (including Tet & Holidays)"
                      : "7:00 – 18:00 tất cả các ngày trong tuần (kể cả Lễ, Tết)"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-forest-moss/10 text-forest-moss rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-melaleuca-canopy">
                    {isEn ? "Request Submitted Successfully!" : "Gửi Yêu Cầu Thành Công!"}
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    {isEn ? (
                      <>
                        Thank you <strong>{formData.name || "Guest"}</strong> for your interest. Our travel consultant will contact you via phone <strong>{formData.phone}</strong> within 15 minutes with our best rate.
                      </>
                    ) : (
                      <>
                        Cảm ơn <strong>{formData.name || "Quý khách"}</strong> đã quan tâm đến Làng Nổi Tân Lập. Nhân viên tư vấn sẽ liên hệ qua số điện thoại <strong>{formData.phone}</strong> trong vòng 15 phút với mức giá ưu đãi nhất.
                      </>
                    )}
                  </p>
                  {formData.promoCode && (
                    <div className="inline-block bg-alluvial-earth/10 border border-alluvial-earth/30 text-alluvial-earth px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider">
                      {isEn
                        ? `Recorded promo code: ${formData.promoCode}`
                        : `Mã ưu đãi đã ghi nhận: ${formData.promoCode}`}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full border border-forest-moss text-forest-moss hover:bg-forest-moss hover:text-white transition-colors text-sm font-medium"
                    >
                      {isEn ? "Send Another Request" : "Gửi thêm yêu cầu khác"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-melaleuca-canopy">
                      {isEn ? "Sign Up for Quotes & Offers" : "Đăng Ký Nhận Báo Giá & Ưu Đãi"}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {isEn
                        ? "Guaranteed best rates and 100% complimentary itinerary advice"
                        : "Cam kết giữ mức giá ưu đãi tốt nhất và tư vấn lịch trình miễn phí 100%"}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Full Name *" : "Họ và tên *"}
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-sm bg-wetland-cream/30 transition-colors"
                        placeholder={isEn ? "John Doe" : "Nguyễn Văn A"}
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Phone / Zalo *" : "Số điện thoại / Zalo *"}
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-sm bg-wetland-cream/30 transition-colors"
                        placeholder="0901 234 567"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Service of Interest" : "Loại dịch vụ quan tâm"}
                      </label>
                      <select
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-sm bg-wetland-cream/30 transition-colors"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        {serviceOptions.map((opt, sIdx) => (
                          <option key={sIdx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Estimated Guests" : "Số lượng khách dự kiến"}
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-sm bg-wetland-cream/30 transition-colors"
                        min="1"
                        placeholder={isEn ? "E.g. 15" : "Ví dụ: 15"}
                        type="number"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Estimated Visit Date" : "Ngày dự kiến tham quan"}
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-sm bg-wetland-cream/30 transition-colors"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Promo Code (if any)" : "Mã khuyến mãi (nếu có)"}
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-sm bg-wetland-cream/30 uppercase transition-colors"
                        placeholder="MUANUOCNOI24 / RUNGXANH2N1D"
                        type="text"
                        value={formData.promoCode}
                        onChange={(e) => setFormData({ ...formData, promoCode: e.target.value.toUpperCase() })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {isEn
                        ? "Additional Notes (dietary, private transport, guide...)"
                        : "Ghi chú thêm (yêu cầu ăn uống, xe đưa đón, HDV...)"}
                    </label>
                    <textarea
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-sm bg-wetland-cream/30 transition-colors"
                      placeholder={
                        isEn
                          ? "Any specific requirements regarding meals, transport or schedule..."
                          : "Quý khách có yêu cầu gì đặc biệt về chế độ ăn hoặc hỗ trợ xe..."
                      }
                      rows="3"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button
                    className="w-full py-3.5 rounded-full bg-melaleuca-canopy hover:bg-forest-moss text-white font-label-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-xl">send</span>
                    <span>{isEn ? "Submit Request & Receive Deals" : "Gửi Yêu Cầu Tư Vấn & Nhận Ưu Đãi"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
