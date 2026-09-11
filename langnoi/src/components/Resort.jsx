export default function Resort({ onOpenBooking, currentLang }) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="resort">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-melaleuca-canopy/10">
            <img
              className="w-full h-[400px] object-cover"
              src="/images/hotel-exterior.jpg"
              onError={(e) => {
                e.target.src =
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBohffldrQyyVyTCApHCim-T7vT9FLJxN6GtvK_FR7mleY7NLQ1iLPT7my14xLqBk1GCaIvPbsZprYGUo4284j_O3ZqOYXx3IrrICpp2PJinFQzAul9iagROZLAUVJnjZWXJK-owtzP9HO2zNIL-v8IWx_0y5McyDLVePzBSKXPvUSCC2Jx-5oHfxb0cCak_jIpAJe92P4QJyO_jSJI9C0r6grRBv3x74ndND7Dxa88s8pCA4eufiJEPA=s0';
              }}
              alt="Khách sạn Làng Nổi Tân Lập 8 Tầng"
            />
            <div className="absolute bottom-4 left-4 right-4 md:right-auto px-4 py-2.5 rounded-xl bg-melaleuca-canopy/90 text-wetland-cream backdrop-blur-md">
              <span className="font-subhead-md text-subhead-md font-semibold block">
                {currentLang === 'vi' ? 'Khách sạn Làng Nổi Tân Lập 8 Tầng' : 'Tan Lap Floating Village Hotel (8 Floors)'}
              </span>
              <span className="block text-label-sm text-mist-emerald">
                {currentLang === 'vi' ? 'Tầm nhìn panorama toàn cảnh rừng tràm 360°' : '360° Panoramic View of Melaleuca Forest'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden h-40 border border-melaleuca-canopy/10">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src="/images/room-suite.jpg"
                onError={(e) => {
                  e.target.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuAg7QYsWqvxQeow9gsbvntFx1t58hMA4pcReRGmwTW3F82q4iBqWogD1g4DJ6vyGWKHv31jQNCrHJeZc4ZN1wUPw9-fG6v3svZmrux2-H5qo8apF51AVkm_7OgQ5IKK_rjSYwqdrevJMcuiniwLoVnOet35rP_S9OKYgDyEVlLgtSiKFLKi_LQK_Fw4v-jpKIDIizFsFHEJv_uoyqVBb4vU8qU7o2f0ViM9V6sdTVxsqmbygC3EpVBWCg=s0';
                }}
                alt="Luxury suite bedroom"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-40 border border-melaleuca-canopy/10">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src="/images/room-balcony.jpg"
                onError={(e) => {
                  e.target.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ1y4MI8ch_MSpgHCunqoaDiy-71X3o68v3aEnszggWuydGLVyJEwSc8SMAc-FXY1HkTRwhudj939jKeM9f9GL_fxdpuprI8npOXT6-uu-xeyd3iV3y2P-HApKfs0xpyb7IJovioPhmbBFYa4ZkcbSI75Z77jR9iVlD49btLJ3UsSP2nmnEuREpb24gjeGNKYAYjm65UqSttASM8ELfL1nkWFMHH2sWHrhrJscpeE6E8KZ6F33Is9j3w=s0';
                }}
                alt="Hotel room balcony breakfast"
              />
            </div>
          </div>
        </div>

        {/* Information & Room Tiers Column */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 text-forest-moss font-label-lg text-label-lg uppercase tracking-wider mb-2">
            <span className="w-6 h-0.5 bg-forest-moss"></span>
            {currentLang === 'vi' ? 'Nghỉ dưỡng giữa rừng sinh thái' : 'Secluded Forest Sanctuary'}
          </div>
          <h2 className="font-headline-lg text-headline-lg text-melaleuca-canopy mb-4">
            {currentLang === 'vi'
              ? 'Không Gian Nghỉ Dưỡng Biệt Lập Giữa Thiên Nhiên'
              : 'Secluded Accommodations Surrounded By Nature'}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
            {currentLang === 'vi'
              ? 'Tọa lạc ngay vùng lõi của khu du lịch, Khách sạn Làng Nổi Tân Lập mang kiến trúc sinh thái mở với ban công riêng biệt cho từng phòng, đón trọn bầu không khí giàu ion âm và tiếng chim hót mỗi ban mai.'
              : 'Located right in the tranquil core of the sanctuary, our 8-floor eco-hotel offers private balconies for each suite, immersing guests in oxygen-rich forest breezes and dawn bird songs.'}
          </p>

          {/* Room Types */}
          <div className="space-y-4 mb-8">
            {/* Room 1 */}
            <div className="p-5 rounded-2xl bg-tranquil-sand border border-melaleuca-canopy/10 hover:border-forest-moss transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-melaleuca-canopy">
                    {currentLang === 'vi' ? 'Phòng Đôi Tầng Cao View Rừng Sông' : 'High-Floor River & Forest Double Room'}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    {currentLang === 'vi'
                      ? '1 Giường King lớn • Ban công riêng ngắm hoàng hôn rừng tràm • 35m²'
                      : '1 King Bed • Private sunset-facing forest balcony • 35m²'}
                  </p>
                </div>
                <span className="font-subhead-lg text-subhead-lg font-bold text-forest-moss whitespace-nowrap">
                  950.000đ<span className="text-xs font-normal text-on-surface-variant">/đêm</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-label-sm font-label-sm text-on-surface-variant pt-2 border-t border-melaleuca-canopy/10">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-stream-jade">check</span>
                  {currentLang === 'vi' ? 'Miễn phí vé cổng' : 'Free entrance ticket'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-stream-jade">check</span>
                  {currentLang === 'vi' ? 'Ăn sáng đặc sản' : 'Specialty breakfast'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-stream-jade">check</span>
                  {currentLang === 'vi' ? 'Hồ bơi sinh thái' : 'Eco swimming pool'}
                </span>
              </div>
            </div>

            {/* Room 2 */}
            <div className="p-5 rounded-2xl bg-tranquil-sand border border-melaleuca-canopy/10 hover:border-forest-moss transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-melaleuca-canopy">
                    {currentLang === 'vi' ? 'Phòng Đơn Tiêu Chuẩn Sinh Thái' : 'Standard Eco Single Room'}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    {currentLang === 'vi'
                      ? '1 Giường Queen • Cửa sổ rộng hướng kênh xanh • 28m²'
                      : '1 Queen Bed • Expansive canal & greenery view • 28m²'}
                  </p>
                </div>
                <span className="font-subhead-lg text-subhead-lg font-bold text-forest-moss whitespace-nowrap">
                  650.000đ<span className="text-xs font-normal text-on-surface-variant">/đêm</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-label-sm font-label-sm text-on-surface-variant pt-2 border-t border-melaleuca-canopy/10">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-stream-jade">check</span>
                  {currentLang === 'vi' ? 'Miễn phí vé cổng' : 'Free entrance ticket'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-stream-jade">check</span>
                  {currentLang === 'vi' ? 'Trà tràm thanh lọc' : 'Detox cajeput herbal tea'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenBooking('Khách sạn Làng Nổi (Nghỉ dưỡng)')}
              className="px-6 py-3 rounded-full bg-melaleuca-canopy text-wetland-cream font-label-lg text-label-lg hover:bg-forest-moss transition-colors shadow-sm text-center cursor-pointer"
            >
              {currentLang === 'vi' ? 'Xem chi tiết phòng & Giá ưu đãi' : 'View Room Details & Specials'}
            </button>
            <a
              className="inline-flex items-center justify-center gap-2 text-forest-moss font-label-lg text-label-lg hover:underline py-2"
              href="tel:0966893943"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Hotline phòng: 0966 893 943</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
