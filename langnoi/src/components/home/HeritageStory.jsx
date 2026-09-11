import { Link } from 'react-router-dom';

export default function HeritageStory({ currentLang }) {
  return (
    <section className="py-24 md:py-32 bg-white text-charcoal-vintage overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Generous whitespace & poetic typography */}
          <div className="lg:col-span-7 pr-0 lg:pr-8 text-left">
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-charcoal-vintage font-normal tracking-wide leading-tight mb-2">
              {currentLang === 'vi' ? 'Đồng Tháp Mười, Long An' : 'Dong Thap Muoi, Long An'}
            </h2>
            <div className="font-sans text-xs md:text-[13px] tracking-[0.24em] uppercase text-olive-moss font-semibold mb-8">
              LÀNG NỔI TÂN LẬP RESORT &amp; ECO SANCTUARY
            </div>
            <p className="font-serif-luxury text-xl md:text-2xl text-charcoal-vintage italic font-normal mb-8 leading-relaxed">
              {currentLang === 'vi'
                ? 'Chạm vào di sản sang trọng bên rừng tràm giữa lòng Đồng Tháp Mười.'
                : 'Touch the luxury heritage beside ancient cajeput forests in Dong Thap Muoi.'}
            </p>
            <div className="space-y-6 text-charcoal-muted font-sans text-sm md:text-[15px] leading-relaxed font-light">
              <p>
                {currentLang === 'vi' ? (
                  <>
                    Giữa một vùng đất ngập nước mộng mơ thanh khiết,{' '}
                    <strong className="font-semibold text-charcoal-vintage">
                      Làng Nổi Tân Lập Resort &amp; Sanctuary
                    </strong>{' '}
                    là nơi giao thoa giữa{' '}
                    <strong className="font-semibold text-charcoal-vintage">
                      thiên nhiên nguyên bản
                    </strong>
                    , kiến trúc mộc bản cổ điển và{' '}
                    <strong className="font-semibold text-charcoal-vintage">
                      vẻ đẹp sông nước miệt vườn
                    </strong>{' '}
                    được gìn giữ vẹn nguyên qua nhiều thập kỷ.
                  </>
                ) : (
                  <>
                    In the heart of pure, serene wetlands,{' '}
                    <strong className="font-semibold text-charcoal-vintage">
                      Tan Lap Floating Village Resort &amp; Sanctuary
                    </strong>{' '}
                    bridges untouched pristine nature, indigenous heritage architecture, and the timeless beauty of Southern riverways.
                  </>
                )}
              </p>
              <p>
                {currentLang === 'vi' ? (
                  <>
                    Tọa lạc trong khuôn viên sinh thái xanh ngát 135 ha với cung đường đan xuyên rừng tràm cổ thụ dài 5km và ngọn tháp quan sát 38m vươn mình giữa thảm rừng, mỗi khoảnh khắc tại đây là một lát cắt lịch sử thiên nhiên sống động — nơi sự êm đềm của vùng đất ngập nước hòa quyện cùng không khí trong lành và sự tĩnh tại tuyệt đối.
                  </>
                ) : (
                  <>
                    Nestled within 135 hectares of emerald cajeput canopy with an iconic 5km pedestrian trail and a 38-meter panoramic observation tower, every moment here is a vivid tribute to nature's tranquility.
                  </>
                )}
              </p>
              <p>
                {currentLang === 'vi' ? (
                  <>
                    Tại Tân Lập, mỗi hành trình nghỉ dưỡng đều mang tính{' '}
                    <strong className="font-semibold text-charcoal-vintage">
                      cá nhân hóa sâu sắc
                    </strong>
                    , từ bữa sáng thong thả ngắm đầm sen nở rộ, xuồng ba lá lướt nhẹ trên thảm bèo cám thanh bình, đến những liệu trình{' '}
                    <strong className="font-semibold text-charcoal-vintage">
                      spa &amp; wellness ven rạch
                    </strong>{' '}
                    được thiết kế riêng với tinh dầu tràm tự nhiên để tái tạo thân – tâm – trí.
                  </>
                ) : (
                  <>
                    From tranquil lotus breakfasts and handcrafted wooden sampan journeys across vibrant duckweed carpets to riverside botanical wellness rituals with pure cajeput essential oils, each stay rejuvenates mind, body, and spirit.
                  </>
                )}
              </p>
              <p>
                {currentLang === 'vi' ? (
                  <>
                    Không chỉ là nơi dừng chân, Làng Nổi Tân Lập là nơi bạn thật sự kết nối lại với chính mình — trong không gian di sản thanh bình giữa lòng thiên nhiên phương Nam.
                  </>
                ) : (
                  <>
                    More than a resort, Tan Lap is a serene sanctuary where you truly reconnect with yourself amidst the timeless poetry of southern nature.
                  </>
                )}
              </p>
            </div>
            <div className="mt-10 pt-4">
              <Link
                to="/gioi-thieu"
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-olive-moss font-semibold hover:text-olive-dark transition-colors border-b border-olive-moss pb-1 cursor-pointer"
              >
                {currentLang === 'vi' ? 'Khám phá câu chuyện' : 'Discover the story'}
                <span className="material-symbols-outlined text-sm translate-y-[1px]" data-icon="chevron_right">
                  chevron_right
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Tall portrait frame photo of the sanctuary tower & wetland */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl">
              <img
                alt="Sanctuary Tower rising above emerald Melaleuca Forest at Tan Lap"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                src={`${import.meta.env.BASE_URL || '/'}images/thap-quan-sat.jpg`}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
