export default function ResortIntro({ currentLang }) {
  const usps = [
    {
      icon: 'balcony',
      title: currentLang === 'vi' ? 'Ban Công Rừng Sông' : 'Forest & River Balcony',
      desc:
        currentLang === 'vi'
          ? 'Mỗi phòng đều có ban công riêng nhìn ra đầm sen hoặc rạch tràm rợp bóng cây xanh mát.'
          : 'Every room features a private balcony overlooking lotus lagoons or shaded cajeput channels.',
    },
    {
      icon: 'wb_twilight',
      title: currentLang === 'vi' ? 'Đón Bình Minh 38m' : 'Panoramic Sunrises',
      desc:
        currentLang === 'vi'
          ? 'Thưởng thức sương mai sớm và ánh hoàng hôn buông xuống mặt nước phẳng lặng như gương.'
          : 'Witness ethereal dawn mist and golden sunsets reflecting on glassy wetland waters.',
    },
    {
      icon: 'confirmation_number',
      title: currentLang === 'vi' ? 'Tặng Vé Tham Quan' : 'Complimentary Pass',
      desc:
        currentLang === 'vi'
          ? 'Miễn phí toàn bộ vé vào cổng cung đường đan 5km cho khách lưu trú qua đêm tại khách sạn.'
          : 'Free admission tickets to the 5km forest walkway included with all overnight stays.',
    },
    {
      icon: 'spa',
      title: currentLang === 'vi' ? 'Tĩnh Lặng Thanh Lọc' : 'Pristine Sanctuary',
      desc:
        currentLang === 'vi'
          ? 'Không gian tĩnh dưỡng biệt lập hoàn toàn khỏi khói bụi và tiếng còi xe đô thị náo nhiệt.'
          : 'Completely isolated sanctuary shielded from urban pollution, noise, and hustle.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-wetland-cream border-b border-forest-moss/10" id="intro">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & USP Grid */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base mb-2">
              <span className="w-8 h-[2px] bg-forest-moss"></span>
              <span>{currentLang === 'vi' ? 'Biểu Tượng Nghỉ Dưỡng Sinh Thái' : 'Iconic Eco-Resort Hotel'}</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold tracking-tight mb-6 leading-tight">
              {currentLang === 'vi'
                ? 'Khách Sạn Làng Nổi Tân Lập – Tầm Nhìn 360° Độc Bản Miền Tây'
                : 'Tan Lap Hotel – 360° Unique Vantage Point in the Mekong Delta'}
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-10 leading-relaxed">
              {currentLang === 'vi'
                ? 'Tọa lạc biệt lập giữa rốn trũng Đồng Tháp Mười, Khách sạn Làng Nổi Tân Lập là khách sạn 8 tầng cao nhất khu vực, kết hợp hài hòa giữa kiến trúc hiện đại và chất liệu gỗ mộc tự nhiên, mang lại trải nghiệm thức giấc giữa đại ngàn tràm xanh biếc.'
                : 'Nestled deep within pristine wetlands, Tan Lap Hotel stands 8 stories tall, harmonizing modern comfort with warm timber tones, inviting guests to awaken amidst boundless green canopy.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {usps.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-moss/10 text-forest-moss flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl" data-icon={item.icon}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base md:text-lg font-bold text-melaleuca-canopy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-melaleuca-canopy/10 h-72 sm:h-80">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src="/images/resort/hotel-balcony.jpg"
                alt="Balcony facing flooded cajeput lake"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-melaleuca-canopy/10 h-72 sm:h-80 transform translate-y-6">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src="/images/resort/hotel-bathtub.jpg"
                alt="Soaking tub overlooking forest"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
