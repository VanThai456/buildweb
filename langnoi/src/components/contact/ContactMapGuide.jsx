import { useState } from "react";

export default function ContactMapGuide({ currentLang = "vi" }) {
  const isEn = currentLang === "en";
  const [copied, setCopied] = useState(false);

  const handleCopyCoords = () => {
    navigator.clipboard.writeText("10.6385, 106.0152");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="direction-guide" className="py-20 bg-wetland-cream border-b border-forest-moss/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-alluvial-earth text-xs font-bold uppercase tracking-widest">
            {isEn ? "Directions & Driving Routes" : "Chỉ Đường & Lộ Trình"}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-melaleuca-canopy mt-1 mb-3">
            {isEn
              ? "Navigation Map & Driving Directions to Tan Lap"
              : "Bản Đồ Định Vị & Hướng Dẫn Đường Đi Đến Làng Nổi"}
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            {isEn
              ? "Located on Highway 62 in Moc Hoa District, Tan Lap Floating Village is ~100km from Ho Chi Minh City (approx. 2 to 2.5 hours driving). The route is smooth, level, and well-suited for family cars and 45-seat tour buses alike."
              : "Nằm trên Quốc lộ 62 thuộc huyện Mộc Hóa, Làng Nổi Tân Lập cách TP. Hồ Chí Minh khoảng 100km (thời gian di chuyển từ 2h đến 2h30 phút). Tuyến đường thông thoáng, bằng phẳng và thuận tiện cho cả xe ô tô gia đình lẫn xe khách đoàn 45 chỗ."}
          </p>
        </div>

        {/* Map Visual & Interactive Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-forest-moss/15 mb-12 bg-gray-100 aspect-[16/9] md:aspect-[21/9] max-h-[460px]">
          <img
            src="/images/contact/contact-map.jpg"
            alt={isEn ? "Directions map to Tan Lap Floating Village QL62" : "Bản đồ chỉ đường đến Làng Nổi Tân Lập QL62"}
            className="w-full h-full object-cover"
          />

          {/* Floating Map Overlay Card */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-forest-moss/20 shadow-lg text-xs space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-forest-moss text-xl mt-0.5">
                pin_drop
              </span>
              <div>
                <h4 className="font-serif text-base font-bold text-melaleuca-canopy">
                  {isEn
                    ? "Tan Lap Floating Village Eco-Tourism Reserve"
                    : "Khu Du Lịch Sinh Thái Làng Nổi Tân Lập"}
                </h4>
                <p className="text-gray-600 mt-1">
                  {isEn
                    ? "Highway 62, Tan Lap Commune, Moc Hoa District, Long An Province (Entrance is right on Highway 62, spacious covered parking available)."
                    : "QL62, Xã Tân Lập, Huyện Mộc Hóa, Tỉnh Long An (Cổng chào nằm ngay mặt tiền đường QL62, có bãi đỗ xe lớn có mái che)."}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <a
                href="https://maps.google.com/?q=Lang+Noi+Tan+Lap+Moc+Hoa+Long+An"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-melaleuca-canopy text-white font-bold text-[11px] hover:bg-forest-moss transition-colors shadow-xs"
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                <span>{isEn ? "Open Google Maps" : "Mở Google Maps"}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyCoords}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-forest-moss text-forest-moss font-bold text-[11px] hover:bg-forest-moss hover:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                <span>
                  {copied
                    ? isEn
                      ? "Coordinates Copied!"
                      : "Đã sao chép tọa độ!"
                    : isEn
                    ? "Coords: 10.6385, 106.0152"
                    : "Tọa độ: 10.6385, 106.0152"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 2 Detailed Driving Routes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Route 1: Cao Tốc Trung Lương */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-forest-moss/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold text-forest-moss bg-forest-moss/10 px-3 py-1 rounded-full uppercase">
                  {isEn ? "Route 1 • Recommended for Cars" : "Tuyến 1 • Khuyên dùng cho ô tô"}
                </span>
                <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-forest-moss">
                    timer
                  </span>
                  {isEn ? "~2 hours (105 km)" : "~2 giờ (105 km)"}
                </span>
              </div>

              <h4 className="font-serif text-xl font-bold text-melaleuca-canopy mb-3">
                {isEn
                  ? "HCMC – Trung Luong Expressway Route"
                  : "Tuyến Cao Tốc TP.HCM - Trung Lương"}
              </h4>

              <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                {isEn
                  ? "Smooth expressway asphalt pavement, ideal for private family vehicles and 16–45 passenger group coaches."
                  : "Lộ trình êm ái, mặt đường nhựa chuẩn cao tốc, phù hợp nhất cho xe ô tô cá nhân gia đình và đoàn xe khách 16 - 45 chỗ."}
              </p>

              <ol className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-melaleuca-canopy text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    {isEn
                      ? "From central Ho Chi Minh City, take the access road to HCMC – Trung Luong Expressway."
                      : "Từ trung tâm TP.HCM di chuyển vào đường dẫn Cao tốc TP.HCM - Trung Lương."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-melaleuca-canopy text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    {isEn
                      ? "Drive straight ~40km, then take the exit right at Tan An City Interchange (Long An)."
                      : "Chạy thẳng khoảng 40km, rẽ phải ra tại Nút giao TP. Tân An (Long An)."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-melaleuca-canopy text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    {isEn
                      ? "Merge onto National Highway 62 towards Kien Tuong / Moc Hoa."
                      : "Nhập vào Quốc Lộ 62 theo hướng thị xã Kiến Tường / Mộc Hóa."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-melaleuca-canopy text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <span>
                    {isEn
                      ? "Drive ~60km through Thu Thua & Thanh Hoa to reach Tan Lap gate (on your left)."
                      : "Chạy thẳng khoảng 60km qua Thủ Thừa, Thạnh Hóa là đến cổng Làng Nổi Tân Lập (bên tay trái)."}
                  </span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-forest-moss font-semibold">
              <span className="material-symbols-outlined text-base">check_circle</span>
              <span>
                {isEn
                  ? "Smooth roadway, no potholes, comfortable highway rest stops"
                  : "Đường bằng phẳng, không có ổ gà, trạm dừng chân tiện nghi"}
              </span>
            </div>
          </div>

          {/* Route 2: Tuyến Đường N2 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-forest-moss/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold text-alluvial-earth bg-alluvial-earth/15 px-3 py-1 rounded-full uppercase">
                  {isEn ? "Route 2 • Ideal for Motorbikes" : "Tuyến 2 • Thích hợp phượt xe máy"}
                </span>
                <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-forest-moss">
                    timer
                  </span>
                  {isEn ? "~2h 20m (95 km)" : "~2 giờ 20 phút (95 km)"}
                </span>
              </div>

              <h4 className="font-serif text-xl font-bold text-melaleuca-canopy mb-3">
                {isEn
                  ? "Route N2 (Duc Hoa – Thanh Hoa)"
                  : "Tuyến Đường N2 (Đức Hòa - Thạnh Hóa)"}
              </h4>

              <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                {isEn
                  ? "Scenic countryside river route along Vam Co canal with light heavy truck traffic, great for road-trippers."
                  : "Tuyến đường cảnh quan đồng quê ven bờ sông Vàm Cỏ Đông, ít xe tải lớn, lý tưởng cho các bạn trẻ đi phượt hoặc tránh giờ cao điểm."}
              </p>

              <ol className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-alluvial-earth text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    {isEn
                      ? "From An Suong or Ba Hom intersection, take Provincial Road 10 to Duc Hoa town."
                      : "Từ An Sương hoặc ngã tư Bà Hom đi theo Tỉnh Lộ 10 về thị trấn Đức Hòa."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-alluvial-earth text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    {isEn
                      ? "Cross Duc Hoa bridge, turn onto Highway N2 running parallel to the canal."
                      : "Qua cầu Đức Hòa, rẽ vào tuyến Quốc lộ N2 chạy dọc theo bờ kênh."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-alluvial-earth text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    {isEn
                      ? "Continue straight through Thu Thua district until Thanh Hoa town."
                      : "Chạy thẳng qua địa phận Thủ Thừa, đến thị trấn Thạnh Hóa."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-alluvial-earth text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <span>
                    {isEn
                      ? "At Thanh Hoa junction, turn right onto Highway 62 and drive 25km to Tan Lap."
                      : "Tại ngã 3 Thạnh Hóa, rẽ phải vào Quốc Lộ 62 và chạy tiếp 25km đến Làng Nổi."}
                  </span>
                </li>
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-alluvial-earth font-semibold">
              <span className="material-symbols-outlined text-base">landscape</span>
              <span>
                {isEn
                  ? "Peaceful Mekong delta scenery along both sides of the canal"
                  : "Cảnh sắc miền Tây hai bên đường rất đẹp và thanh bình"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
