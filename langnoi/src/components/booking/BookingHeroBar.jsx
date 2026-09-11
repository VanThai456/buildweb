export default function BookingHeroBar({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  guests,
  setGuests,
  rooms,
  setRooms,
  currentStep = 1,
  setCurrentStep,
  currentLang = "vi",
}) {
  const isEn = currentLang === "en";

  return (
    <div className="pt-24 pb-8">
      {/* Breadcrumb & Title Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium">
          <a href="/" className="hover:text-forest-moss transition-colors">
            {isEn ? "Home" : "Trang chủ"}
          </a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-melaleuca-canopy font-semibold">
            {isEn ? "Online Room & Tour Reservation" : "Đặt phòng & Tour trực tuyến"}
          </span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-forest-moss/10 pb-6">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-melaleuca-canopy tracking-tight">
              {isEn
                ? "Tan Lap Floating Village Eco Resort & Hotel"
                : "Khu Nghỉ Dưỡng & Khách Sạn Làng Nổi Tân Lập"}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              {isEn
                ? "Official Direct Booking System — Best Rate Guarantee with Zero Middleman Fees"
                : "Hệ thống đặt phòng trực tuyến chính thức — Cam kết giá tốt nhất không qua trung gian"}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-alluvial-earth/15 text-alluvial-earth px-3 py-1.5 rounded-full text-xs font-bold">
              <span
                className="material-symbols-outlined text-sm text-amber-500"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>{" "}
              {isEn ? "4.8 / 5.0 (1,840+ reviews)" : "4.8 / 5.0 (1.840+ đánh giá)"}
            </span>
            <span className="inline-flex items-center gap-1 text-forest-moss text-xs font-semibold bg-forest-moss/10 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">location_on</span>{" "}
              QL62, Mộc Hóa, Long An
            </span>
          </div>
        </div>
      </section>

      {/* Stepper Header (4 Bước tiến trình) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="bg-white border border-forest-moss/15 rounded-2xl p-4 md:p-5 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Step 1 */}
            <button
              type="button"
              onClick={() => setCurrentStep && setCurrentStep(1)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                currentStep === 1
                  ? "bg-melaleuca-canopy text-white shadow-md ring-2 ring-stream-jade/40"
                  : currentStep > 1
                  ? "bg-tranquil-sand/70 border border-forest-moss/20 text-melaleuca-canopy"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  currentStep === 1
                    ? "bg-stream-jade text-melaleuca-canopy"
                    : currentStep > 1
                    ? "bg-forest-moss text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > 1 ? (
                  <span className="material-symbols-outlined text-base">check</span>
                ) : (
                  "1"
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
                  {isEn ? "Step 1" : "Bước 1"}
                </span>
                <span className="text-xs md:text-sm font-bold leading-tight line-clamp-1">
                  {isEn ? "Dates & Rooms" : "Ngày & Hạng Phòng"}
                </span>
              </div>
            </button>

            {/* Step 2 */}
            <button
              type="button"
              onClick={() => setCurrentStep && setCurrentStep(2)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                currentStep === 2
                  ? "bg-melaleuca-canopy text-white shadow-md ring-2 ring-stream-jade/40"
                  : currentStep > 2
                  ? "bg-tranquil-sand/70 border border-forest-moss/20 text-melaleuca-canopy"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  currentStep === 2
                    ? "bg-stream-jade text-melaleuca-canopy"
                    : currentStep > 2
                    ? "bg-forest-moss text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > 2 ? (
                  <span className="material-symbols-outlined text-base">check</span>
                ) : (
                  "2"
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
                  {isEn ? "Step 2" : "Bước 2"}
                </span>
                <span className="text-xs md:text-sm font-bold leading-tight line-clamp-1">
                  {isEn ? "Activities & Dining" : "Dịch Vụ & Trải Nghiệm"}
                </span>
              </div>
            </button>

            {/* Step 3 */}
            <button
              type="button"
              onClick={() => setCurrentStep && setCurrentStep(3)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                currentStep === 3
                  ? "bg-melaleuca-canopy text-white shadow-md ring-2 ring-stream-jade/40"
                  : currentStep > 3
                  ? "bg-tranquil-sand/70 border border-forest-moss/20 text-melaleuca-canopy"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  currentStep === 3
                    ? "bg-stream-jade text-melaleuca-canopy"
                    : currentStep > 3
                    ? "bg-forest-moss text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > 3 ? (
                  <span className="material-symbols-outlined text-base">check</span>
                ) : (
                  "3"
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
                  {isEn ? "Step 3" : "Bước 3"}
                </span>
                <span className="text-xs md:text-sm font-bold leading-tight line-clamp-1">
                  {isEn ? "Guest Details" : "Thông Tin Lưu Trú"}
                </span>
              </div>
            </button>

            {/* Step 4 */}
            <div
              className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                currentStep === 4
                  ? "bg-melaleuca-canopy text-white shadow-md ring-2 ring-stream-jade/40"
                  : "bg-gray-50 text-gray-500"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  currentStep === 4
                    ? "bg-stream-jade text-melaleuca-canopy"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                4
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
                  {isEn ? "Step 4" : "Bước 4"}
                </span>
                <span className="text-xs md:text-sm font-bold leading-tight line-clamp-1">
                  {isEn ? "Confirmation" : "Xác Nhận Đặt Chỗ"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search / Date Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="bg-white rounded-2xl border border-forest-moss/15 p-5 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
            {/* Check-in */}
            <div className="lg:col-span-3">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-forest-moss">
                  calendar_today
                </span>
                {isEn ? "Check-in Date" : "Ngày nhận phòng (Check-in)"}
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full bg-wetland-cream/40 border border-forest-moss/20 rounded-xl px-3.5 py-2.5 text-sm text-melaleuca-canopy font-medium focus:border-forest-moss focus:ring-1 focus:ring-forest-moss outline-none transition-colors"
              />
            </div>

            {/* Check-out */}
            <div className="lg:col-span-3">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-forest-moss">
                  event_repeat
                </span>
                {isEn ? "Check-out Date" : "Ngày trả phòng (Check-out)"}
              </label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full bg-wetland-cream/40 border border-forest-moss/20 rounded-xl px-3.5 py-2.5 text-sm text-melaleuca-canopy font-medium focus:border-forest-moss focus:ring-1 focus:ring-forest-moss outline-none transition-colors"
              />
            </div>

            {/* Số khách & Số phòng */}
            <div className="lg:col-span-4">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-forest-moss">
                  group
                </span>
                {isEn ? "Guests & Rooms" : "Số lượng khách & Phòng"}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-wetland-cream/40 border border-forest-moss/20 rounded-xl px-3 py-2 flex items-center justify-between">
                  <span className="text-xs text-gray-600">{isEn ? "Guests:" : "Khách:"}</span>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="bg-transparent text-xs font-bold text-forest-moss outline-none cursor-pointer"
                  >
                    <option value={1}>{isEn ? "1 Adult" : "1 Người lớn"}</option>
                    <option value={2}>{isEn ? "2 Adults" : "2 Người lớn"}</option>
                    <option value={3}>{isEn ? "3 Adults" : "3 Người lớn"}</option>
                    <option value={4}>{isEn ? "4 Adults" : "4 Người lớn"}</option>
                    <option value={5}>{isEn ? "5+ Guests" : "5+ Khách"}</option>
                  </select>
                </div>
                <div className="bg-wetland-cream/40 border border-forest-moss/20 rounded-xl px-3 py-2 flex items-center justify-between">
                  <span className="text-xs text-gray-600">{isEn ? "Rooms:" : "Phòng:"}</span>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(Number(e.target.value))}
                    className="bg-transparent text-xs font-bold text-forest-moss outline-none cursor-pointer"
                  >
                    <option value={1}>{isEn ? "1 Room" : "1 Phòng"}</option>
                    <option value={2}>{isEn ? "2 Rooms" : "2 Phòng"}</option>
                    <option value={3}>{isEn ? "3 Rooms" : "3 Phòng"}</option>
                    <option value={4}>{isEn ? "4+ Rooms" : "4+ Phòng"}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Update / Refresh Button */}
            <div className="lg:col-span-2">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("room-selection");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full h-[42px] rounded-xl bg-melaleuca-canopy hover:bg-forest-moss text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">search</span>
                {isEn ? "Update" : "Cập nhật"}
              </button>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="mt-4 pt-4 border-t border-forest-moss/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-melaleuca-canopy font-medium">
              <span
                className="material-symbols-outlined text-stream-jade text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span>
                {isEn
                  ? "Best rate guaranteed directly from Management"
                  : "Cam kết giá tốt nhất trực tiếp từ Ban Quản Lý"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-forest-moss font-medium">
              <span className="material-symbols-outlined text-forest-moss text-base">
                lock_clock
              </span>
              <span>
                {isEn
                  ? "Free cancellation or date change up to 48 hours"
                  : "Miễn phí hủy hoặc đổi ngày trước 48 giờ"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-alluvial-earth font-bold">
              <span className="material-symbols-outlined text-alluvial-earth text-base">
                redeem
              </span>
              <span>
                {isEn
                  ? "Free ticket to 5km Cajeput Forest Trail included"
                  : "Tặng vé tham quan Cung đường xuyên rừng tràm (5km)"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
