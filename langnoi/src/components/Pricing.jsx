export default function Pricing({ onOpenBooking, currentLang }) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="pricing">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-forest-moss font-label-lg text-label-lg uppercase tracking-wider mb-2">
          <span className="w-6 h-0.5 bg-forest-moss"></span>
          {currentLang === 'vi' ? 'Minh bạch & Ưu đãi' : 'Transparent Pricing'}
          <span className="w-6 h-0.5 bg-forest-moss"></span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-melaleuca-canopy mb-4">
          {currentLang === 'vi' ? 'Bảng Giá Dịch Vụ Niêm Yết & Gói Combo' : 'Admission Rates & Curated Combos'}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {currentLang === 'vi'
            ? 'Lựa chọn gói trải nghiệm phù hợp nhất cho chuyến đi trong ngày hoặc kỳ nghỉ cuối tuần thư thái của bạn.'
            : 'Select the optimal experience package for your single-day discovery or relaxing weekend getaway.'}
        </p>
      </div>

      {/* Pricing Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Tier 1: Vé Tự Do Trong Ngày */}
        <div className="rounded-2xl bg-surface-container-lowest border border-melaleuca-canopy/10 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <div className="font-label-lg text-label-lg text-on-surface-variant mb-2">
              {currentLang === 'vi' ? 'Gói Cơ Bản' : 'Basic Pass'}
            </div>
            <h3 className="font-headline-md text-headline-md text-melaleuca-canopy mb-4">
              {currentLang === 'vi' ? 'Vé Cổng Tham Quan' : 'Park Admission Ticket'}
            </h3>
            <div className="font-headline-lg text-headline-lg font-bold text-melaleuca-canopy mb-1">
              70.000đ <span className="text-sm font-normal text-on-surface-variant">/khách</span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
              {currentLang === 'vi'
                ? 'Dành cho du khách muốn đi bộ dạo ngắm rừng tràm tự do.'
                : 'For independent visitors looking to explore walking trails and observation towers.'}
            </p>
            <ul className="space-y-3 pt-6 border-t border-melaleuca-canopy/10 text-body-sm font-body-sm text-on-surface">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? 'Cung đường đan xuyên rừng 5km' : '5km elevated forest pathway'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? 'Tháp quan sát 38m ngắm 360°' : '38m observation tower (360°)'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? 'Cầu chữ X & Đầm hoa súng' : 'X-bridge and water lily ponds'}</span>
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant/50">
                <span className="material-symbols-outlined text-[18px]">close</span>
                <span className="line-through">{currentLang === 'vi' ? 'Chưa gồm xuồng chèo ba lá' : 'Boat tours not included'}</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => onOpenBooking('Vé Cổng Tham Quan')}
            className="mt-8 w-full py-3 rounded-full border border-melaleuca-canopy text-melaleuca-canopy font-label-lg text-label-lg hover:bg-melaleuca-canopy hover:text-wetland-cream transition-colors cursor-pointer"
          >
            {currentLang === 'vi' ? 'Mua vé cổng ngay' : 'Get Admission Ticket'}
          </button>
        </div>

        {/* Tier 2: Combo Trong Ngày (Most Popular) */}
        <div className="relative rounded-2xl bg-melaleuca-canopy text-wetland-cream p-8 flex flex-col justify-between shadow-xl ring-2 ring-stream-jade">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-alluvial-earth text-on-tertiary-fixed text-label-sm font-label-sm font-bold shadow-md whitespace-nowrap">
            {currentLang === 'vi' ? 'GỢI Ý NHIỀU NHẤT' : 'MOST POPULAR'}
          </div>
          <div>
            <div className="font-label-lg text-label-lg text-mist-emerald mb-2">
              {currentLang === 'vi' ? 'Combo Trải Nghiệm Hoàn Hảo' : 'Complete 1-Day Experience'}
            </div>
            <h3 className="font-headline-md text-headline-md text-wetland-cream mb-4">
              {currentLang === 'vi' ? 'Combo Khám Phá Trong Ngày' : 'Full-Day Exploration Combo'}
            </h3>
            <div className="font-headline-lg text-headline-lg font-bold text-wetland-cream mb-1">
              280.000đ <span className="text-sm font-normal text-wetland-cream/80">/khách</span>
            </div>
            <p className="text-body-sm font-body-sm text-wetland-cream/80 mb-6">
              {currentLang === 'vi'
                ? 'Trọn gói tất cả phương tiện sông nước và bữa trưa miền Tây.'
                : 'All-inclusive water transport, admissions, and countryside lunch.'}
            </p>
            <ul className="space-y-3 pt-6 border-t border-white/20 text-body-sm font-body-sm text-wetland-cream">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? 'Vé vào cổng & Tham quan toàn cảnh' : 'All park admissions included'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? 'Xuồng ba lá chèo tay xuyên rạch tràm' : 'Handcrafted sampan canal tour'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? 'Thuyền cáp kéo mui trần lướt bèo cám' : 'Open-air cable boat ride'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? 'Set Menu ẩm thực đồng quê tại nhà hàng' : 'Mekong countryside set lunch'}</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => onOpenBooking('Combo Khám Phá Trong Ngày')}
            className="mt-8 w-full py-3.5 rounded-full bg-stream-jade text-melaleuca-canopy font-label-lg text-label-lg font-bold hover:bg-mist-emerald transition-colors shadow-md cursor-pointer"
          >
            {currentLang === 'vi' ? 'Đặt Combo Trong Ngày' : 'Book Full-Day Combo'}
          </button>
        </div>

        {/* Tier 3: Combo Nghỉ Dưỡng 2N1Đ */}
        <div className="rounded-2xl bg-surface-container-lowest border border-melaleuca-canopy/10 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <div className="font-label-lg text-label-lg text-on-surface-variant mb-2">
              {currentLang === 'vi' ? 'Trọn Vẹn Kỳ Nghỉ' : 'Weekend Retreat'}
            </div>
            <h3 className="font-headline-md text-headline-md text-melaleuca-canopy mb-4">
              {currentLang === 'vi' ? 'Combo Nghỉ Dưỡng 2N1Đ' : '2D1N Eco Retreat Combo'}
            </h3>
            <div className="font-headline-lg text-headline-lg font-bold text-melaleuca-canopy mb-1">
              990.000đ{' '}
              <span className="text-sm font-normal text-on-surface-variant">
                {currentLang === 'vi' ? '/khách (áp dụng từ 2 khách)' : '/guest (min 2 guests)'}
              </span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
              {currentLang === 'vi'
                ? 'Nghỉ tại Khách sạn Làng Nổi 8 tầng hướng rừng tràm.'
                : '1 night at the 8-story hotel overlooking the canopy with full meals.'}
            </p>
            <ul className="space-y-3 pt-6 border-t border-melaleuca-canopy/10 text-body-sm font-body-sm text-on-surface">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? '1 Đêm phòng khách sạn view rừng sông' : '1 night hotel room with forest balcony'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? 'Trọn gói vé cổng + Xuồng ba lá + Thuyền cáp' : 'Full admissions + Sampan + Cable boat'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? '3 Bữa ăn: Trưa, Tối đặc sản & Buffet sáng' : '3 meals: Lunch, dinner & breakfast'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stream-jade text-[18px]">check_circle</span>
                <span>{currentLang === 'vi' ? 'Miễn phí câu cá giải trí & Hồ bơi' : 'Free recreational fishing & pool'}</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => onOpenBooking('Combo Nghỉ Dưỡng 2N1Đ')}
            className="mt-8 w-full py-3 rounded-full border border-melaleuca-canopy text-melaleuca-canopy font-label-lg text-label-lg hover:bg-melaleuca-canopy hover:text-wetland-cream transition-colors cursor-pointer"
          >
            {currentLang === 'vi' ? 'Đặt Combo 2N1Đ' : 'Book 2D1N Retreat'}
          </button>
        </div>
      </div>
    </section>
  );
}
