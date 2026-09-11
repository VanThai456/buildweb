import { useEffect, useState } from "react";

export default function PromoModal({ isOpen, onClose, onOpenBooking, currentLang = "vi" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Gentle entrance animation
    const timer = setTimeout(() => {
      setMounted(true);
    }, 150);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleAction = () => {
    onClose();
    if (onOpenBooking) {
      onOpenBooking("Đặc Quyền Về Với Miền Tràm Cổ Thụ (Combo Nghỉ Dưỡng & Ẩm Thực)");
    }
  };

  const baseUrl = import.meta.env.BASE_URL || "/";
  const ticketsImg = `${baseUrl}images/promo-tickets.jpg`;
  const logoImg = `${baseUrl}images/promo-logo.png`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-full max-w-4xl lg:max-w-5xl bg-[#FAF9F5] shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 transform ${
          mounted ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        } border border-[#d8d8c0]/60`}
      >
        {/* Close Button X */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Đóng thông báo"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4f3ea] border border-[#a2b88b]/50 flex items-center justify-center text-[#425232] hover:text-black hover:border-black hover:bg-white transition-all shadow-sm cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT PANEL: Hand holding 3 Eco Pass Tickets with wooden bungalows background */}
        <div className="w-full md:w-1/2 h-56 sm:h-72 md:h-auto min-h-[220px] md:min-h-[500px] relative overflow-hidden bg-[#243319]">
          <img
            src={ticketsImg}
            alt="Đặc quyền Eco Pass Làng Nổi Tân Lập"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80";
            }}
          />
        </div>

        {/* RIGHT PANEL: Content & Privilege List */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center text-center bg-[#FAF9F5]">
          {/* Logo */}
          <div className="mb-4 sm:mb-5">
            <img
              src={logoImg}
              alt="Làng Nổi Tân Lập — Eco Sanctuary & Resort"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain mx-auto"
              onError={(e) => {
                // Fallback typography if image fails
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Title */}
          <h2 className="font-serif-luxury text-xl sm:text-2xl md:text-[28px] lg:text-[30px] text-[#1c2317] font-normal mb-3 leading-snug tracking-wide">
            {currentLang === "vi"
              ? "Đặc Quyền Về Với Miền Tràm Cổ Thụ"
              : "Exclusive Privileges for Primal Cajuput Forest"}
          </h2>

          {/* Subtitle */}
          <p className="text-[#495442] text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-md mx-auto mb-5 sm:mb-6 font-light">
            {currentLang === "vi"
              ? "Khởi đầu kỳ nghỉ dưỡng sinh thái nguyên bản với những đặc quyền độc bản từ Làng Nổi Tân Lập."
              : "Begin your authentic eco-sanctuary journey with bespoke privileges from Tan Lap Floating Village."}
          </p>

          {/* 3 Checkmark Privileges */}
          <div className="w-full max-w-md space-y-2.5 mb-6 text-left text-[#26311e] text-xs sm:text-sm md:text-[14.5px]">
            <div className="flex items-start gap-2.5">
              <span className="text-[#3f661d] font-bold text-base sm:text-lg leading-none select-none mt-0.5">
                ✓
              </span>
              <span className="leading-snug">
                {currentLang === "vi"
                  ? "01 chuyến xuồng ba lá lướt bèo cám miễn phí"
                  : "01 complimentary handcrafted sampan ride over green duckweed"}
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-[#3f661d] font-bold text-base sm:text-lg leading-none select-none mt-0.5">
                ✓
              </span>
              <span className="leading-snug">
                {currentLang === "vi"
                  ? "01 Credit 500.000 VND cho ẩm thực đồng quê & cá lóc nướng trui"
                  : "01 Credit 500,000 VND for regional cuisine & straw-grilled fish"}
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-[#3f661d] font-bold text-base sm:text-lg leading-none select-none mt-0.5">
                ✓
              </span>
              <span className="leading-snug">
                {currentLang === "vi"
                  ? "01 bữa tối lãng mạn bên hồ sen cho 02 khách"
                  : "01 romantic lakeside candlelit dinner for 02 guests"}
              </span>
            </div>
          </div>

          {/* Validity Period */}
          <p className="text-[#384330] text-xs sm:text-sm mb-6 font-normal">
            {currentLang === "vi" ? "Thời gian lưu trú: " : "Stay period: "}
            <span className="font-semibold text-[#1c2317]">15.10.2024 – 31.12.2024</span>
          </p>

          {/* Action Button */}
          <button
            onClick={handleAction}
            type="button"
            className="bg-[#5f7e34] hover:bg-[#4d662a] active:bg-[#3d5221] text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] px-10 py-3.5 transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            {currentLang === "vi" ? "ĐẶT NGAY" : "BOOK NOW"}
          </button>
        </div>
      </div>
    </div>
  );
}
