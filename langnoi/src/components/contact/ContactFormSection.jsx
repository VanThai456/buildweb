import { useState } from "react";

export default function ContactFormSection({ currentLang = "vi" }) {
  const isEn = currentLang === "en";

  const defaultTopic = isEn
    ? "Tour tickets & wooden sampan rowing"
    : "Tư vấn vé tham quan & chèo xuồng ba lá";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: defaultTopic,
    guests: "",
    message: "",
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
      email: "",
      topic: defaultTopic,
      guests: "",
      message: "",
    });
    setSubmitted(false);
  };

  const topicOptions = isEn
    ? [
        "Tour tickets & wooden sampan rowing",
        "8-Story Resort Hotel (Tan Lap Hotel)",
        "Company teambuilding & group tour quotes",
        "Southern cuisine restaurant banquet reservation",
        "Route directions & shuttle bus rental",
        "Quality feedback & visitor suggestions",
        "Other inquiries",
      ]
    : [
        "Tư vấn vé tham quan & chèo xuồng ba lá",
        "Khách sạn nghỉ dưỡng 8 tầng (Làng Nổi Hotel)",
        "Báo giá tour đoàn teambuilding & công ty",
        "Đặt tiệc nhà hàng ẩm thực Nam Bộ",
        "Hướng dẫn đường đi & thuê xe đưa đón",
        "Phản ánh chất lượng & đóng góp ý kiến",
        "Khác",
      ];

  return (
    <section id="contact-form" className="py-20 bg-melaleuca-canopy text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-forest-moss/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-alluvial-earth/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Support Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-alluvial-earth text-xs uppercase tracking-widest font-bold">
                {isEn ? "Dedicated 24/7 Support" : "Tư Vấn Tận Tâm 24/7"}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-wetland-cream mt-2 mb-4 leading-tight">
                {isEn ? "Send Message & Request Quote" : "Gửi Lời Nhắn & Yêu Cầu Báo Giá"}
              </h2>
              <p className="text-xs md:text-sm text-wetland-cream/80 leading-relaxed">
                {isEn
                  ? "Whether you have questions regarding services, banquet bookings, group corporate tours, or route directions, feel free to send us an inquiry."
                  : "Quý khách có bất kỳ câu hỏi nào về dịch vụ, đặt bàn tiệc, tour du lịch theo đoàn hoặc cần hướng dẫn lộ trình di chuyển, xin vui lòng gửi thông tin tại đây."}
              </p>
            </div>

            {/* Commitment Box */}
            <div className="bg-forest-moss/40 border border-stream-jade/30 rounded-2xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-stream-jade text-melaleuca-canopy flex items-center justify-center font-bold flex-shrink-0">
                <span className="material-symbols-outlined text-lg">bolt</span>
              </div>
              <div>
                <div className="font-bold text-xs text-white">
                  {isEn ? "Committed 15-Minute Response" : "Cam kết phản hồi trong 15 phút"}
                </div>
                <div className="text-[11px] text-wetland-cream/70">
                  {isEn
                    ? "Our duty staff is ready to assist and answer all your inquiries"
                    : "Nhân viên trực ban hỗ trợ giải đáp mọi thắc mắc của quý khách"}
                </div>
              </div>
            </div>

            {/* Zalo OA Box */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-full h-full text-melaleuca-canopy" viewBox="0 0 40 40" fill="currentColor">
                  <rect x="4" y="4" width="12" height="12" rx="2" fill="#1B4D3E" />
                  <rect x="7" y="7" width="6" height="6" fill="#FFFFFF" />
                  <rect x="24" y="4" width="12" height="12" rx="2" fill="#1B4D3E" />
                  <rect x="27" y="7" width="6" height="6" fill="#FFFFFF" />
                  <rect x="4" y="24" width="12" height="12" rx="2" fill="#1B4D3E" />
                  <rect x="7" y="27" width="6" height="6" fill="#FFFFFF" />
                  <rect x="20" y="20" width="4" height="4" fill="#2D6A4F" />
                  <rect x="26" y="24" width="10" height="10" rx="1" fill="#1B4D3E" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xs text-white flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-stream-jade">chat</span>
                  Zalo Official Account
                </div>
                <div className="text-[11px] text-wetland-cream/80 mt-1 leading-snug">
                  {isEn
                    ? "Scan QR code to chat directly with Tan Lap Floating Village tour operators."
                    : "Quét mã để trò chuyện trực tiếp với nhân viên điều hành tour Làng Nổi Tân Lập."}
                </div>
              </div>
            </div>

            {/* Quick Contact Lines */}
            <div className="pt-2 text-xs space-y-2 text-wetland-cream/80">
              <div>
                {isEn ? "Duty Hotline:" : "Hotline trực ban:"}{" "}
                <strong className="text-white">0272 3968 133</strong> —{" "}
                <strong className="text-white">0966 893 943</strong>
              </div>
              <div>
                {isEn ? "Receiving Email:" : "Email tiếp nhận:"}{" "}
                <strong className="text-white">dulichtanlap@gmail.com</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-forest-moss/10 text-forest-moss rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-melaleuca-canopy">
                    {isEn ? "Message Sent Successfully!" : "Gửi Lời Nhắn Thành Công!"}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    {isEn ? (
                      <>
                        Thank you <strong>{formData.name || "Guest"}</strong> for contacting Tan Lap Floating Village. Our team will get back to you via phone <strong>{formData.phone}</strong> or email <strong>{formData.email}</strong> shortly.
                      </>
                    ) : (
                      <>
                        Cảm ơn <strong>{formData.name || "Quý khách"}</strong> đã liên hệ với Làng Nổi Tân Lập. Bộ phận phụ trách sẽ phản hồi qua số điện thoại <strong>{formData.phone}</strong> hoặc email <strong>{formData.email}</strong> trong thời gian sớm nhất.
                      </>
                    )}
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full border border-forest-moss text-forest-moss hover:bg-forest-moss hover:text-white transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      {isEn ? "Send Another Message" : "Gửi thêm tin nhắn khác"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-melaleuca-canopy">
                      {isEn ? "Online Consultation & Inquiry" : "Thông Tin Yêu Cầu Tư Vấn Trực Tuyến"}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {isEn
                        ? "Fill in your details below, our travel consultant will reach out promptly"
                        : "Điền thông tin bên dưới, nhân viên hỗ trợ sẽ liên hệ lại ngay với bạn"}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Full Name" : "Họ và tên quý khách"} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isEn ? "John Doe" : "Nguyễn Văn A"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-xs bg-wetland-cream/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Phone / WhatsApp / Zalo" : "Số điện thoại / Zalo"} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0901 234 567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-xs bg-wetland-cream/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Email Address" : "Email liên hệ"} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-xs bg-wetland-cream/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Estimated Guests" : "Số lượng khách dự kiến"}
                      </label>
                      <input
                        type="number"
                        min="1"
                        placeholder={isEn ? "E.g. 10" : "Ví dụ: 10"}
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-xs bg-wetland-cream/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {isEn ? "Topic of Interest" : "Chủ đề quý khách quan tâm"}
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-xs bg-wetland-cream/30 transition-colors cursor-pointer"
                    >
                      {topicOptions.map((opt, oIdx) => (
                        <option key={oIdx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {isEn ? "Message / Specific Requirements" : "Nội dung tin nhắn / yêu cầu cụ thể"}
                    </label>
                    <textarea
                      rows="3"
                      placeholder={
                        isEn
                          ? "Any specific requirements regarding itinerary, dietary preferences, or private transport..."
                          : "Quý khách có yêu cầu gì về lịch trình, dịch vụ ăn uống, hỗ trợ xe đưa đón..."
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-xs bg-wetland-cream/30 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-melaleuca-canopy hover:bg-forest-moss text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span className="material-symbols-outlined text-base">send</span>
                    <span>{isEn ? "Submit Consultation Request" : "Gửi Thông Tin Yêu Cầu Tư Vấn"}</span>
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
