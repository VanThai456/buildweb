export default function TourPricing({ currentLang, onOpenBooking }) {
  const priceRows = [
    {
      icon: 'confirmation_number',
      name: currentLang === 'vi' ? 'Vé cổng tham quan cơ bản' : 'General Admission Ticket',
      specs: currentLang === 'vi' ? 'Không giới hạn trong ngày' : 'Unlimited daily access',
      adult: '70.000đ',
      child: currentLang === 'vi' ? 'Miễn phí' : 'Free',
      note: currentLang === 'vi' ? 'Bao gồm cung đường đan 5km, tháp 38m, cầu chữ X' : 'Includes 5km walkway, 38m tower, X-bridge',
    },
    {
      icon: 'kayaking',
      name: currentLang === 'vi' ? 'Chèo xuồng ba lá trên bèo cám' : 'Wooden Sampan Duckweed Tour',
      specs: currentLang === 'vi' ? '30 - 45 phút / tuyến' : '30 - 45 mins / trip',
      adult: '80.000đ',
      child: '40.000đ',
      note: currentLang === 'vi' ? 'Kèm áo phao chuẩn và chèo lái kinh nghiệm địa phương' : 'Safety vest & local boatman included',
    },
    {
      icon: 'directions_boat',
      name: currentLang === 'vi' ? 'Thuyền cáp kéo mui trần sinh thái' : 'Silent Cable Electric Boat',
      specs: currentLang === 'vi' ? '30 phút / chuyến' : '30 mins / trip',
      adult: '70.000đ',
      child: '35.000đ',
      note: currentLang === 'vi' ? 'Hệ thống kéo êm ái, thích hợp cả người lớn tuổi & trẻ nhỏ' : 'Silent cruising, ideal for seniors & children',
    },
    {
      icon: 'set_meal',
      name: currentLang === 'vi' ? 'Dỡ chà bắt cá & Nướng cá tại chỗ' : 'Fish Trap Lifting & Straw Grilling',
      specs: currentLang === 'vi' ? '60 - 90 phút (Đặt trước)' : '60 - 90 mins (Reservation)',
      adult: '150.000đ',
      child: '100.000đ',
      note: currentLang === 'vi' ? 'Bao gồm đồ bà ba, dụng cụ và nướng cá rơm thưởng thức' : 'Includes bà ba outfit, gear & straw-grilled fish',
    },
    {
      icon: 'directions_bike',
      name: currentLang === 'vi' ? 'Thuê xe đạp địa hình' : 'All-terrain Bicycle Rental',
      specs: currentLang === 'vi' ? '2 Giờ' : '2 Hours',
      adult: '50.000đ',
      child: '50.000đ',
      note: currentLang === 'vi' ? 'Kèm nón bảo hộ và bản đồ dẫn đường sinh thái' : 'Helmet & eco-trail map included',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-wetland-cream" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
            <span className="w-8 h-[2px] bg-forest-moss"></span>
            <span>{currentLang === 'vi' ? 'Công Khai & Minh Bạch' : 'Transparent Pricing'}</span>
            <span className="w-8 h-[2px] bg-forest-moss"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight mb-4">
            {currentLang === 'vi' ? 'Bảng Giá Dịch Vụ Niêm Yết' : 'Official Service Price List'}
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            {currentLang === 'vi'
              ? 'Bảng giá chi tiết các hạng mục tham quan, trải nghiệm sông nước và các gói combo trọn gói ưu đãi dành cho gia đình, đoàn thể.'
              : 'Detailed pricing for all eco-tourism attractions, watercraft excursions, and cost-saving package deals.'}
          </p>
        </div>

        {/* Pricing Comparison Table */}
        <div className="bg-surface-container-lowest rounded-2xl border border-forest-moss/15 shadow-sm overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-tranquil-sand border-b border-forest-moss/10 text-melaleuca-canopy font-bold text-sm md:text-base">
                  <th className="py-4 px-6">{currentLang === 'vi' ? 'Hạng Mục Dịch Vụ' : 'Service Item'}</th>
                  <th className="py-4 px-6">{currentLang === 'vi' ? 'Quy Cách / Thời Gian' : 'Duration / Specs'}</th>
                  <th className="py-4 px-6">{currentLang === 'vi' ? 'Giá Vé Người Lớn' : 'Adult Price'}</th>
                  <th className="py-4 px-6">{currentLang === 'vi' ? 'Giá Vé Trẻ Em (<1m2)' : 'Child (<1.2m)'}</th>
                  <th className="py-4 px-6 text-right">{currentLang === 'vi' ? 'Ghi Chú & Quyền Lợi' : 'Included Benefits'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest-moss/10 text-sm text-on-surface-variant">
                {priceRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-tranquil-sand/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-melaleuca-canopy flex items-center gap-2">
                      <span className="material-symbols-outlined text-forest-moss text-lg" data-icon={row.icon}>
                        {row.icon}
                      </span>
                      <span>{row.name}</span>
                    </td>
                    <td className="py-4 px-6">{row.specs}</td>
                    <td className="py-4 px-6 font-bold text-melaleuca-canopy text-base">{row.adult}</td>
                    <td className="py-4 px-6 font-bold text-forest-moss text-base">{row.child}</td>
                    <td className="py-4 px-6 text-right text-xs leading-relaxed">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Featured Package Deals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Package 1 */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-forest-moss/15 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-forest-moss uppercase tracking-wider mb-2">
                {currentLang === 'vi' ? 'Gói Cơ Bản' : 'Basic Package'}
              </div>
              <h3 className="font-serif text-2xl text-melaleuca-canopy font-bold mb-2">
                Eco Explorer
              </h3>
              <p className="text-xs text-on-surface-variant mb-6">
                {currentLang === 'vi'
                  ? 'Thích hợp cho du khách thích tự do dạo bộ và ngắm cảnh rừng tràm.'
                  : 'Ideal for independent travelers loving walking and photography.'}
              </p>
              <div className="mb-6">
                <span className="font-serif text-3xl font-bold text-melaleuca-canopy">
                  130.000đ
                </span>
                <span className="text-xs text-on-surface-variant ml-1">
                  {currentLang === 'vi' ? '/ khách (Tiết kiệm 20k)' : '/ person (Save 20k)'}
                </span>
              </div>
              <ul className="space-y-3 text-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-stream-jade text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>{currentLang === 'vi' ? 'Vé cổng tham quan trọn ngày' : 'All-day admission ticket'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-stream-jade text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>{currentLang === 'vi' ? '1 Chuyến xuồng ba lá hoặc thuyền cáp' : '1 Sampan or Cable boat ride'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-stream-jade text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>{currentLang === 'vi' ? 'Check-in Tháp 38m & Cầu chữ X' : 'Access 38m Tower & X-Bridge'}</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking('Gói Combo: Eco Explorer (130.000đ)')}
              className="w-full py-3 rounded-full border border-forest-moss text-forest-moss font-semibold text-center hover:bg-forest-moss hover:text-white transition cursor-pointer"
            >
              {currentLang === 'vi' ? 'Chọn gói này' : 'Select Package'}
            </button>
          </div>

          {/* Package 2 (Highlight Popular) */}
          <div className="bg-melaleuca-canopy rounded-2xl p-8 border-2 border-alluvial-earth shadow-xl flex flex-col justify-between relative text-white transform md:-translate-y-2">
            <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-alluvial-earth text-melaleuca-canopy text-xs font-bold uppercase tracking-wider shadow-sm">
              {currentLang === 'vi' ? 'Gợi Ý Nhiều Nhất' : 'Most Recommended'}
            </div>
            <div>
              <div className="text-xs font-semibold text-mist-emerald uppercase tracking-wider mb-2">
                {currentLang === 'vi' ? 'Gói Toàn Diện 1 Ngày' : 'Full-Day Signature'}
              </div>
              <h3 className="font-serif text-2xl text-wetland-cream font-bold mb-2">
                {currentLang === 'vi' ? 'Sông Nước Miệt Vườn' : 'Mekong River Life'}
              </h3>
              <p className="text-xs text-wetland-cream/80 mb-6">
                {currentLang === 'vi'
                  ? 'Trải nghiệm đầy đủ tất cả phương tiện sông nước và bữa trưa đặc sản.'
                  : 'Complete watercraft adventures paired with authentic local specialties.'}
              </p>
              <div className="mb-6">
                <span className="font-serif text-3xl font-bold text-alluvial-earth">
                  360.000đ
                </span>
                <span className="text-xs text-wetland-cream/70 ml-1">
                  {currentLang === 'vi' ? '/ khách (Tiết kiệm 70k)' : '/ person (Save 70k)'}
                </span>
              </div>
              <ul className="space-y-3 text-sm text-wetland-cream/90 mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-mist-emerald text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>{currentLang === 'vi' ? 'Vé vào cổng tham quan toàn khu' : 'Full area admission'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-mist-emerald text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>{currentLang === 'vi' ? 'Xuồng ba lá luồn lách trên bèo cám' : 'Rowing sampan through duckweed'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-mist-emerald text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>{currentLang === 'vi' ? 'Thuyền cáp kéo mui trần ngắm cảnh' : 'Cable boat scenic tour'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-mist-emerald text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>
                    {currentLang === 'vi'
                      ? 'Bữa trưa đặc sản Cá lóc nướng trui & Lẩu mắm'
                      : 'Grilled snakehead & fermented hotpot lunch'}
                  </span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking('Gói Combo: Sông Nước Miệt Vườn (360.000đ)')}
              className="w-full py-3 rounded-full bg-alluvial-earth hover:bg-tertiary-fixed text-melaleuca-canopy font-bold text-center shadow-lg transition cursor-pointer"
            >
              {currentLang === 'vi' ? 'Đặt Gói Khuyên Dùng' : 'Book Recommended Deal'}
            </button>
          </div>

          {/* Package 3 */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-forest-moss/15 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-forest-moss uppercase tracking-wider mb-2">
                {currentLang === 'vi' ? 'Gói Nghỉ Dưỡng 2N1Đ' : 'Overnight 2D1N Retreat'}
              </div>
              <h3 className="font-serif text-2xl text-melaleuca-canopy font-bold mb-2">
                Rừng Tràm Sanctuary
              </h3>
              <p className="text-xs text-on-surface-variant mb-6">
                {currentLang === 'vi'
                  ? 'Trải nghiệm nghỉ ngơi biệt lập giữa rừng tràm tĩnh lặng ban đêm.'
                  : 'Overnight eco-stay immersed in tranquil nighttime cajeput forest.'}
              </p>
              <div className="mb-6">
                <span className="font-serif text-3xl font-bold text-melaleuca-canopy">
                  950.000đ
                </span>
                <span className="text-xs text-on-surface-variant ml-1">
                  {currentLang === 'vi' ? '/ khách (Tối thiểu 2 khách)' : '/ person (Min 2 guests)'}
                </span>
              </div>
              <ul className="space-y-3 text-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-stream-jade text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>
                    {currentLang === 'vi'
                      ? '1 Đêm phòng Khách Sạn Làng Nổi view rừng'
                      : '1 Night hotel room with forest view'}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-stream-jade text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>{currentLang === 'vi' ? 'Trọn gói vé cổng + xuồng chèo + thuyền cáp' : 'Full tickets + Sampan + Cable boat'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-stream-jade text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>{currentLang === 'vi' ? 'Bao gồm ăn sáng buffet & BBQ lửa trại tối' : 'Breakfast buffet & Evening bonfire BBQ'}</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking('Gói Combo: Rừng Tràm Sanctuary 2N1Đ (950.000đ)')}
              className="w-full py-3 rounded-full border border-forest-moss text-forest-moss font-semibold text-center hover:bg-forest-moss hover:text-white transition cursor-pointer"
            >
              {currentLang === 'vi' ? 'Chọn gói này' : 'Select Package'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
