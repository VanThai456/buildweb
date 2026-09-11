export default function Attractions({ currentLang }) {
  const attractions = [
    {
      title: currentLang === 'vi' ? 'Cung Đường Đan Xuyên Rừng Tràm 5km' : '5km Cajeput Forest Path',
      tag: currentLang === 'vi' ? 'Check-in Huyền Thoại' : 'Iconic Walkway',
      desc:
        currentLang === 'vi'
          ? 'Con đường xi măng ngoạn mục uốn khúc len lỏi giữa rừng tràm tĩnh mịch râm mát, nơi mỗi bước chân là một khung hình nghệ thuật hoang sơ.'
          : 'A breathtaking concrete trail winding silently through lush, shaded cajeput tree canopies where every step is a picturesque natural snapshot.',
      meta: currentLang === 'vi' ? 'Chiều dài: 5.000m râm mát • Check-in tự do theo vé cổng' : 'Length: 5,000m • Included with admission ticket',
      image: '/images/con-duong-dan.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCL2nFwpIBpUdTdrwxL2zW9gdrHE1KdkNAhqTkhKOwiQqCAGRU__suTHQPamgZAgfcOgFL_Xpkk9Gp9faWX1NtJ_Na8Cc6TVKTJpzd-2Do1Q2qJNMWdyWlBlj7mB7o3o4qFYbLVxBfeKzb0MavtbPJ9xp1we7XEDJjxlMyW0tAbt7IBkggo6hfc1Q1Tw8sNEQUEvAqvxxqJMNCA8PXQDdZxRM3_jJKO80BiYgJYABdUUAIef7bGhEKFFw=s0',
      span: 'md:col-span-7',
      tagBg: 'bg-stream-jade/30 text-mist-emerald',
      metaColor: 'text-alluvial-earth',
    },
    {
      title: currentLang === 'vi' ? 'Tháp Quan Sát 38m Cao Nhất Miền Tây' : '38m Observation Tower',
      tag: currentLang === 'vi' ? 'Tầm Nhìn 360°' : '360° Panoramic View',
      desc:
        currentLang === 'vi'
          ? 'Chiêm ngưỡng trọn vẹn thảm xanh 135ha rừng tràm và đồng lúa trù phú của lưu vực Đồng Tháp Mười trong ngọn gió lộng.'
          : 'Behold the endless green blanket of 135 hectares of pristine wetlands and fertile rice paddies of the Mekong basin.',
      meta: currentLang === 'vi' ? 'Tầm nhìn quang cảnh: 15km đường chân trời' : 'Horizon sightline: up to 15km',
      image: '/images/thap-quan-sat.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBy5IYMtqoBd-TSLJOl_h9ILqCK5DqeAfj-rz0GVRuaOv7blLyoCwU4BAWirbgCz0CCqi9J-lZkJomWNhwNktEnX7C7d2ylxHkad-TQhVVPXt5pR6cA7h-QhIEmRnuzlSWnYx9rIgXtvqmJikhql1ZPhR-diTZSKkOQ_390y8d7hvlFMZMwVBVeNP9kMyhhmkerBu07DP4Pgp-IXbGtmnUExBh4kUFPHyNiBh40DisXIFvVZNW9XrNtdA=s0',
      span: 'md:col-span-5',
      tagBg: 'bg-alluvial-earth/30 text-tertiary-fixed',
      metaColor: 'text-stream-jade',
    },
    {
      title: currentLang === 'vi' ? 'Cầu Chữ X Giữa Đầm Sen Súng' : 'X-Bridge Across Water Lilies',
      tag: currentLang === 'vi' ? 'Điểm Hẹn Lãng Mạn' : 'Romantic Rendezvous',
      desc:
        currentLang === 'vi'
          ? 'Giao điểm tình yêu bắc qua đầm hoa súng nở hồng rực rỡ, góc chụp ảnh được yêu thích nhất của các cặp đôi.'
          : 'An artistic wooden intersection arching over blossoming water lilies, a favorite romantic photo destination.',
      meta: currentLang === 'vi' ? 'Thời điểm đẹp nhất: 07:00 - 09:30 sáng' : 'Best time: 07:00 - 09:30 AM',
      image: '/images/cau-chu-x.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDvDRF2b4lIyI1zGrmbLKjn3woqOmBz8N_gY3jPZXGqsjmWVvfHAS-5xiQHbdogCMAgRC6r304HVYp3uYw2oNj3vJeCkBb6VTF3LdNZjF5MnEkESOkZS4oGywc3jCKcpzdxOYrYvY36JLqrfLOg25TJQCNQzoZ_y_T0jlOPBW4bBye1qY4FruW4YgyONwkeCI2qOSFC9_4oZTVOdU7fK37eDfHc3rCPo26qozp7DayyCicv-MRj8P2-Cw=s0',
      span: 'md:col-span-5',
      tagBg: 'bg-stream-jade/30 text-mist-emerald',
      metaColor: 'text-alluvial-earth',
    },
    {
      title: currentLang === 'vi' ? 'Đảo Thuần Dưỡng Chim & Hồ Bán Nguyệt' : 'Bird Sanctuary & Crescent Lake',
      tag: currentLang === 'vi' ? 'Khu Lõi Bảo Tồn Sinh Thái' : 'Core Eco Sanctuary',
      desc:
        currentLang === 'vi'
          ? 'Khu vực sinh tồn của hàng nghìn cá thể cò trắng, trích mồng đỏ và chim nước quý hiếm tụ hội về tổ lúc hoàng hôn buông xuống.'
          : 'Natural breeding sanctuary for thousands of wild white egrets, purple swamphens, and rare water fowl nesting at dusk.',
      meta: currentLang === 'vi' ? 'Bảo tồn nguyên vẹn hệ sinh thái ngập mặn Đồng Tháp Mười' : 'Preserved Ramsar freshwater wetland sanctuary',
      image: '/images/dao-chim.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDSiqdGTrn5yoQnlgmh3B9xk2yqExIIP_kuVjpydZi9wf61U7hqichubSEadpgeEGadinNrZQOi3GY5NI1LcvCnWLZw0_wsIfg-otAWynSkzqvRHnLvyX5QhM3lkDQxjbLPxY7HYbGQSblyq3A9w-1iJ0wfGknl1xiopMZjvA2IgfGvks1WGeMIuBtu-S6AplQfOjhY-athSJ3sfNLa7ye6GGIsuVnUcXR6P5N0L8706gDyAHQ40h0HYg=s0',
      span: 'md:col-span-7',
      tagBg: 'bg-alluvial-earth/30 text-tertiary-fixed',
      metaColor: 'text-stream-jade',
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="attractions">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-forest-moss font-label-lg text-label-lg uppercase tracking-wider mb-2">
            <span className="w-6 h-0.5 bg-forest-moss"></span>
            {currentLang === 'vi' ? 'Kỳ quan sinh thái' : 'Ecological Wonders'}
          </div>
          <h2 className="font-headline-lg text-headline-lg text-melaleuca-canopy">
            {currentLang === 'vi' ? 'Điểm Tham Quan Biểu Tượng Tân Lập' : 'Iconic Attractions of Tan Lap'}
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          {currentLang === 'vi'
            ? 'Khám phá mê cung rừng tràm với những công trình sinh thái độc bản đã trở thành biểu tượng check-in của vùng đất Long An.'
            : 'Explore the cajeput forest labyrinth with bespoke ecological landmarks celebrated across the Mekong Delta.'}
        </p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {attractions.map((item, index) => (
          <div
            key={index}
            className={`${item.span} group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-surface-container-lowest border border-melaleuca-canopy/10 flex flex-col justify-end min-h-[380px] md:min-h-[440px]`}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={item.image}
              onError={(e) => {
                e.target.src = item.fallback;
              }}
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-melaleuca-canopy/95 via-melaleuca-canopy/40 to-transparent"></div>
            <div className="relative z-10 p-6 md:p-8 text-wetland-cream">
              <span className={`inline-block px-3 py-1 rounded-full backdrop-blur-md text-label-sm font-label-sm mb-3 ${item.tagBg}`}>
                {item.tag}
              </span>
              <h3 className="font-headline-md text-headline-md text-wetland-cream mb-2">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-wetland-cream/85 max-w-xl mb-4">
                {item.desc}
              </p>
              <div className={`font-label-lg text-label-lg ${item.metaColor}`}>
                {item.meta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
