export default function TourAttractions({ currentLang, onOpenBooking }) {
  return (
    <section className="py-20 md:py-28 bg-wetland-cream" id="attractions">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
              <span className="w-8 h-[2px] bg-forest-moss"></span>
              <span>{currentLang === 'vi' ? 'Khám Phá Cảnh Quan Sinh Thái' : 'Ecological Landscape'}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight">
              {currentLang === 'vi' ? 'Điểm Tham Quan Biểu Tượng' : 'Iconic Attractions'}
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-base leading-relaxed">
            {currentLang === 'vi'
              ? 'Mỗi điểm đến tại Làng Nổi Tân Lập là một mảnh ghép tự nhiên sống động giữa vương quốc rừng tràm ngập nước đặc trưng Tây Nam Bộ.'
              : 'Every stop within Tan Lap Floating Village is a living piece of natural heritage in the heart of Mekong flooded cajeput wetlands.'}
          </p>
        </div>

        {/* Bento-style Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Hero Card: Cung đường đan xuyên rừng tràm 5km */}
          <article className="md:col-span-8 bg-surface-container-lowest rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-80 sm:h-96 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/thamquan/attraction-pathway.jpg"
                alt="Winding raised concrete pathway meandering through cajeput trees"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-melaleuca-canopy/90 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-sm" data-icon="star">
                    star
                  </span>
                  {currentLang === 'vi' ? 'Kỷ Lục Việt Nam' : 'Vietnam Record'}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-tranquil-sand/90 backdrop-blur-md text-melaleuca-canopy text-xs font-semibold shadow-sm">
                  {currentLang === 'vi' ? 'Miễn phí theo vé cổng' : 'Included in Entrance'}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" data-icon="timer">
                  timer
                </span>
                <span>{currentLang === 'vi' ? '60 - 90 phút đi bộ' : '60 - 90 min walk'}</span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="font-serif text-2xl md:text-3xl text-melaleuca-canopy font-bold">
                  {currentLang === 'vi' ? 'Cung Đường Đan Xuyên Rừng Tràm 5km' : '5km Cajeput Canopy Trail'}
                </h3>
                <span className="text-forest-moss font-bold text-lg shrink-0">5.000m</span>
              </div>
              <p className="text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base">
                {currentLang === 'vi'
                  ? 'Tọa lạc giữa lõi rừng nguyên sinh, đây là con đường xi măng bộ hành xuyên rừng tràm dài nhất Việt Nam. Những tán tràm hàng chục năm tuổi đan cài tạo thành mái vòm tự nhiên mát rượi, tĩnh lặng, nơi bạn lắng nghe bản hòa ca của tiếng chim rừng và tiếng lá xào xạc.'
                  : 'Meandering deep inside the primal wetland reserve, this is Vietnam’s longest elevated pedestrian trail through cajeput canopy. Towering tree arches form a cool natural green tunnel filled with birdsong and whispering leaves.'}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-forest-moss/10">
                <div className="flex items-center gap-1.5 text-xs text-melaleuca-canopy font-medium">
                  <span className="material-symbols-outlined text-stream-jade text-base" data-icon="photo_camera">
                    photo_camera
                  </span>
                  <span>{currentLang === 'vi' ? 'Góc check-in huyền thoại' : 'Iconic photography spot'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-melaleuca-canopy font-medium">
                  <span className="material-symbols-outlined text-stream-jade text-base" data-icon="nature_people">
                    nature_people
                  </span>
                  <span>{currentLang === 'vi' ? 'Thích hợp dạo bộ, trekking nhẹ' : 'Ideal for gentle walking & trekking'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking('Vé Cổng Tham Quan')}
                  className="ml-auto inline-flex items-center gap-1 text-xs text-forest-moss hover:text-melaleuca-canopy font-bold cursor-pointer"
                >
                  <span>{currentLang === 'vi' ? 'Đặt vé tham quan' : 'Book Tour Ticket'}</span>
                  <span className="material-symbols-outlined text-sm" data-icon="chevron_right">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </article>

          {/* Vertical Card: Tháp quan sát cao 38m */}
          <article className="md:col-span-4 bg-surface-container-lowest rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/thamquan/attraction-tower.jpg"
                alt="High 38-meter observation tower soaring above cajeput forest"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-alluvial-earth text-white text-xs font-semibold shadow-sm">
                360° Panorama
              </span>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-melaleuca-canopy font-bold mb-3">
                  {currentLang === 'vi' ? 'Tháp Quan Sát Cao 38m' : '38m Observation Tower'}
                </h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed text-sm">
                  {currentLang === 'vi'
                    ? 'Đài quan sát cao nhất miền Tây Nam Bộ, tự hào vươn mình trên ngọn cây để du khách thu trọn vào tầm mắt toàn bộ 135ha thảm xanh bạt ngàn của rốn trũng Đồng Tháp Mười, đón từng ngọn gió lộng trời trong lành.'
                    : 'The tallest viewing tower in the Mekong Delta, standing proud above the canopy to grant visitors sweeping 360-degree vistas of 135 hectares of emerald wetlands.'}
                </p>
              </div>
              <div className="space-y-2 pt-4 border-t border-forest-moss/10">
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-sm" data-icon="height">
                      height
                    </span>
                    {currentLang === 'vi' ? 'Độ cao' : 'Height'}
                  </span>
                  <span className="font-bold text-melaleuca-canopy">
                    {currentLang === 'vi' ? '38 mét (10 tầng thang)' : '38 meters (10 levels)'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-sm" data-icon="wb_twilight">
                      wb_twilight
                    </span>
                    {currentLang === 'vi' ? 'Thời điểm khuyên ngắm' : 'Best time'}
                  </span>
                  <span className="font-bold text-melaleuca-canopy">06:00 - 08:00 &amp; 16:30</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card: Đảo thuần dưỡng chim & Hồ Bán Nguyệt */}
          <article className="md:col-span-4 bg-surface-container-lowest rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/thamquan/attraction-lake-birds.jpg"
                alt="Serene crescent moon lake surrounded by vibrant green melaleuca trees"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-forest-moss/90 backdrop-blur-md text-white text-xs font-semibold">
                {currentLang === 'vi' ? 'Khu bảo tồn động vật' : 'Wildlife Sanctuary'}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-melaleuca-canopy font-bold mb-2">
                {currentLang === 'vi' ? 'Đảo Thuần Dưỡng Chim & Hồ Bán Nguyệt' : 'Bird Sanctuary & Crescent Lake'}
              </h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                {currentLang === 'vi'
                  ? 'Nơi bảo tồn và cư ngụ của hàng ngàn cá thể cò trắng, le le, trích mồng đỏ và cồng cộc. Buổi chiều tà khi chim về tổ là khoảnh khắc thiên nhiên tĩnh tại và xúc động nhất.'
                  : 'A dedicated habitat sheltering thousands of wild egrets, teals, and waterbirds returning home at dusk under golden skies.'}
              </p>
              <div className="flex items-center gap-2 text-xs text-forest-moss font-medium">
                <span className="material-symbols-outlined text-base" data-icon="flutter_dash">
                  flutter_dash
                </span>
                <span>{currentLang === 'vi' ? 'Hàng ngàn cá thể chim hoang dã' : 'Thousands of wild waterfowl'}</span>
              </div>
            </div>
          </article>

          {/* Card: Cầu chữ X giữa đầm sen súng */}
          <article className="md:col-span-4 bg-surface-container-lowest rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/thamquan/attraction-x-bridge.jpg"
                alt="Distinctive X-shaped wooden pier bridge spanning across blooming lotus pond"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-alluvial-earth/90 backdrop-blur-md text-white text-xs font-semibold">
                {currentLang === 'vi' ? 'Điểm Check-in Đặc Biệt' : 'Signature Check-in'}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-melaleuca-canopy font-bold mb-2">
                {currentLang === 'vi' ? 'Cầu Chữ X Giữa Đầm Sen Hoa Súng' : 'X-Bridge Over Lotus Lagoon'}
              </h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                {currentLang === 'vi'
                  ? 'Hai chiếc cầu gỗ mộc mạc giao nhau tạo hình chữ X trên mặt đầm hoa súng ngát hương thơm dịu mát. Điểm dừng chân lý tưởng để chụp những bức ảnh nón lá, áo bà ba đậm phong vị Nam Bộ.'
                  : 'Two rustic wooden bridges intersect in an iconic X pattern over a water lily pond, ideal for traditional conical hat photography.'}
              </p>
              <div className="flex items-center gap-2 text-xs text-forest-moss font-medium">
                <span className="material-symbols-outlined text-base" data-icon="local_florist">
                  local_florist
                </span>
                <span>{currentLang === 'vi' ? 'Hoa sen và súng nở rộ mùa nước nổi' : 'Blooming lotus in flood season'}</span>
              </div>
            </div>
          </article>

          {/* Card: Chùa Trúc Lâm Chánh Giác (Kết nối tâm linh) */}
          <article className="md:col-span-4 bg-surface-container-lowest rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="relative h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/thamquan/attraction-pagoda.jpg"
                alt="Majestic pagoda architecture of Truc Lam Chanh Giac Zen monastery"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-melaleuca-canopy/80 backdrop-blur-md text-white text-xs font-semibold">
                {currentLang === 'vi' ? 'Tâm Linh Phụ Cận' : 'Spiritual Connection'}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-melaleuca-canopy font-bold mb-2">
                {currentLang === 'vi' ? 'Thiền Viện Trúc Lâm Chánh Giác' : 'Truc Lam Chanh Giac Zen Monastery'}
              </h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                {currentLang === 'vi'
                  ? 'Địa điểm kết nối du lịch tâm linh nổi tiếng vùng phụ cận, nơi có quần thể Tứ Động Tâm mô phỏng các thánh tích Phật giáo danh tiếng, đem lại sự thanh thản trong tâm hồn du khách.'
                  : 'Renowned nearby Buddhist pilgrimage sanctuary featuring the Sacred Four Holy Sites replicas, offering deep peace of mind.'}
              </p>
              <div className="flex items-center gap-2 text-xs text-forest-moss font-medium">
                <span className="material-symbols-outlined text-base" data-icon="temple_buddhist">
                  temple_buddhist
                </span>
                <span>{currentLang === 'vi' ? 'Kết nối tour 1 ngày / 2N1Đ' : 'Connected in 1-Day & 2D1N tours'}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
