import { useState } from "react";

export default function BookingSummarySidebar({
  selectedRoom,
  checkInDate,
  checkOutDate,
  guests,
  rooms,
  addons,
  onConfirmBooking,
  currentLang = "vi",
}) {
  const isEn = currentLang === "en";
  const [promoInput, setPromoInput] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculate nights
  const start = new Date(checkInDate);
  const end = new Date(checkOutDate);
  const diffTime = Math.max(0, end - start);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24))) || 1;

  // Costs
  const roomPrice = selectedRoom?.price || 850000;
  const roomTotal = roomPrice * nights * rooms;

  const addonsTotal = addons
    .filter((a) => a.selected)
    .reduce((sum, a) => sum + a.price * a.quantity, 0);

  const subtotal = roomTotal + addonsTotal;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();

    if (!code) {
      setPromoMessage(
        isEn ? "Please enter a promo code" : "Vui lòng nhập mã khuyến mãi"
      );
      return;
    }

    if (code === "MUANUOCNOI24") {
      const discount = 100000;
      setDiscountAmount(discount);
      setPromoApplied(true);
      setPromoMessage(
        isEn
          ? "Applied code MUANUOCNOI24: 100,000 VND discount"
          : "Đã áp dụng mã MUANUOCNOI24: Giảm 100.000đ"
      );
    } else if (code === "RETREATBBQ") {
      const discount = 150000;
      setDiscountAmount(discount);
      setPromoApplied(true);
      setPromoMessage(
        isEn
          ? "Applied code RETREATBBQ: 150,000 VND discount"
          : "Đã áp dụng mã RETREATBBQ: Giảm 150.000đ"
      );
    } else if (code === "RUNGXANH") {
      const discount = Math.round(subtotal * 0.1);
      setDiscountAmount(discount);
      setPromoApplied(true);
      setPromoMessage(
        isEn
          ? "Applied code RUNGXANH: 10% discount on entire bill"
          : "Đã áp dụng mã RUNGXANH: Giảm 10% tổng hóa đơn"
      );
    } else {
      setPromoMessage(
        isEn
          ? "Invalid or expired promo voucher"
          : "Mã không hợp lệ hoặc đã hết hạn"
      );
    }
  };

  const selectedAddons = addons.filter((a) => a.selected);

  return (
    <div className="sticky top-28 space-y-4">
      <div className="bg-white rounded-2xl border-2 border-forest-moss/20 p-6 shadow-lg">
        {/* Header */}
        <div className="border-b border-forest-moss/10 pb-4 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-melaleuca-canopy">
              {isEn ? "Booking Summary" : "Tóm Tắt Đặt Chỗ"}
            </h3>
            <span className="text-xs font-bold text-forest-moss bg-forest-moss/10 px-2.5 py-1 rounded-full">
              {isEn
                ? `${nights + 1}D${nights}N (${nights} night${nights > 1 ? "s" : ""})`
                : `${nights + 1}N${nights}Đ (${nights} đêm)`}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {isEn
              ? "Tan Lap Floating Village Hotel (8-Story Tower)"
              : "Khách Sạn Làng Nổi Tân Lập (Tòa tháp 8 tầng)"}
          </p>
        </div>

        {/* Selected Room Info */}
        <div className="bg-wetland-cream/50 rounded-xl p-3.5 border border-forest-moss/10 mb-4 text-xs space-y-1.5">
          <div className="font-bold text-melaleuca-canopy text-sm line-clamp-1">
            {selectedRoom?.title ||
              (isEn
                ? "High-Floor Double Room • Forest & River View"
                : "Phòng Đôi Tầng Cao View Rừng Sông")}
          </div>
          <div className="text-gray-600 flex items-center gap-1">
            <span>
              {isEn
                ? `${rooms} room${rooms > 1 ? "s" : ""} • ${guests} Guest${guests > 1 ? "s" : ""} • ${selectedRoom?.bed}`
                : `${rooms} phòng • ${guests} Khách • ${selectedRoom?.bed}`}
            </span>
          </div>
          <div className="pt-1 text-[11px] text-forest-moss font-semibold flex flex-col gap-0.5">
            <div>
              {isEn ? "• Check-in:" : "• Nhận phòng:"}{" "}
              <strong>{checkInDate}</strong> (14:00)
            </div>
            <div>
              {isEn ? "• Check-out:" : "• Trả phòng:"}{" "}
              <strong>{checkOutDate}</strong> (12:00)
            </div>
          </div>
        </div>

        {/* Free Perks Included */}
        <div className="mb-4 text-xs">
          <div className="font-bold text-gray-700 mb-1.5 flex items-center gap-1">
            <span className="material-symbols-outlined text-stream-jade text-sm">
              card_giftcard
            </span>
            {isEn ? "Included complimentary perks:" : "Quyền lợi miễn phí đi kèm:"}
          </div>
          <ul className="space-y-1 text-gray-600 text-[11px]">
            <li className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs text-stream-jade">
                check
              </span>
              {isEn
                ? `Entrance ticket & 5km Forest Trail (${guests * rooms} tickets)`
                : `Vé cổng & Cầu xuyên rừng 5km (${guests * rooms} vé)`}
            </li>
            <li className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs text-stream-jade">
                check
              </span>
              {isEn
                ? `Southern specialty buffet breakfast (${guests * rooms} portions)`
                : `Buffet sáng đặc sản Nam Bộ (${guests * rooms} suất)`}
            </li>
            <li className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs text-stream-jade">
                check
              </span>
              {isEn
                ? "Eco-swimming pool & high-speed Wi-Fi"
                : "Bể bơi sinh thái & wifi tốc độ cao"}
            </li>
          </ul>
        </div>

        {/* Selected Addons */}
        {selectedAddons.length > 0 && (
          <div className="mb-4 pt-3 border-t border-forest-moss/10 text-xs">
            <div className="font-bold text-gray-700 mb-1.5">
              {isEn ? "Selected add-on experiences:" : "Dịch vụ bổ sung đã chọn:"}
            </div>
            <ul className="space-y-1 text-gray-600 text-[11px]">
              {selectedAddons.map((addon) => {
                const title = isEn && addon.titleEn ? addon.titleEn : addon.title;
                return (
                  <li key={addon.id} className="flex items-center justify-between">
                    <span className="line-clamp-1">
                      {title} (x{addon.quantity})
                    </span>
                    <span className="font-semibold text-forest-moss whitespace-nowrap ml-2">
                      {(addon.price * addon.quantity).toLocaleString("vi-VN")}đ
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Promo Voucher Form */}
        <div className="pt-3 border-t border-forest-moss/10 mb-4">
          <form onSubmit={handleApplyPromo} className="flex gap-2">
            <input
              type="text"
              placeholder={isEn ? "Voucher code (MUANUOCNOI24)" : "Mã voucher (MUANUOCNOI24)"}
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
              className="flex-1 uppercase bg-wetland-cream/40 border border-forest-moss/20 rounded-xl px-3 py-2 text-xs text-melaleuca-canopy font-semibold outline-none focus:border-forest-moss"
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-xl bg-forest-moss hover:bg-melaleuca-canopy text-white font-bold text-xs transition-colors cursor-pointer"
            >
              {isEn ? "Apply" : "Áp dụng"}
            </button>
          </form>

          {promoMessage && (
            <p
              className={`text-[11px] mt-1.5 font-medium ${
                promoApplied ? "text-emerald-700" : "text-red-500"
              }`}
            >
              {promoMessage}
            </p>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="pt-3 border-t border-forest-moss/10 space-y-2 text-xs">
          <div className="flex justify-between text-gray-600">
            <span>
              {isEn
                ? `Room rate (${nights} night${nights > 1 ? "s" : ""} × ${rooms} room${rooms > 1 ? "s" : ""}):`
                : `Tiền phòng (${nights} đêm × ${rooms} phòng):`}
            </span>
            <span className="font-medium text-gray-800">
              {roomTotal.toLocaleString("vi-VN")} đ
            </span>
          </div>

          {addonsTotal > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>{isEn ? "Experiences & add-on dining:" : "Trải nghiệm & ẩm thực thêm:"}</span>
              <span className="font-medium text-gray-800">
                +{addonsTotal.toLocaleString("vi-VN")} đ
              </span>
            </div>
          )}

          {discountAmount > 0 && (
            <div className="flex justify-between text-emerald-700 font-semibold">
              <span>{isEn ? "Voucher discount:" : "Voucher giảm giá:"}</span>
              <span>-{discountAmount.toLocaleString("vi-VN")} đ</span>
            </div>
          )}

          <div className="pt-2 border-t border-dashed border-gray-200 flex items-baseline justify-between">
            <span className="font-serif text-sm font-bold text-melaleuca-canopy">
              {isEn ? "Total amount:" : "Tổng thanh toán:"}
            </span>
            <div className="text-right">
              <span className="font-serif text-2xl font-bold text-forest-moss">
                {finalTotal.toLocaleString("vi-VN")} đ
              </span>
              <span className="block text-[10px] text-gray-400">
                {isEn ? "Includes all taxes & service fees" : "Đã gồm thuế & phí dịch vụ"}
              </span>
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <button
          type="button"
          onClick={() => onConfirmBooking({ finalTotal, nights, discountAmount })}
          className="w-full mt-5 py-3.5 rounded-full bg-melaleuca-canopy hover:bg-forest-moss text-white font-bold text-sm uppercase tracking-wider transition-all transform active:scale-98 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">check_circle</span>
          <span>{isEn ? "Confirm Booking & Get QR Code" : "Xác Nhận Đặt Chỗ & Nhận Mã QR"}</span>
        </button>

        {/* Support Hotline */}
        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <div className="text-[11px] text-gray-500">
            {isEn ? "Need booking support or corporate VAT invoice?" : "Cần hỗ trợ đặt phòng hoặc xuất VAT?"}
          </div>
          <a
            href="tel:02723968133"
            className="inline-flex items-center gap-1 text-xs font-bold text-forest-moss hover:text-melaleuca-canopy mt-1"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            Hotline: 0272 3968 133 — 0966 893 943
          </a>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-tranquil-sand/50 rounded-xl p-3.5 border border-forest-moss/10 flex items-center justify-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1 font-medium">
          <span className="material-symbols-outlined text-forest-moss text-sm">
            verified_user
          </span>
          {isEn ? "256-bit SSL Encrypted" : "Bảo mật SSL 256-bit"}
        </div>
        <div className="flex items-center gap-1 font-medium">
          <span className="material-symbols-outlined text-forest-moss text-sm">
            price_check
          </span>
          {isEn ? "No Hidden Fees" : "Không phí ẩn"}
        </div>
      </div>
    </div>
  );
}
