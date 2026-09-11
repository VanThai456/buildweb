export default function ResortPackages({ currentLang, onOpenBooking }) {
  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12" id="bang-gia">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
          <span className="w-8 h-[2px] bg-forest-moss"></span>
          <span>{currentLang === 'vi' ? 'Tiết Kiệm & Thảnh Thơi' : 'Best Value Packages'}</span>
          <span className="w-8 h-[2px] bg-forest-moss"></span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight mb-4">
          {currentLang === 'vi'
            ? 'Gói Combo Trọn Gói Nghỉ Dưỡng & Ẩm Thực'
            : 'All-Inclusive Holiday Packages'}
        </h2>
        <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
          {currentLang === 'vi'
            ? 'Lựa chọn thảnh thơi và tiết kiệm nhất cho chuyến du lịch cuối tuần cùng người thân, trọn gói cả phòng nghỉ, vé tham quan và ẩm thực.'
            : 'Hassle-free, budget-friendly holiday options combining luxury eco-lodging, boat excursions, and traditional dining.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
        {/* Combo 1: Kỳ Nghỉ Thảnh Thơi 2N1Đ (Featured) */}
        <div className="bg-melaleuca-canopy text-white rounded-3xl p-8 sm:p-10 border-2 border-alluvial-earth shadow-2xl flex flex-col justify-between relative">
          <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-alluvial-earth text-melaleuca-canopy text-xs font-bold uppercase tracking-wider shadow-md">
            {currentLang === 'vi' ? 'Khuyên Dùng Nhiều Nhất' : 'Top Recommendation'}
          </div>

          <div>
            <span className="text-xs font-semibold text-mist-emerald uppercase tracking-wider block mb-2">
              {currentLang === 'vi' ? 'Gói Trọn Gói 2 Ngày 1 Đêm' : 'Complete 2 Days 1 Night'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-wetland-cream mb-2">
              {currentLang === 'vi' ? 'Combo "Kỳ Nghỉ Thảnh Thơi" 2N1Đ' : '"Serene Retreat" 2D1N Package'}
            </h3>
            <p className="text-xs sm:text-sm text-wetland-cream/80 mb-6 leading-relaxed">
              {currentLang === 'vi'
                ? 'Thức giấc giữa ngàn tràm sương mai, thưởng thức ẩm thực đồng quê và đắm chìm trong đêm rừng huyền ảo.'
                : 'Wake to misty cajeput canopy vistas, savor country delicacies, and enjoy romantic fireside starlight.'}
            </p>

            <div className="mb-6">
              <span className="font-serif text-4xl font-bold text-alluvial-earth">
                950.000đ
              </span>
              <span className="text-xs text-wetland-cream/70 ml-2">
                {currentLang === 'vi' ? '/ khách (Áp dụng từ 2 khách)' : '/ guest (Min 2 guests)'}
              </span>
            </div>

            <ul className="space-y-3 text-sm text-wetland-cream/90 mb-8 border-t border-white/10 pt-6">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-mist-emerald text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? '1 Đêm phòng khách sạn Làng Nổi view rừng tràm cao cấp' : '1 Night luxury forest-view hotel accommodation'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-mist-emerald text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? 'Vé vào cổng tham quan trọn ngày + Cung đường đan 5km & Tháp 38m' : 'Full-day admission + 5km canopy walkway & 38m tower'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-mist-emerald text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? '1 Chuyến xuồng ba lá lướt thảm bèo cám xanh biếc' : 'Hand-rowed sampan cruise through lush duckweed carpet'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-mist-emerald text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? 'Bữa sáng buffet phong phú và đồ uống tại nhà hàng' : 'Breakfast buffet and morning beverages at restaurant'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-mist-emerald text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? 'Bữa tối tiệc nướng BBQ ven rạch + Giao lưu đờn ca tài tử' : 'Lakeside BBQ dinner + Folk music performance'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-mist-emerald text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? 'Miễn phí sử dụng bể bơi sinh thái và xe đạp khám phá' : 'Complimentary forest-edge pool and rental bicycle'}</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking && onOpenBooking('Combo Kỳ Nghỉ Thảnh Thơi 2N1Đ (950k)')}
            className="w-full py-4 rounded-full bg-alluvial-earth hover:bg-tertiary-fixed text-melaleuca-canopy font-bold text-sm shadow-xl transition-colors cursor-pointer"
          >
            {currentLang === 'vi' ? 'Đặt Gói 2N1Đ Ngay' : 'Book 2D1N Package'}
          </button>
        </div>

        {/* Combo 2: Mùa Nước Nổi Trong Ngày */}
        <div className="bg-surface-container-lowest rounded-3xl p-8 sm:p-10 border border-forest-moss/15 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-forest-moss uppercase tracking-wider block mb-2">
              {currentLang === 'vi' ? 'Gói Khám Phá Trong Ngày' : 'Full Day Excursion'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-melaleuca-canopy mb-2">
              {currentLang === 'vi' ? 'Combo "Mùa Nước Nổi Trong Ngày"' : '"High Water Day" Package'}
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
              {currentLang === 'vi'
                ? 'Trọn vẹn 1 ngày du ngoạn sông nước, trải nghiệm cả xuồng chèo, thuyền cáp và bữa trưa đặc sản.'
                : 'A full day of river adventures including sampan, cable boat, and 5-course Mekong specialty lunch.'}
            </p>

            <div className="mb-6">
              <span className="font-serif text-4xl font-bold text-melaleuca-canopy">
                380.000đ
              </span>
              <span className="text-xs text-on-surface-variant ml-2">
                {currentLang === 'vi' ? '/ khách (Tiết kiệm 80k)' : '/ guest (Save 80k)'}
              </span>
            </div>

            <ul className="space-y-3 text-sm text-on-surface-variant mb-8 border-t border-forest-moss/10 pt-6">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-stream-jade text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? 'Vé vào cổng tham quan toàn bộ khu du lịch sinh thái' : 'Complete admission ticket to eco-sanctuary'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-stream-jade text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? 'Xuồng ba lá luồn lách qua các rạch tràm rợp bóng' : 'Handcrafted sampan ride through secluded cajeput canals'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-stream-jade text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? 'Thuyền cáp kéo mui trần ngắm cảnh sinh thái êm ả' : 'Silent cable boat cruise across open waters'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-stream-jade text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? 'Bữa trưa đặc sản 5 món tại nhà hàng ven sông' : '5-Course authentic Mekong specialty lunch by the river'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-stream-jade text-base mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>{currentLang === 'vi' ? 'Nghỉ trưa tại nhà chòi võng mát rượi ven rạch tràm' : 'Midday relaxation in riverside thatched hammock huts'}</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking && onOpenBooking('Combo Mùa Nước Nổi Trong Ngày (380k)')}
            className="w-full py-4 rounded-full border-2 border-forest-moss text-forest-moss hover:bg-forest-moss hover:text-white font-bold text-sm transition-colors cursor-pointer"
          >
            {currentLang === 'vi' ? 'Đặt Gói Trong Ngày' : 'Book 1-Day Package'}
          </button>
        </div>
      </div>
    </section>
  );
}
