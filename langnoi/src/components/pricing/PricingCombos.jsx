export default function PricingCombos({ onOpenBooking, currentLang = "vi" }) {
  const isEn = currentLang === "en";

  const combos = [
    {
      id: "day-tour",
      tag: isEn ? "Same-Day Return" : "Đi về trong ngày",
      tagStyle: "text-forest-moss bg-forest-moss/10",
      title: "Eco Day Tour",
      description: isEn
        ? "Ideal for day-trippers from HCMC or neighboring provinces seeking an immersive nature escape."
        : "Lý tưởng cho du khách khởi hành từ TP.HCM hoặc các tỉnh lân cận muốn hòa mình vào thiên nhiên trong ngày.",
      price: "360.000 đ",
      unit: isEn ? "/guest" : "/khách",
      featured: false,
      features: isEn
        ? [
            { text: "Entrance ticket & 5km cajeput forest trail", included: true },
            { text: "Rowing sampan gliding over duckweed carpet", included: true },
            { text: "Specialty lunch: lotus seed rice + grilled fish", included: true },
            { text: "Check-in at 38m observation tower", included: true },
            { text: "Hotel room accommodation", included: false },
          ]
        : [
            { text: "Vé vào cổng & cầu xuyên rừng 5km", included: true },
            { text: "Chèo xuồng ba lá len lỏi thảm bèo xanh", included: true },
            { text: "Bữa trưa đặc sản cơm sen + cá lóc nướng", included: true },
            { text: "Check-in Tháp quan sát cao 38m", included: true },
            { text: "Phòng khách sạn nghỉ ngơi", included: false },
          ],
      btnText: isEn ? "Select Day Tour Package" : "Chọn Gói Day Tour",
      btnAction: () => {
        if (onOpenBooking) {
          onOpenBooking("Combo Eco Day Tour Trong Ngày (360.000đ)");
        } else {
          const el = document.getElementById("dat-ve");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      },
      btnStyle:
        "w-full py-3.5 rounded-full border-2 border-forest-moss text-forest-moss text-center font-label-lg font-semibold hover:bg-forest-moss hover:text-white transition-all shadow-sm hover:shadow-md",
    },
    {
      id: "retreat",
      tag: isEn ? "2 Days 1 Night" : "2 Ngày 1 Đêm",
      tagStyle: "text-alluvial-earth bg-alluvial-earth/15",
      title: "Sanctuary Retreat",
      badge: isEn ? "Best Seller • Top Pick" : "Bán Chạy Nhất • Gợi Ý Hàng Đầu",
      description: isEn
        ? "Mindful healing, serene sunrise on tranquil waters, and golden sunset across the melaleuca forest canopy."
        : "Chữa lành tinh thần, đón bình minh tĩnh lặng trên mặt nước và ngắm hoàng hôn đỏ ửng buông xuống tán tràm.",
      price: "990.000 đ",
      unit: isEn ? "/guest (min 2 guests)" : "/khách (áp dụng từ 2 khách)",
      featured: true,
      features: isEn
        ? [
            { text: "01 night Deluxe room with primeval forest view", included: true },
            { text: "Includes 01 buffet breakfast + 01 riverside BBQ dinner", included: true },
            { text: "Full cable boat cruise & rowing sampan tickets", included: true },
            { text: "Complimentary morning bicycle rental", included: true },
            { text: "Complimentary Tan Lap lotus herbal tea", included: true },
          ]
        : [
            { text: "01 đêm phòng Deluxe view rừng nguyên sinh", included: true },
            { text: "Bao gồm 01 buffet sáng + 01 tiệc BBQ tối ven rạch", included: true },
            { text: "Trọn gói vé cáp kéo mui trần & xuồng chèo", included: true },
            { text: "Miễn phí thuê xe đạp dạo bìa rừng buổi sớm", included: true },
            { text: "Thưởng thức trà thảo mộc hoa sen Tân Lập", included: true },
          ],
      btnText: isEn ? "Book Retreat Package" : "Đặt Ngay Gói Retreat",
      btnAction: () => {
        if (onOpenBooking) {
          onOpenBooking("Combo Sanctuary Retreat 2N1Đ (990.000đ)");
        } else {
          const el = document.getElementById("dat-ve");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      },
      btnStyle:
        "w-full py-3.5 rounded-full bg-melaleuca-canopy text-white text-center font-label-lg font-semibold hover:bg-forest-moss shadow-md hover:shadow-lg transition-all",
    },
    {
      id: "teambuilding",
      tag: isEn ? "Groups 20+ Guests" : "Đoàn 20+ Khách",
      tagStyle: "text-forest-moss bg-forest-moss/10",
      title: isEn ? "Teambuilding & Company Tour" : "Teambuilding & Trải Nghiệm",
      description: isEn
        ? "Dynamic team-bonding with authentic Mekong folk challenges and a vibrant riverside Gala Dinner."
        : "Chương trình gắn kết đội ngũ năng động với chuỗi trò chơi dân gian miền Tây sông nước và Gala sôi động.",
      price: "680.000 đ",
      unit: isEn ? "/guest" : "/khách",
      featured: false,
      features: isEn
        ? [
            { text: "Dedicated lawn & wetland zone for activities", included: true },
            { text: "Traditional fish trapping in muddy creek", included: true },
            { text: "Gala Dinner with sound, lights & stage setup", included: true },
            { text: "Professional MC & energetic game hosts", included: true },
            { text: "Complimentary photo banner & aerial drone footage", included: true },
          ]
        : [
            { text: "Khu vực sân cỏ & mặt nước tổ chức teambuilding", included: true },
            { text: "Hoạt động dỡ lợp, bắt cá dưới ao bùn vui nhộn", included: true },
            { text: "Gala Dinner âm thanh, ánh sáng & sân khấu", included: true },
            { text: "Đội ngũ MC & hoạt náo viên chuyên nghiệp", included: true },
            { text: "Tặng banner chụp hình và flycam kỷ niệm", included: true },
          ],
      btnText: isEn ? "Request Group Quote" : "Yêu Cầu Báo Giá Đoàn",
      btnAction: () => {
        const el = document.getElementById("dat-ve");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (onOpenBooking) {
          onOpenBooking("Teambuilding & Đoàn Doanh Nghiệp (Báo giá theo đoàn)");
        }
      },
      btnStyle:
        "w-full py-3.5 rounded-full border-2 border-forest-moss text-forest-moss text-center font-label-lg font-semibold hover:bg-forest-moss hover:text-white transition-all shadow-sm hover:shadow-md",
    },
  ];

  const steps = [
    {
      num: "1",
      title: isEn ? "Choose Service" : "Chọn Dịch Vụ",
      desc: isEn
        ? "Select admission tickets, all-inclusive combos, or hotel rooms matching your travel schedule."
        : "Lựa chọn loại vé tham quan, gói combo hoặc phòng khách sạn phù hợp với lịch trình của bạn.",
    },
    {
      num: "2",
      title: isEn ? "Enter Voucher" : "Nhập Mã Voucher",
      desc: isEn
        ? "Enter contact details and voucher code (e.g. MUANUOCNOI24) to enjoy immediate discounts."
        : "Điền thông tin liên hệ và điền mã khuyến mãi (như MUANUOCNOI24) để hưởng ngay mức chiết khấu.",
    },
    {
      num: "3",
      title: isEn ? "Get QR Code" : "Nhận Mã QR Zalo/Mail",
      desc: isEn
        ? "System delivers instant reservation confirmation & electronic QR code to your Zalo or Email."
        : "Hệ thống gửi xác nhận giữ chỗ và mã QR điện tử tức thì qua Zalo hoặc hòm thư Email cá nhân.",
    },
    {
      num: "4",
      title: isEn ? "Fast Check-in" : "Check-in Làn Ưu Tiên",
      desc: isEn
        ? "Scan your QR code at the express lane to enter the forest walkway without waiting in line."
        : "Quét mã QR tại cổng kiểm soát để vào thẳng cung đường rừng tràm mà không phải xếp hàng chờ đợi.",
    },
  ];

  const policies = [
    {
      icon: "child_care",
      title: isEn ? "Child & Height Regulations" : "Quy Định Chiều Cao & Trẻ Em",
      lines: isEn
        ? [
            { label: "Under 1m:", text: "100% free admission and rowing sampan with parents." },
            { label: "1m to 1.3m:", text: "Child ticket applies (50% of published adult rate)." },
            { label: "Over 1.3m:", text: "Standard adult rate applies." },
          ]
        : [
            { label: "Dưới 1m:", text: "Miễn phí 100% vé cổng tham quan và đò chèo cùng phụ huynh." },
            { label: "Từ 1m đến 1m3:", text: "Áp dụng giá vé trẻ em (bằng 50% mức giá người lớn niêm yết)." },
            { label: "Trên 1m3:", text: "Tính theo giá vé người lớn tiêu chuẩn." },
          ],
    },
    {
      icon: "groups",
      title: isEn ? "Group Discount Policy" : "Chính Sách Chiết Khấu Đoàn",
      lines: isEn
        ? [
            { label: "Groups 20 - 49 guests:", text: "5% immediate discount on total sightseeing costs." },
            { label: "Groups 50+ guests:", text: "10% discount + Complimentary flower basket or cake." },
            { label: "Corporate / Travel Agencies:", text: "Full official VAT invoice issued upon request." },
          ]
        : [
            { label: "Đoàn từ 20 đến 49 khách:", text: "Giảm ngay 5% tổng chi phí dịch vụ tham quan." },
            { label: "Đoàn từ 50 khách trở lên:", text: "Giảm ngay 10% + Tặng 01 lẵng hoa hoặc bánh sinh nhật." },
            { label: "Doanh nghiệp / Lữ hành:", text: "Hỗ trợ xuất hóa đơn VAT đầy đủ theo quy định." },
          ],
    },
    {
      icon: "published_with_changes",
      title: isEn ? "Date Change & Cancellation" : "Quy Định Đổi Ngày & Hoàn Hủy",
      lines: isEn
        ? [
            { label: "Reschedule visit date:", text: "100% free at least 24 hours prior to departure." },
            { label: "Hotel cancellation:", text: "Full 100% deposit refund when canceled 3 days ahead." },
            { label: "Severe weather/storm:", text: "100% refund guaranteed in force majeure circumstances." },
          ]
        : [
            { label: "Đổi ngày tham quan:", text: "Hoàn toàn miễn phí trước giờ khởi hành ít nhất 24 giờ." },
            { label: "Hủy phòng khách sạn:", text: "Trước 3 ngày được hoàn 100% tiền đặt cọc." },
            { label: "Thời tiết bão lũ:", text: "Cam kết hoàn tiền 100% trong trường hợp thời tiết bất khả kháng." },
          ],
    },
  ];

  return (
    <>
      {/* 5. CÁC GÓI COMBO TRỌN GÓI */}
      <section className="py-20 bg-wetland-cream" id="combo">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-alluvial-earth font-label-sm tracking-widest uppercase font-semibold">
              {isEn ? "Optimize Cost & Experience" : "Tối Ưu Chi Phí & Trải Nghiệm"}
            </span>
            <h2 className="font-headline-lg text-melaleuca-canopy mt-1 font-serif text-3xl md:text-4xl font-bold">
              {isEn ? "Featured All-Inclusive Combo Packages" : "Các Gói Combo Trọn Gói Nổi Bật"}
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 text-base text-gray-600">
              Được sắp xếp khoa học giúp quý khách trải nghiệm trọn vẹn nhất những điểm chạm văn hóa và thiên nhiên đặc sắc tại Tân Lập.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {combos.map((combo) => (
              <div
                key={combo.id}
                className={`bg-white rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  combo.featured
                    ? "border-2 border-alluvial-earth shadow-2xl lg:-translate-y-4"
                    : "border border-melaleuca-canopy/15 shadow-sm hover:shadow-xl"
                }`}
              >
                {combo.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-alluvial-earth text-white font-label-sm text-xs px-4 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-md whitespace-nowrap">
                    {combo.badge}
                  </div>
                )}

                <div>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold inline-block ${combo.tagStyle}`}>
                    {combo.tag}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-melaleuca-canopy mt-4 mb-2">
                    {combo.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                    {combo.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-tranquil-sand">
                    <span className="text-3xl font-bold text-forest-moss font-serif">
                      {combo.price}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">
                      {combo.unit}
                    </span>
                  </div>

                  <ul className="space-y-3.5 text-sm text-gray-700 mb-8">
                    {combo.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center gap-2.5 ${
                          feat.included ? "text-gray-800" : "text-gray-400"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-lg ${
                            feat.included ? "text-stream-jade" : "text-gray-400"
                          }`}
                        >
                          {feat.included ? "check_circle" : "cancel"}
                        </span>
                        <span className={feat.included ? "" : "line-through"}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={combo.btnAction}
                  className={combo.btnStyle}
                >
                  {combo.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUY TRÌNH 4 BƯỚC ĐẶT VÉ TRỰC TUYẾN */}
      <section className="py-16 bg-tranquil-sand/60 border-y border-melaleuca-canopy/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-alluvial-earth font-label-sm tracking-widest uppercase font-semibold text-xs">
              {isEn ? "Simple 4-Step Process" : "Quy Trình 4 Bước Đơn Giản"}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-melaleuca-canopy mt-1">
              {isEn ? "Quick Booking & Applying Discounts" : "Cách Đặt Vé Nhanh & Áp Dụng Ưu Đãi"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white p-6 rounded-2xl border border-melaleuca-canopy/10 text-center relative hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-melaleuca-canopy text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg shadow-sm">
                  {step.num}
                </div>
                <h4 className="font-serif font-bold text-lg text-melaleuca-canopy mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CHÍNH SÁCH VÉ, ƯU ĐÃI ĐOÀN & HOÀN HỦY */}
      <section className="py-20 bg-wetland-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((pol, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-melaleuca-canopy/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-forest-moss/10 flex items-center justify-center text-forest-moss mb-4">
                  <span className="material-symbols-outlined">{pol.icon}</span>
                </div>
                <h4 className="font-serif font-bold text-lg text-melaleuca-canopy mb-3">
                  {pol.title}
                </h4>
                <div className="text-sm text-gray-600 space-y-2 leading-relaxed">
                  {pol.lines.map((line, lIdx) => (
                    <p key={lIdx}>
                      <strong className="text-gray-800">{line.label}</strong>{" "}
                      {line.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
