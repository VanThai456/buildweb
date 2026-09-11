export default function Cuisine({ onOpenBooking, currentLang }) {
  const dishes = [
    {
      name: currentLang === 'vi' ? 'Cá Lóc Nướng Trui Cuốn Lá Sen Non' : 'Grilled Snakehead in Young Lotus Leaf',
      tag: currentLang === 'vi' ? 'Món ngon đặc sắc nhất' : 'Chef Signature Dish',
      tagColor: 'text-alluvial-earth',
      desc:
        currentLang === 'vi'
          ? 'Cá lóc đồng nướng rơm thơm lừng, cuốn cùng lá sen non đầm Tân Lập, chấm nước mắm me chua ngọt đậm đà.'
          : 'Wild caught snakehead fish roasted over straw, wrapped with crisp young lotus leaves and tangy tamarind dipping sauce.',
      image: '/images/ca-loc-nuong.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCZuCckeM11ZOd94YaQP8lajYVI9r4hjLHPc4tKNv5uPEO92BP71FAFOkZWf561vDJPDvdZDaKfp6VdTJPb9CZINNQTNhahgUDxy4qmEUmpRgZqf_2PX7wvyUM5JnJRZuHI28tmsdY7EgEQtpEg48yMkjPv30N2lABmVRs8jy3zsguaWT-o_NrvfEYWmqzMvZMxLi95oQ8nar4SHwb4u47JN-1xSouMZVpfq4xnZioUC4IOr9PsFZakxg=s0',
    },
    {
      name: currentLang === 'vi' ? 'Lẩu Cá Linh Bông Điên Điển' : 'Ca Linh Fish & Dien Dien Flower Hotpot',
      tag: currentLang === 'vi' ? 'Mùa Nước Nổi' : 'High Water Season',
      tagColor: 'text-stream-jade',
      desc:
        currentLang === 'vi'
          ? 'Cá linh đầu mùa béo ngọt nấu cùng bông điên điển vàng rực và hoa súng giòn ngọt vị thiên nhiên.'
          : 'Tender freshwater fish simmered with golden sesban flowers and water lily stems in aromatic broth.',
      image: '/images/lau-ca-linh.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAjXzh4e9ed6MAINGcuJFkGUJI6Uru2cyMA0YkOVbAV_GmSEHVAUHJkhukL4fw73oKnShzH8COTenLgQV6XEie8UNg3eBZSoa9wNp940sJM8qnmzUwf2k_KEw8GkH4a7CVQBbHxQgHvXbBRNCIKL41XpvL2u8-tURL0TqaDuz-py6LV6LCfynRTFDJ70LCgV7uQQqRWOTxjWqyP31kbjUa6HsHad9ZLomX6S92rNwsP1C0PT0rirXiHVw=s0',
    },
    {
      name: currentLang === 'vi' ? 'Chuột Đồng Nướng Lu Muối Ớt' : 'Crisp Roasted Field Delicacy',
      tag: currentLang === 'vi' ? 'Đặc sản đồng ruộng' : 'Country Special',
      tagColor: 'text-alluvial-earth',
      desc:
        currentLang === 'vi'
          ? 'Món ngon trứ danh của vùng lúa Long An, thịt săn chắc ngọt lịm được nướng vàng ruộm trên than hồng.'
          : 'Famous Long An harvest specialty with crispy golden skin, tender flavorful meat roasted over hot coals.',
      image: '/images/chuot-dong.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCCSqxSVFTuesRKSJ8-XlylOktHPJK4uc8bn6A8IgtgOFnpIOdyKsC12ZDeNxEjkf4x2VpicEWj3PepvHGRvzyHqI1YxQycCtcRwLCm3oArzB4EbXwq4htwo-rrwreGNvWFHnROSNOfwBxrCq6zmN_6Qki9ccAzhOfEG2tib4G_clnKZy2SrmO8xxqLCnMoFwt1CP6deh9VtxVtYRryw6MpvMss3nlfK_laLHqMeJegcUGYWC-xI0B88Q=s0',
    },
    {
      name: currentLang === 'vi' ? 'Gỏi Ngó Sen Tôm Sông & Ốc Bươu Nướng' : 'Lotus Stem River Shrimp Salad',
      tag: currentLang === 'vi' ? 'Thanh mát khai vị' : 'Crisp & Refreshing',
      tagColor: 'text-stream-jade',
      desc:
        currentLang === 'vi'
          ? 'Ngó sen tươi giòn ngọt từ đầm Tân Lập kết hợp cùng tôm sông tươi rói và ốc bươu nướng tiêu xanh cay nồng.'
          : 'Fresh crispy lotus roots tossed with wild river shrimp and grilled freshwater snails with green pepper.',
      image: '/images/goi-ngo-sen.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBRjdUGgvfkZaaCLmzKuSX7xqweDm-iZkR_Nbpv82-yXRhGjvnlwC1dScbBrcK6mpalp0HCuVfsP0JdKvtqLKI3M28zGliffsFqAPIaSts3Hq537aXGEOL0GFRX1LW3XGu4pXV-E9tVow90-ujwLKkKf0fiQWQxJu3QUpWBXtv3VBSfjmhwloBwF4IKsdf4TXFO0bHOrGC7oEBcU8fwPdLcPn_i9Z08cAreMDYrNZ32O8D41MnwhS5Cug=s0',
    },
  ];

  return (
    <section className="py-24 bg-surface-container-low border-t border-melaleuca-canopy/10" id="cuisine">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-forest-moss font-label-lg text-label-lg uppercase tracking-wider mb-2">
              <span className="w-6 h-0.5 bg-forest-moss"></span>
              {currentLang === 'vi' ? 'Hương vị đồng bằng' : 'Mekong Regional Flavors'}
            </div>
            <h2 className="font-headline-lg text-headline-lg text-melaleuca-canopy">
              {currentLang === 'vi' ? 'Ẩm Thực Đồng Quê Miền Tây Nam Bộ' : 'Authentic Southern Countryside Cuisine'}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            {currentLang === 'vi'
              ? 'Mỗi món ăn là một câu chuyện văn hóa khẩn hoang, được chế biến từ những nguyên liệu tươi ngon nhất của mùa nước nổi Đồng Tháp Mười.'
              : 'Every dish preserves an authentic cultural story prepared with fresh local seasonal ingredients of the wetlands.'}
          </p>
        </div>

        {/* Cuisine Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-sm group hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={dish.image}
                  onError={(e) => {
                    e.target.src = dish.fallback;
                  }}
                  alt={dish.name}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider ${dish.tagColor}`}>
                    {dish.tag}
                  </span>
                  <h4 className="font-headline-sm text-[19px] leading-snug text-melaleuca-canopy mt-1 mb-2">
                    {dish.name}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    {dish.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurant booking banner */}
        <div className="mt-12 p-8 rounded-2xl bg-melaleuca-canopy text-wetland-cream flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-wetland-cream mb-2">
              {currentLang === 'vi'
                ? 'Nhà Hàng Sinh Thái Ven Hồ & Chòi Lá Riêng Biệt'
                : 'Lakefront Eco-Restaurant & Secluded Thatched Huts'}
            </h3>
            <p className="text-body-md font-body-md text-wetland-cream/80 max-w-xl">
              {currentLang === 'vi'
                ? 'Phục vụ khách đoàn, gia đình và tiệc hội nghị với sức chứa lên tới 500 khách giữa khung cảnh thiên nhiên khoáng đạt.'
                : 'Catering for tour groups, private family gatherings, and banquets up to 500 guests surrounded by tranquil lake waters.'}
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Nhà Hàng Sinh Thái Ven Hồ')}
            className="px-6 py-3 rounded-full bg-alluvial-earth text-on-tertiary-fixed font-label-lg text-label-lg hover:bg-tertiary-fixed transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            {currentLang === 'vi' ? 'Đặt bàn trước & Xem thực đơn' : 'Reserve Table & Menu'}
          </button>
        </div>
      </div>
    </section>
  );
}
