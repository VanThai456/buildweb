export default function BookingAddons({
  addons,
  onToggleAddon,
  onChangeAddonQty,
  currentLang = "vi",
}) {
  const isEn = currentLang === "en";

  return (
    <div id="booking-addons" className="space-y-6 pt-4">
      <div className="flex items-center justify-between border-b border-forest-moss/10 pb-3">
        <div>
          <h2 className="font-serif text-2xl font-bold text-melaleuca-canopy">
            {isEn ? "2. Experiences & Countryside Dining" : "2. Trải Nghiệm & Ẩm Thực Đồng Quê"}
          </h2>
          <p className="text-xs text-gray-600 mt-0.5">
            {isEn
              ? "Reserved and prepared for you right upon check-in by management"
              : "Được ban quản lý chuẩn bị sẵn ngay khi quý khách làm thủ tục nhận phòng"}
          </p>
        </div>
        <span className="text-xs font-bold text-alluvial-earth bg-alluvial-earth/10 px-3 py-1 rounded-full hidden sm:inline-block">
          {isEn ? "Recommended" : "Khuyên dùng"}
        </span>
      </div>

      <div className="space-y-3.5">
        {addons.map((addon) => {
          const isChecked = addon.selected;
          const title = isEn && addon.titleEn ? addon.titleEn : addon.title;
          const desc = isEn && addon.descEn ? addon.descEn : addon.description;
          const unit = isEn ? (addon.unit === "xe" ? "bike" : addon.unit === "khách" ? "guest" : "person") : addon.unit;

          return (
            <div
              key={addon.id}
              className={`p-4 rounded-xl border-2 transition-all ${
                isChecked
                  ? "border-forest-moss/40 bg-tranquil-sand/50 shadow-xs"
                  : "border-forest-moss/15 bg-white hover:bg-tranquil-sand/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleAddon(addon.id)}
                  id={`addon-${addon.id}`}
                  className="mt-1 w-5 h-5 rounded text-forest-moss focus:ring-forest-moss border-gray-300 cursor-pointer"
                />

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <label
                      htmlFor={`addon-${addon.id}`}
                      className="font-bold text-sm md:text-base text-melaleuca-canopy flex items-center gap-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-stream-jade text-lg">
                        {addon.icon}
                      </span>
                      {title}
                    </label>
                    <span className="text-xs md:text-sm font-bold text-forest-moss whitespace-nowrap">
                      +{addon.price.toLocaleString("vi-VN")}đ / {unit}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {desc}
                  </p>

                  {/* Quantity Counter if selected */}
                  {isChecked && (
                    <div className="mt-3 pt-3 border-t border-forest-moss/10 flex items-center justify-between">
                      <span className="text-xs font-semibold text-forest-moss bg-mist-emerald/20 px-2.5 py-1 rounded-md">
                        {isEn ? "Selected:" : "Đã chọn:"} {addon.quantity} {unit} (
                        {(addon.price * addon.quantity).toLocaleString("vi-VN")}đ)
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            onChangeAddonQty(addon.id, Math.max(1, addon.quantity - 1))
                          }
                          className="w-7 h-7 rounded-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-sm cursor-pointer shadow-xs"
                        >
                          -
                        </button>
                        <span className="font-bold text-xs text-melaleuca-canopy w-4 text-center">
                          {addon.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onChangeAddonQty(addon.id, addon.quantity + 1)
                          }
                          className="w-7 h-7 rounded-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-sm cursor-pointer shadow-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
