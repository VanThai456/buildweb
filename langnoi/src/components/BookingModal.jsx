import { useState } from 'react';

export default function BookingModal({ isOpen, onClose, initialService, initialDetails, currentLang }) {
  const [service, setService] = useState(initialService || 'Vé tham quan & Tour trọn gói');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(initialDetails?.date || '15/10/2024');
  const [guests, setGuests] = useState(initialDetails?.guests || '2 Người lớn');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = `NL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingCode(code);
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-wetland-cream rounded-3xl p-6 md:p-8 shadow-2xl border border-melaleuca-canopy/15 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-tranquil-sand text-melaleuca-canopy flex items-center justify-center hover:bg-surface-variant transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-stream-jade/20 text-forest-moss flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="font-headline-sm text-2xl text-melaleuca-canopy font-bold mb-2">
              {currentLang === 'vi' ? 'Đặt Chỗ Thành Công!' : 'Booking Requested!'}
            </h3>
            <p className="font-body-md text-on-surface-variant max-w-xs mb-6">
              {currentLang === 'vi'
                ? `Cảm ơn ${fullName || 'quý khách'}. Bộ phận tư vấn Làng Nổi Tân Lập sẽ liên hệ số điện thoại ${phone || 'của bạn'} trong vòng 15 phút để xác nhận.`
                : `Thank you! Our travel consultant will contact you via ${phone || 'your phone number'} within 15 minutes.`}
            </p>
            <div className="px-4 py-2 rounded-xl bg-tranquil-sand text-label-sm text-forest-moss font-semibold">
              Mã giữ chỗ: {bookingCode}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-forest-moss text-label-sm font-semibold mb-1">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>{currentLang === 'vi' ? 'Đặt Vé & Tour Trực Tuyến' : 'Online Tour & Hotel Booking'}</span>
            </div>
            <h3 className="font-headline-sm text-2xl text-melaleuca-canopy font-bold mb-4">
              {currentLang === 'vi' ? 'Thông Tin Giữ Chỗ Tân Lập' : 'Reservation Details'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-label-sm text-on-surface-variant font-medium mb-1">
                  {currentLang === 'vi' ? 'Gói dịch vụ đã chọn' : 'Selected Service'}
                </label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-melaleuca-canopy/20 bg-white text-melaleuca-canopy font-medium focus:ring-2 focus:ring-forest-moss focus:outline-none"
                />
              </div>

              {/* Customer Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-label-sm text-on-surface-variant font-medium mb-1">
                    {currentLang === 'vi' ? 'Họ và tên' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-melaleuca-canopy/20 bg-white text-on-surface focus:ring-2 focus:ring-forest-moss focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-label-sm text-on-surface-variant font-medium mb-1">
                    {currentLang === 'vi' ? 'Số điện thoại' : 'Phone Number'} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-melaleuca-canopy/20 bg-white text-on-surface focus:ring-2 focus:ring-forest-moss focus:outline-none"
                  />
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-label-sm text-on-surface-variant font-medium mb-1">
                    {currentLang === 'vi' ? 'Ngày tham quan / Nhận phòng' : 'Visit Date'}
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-melaleuca-canopy/20 bg-white text-on-surface focus:ring-2 focus:ring-forest-moss focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-label-sm text-on-surface-variant font-medium mb-1">
                    {currentLang === 'vi' ? 'Số lượng khách' : 'Guests count'}
                  </label>
                  <input
                    type="text"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-melaleuca-canopy/20 bg-white text-on-surface focus:ring-2 focus:ring-forest-moss focus:outline-none"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-label-sm text-on-surface-variant font-medium mb-1">
                  {currentLang === 'vi' ? 'Ghi chú / Yêu cầu đặc biệt' : 'Special requests'}
                </label>
                <textarea
                  rows="2"
                  placeholder={
                    currentLang === 'vi'
                      ? 'Ví dụ: Cần chuẩn bị tiệc chay, xe đưa đón từ Sài Gòn...'
                      : 'E.g., Vegetarian meal preference, shuttle bus inquiry...'
                  }
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-melaleuca-canopy/20 bg-white text-on-surface focus:ring-2 focus:ring-forest-moss focus:outline-none resize-none text-sm"
                ></textarea>
              </div>

              {/* Inclusions notice */}
              <div className="p-3 rounded-xl bg-tranquil-sand text-xs text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-base">verified</span>
                <span>
                  {currentLang === 'vi'
                    ? 'Không thu phí trước • Hỗ trợ đổi ngày miễn phí • Nhận vé tại quầy ưu tiên'
                    : 'No prepayment required • Free cancellation • Fast-track ticket counter'}
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-melaleuca-canopy hover:bg-forest-moss text-wetland-cream font-semibold text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>{currentLang === 'vi' ? 'Xác Nhận Đặt Chỗ Ngay' : 'Confirm Reservation'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
