import { useState } from 'react';

export default function ResortBookingForm({ currentLang }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: 'Đặt phòng Khách sạn',
    date: '2024-10-25',
    guests: '2 Người lớn',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-tranquil-sand/70 border-t border-forest-moss/10" id="booking-form">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
            <span className="w-6 h-[2px] bg-forest-moss"></span>
            <span>{currentLang === 'vi' ? 'Tiếp Nhận 24/7' : '24/7 Fast Reservation'}</span>
            <span className="w-6 h-[2px] bg-forest-moss"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-melaleuca-canopy mb-3">
            {currentLang === 'vi'
              ? 'Gửi Yêu Cầu Đặt Phòng & Đặt Bàn Ăn'
              : 'Direct Lodging & Dining Inquiry'}
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            {currentLang === 'vi'
              ? 'Đội ngũ lễ tân khách sạn và quản lý nhà hàng sẽ liên hệ xác nhận tình trạng phòng trống và bàn ăn trong vòng 15 phút.'
              : 'Our front desk and restaurant managers will review table & room availability and respond within 15 minutes.'}
          </p>
        </div>

        <div className="bg-surface-container-lowest p-8 sm:p-12 rounded-3xl border border-forest-moss/15 shadow-xl">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-stream-jade/20 text-forest-moss flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-4xl" data-icon="check_circle">
                  check_circle
                </span>
              </div>
              <h3 className="font-serif text-2xl text-melaleuca-canopy font-bold mb-2">
                {currentLang === 'vi' ? 'Đã Tiếp Nhận Thông Tin!' : 'Reservation Received!'}
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
                {currentLang === 'vi'
                  ? `Cảm ơn bạn ${formData.fullName}! Lễ tân Khách sạn Làng Nổi sẽ liên hệ qua số điện thoại ${formData.phone} để xác nhận giữ chỗ cho ngày ${formData.date}.`
                  : 'Thank you! Our front desk staff will call you to confirm your booking date and room preferences.'}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-melaleuca-canopy text-white text-sm font-semibold hover:bg-forest-moss transition-colors cursor-pointer"
              >
                {currentLang === 'vi' ? 'Gửi yêu cầu khác' : 'Send Another Request'}
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                    {currentLang === 'vi' ? 'Họ & Tên quý khách *' : 'Your Full Name *'}
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-tranquil-sand/40 border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition"
                    placeholder={currentLang === 'vi' ? 'Ví dụ: Trần Thị Mai' : 'e.g. John Doe'}
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
                    className="w-full px-4 py-3 rounded-xl bg-tranquil-sand/40 border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition"
                    placeholder="09xx xxx xxx"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                    {currentLang === 'vi' ? 'Dịch Vụ Yêu Cầu' : 'Service Type'}
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-tranquil-sand/40 border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition cursor-pointer"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Đặt phòng Khách sạn">
                      {currentLang === 'vi' ? 'Đặt phòng Khách sạn' : 'Hotel Room Reservation'}
                    </option>
                    <option value="Đặt bàn ăn Nhà hàng">
                      {currentLang === 'vi' ? 'Đặt bàn ăn Nhà hàng' : 'Restaurant Table Booking'}
                    </option>
                    <option value="Combo 2N1Đ Kỳ Nghỉ Thảnh Thơi">
                      {currentLang === 'vi' ? 'Combo 2N1Đ (950k)' : '2D1N Retreat Package'}
                    </option>
                    <option value="Combo Trong Ngày">
                      {currentLang === 'vi' ? 'Combo Trong Ngày (380k)' : '1-Day Tour Package'}
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                    {currentLang === 'vi' ? 'Ngày Đến / Dùng Bữa' : 'Arrival Date'}
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-tranquil-sand/40 border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                    {currentLang === 'vi' ? 'Số Lượng Khách' : 'Party Size'}
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-tranquil-sand/40 border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition cursor-pointer"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1 Khách">1 Khách</option>
                    <option value="2 Người lớn">2 Người lớn</option>
                    <option value="Gia đình 3 - 5 người">Gia đình 3 - 5 người</option>
                    <option value="Đoàn nhóm > 6 người">Đoàn nhóm &gt; 6 người</option>
                    <option value="Đoàn công ty > 15 người">Đoàn công ty &gt; 15 người</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-melaleuca-canopy mb-2">
                  {currentLang === 'vi' ? 'Yêu Cầu Đặc Biệt / Món Ăn Ưu Tiên' : 'Special Notes / Dietary Requirements'}
                </label>
                <textarea
                  rows={2}
                  className="w-full px-4 py-2.5 rounded-xl bg-tranquil-sand/40 border border-forest-moss/20 focus:border-forest-moss focus:ring-1 focus:ring-forest-moss text-on-surface text-sm outline-none transition resize-none"
                  placeholder={
                    currentLang === 'vi'
                      ? 'Ví dụ: Cần phòng tầng cao view rạch, chuẩn bị bàn ăn chay, yêu cầu ghế trẻ em...'
                      : 'e.g. High floor room, vegetarian diet request, baby highchair...'
                  }
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-forest-moss text-base" data-icon="phone_in_talk">
                    phone_in_talk
                  </span>
                  <span>
                    Hotline: <strong className="text-melaleuca-canopy">0272 3968 133 - 0966 893 943</strong>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-melaleuca-canopy hover:bg-forest-moss text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{currentLang === 'vi' ? 'Gửi Yêu Cầu Giữ Chỗ' : 'Submit Reservation'}</span>
                  <span className="material-symbols-outlined text-base" data-icon="send">
                    send
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
