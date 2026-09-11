import { useState } from 'react';

export default function Hero({ onOpenBooking, currentLang }) {
  const [service, setService] = useState('Vé tham quan & Tour trọn gói');
  const [date, setDate] = useState('Hôm nay, 15/10/2024');
  const [guests, setGuests] = useState('2 Người lớn, 1 Trẻ em');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenBooking(service, { date, guests });
  };

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden text-white flex flex-col justify-center min-h-[640px] md:min-h-[720px]">
      {/* Cinematic Forest Background Image (Full vibrant natural color) */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center"
          src="/images/hero-bg.jpg"
          onError={(e) => {
            e.target.src =
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAECbvKoOJIsGO8UKc30mlvAIZVPPYS-7jkdoqcXRJ6orG6kWKquHxo4pJwt4XJJh90uTL4ZqUGeV4j-xzczxnH6lLYzS_B6lwiVbggTpZTV5wFyPIL-u7ZH5tFcP7np5UEDJt3EyqXN_t_V3Ufc1vw4ulJPyHtu8OJhC8EWHuuTBCWZVejHHO59S-WVdYeHan8cFrMSM2Bbxo375BDxteiCufYGUa15F2YSg5kN42-DVs64Uckrgd2vQ=s0';
          }}
          alt="Flooded cajeput melaleuca forest at Tan Lap Long An Vietnam sunrise"
        />
        {/* Soft Vignette Overlay to enhance readability while preserving gorgeous natural photos */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Tag badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B4D3E]/70 backdrop-blur-md border border-white/20 text-[#74C69D] text-xs md:text-sm font-medium mb-5 shadow-sm">
          <span className="material-symbols-outlined text-[16px] text-[#52B788]">nature</span>
          <span>
            {currentLang === 'vi'
              ? 'Khu Ramsar & Du Lịch Sinh Thái Rừng Tràm Cổ Thụ Đồng Tháp Mười'
              : 'Ramsar Wetlands & Melaleuca Eco-Sanctuary Dong Thap Muoi'}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white font-bold leading-[1.2] tracking-tight mb-5 max-w-5xl drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)]">
          {currentLang === 'vi' ? (
            <>
              Làng Nổi Tân Lập – Bản Tình Ca Giữa<br className="hidden md:inline" /> Rừng Tràm Cổ Thụ Đồng Tháp Mười
            </>
          ) : (
            <>
              Tan Lap Floating Village – An Untouched<br className="hidden md:inline" /> Melaleuca Sanctuary
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-white/95 text-sm sm:text-base md:text-[17px] max-w-3xl mb-8 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {currentLang === 'vi'
            ? 'Trải nghiệm cung đường bộ xuyên rừng tràm độc nhất vô nhị, xuồng ba lá lướt nhẹ trên bèo cám và không gian nghỉ dưỡng biệt lập giữa thiên nhiên hoang sơ của vùng đất ngập nước miền Tây Nam Bộ.'
            : 'Experience the one-of-a-kind 5km elevated pathway through flooded cajeput forests, traditional sampan boat rides gliding over duckweed, and secluded eco-resort hospitality in Long An.'}
        </p>

        {/* Micro Metrics Trust Badges (Horizontal Frosted Capsule Pill) */}
        <div className="w-full max-w-4xl mx-auto mb-8 py-3.5 px-6 md:px-10 rounded-3xl md:rounded-full bg-[#11241C]/65 backdrop-blur-md border border-white/20 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center text-left">
            {/* Metric 1 */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#52B788] text-[28px] md:text-[32px] shrink-0">
                forest
              </span>
              <div>
                <div className="font-bold text-white text-lg md:text-xl leading-tight">135 ha</div>
                <div className="text-white/80 text-[11px] md:text-xs leading-tight">
                  {currentLang === 'vi' ? 'Rừng tràm nguyên sinh' : 'Ancient forest'}
                </div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#D4A373] text-[28px] md:text-[32px] shrink-0">
                route
              </span>
              <div>
                <div className="font-bold text-white text-lg md:text-xl leading-tight">5 km</div>
                <div className="text-white/80 text-[11px] md:text-xs leading-tight">
                  {currentLang === 'vi' ? 'Đường đan xuyên rừng' : 'Walkway trail'}
                </div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#52B788] text-[28px] md:text-[32px] shrink-0">
                cloud_upload
              </span>
              <div>
                <div className="font-bold text-white text-lg md:text-xl leading-tight">38 m</div>
                <div className="text-white/80 text-[11px] md:text-xs leading-tight">
                  {currentLang === 'vi' ? 'Tháp ngắm toàn cảnh' : '360° Tower'}
                </div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#D4A373] text-[28px] md:text-[32px] shrink-0">
                schedule
              </span>
              <div>
                <div className="font-bold text-white text-lg md:text-xl leading-tight">2 Giờ</div>
                <div className="text-white/80 text-[11px] md:text-xs leading-tight">
                  {currentLang === 'vi' ? 'Từ TP. Hồ Chí Minh' : 'From Ho Chi Minh City'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK BOOKING & FILTER CAPSULE WIDGET */}
        <div
          className="w-full max-w-5xl bg-white text-[#111D23] rounded-3xl md:rounded-full p-2.5 md:p-3 shadow-2xl border border-gray-100"
          id="booking"
        >
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
            {/* Category Service Dropdown */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-2xl md:rounded-full hover:bg-[#F3F4ED] transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[#2D6A4F] text-2xl shrink-0">
                confirmation_number
              </span>
              <div className="text-left w-full">
                <label className="block text-[11px] text-gray-500 font-medium leading-tight">
                  {currentLang === 'vi' ? 'Chọn dịch vụ' : 'Select service'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-transparent border-none p-0 text-sm md:text-[15px] text-[#1B4D3E] font-bold focus:ring-0 cursor-pointer outline-none leading-normal"
                >
                  <option value="Vé tham quan & Tour trọn gói">Vé tham quan & Tour trọn gói</option>
                  <option value="Khách sạn Làng Nổi (Nghỉ dưỡng)">Khách sạn Làng Nổi (Nghỉ dưỡng)</option>
                  <option value="Chèo xuồng ba lá & Ẩm thực">Chèo xuồng ba lá & Ẩm thực</option>
                  <option value="Combo 2N1Đ Sinh Thái">Combo 2N1Đ Sinh Thái</option>
                </select>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-8 bg-gray-200 shrink-0"></div>

            {/* Date Picker */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-2xl md:rounded-full hover:bg-[#F3F4ED] transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[#2D6A4F] text-2xl shrink-0">
                calendar_month
              </span>
              <div className="text-left w-full">
                <label className="block text-[11px] text-gray-500 font-medium leading-tight">
                  {currentLang === 'vi' ? 'Ngày tham quan' : 'Visit date'}
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent border-none p-0 text-sm md:text-[15px] text-[#1B4D3E] font-bold focus:ring-0 cursor-pointer outline-none leading-normal"
                />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-8 bg-gray-200 shrink-0"></div>

            {/* Guest Quantity Selector */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-2xl md:rounded-full hover:bg-[#F3F4ED] transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[#2D6A4F] text-2xl shrink-0">
                group
              </span>
              <div className="text-left w-full">
                <label className="block text-[11px] text-gray-500 font-medium leading-tight">
                  {currentLang === 'vi' ? 'Số lượng khách' : 'Guests'}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent border-none p-0 text-sm md:text-[15px] text-[#1B4D3E] font-bold focus:ring-0 cursor-pointer outline-none leading-normal"
                >
                  <option value="2 Người lớn, 1 Trẻ em">2 Người lớn, 1 Trẻ em</option>
                  <option value="1 Người lớn (Solo)">1 Người lớn (Solo)</option>
                  <option value="4-6 Khách (Nhóm gia đình)">4-6 Khách (Nhóm gia đình)</option>
                  <option value="Đoàn trên 10 khách">Đoàn trên 10 khách</option>
                </select>
              </div>
            </div>

            {/* CTA Submit Button */}
            <div className="w-full md:w-auto shrink-0">
              <button
                type="submit"
                className="w-full md:w-auto h-12 md:h-13 px-6 rounded-full bg-[#163A2F] hover:bg-[#204E3F] text-white font-semibold text-sm md:text-[15px] flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-lg">search</span>
                <span>{currentLang === 'vi' ? 'Kiểm tra giá & Đặt ngay' : 'Check & Book Now'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
