import { useState } from 'react';

export default function TourBookingForm({ currentLang }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '2024-10-25',
    guests: 'Gia đình 3 - 5 Khách',
    package: 'Gói Sông Nước Miệt Vườn (360k/khách)',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-melaleuca-canopy text-wetland-cream relative overflow-hidden" id="booking">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#52B788_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Hotline info */}
          <div className="lg:col-span-5">
            <span className="px-3.5 py-1.5 rounded-full bg-forest-moss text-mist-emerald text-xs uppercase tracking-wider font-semibold inline-block">
              {currentLang === 'vi' ? 'Tư Vấn & Đặt Chỗ Trực Tuyến' : 'Online Booking & Support'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-wetland-cream mt-4 mb-6 leading-tight">
              {currentLang === 'vi'
                ? 'Sẵn Sàng Cho Chuyến Trở Về Với Rừng Tràm Bình Yên?'
                : 'Ready for Your Peaceful Journey into Cajeput Forest?'}
            </h2>
            <p className="text-wetland-cream/80 text-base md:text-lg mb-8 leading-relaxed">
              {currentLang === 'vi'
                ? 'Để lại thông tin ngày đi và số lượng khách, đội ngũ chăm sóc khách hàng của Làng Nổi Tân Lập sẽ gửi báo giá trọn gói và sắp xếp người dẫn đường chu đáo nhất cho quý khách.'
                : 'Leave your visit dates and party size, our concierge team will immediately assist with customized booking and local boatman arrangements.'}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-forest-moss flex items-center justify-center text-primary-fixed shrink-0">
                  <span className="material-symbols-outlined text-xl" data-icon="phone_in_talk">
                    phone_in_talk
                  </span>
                </span>
                <div>
                  <span className="text-xs text-wetland-cream/70 block">
                    {currentLang === 'vi' ? 'Hotline Hỗ Trợ 24/7' : '24/7 Hotline Service'}
                  </span>
                  <a
                    href="tel:02723968133"
                    className="font-serif text-xl font-bold text-wetland-cream hover:text-mist-emerald transition-colors"
                  >
                    0272 3968 133 - 0966 893 943
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-forest-moss flex items-center justify-center text-primary-fixed shrink-0">
                  <span className="material-symbols-outlined text-xl" data-icon="mail">
                    mail
                  </span>
                </span>
                <div>
                  <span className="text-xs text-wetland-cream/70 block">
                    {currentLang === 'vi' ? 'Email Tiếp Nhận Tour Đoàn' : 'Group Tour Inquiries'}
                  </span>
                  <a
                    href="mailto:tanlapbooking@dulichtanlap.vn"
                    className="text-base font-semibold text-wetland-cream hover:text-mist-emerald transition-colors"
                  >
                    tanlapbooking@dulichtanlap.vn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Card Form */}
          <div className="lg:col-span-7 bg-wetland-cream text-on-surface p-6 sm:p-10 rounded-3xl shadow-2xl border border-forest-moss/10">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-stream-jade/20 text-forest-moss flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-4xl" data-icon="check_circle">
                    check_circle
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-melaleuca-canopy font-bold mb-2">
                  {currentLang === 'vi' ? 'Gửi Yêu Cầu Thành Công!' : 'Booking Request Sent!'}
                </h3>
                <p className="text-on-surface-variant text-sm md:text-base max-w-md mx-auto mb-6">
                  {currentLang === 'vi'
                    ? `Cảm ơn bạn ${formData.fullName || ''}! Chuyên viên Làng Nổi Tân Lập sẽ gọi xác nhận qua số ${formData.phone || ''} trong ít phút.`
                    : 'Thank you! Our concierge team will contact you via phone within a few minutes to confirm.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-melaleuca-canopy text-white text-sm font-semibold hover:bg-forest-moss transition-colors cursor-pointer"
                >
                  {currentLang === 'vi' ? 'Đặt thêm dịch vụ khác' : 'Make Another Request'}
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                      {currentLang === 'vi' ? 'Họ & Tên của bạn *' : 'Full Name *'}
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-white border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition"
                      placeholder={currentLang === 'vi' ? 'Ví dụ: Nguyễn Văn An' : 'e.g. John Doe'}
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                      {currentLang === 'vi' ? 'Số Điện Thoại / Zalo *' : 'Phone Number / WhatsApp *'}
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-white border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition"
                      placeholder="09xx xxx xxx"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                      {currentLang === 'vi' ? 'Ngày Tham Quan' : 'Visiting Date'}
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-white border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                      {currentLang === 'vi' ? 'Số Lượng Khách' : 'Number of Guests'}
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-white border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition cursor-pointer"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    >
                      <option value="1 - 2 Khách">1 - 2 Khách</option>
                      <option value="Gia đình 3 - 5 Khách">Gia đình 3 - 5 Khách</option>
                      <option value="Nhóm bạn 6 - 12 Khách">Nhóm bạn 6 - 12 Khách</option>
                      <option value="Đoàn thể > 15 Khách">Đoàn thể &gt; 15 Khách</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                      {currentLang === 'vi' ? 'Gói Quan Tâm' : 'Interested Package'}
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-white border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition cursor-pointer"
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                    >
                      <option value="Gói Sông Nước Miệt Vườn (360k/khách)">
                        {currentLang === 'vi' ? 'Sông Nước Miệt Vườn (360k)' : 'River Life Package (360k)'}
                      </option>
                      <option value="Gói Eco Explorer (130k/khách)">
                        {currentLang === 'vi' ? 'Eco Explorer (130k)' : 'Eco Explorer (130k)'}
                      </option>
                      <option value="Gói Rừng Tràm Sanctuary 2N1Đ (950k/khách)">
                        {currentLang === 'vi' ? 'Sanctuary 2N1Đ (950k)' : 'Sanctuary 2D1N (950k)'}
                      </option>
                      <option value="Vé vào cổng & Tự do khám phá">
                        {currentLang === 'vi' ? 'Vé Cổng Tự Do' : 'General Admission Only'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                    {currentLang === 'vi' ? 'Yêu Cầu Đặc Biệt / Ghi Chú' : 'Special Notes / Requests'}
                  </label>
                  <textarea
                    rows={2}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition resize-none"
                    placeholder={
                      currentLang === 'vi'
                        ? 'Ví dụ: Đặt thêm ăn chay, cần xe đón từ TP.HCM, yêu cầu phòng view hồ...'
                        : 'e.g. Vegetarian diet, transfer from HCMC...'
                    }
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-melaleuca-canopy hover:bg-forest-moss text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{currentLang === 'vi' ? 'Gửi Yêu Cầu Đặt Chỗ Ngay' : 'Submit Booking Request'}</span>
                  <span className="material-symbols-outlined text-lg" data-icon="send">
                    send
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
