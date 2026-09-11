export default function AboutHistory({ currentLang }) {
  return (
    <section className="py-24 bg-wetland-cream border-b border-primary/5" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Collage Editorial Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-melaleuca-canopy/10 aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                src="/images/about/history-wetland.jpg"
                onError={(e) => {
                  e.target.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuApMBN05eT3mZTVXjS9jJ9f_nsCXb3TC7bJCz5_ZZOAq0bNcQ_vZtjHZLpBm3lEinsAsZJ87FvDQrbPzU_oftU11a5yVd0T6T0AU2fbvZDEtHKBaNoUFgjESxiLwbiCTyRzTpkcmlVX8-Ntql4chIvIC3ws6j6ODsglfkNe0pfn7eU0fgoRL5qofz2y9VJ5ZputtX9qWtre2cmATUlKwAywLTaubmOj8ixjVriK2kzyTsqafVa31vTq7w=s0';
                }}
                alt="Documentary Mekong Delta wetland"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-60 rounded-xl overflow-hidden shadow-2xl border-4 border-wetland-cream">
              <img
                className="w-full h-44 object-cover"
                src="/images/about/history-boat.jpg"
                onError={(e) => {
                  e.target.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuD6VlBSPNiO7q5aLv34t04XVJ0E0nk281lCCLQhaZRNI14uhB8BBs98oiFt0PRF7PPRn5AWE_IdI5CZgavPrGGHwZ3HU7gd31vqj43-SLF6x7hRhyqbQ-xciYM_Nj82-tuqwY8KZ8Z5uh7KzDbh0KkQjULdr0wgoxqaZkcQe-r7jm7ikpg97w6MdwGYDld4_2kvv86vVzO7Xi32KXq1p0P9YXL1PdGDOgiBuZt5H-CcsNbK6bhkuHACsA=s0';
                }}
                alt="Fishermen on wooden boat in duckweed stream"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-tranquil-sand p-4 rounded-xl border border-primary/10 shadow-md max-w-[210px]">
              <div className="flex items-center gap-2 text-alluvial-earth font-label-sm text-xs font-semibold mb-1">
                <span className="material-symbols-outlined text-base">history_edu</span>
                <span>{currentLang === 'vi' ? 'Di Sản Vùng Trũng' : 'Wetland Heritage'}</span>
              </div>
              <p className="text-xs text-on-surface-variant font-normal leading-snug">
                {currentLang === 'vi'
                  ? 'Ký ức sống chung với lũ ngàn đời của vùng đất Mộc Hóa - Long An.'
                  : 'Centuries-old legacy of living with seasonal floods in Moc Hoa.'}
              </p>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-forest-moss font-label-lg text-sm font-semibold tracking-wider">
              <span className="w-8 h-[1.5px] bg-forest-moss"></span>
              <span>
                {currentLang === 'vi' ? 'CÂU CHUYỆN KHAI HOANG & TÊN GỌI' : 'ORIGINS & HERITAGE STORY'}
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-melaleuca-canopy font-bold leading-tight">
              {currentLang === 'vi'
                ? 'Từ Vùng Đất Phèn Hoang Sơ Đến Ốc Đảo Sinh Thái Quốc Gia'
                : 'From Wilderness Floodplains to a National Eco Sanctuary'}
            </h2>

            <p className="text-base text-on-surface-variant leading-relaxed">
              {currentLang === 'vi'
                ? 'Vào những thập niên trước, vùng trũng Mộc Hóa (Kiến Tường cũ) thuộc Đồng Tháp Mười là vùng đất phèn trũng sâu, ngập úng quanh năm. Người dân bản xứ dựng những ngôi nhà sàn đơn sơ trên các gò đất cao. Mỗi khi con nước lũ mùa phù sa tràn về từ thượng nguồn Mekong, cả xóm làng dường như bồng bềnh nổi trên mặt nước biếc.'
                : 'Decades ago, the deep lowlands of Moc Hoa were submerged in acidic floodwaters. Local inhabitants built stilt dwellings upon raised knolls. As floodwaters carried silt from the upper Mekong, the villages seemed to float weightlessly above the boundless waterways.'}
            </p>

            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              {currentLang === 'vi' ? (
                <>
                  Cái tên <strong className="text-melaleuca-canopy font-semibold">“Làng Nổi Tân Lập”</strong> xuất phát từ chính triết lý sống chan hòa, thuận theo tự nhiên: dù mực nước nổi có dâng cao tới đâu, con người và mái nhà vẫn hiền hòa nổi trôi nương tựa theo con nước phù sa. Trải qua nhiều năm bảo tồn và phục hồi, khu rừng tràm gió melaleuca cajuputi không chỉ hồi sinh rực rỡ mà còn trở thành điểm hẹn lý tưởng cho du khách tìm về chốn an yên nguyên bản.
                </>
              ) : (
                <>
                  The name <strong className="text-melaleuca-canopy font-semibold">"Tan Lap Floating Village"</strong> honors this profound philosophy of yielding to nature: no matter how high the waters rise, life floats gently alongside the fertile river. Through decades of dedication, this cajeput forest has flourished into a sanctuary of peace.
                </>
              )}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-primary/10">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stream-jade/15 text-forest-moss flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-lg">water</span>
                </div>
                <div>
                  <h4 className="font-semibold text-melaleuca-canopy text-sm md:text-base">
                    {currentLang === 'vi' ? 'Văn Hóa Mùa Nước Nổi' : 'High Water Culture'}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    {currentLang === 'vi'
                      ? 'Sức sống bền bỉ và sự thích ứng linh hoạt của cư dân miền Tây châu thổ.'
                      : 'Resilience and harmonious adaptation of Mekong Delta people.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-alluvial-earth/20 text-timeless-bark flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-lg">shield_with_heart</span>
                </div>
                <div>
                  <h4 className="font-semibold text-melaleuca-canopy text-sm md:text-base">
                    {currentLang === 'vi' ? 'Bảo Tồn Nguyên Trạng' : 'Pristine Preservation'}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    {currentLang === 'vi'
                      ? 'Gìn giữ thổ nhưỡng đất ngập phèn và tầng thảm thực vật quý báu.'
                      : 'Preserving fragile wetland soils and endemic floral canopies.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
