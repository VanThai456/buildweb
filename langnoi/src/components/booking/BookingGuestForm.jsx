export default function BookingGuestForm({
  guestInfo,
  setGuestInfo,
  paymentMethod,
  setPaymentMethod,
  currentLang = "vi",
}) {
  const isEn = currentLang === "en";

  return (
    <div id="booking-guest-form" className="space-y-6 pt-4">
      <div className="flex items-center justify-between border-b border-forest-moss/10 pb-3">
        <div>
          <h2 className="font-serif text-2xl font-bold text-melaleuca-canopy">
            {isEn ? "3. Guest Information" : "3. Thông Tin Khách Lưu Trú"}
          </h2>
          <p className="text-xs text-gray-600 mt-0.5">
            {isEn
              ? "Confirmation QR Code and check-in instructions will be sent to your Email/Zalo"
              : "Mã xác nhận QR Code và hướng dẫn nhận phòng sẽ được gửi qua Zalo/Email"}
          </p>
        </div>
        <span className="text-xs font-semibold text-forest-moss flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">lock</span>{" "}
          {isEn ? "Data Secured" : "Bảo mật thông tin"}
        </span>
      </div>

      <div className="space-y-4">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-melaleuca-canopy mb-1.5">
              {isEn ? "Full Name" : "Họ và tên quý khách"}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder={isEn ? "e.g. John Doe" : "Ví dụ: Nguyễn Văn A"}
              value={guestInfo.name}
              onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
              className="w-full bg-white border border-forest-moss/20 rounded-xl px-4 py-2.5 text-sm text-melaleuca-canopy focus:border-forest-moss focus:ring-1 focus:ring-forest-moss outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-melaleuca-canopy mb-1.5">
              {isEn ? "Phone Number / WhatsApp" : "Số điện thoại / Zalo"}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder={isEn ? "Phone or WhatsApp" : "Nhận mã đặt phòng qua Zalo"}
              value={guestInfo.phone}
              onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
              className="w-full bg-white border border-forest-moss/20 rounded-xl px-4 py-2.5 text-sm text-melaleuca-canopy focus:border-forest-moss focus:ring-1 focus:ring-forest-moss outline-none transition-colors"
            />
          </div>
        </div>

        {/* Email & Check-in Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-melaleuca-canopy mb-1.5">
              {isEn ? "Email Address" : "Email nhận hóa đơn & voucher"}{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="email@example.com"
              value={guestInfo.email}
              onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
              className="w-full bg-white border border-forest-moss/20 rounded-xl px-4 py-2.5 text-sm text-melaleuca-canopy focus:border-forest-moss focus:ring-1 focus:ring-forest-moss outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-melaleuca-canopy mb-1.5">
              {isEn ? "Estimated Arrival Time" : "Thời gian check-in dự kiến"}
            </label>
            <select
              value={guestInfo.checkInTime}
              onChange={(e) => setGuestInfo({ ...guestInfo, checkInTime: e.target.value })}
              className="w-full bg-white border border-forest-moss/20 rounded-xl px-4 py-2.5 text-sm text-melaleuca-canopy focus:border-forest-moss focus:ring-1 focus:ring-forest-moss outline-none transition-colors cursor-pointer"
            >
              <option value="14:00 - 16:00 (Đúng tiêu chuẩn)">
                {isEn ? "14:00 - 16:00 (Standard Check-in)" : "14:00 - 16:00 (Đúng tiêu chuẩn)"}
              </option>
              <option value="12:00 - 14:00 (Nhận phòng sớm nếu có sẵn)">
                {isEn ? "12:00 - 14:00 (Early Check-in if available)" : "12:00 - 14:00 (Nhận phòng sớm nếu có sẵn)"}
              </option>
              <option value="16:00 - 18:00 (Chiều muộn)">
                {isEn ? "16:00 - 18:00 (Late Afternoon)" : "16:00 - 18:00 (Chiều muộn)"}
              </option>
              <option value="Sau 18:00 (Thông báo lễ tân giữ phòng)">
                {isEn ? "After 18:00 (Hold room notice)" : "Sau 18:00 (Thông báo lễ tân giữ phòng)"}
              </option>
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-xs font-semibold text-melaleuca-canopy mb-1.5">
            {isEn ? "Special Requests (Optional)" : "Yêu cầu đặc biệt (Không bắt buộc)"}
          </label>
          <textarea
            rows="2"
            placeholder={
              isEn
                ? "e.g., High-floor room with sunset view, vegetarian meal options, anniversary decor..."
                : "Ví dụ: Ưu tiên tầng cao view rừng tràm hướng hoàng hôn, suất ăn chay nhẹ, chuẩn bị hoa chúc mừng sinh nhật..."
            }
            value={guestInfo.specialRequests}
            onChange={(e) => setGuestInfo({ ...guestInfo, specialRequests: e.target.value })}
            className="w-full bg-white border border-forest-moss/20 rounded-xl px-4 py-2.5 text-sm text-melaleuca-canopy focus:border-forest-moss focus:ring-1 focus:ring-forest-moss outline-none transition-colors"
          />
        </div>

        {/* VAT Invoice Checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="tax_invoice"
            checked={guestInfo.vatInvoice}
            onChange={(e) => setGuestInfo({ ...guestInfo, vatInvoice: e.target.checked })}
            className="w-4 h-4 rounded text-forest-moss focus:ring-forest-moss border-gray-300 cursor-pointer"
          />
          <label htmlFor="tax_invoice" className="text-xs text-gray-700 cursor-pointer">
            {isEn
              ? "I require a Corporate VAT invoice for company/enterprise expense"
              : "Tôi có nhu cầu xuất hóa đơn giá trị gia tăng (VAT) cho cơ quan, doanh nghiệp"}
          </label>
        </div>

        {/* Payment Methods */}
        <div className="pt-4 border-t border-forest-moss/10">
          <label className="block text-xs font-bold text-melaleuca-canopy uppercase tracking-wider mb-3">
            {isEn ? "Reservation Payment Method" : "Hình thức thanh toán giữ chỗ"}
          </label>

          <div className="space-y-2.5">
            {/* Option 1: QR Code */}
            <label
              className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === "qr"
                  ? "border-forest-moss bg-tranquil-sand/50 shadow-xs"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="payment_method"
                value="qr"
                checked={paymentMethod === "qr"}
                onChange={() => setPaymentMethod("qr")}
                className="mt-0.5 text-forest-moss focus:ring-forest-moss cursor-pointer"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs md:text-sm text-melaleuca-canopy flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-forest-moss text-base">
                      qr_code_2
                    </span>
                    {isEn
                      ? "Bank Transfer via QR (VietQR / Instant Confirmation)"
                      : "Chuyển khoản QR ngân hàng (VietQR / 24/7)"}
                  </span>
                  <span className="text-[11px] font-bold text-forest-moss bg-forest-moss/10 px-2 py-0.5 rounded">
                    {isEn ? "Recommended" : "Khuyên dùng"}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {isEn
                    ? "Instant confirmation with zero processing fees. QR code displays right after booking."
                    : "Xác nhận giữ chỗ tức thì không mất phí, mã QR hiển thị ngay sau khi bấm xác nhận."}
                </p>
              </div>
            </label>

            {/* Option 2: 50% Deposit */}
            <label
              className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === "deposit"
                  ? "border-forest-moss bg-tranquil-sand/50 shadow-xs"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="payment_method"
                value="deposit"
                checked={paymentMethod === "deposit"}
                onChange={() => setPaymentMethod("deposit")}
                className="mt-0.5 text-forest-moss focus:ring-forest-moss cursor-pointer"
              />
              <div className="flex-1">
                <span className="font-bold text-xs md:text-sm text-melaleuca-canopy flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-forest-moss text-base">
                    credit_card
                  </span>
                  {isEn
                    ? "50% Deposit — Pay remainder at reception upon check-in"
                    : "Đặt cọc 50% — Thanh toán còn lại tại quầy lễ tân"}
                </span>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {isEn
                    ? "Pay 50% in advance to guarantee room reservation, pay the remaining 50% at hotel desk."
                    : "Chỉ thanh toán 50% trước để bảo đảm giữ phòng, 50% còn lại thanh toán khi check-in."}
                </p>
              </div>
            </label>

            {/* Option 3: E-wallet */}
            <label
              className={`flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === "ewallet"
                  ? "border-forest-moss bg-tranquil-sand/50 shadow-xs"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="payment_method"
                value="ewallet"
                checked={paymentMethod === "ewallet"}
                onChange={() => setPaymentMethod("ewallet")}
                className="mt-0.5 text-forest-moss focus:ring-forest-moss cursor-pointer"
              />
              <div className="flex-1">
                <span className="font-bold text-xs md:text-sm text-melaleuca-canopy flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-forest-moss text-base">
                    account_balance_wallet
                  </span>
                  {isEn ? "E-Wallet (Momo / ZaloPay)" : "Ví điện tử Momo / ZaloPay"}
                </span>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  {isEn
                    ? "Quick, seamless checkout with leading domestic e-wallets."
                    : "Liên kết thanh toán ví điện tử nhanh chóng, an toàn."}
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
