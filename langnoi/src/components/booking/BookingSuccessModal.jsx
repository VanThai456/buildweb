export default function BookingSuccessModal({
  isOpen,
  onClose,
  bookingData,
  currentLang = "vi",
}) {
  if (!isOpen || !bookingData) return null;

  const isEn = currentLang === "en";

  const {
    room,
    guestInfo,
    checkInDate,
    checkOutDate,
    finalTotal,
    bookingCode = "TL-886924",
  } = bookingData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-forest-moss/20 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-stream-jade/20 text-forest-moss rounded-full flex items-center justify-center mx-auto mb-3">
            <span
              className="material-symbols-outlined text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </div>
          <span className="text-xs font-bold text-alluvial-earth uppercase tracking-widest">
            {isEn ? "Reservation Confirmed" : "Xác Nhận Giữ Chỗ Thành Công"}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-melaleuca-canopy mt-1">
            {isEn ? "Booking Completed!" : "Đặt Phòng Hoàn Tất!"}
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            {isEn
              ? "Confirmation details & QR ticket sent to your Email & Phone"
              : "Mã xác nhận QR đã được gửi đến Zalo & Email của quý khách"}
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-wetland-cream/60 rounded-2xl p-5 border border-forest-moss/15 mb-5 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-forest-moss/10">
            <span className="text-xs text-gray-500">
              {isEn ? "Booking code:" : "Mã đặt phòng:"}
            </span>
            <span className="font-mono font-bold text-sm text-forest-moss bg-white px-2.5 py-1 rounded-lg border border-forest-moss/20">
              {bookingCode}
            </span>
          </div>

          <div className="text-xs space-y-1.5">
            <div className="flex justify-between">
              <span className="text-gray-500">
                {isEn ? "Room category:" : "Hạng phòng:"}
              </span>
              <span className="font-bold text-gray-800">{room?.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {isEn ? "Lead guest:" : "Khách lưu trú:"}
              </span>
              <span className="font-semibold text-gray-800">{guestInfo?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {isEn ? "Phone number:" : "Số điện thoại:"}
              </span>
              <span className="font-medium text-gray-800">{guestInfo?.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {isEn ? "Duration:" : "Thời gian:"}
              </span>
              <span className="font-medium text-gray-800">
                {checkInDate} — {checkOutDate}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t border-forest-moss/10 text-sm">
              <span className="font-bold text-melaleuca-canopy">
                {isEn ? "Total paid:" : "Tổng thanh toán:"}
              </span>
              <span className="font-serif font-bold text-forest-moss text-base">
                {finalTotal?.toLocaleString("vi-VN")} đ
              </span>
            </div>
          </div>
        </div>

        {/* Simulated VietQR for Easy Scan */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center mb-6 shadow-xs">
          <div className="text-xs font-bold text-gray-700 mb-2 flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-forest-moss">
              qr_code_scanner
            </span>
            {isEn
              ? "Scan QR Code At Hotel Front Desk"
              : "Quét Mã QR Nhận Phòng Tại Quầy Lễ Tân"}
          </div>
          <div className="w-36 h-36 bg-gray-50 mx-auto rounded-xl border border-gray-200 p-2 flex flex-col items-center justify-center relative">
            <svg
              className="w-full h-full text-melaleuca-canopy"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              {/* Decorative QR Pattern */}
              <rect x="10" y="10" width="25" height="25" rx="3" fill="#1B4D3E" />
              <rect x="15" y="15" width="15" height="15" rx="2" fill="#FFFFFF" />
              <rect x="18" y="18" width="9" height="9" fill="#1B4D3E" />

              <rect x="65" y="10" width="25" height="25" rx="3" fill="#1B4D3E" />
              <rect x="70" y="15" width="15" height="15" rx="2" fill="#FFFFFF" />
              <rect x="73" y="18" width="9" height="9" fill="#1B4D3E" />

              <rect x="10" y="65" width="25" height="25" rx="3" fill="#1B4D3E" />
              <rect x="15" y="70" width="15" height="15" rx="2" fill="#FFFFFF" />
              <rect x="18" y="73" width="9" height="9" fill="#1B4D3E" />

              {/* Data Blocks */}
              <rect x="42" y="12" width="6" height="6" fill="#2D6A4F" />
              <rect x="52" y="12" width="6" height="12" fill="#1B4D3E" />
              <rect x="42" y="24" width="6" height="12" fill="#1B4D3E" />
              <rect x="42" y="42" width="16" height="16" rx="2" fill="#2D6A4F" />
              <rect x="65" y="42" width="6" height="18" fill="#1B4D3E" />
              <rect x="75" y="42" width="15" height="6" fill="#1B4D3E" />
              <rect x="12" y="42" width="22" height="6" fill="#1B4D3E" />
              <rect x="12" y="52" width="10" height="6" fill="#2D6A4F" />
              <rect x="42" y="65" width="18" height="6" fill="#1B4D3E" />
              <rect x="42" y="75" width="6" height="15" fill="#2D6A4F" />
              <rect x="52" y="75" width="20" height="6" fill="#1B4D3E" />
              <rect x="75" y="65" width="15" height="15" rx="2" fill="#1B4D3E" />
              <rect x="80" y="70" width="5" height="5" fill="#FFFFFF" />
            </svg>
          </div>
          <span className="text-[11px] text-gray-500 mt-2 block">
            {isEn
              ? "Present this QR code to receptionist upon arrival for quick check-in"
              : "Xuất trình mã này cho nhân viên lễ tân khi làm thủ tục check-in"}
          </span>
        </div>

        {/* Modal Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="py-3 px-4 rounded-full border border-forest-moss text-forest-moss hover:bg-forest-moss hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">print</span>
            {isEn ? "Print Ticket" : "In phiếu đặt"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-4 rounded-full bg-melaleuca-canopy hover:bg-forest-moss text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-base">done</span>
            {isEn ? "Finished" : "Hoàn tất"}
          </button>
        </div>
      </div>
    </div>
  );
}
