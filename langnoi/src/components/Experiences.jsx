export default function Experiences({ onOpenBooking, currentLang }) {
  const experiences = [
    {
      name: currentLang === 'vi' ? 'Chèo Xuồng Ba Lá Miệt Vườn' : 'Traditional Sampan Rowing',
      badge: currentLang === 'vi' ? 'Được yêu thích nhất' : 'Most Popular',
      badgeColor: 'bg-melaleuca-canopy/80 text-wetland-cream',
      duration: currentLang === 'vi' ? 'Thời lượng: 30 - 45 Phút' : 'Duration: 30 - 45 Mins',
      desc:
        currentLang === 'vi'
          ? 'Thảnh thơi ngồi trên chiếc xuồng ba lá mộc mạc, để những người chèo đò bản địa đưa bạn len lỏi vào các con rạch nhỏ mà tàu máy không thể tiếp cận, ngắm hoa sen súng thơm ngát.'
          : 'Gently float on a handcrafted wooden sampan steered by local rowers along intimate shallow canals inaccessible to motorized boats.',
      price: '80.000 VNĐ',
      unit: currentLang === 'vi' ? '/khách' : '/guest',
      label: currentLang === 'vi' ? 'Vé trọn gói từ' : 'Ticket from',
      image: '/images/cheo-xuong.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDN1jmWAY4C1V2SqM8plIL-w7fB856Ds4KWozG7wxyJ3iyGztgbnUe_yHL0CR9_ROaWlDIYg6N0YrHiq0aR5ctzr8yTXBSLpA7uQfooOqGaIYtxJx_5OKaNKNEzZ-VyiOFCQ4UXSOcSQVnfHguTPJtevlpjrKf_N4r9tGsUzfXbOk5LTMrY8kAa0x3mdDtb1fPA7TH40dXOcW-DmL5ntCi4YODeJ7oh7n9g9qrPJVX1sSuzfpmOZLfCKQ=s0',
    },
    {
      name: currentLang === 'vi' ? 'Thuyền Cáp Kéo Mui Trần' : 'Open-Air Cable Boat Ride',
      badge: currentLang === 'vi' ? 'Độc quyền Tân Lập' : 'Tan Lap Exclusive',
      badgeColor: 'bg-waterway-blue/85 text-wetland-cream',
      duration: currentLang === 'vi' ? 'Thời lượng: 30 Phút' : 'Duration: 30 Mins',
      desc:
        currentLang === 'vi'
          ? 'Hệ thống thuyền cáp kéo dưới nước không gây tiếng ồn động cơ, lướt êm ái qua thảm bèo xanh mướt để bạn chụp ảnh sống ảo và tận hưởng không khí trong lành nguyên thủy.'
          : 'Quiet underwater cable system gliding silently across endless carpets of emerald duckweed without noisy engine vibrations.',
      price: '70.000 VNĐ',
      unit: currentLang === 'vi' ? '/khách' : '/guest',
      label: currentLang === 'vi' ? 'Vé trọn gói từ' : 'Ticket from',
      image: '/images/thuyen-cap.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5b55MIg8Hrhs9ccVlugc3r1VP7Rjrrgo6Tds4r6fulfXfkvegqyAePX7JlDXz5PquDl_9dIF1UvLvPJRax0Ww_nHgFQ18Uz-Hv7Y1XlPZRIVr29CxoNlp1CL6ODWs3y_RHejXQz_wMpqC7EXmEAUX6lr1CW1DWkC-GljKZFrKXzxTCwR5uoor5fw4cJBKqnGPh8ceffWL0QB7n5MdR3GBxQ1DVsi-nXxWcjTZm690p3ZggvV7Nmbb_w=s0',
    },
    {
      name: currentLang === 'vi' ? 'Trải Nghiệm Đổ Lợp Bắt Cá Đồng' : 'Fish Trap Catch & Grill',
      badge: currentLang === 'vi' ? 'Đời sống nông dân' : 'Authentic Rural Life',
      badgeColor: 'bg-alluvial-earth/90 text-on-tertiary-fixed',
      duration: currentLang === 'vi' ? 'Thời lượng: 60 - 90 Phút' : 'Duration: 60 - 90 Mins',
      desc:
        currentLang === 'vi'
          ? 'Hóa thân thành người dân quê miệt Thứ: lội mương bắt ốc, dỡ lợp bắt cá lóc, cá trê đồng tự nhiên và thưởng thức thành quả nướng trui ngay tại chòi lá ven rừng.'
          : 'Step into traditional farming life: wading waterways, checking bamboo fish traps, and grilling fresh catch directly over rice straw.',
      price: '150.000 VNĐ',
      unit: currentLang === 'vi' ? '/khách' : '/guest',
      label: currentLang === 'vi' ? 'Theo nhóm từ' : 'Group rate from',
      image: '/images/bat-ca.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCSAcUyoFvH_lruRIIdTjVzHeEXGFXM7PvuW6iGKFkto9mRxaFWTzFobc6bO1P6MAPFoW1F91HaCu5Naq-dzcJFJgDqVvxHOUCoj7kWZpZb3UHQRzzg0dzAK-vIurJqA-kmwfczL1GBvObAoZGuTm9YGASpBe-P23VlJnbWoMZgEzPu-nbmhytkY18n2onZodaTd81e5sgG9ZPxV1N69yp9KKEtcdg50BwB0quv56IKly9MaCoCLh0R8g=s0',
    },
  ];

  return (
    <section className="py-24 bg-tranquil-sand border-y border-melaleuca-canopy/10" id="experiences">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-forest-moss font-label-lg text-label-lg uppercase tracking-wider mb-2">
            <span className="w-6 h-0.5 bg-forest-moss"></span>
            {currentLang === 'vi' ? 'Đặc trưng sông nước Nam Bộ' : 'Mekong Riverway Highlights'}
            <span className="w-6 h-0.5 bg-forest-moss"></span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-melaleuca-canopy mb-4">
            {currentLang === 'vi' ? 'Trải Nghiệm Khám Phá Rạch Rừng Tràm' : 'Riverway Canal Experiences'}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {currentLang === 'vi'
              ? 'Cảm nhận nhịp thở yên bình của miền Tây sông nước qua những hoạt động chèo thuyền truyền thống và trải nghiệm nếp sống ngư dân bản địa.'
              : 'Feel the peaceful pulse of the Mekong Delta through traditional rowing boats, silent waterways, and authentic rural pastimes.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  onError={(e) => {
                    e.target.src = item.fallback;
                  }}
                  alt={item.name}
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-md text-label-sm font-label-sm ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-forest-moss text-label-sm font-label-sm mb-2">
                    <span className="material-symbols-outlined text-[16px]">timer</span>
                    <span>{item.duration}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-melaleuca-canopy mb-2">
                    {item.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-melaleuca-canopy/10 flex items-center justify-between">
                  <div>
                    <span className="text-label-sm font-label-sm text-on-surface-variant">{item.label}</span>
                    <div className="font-subhead-lg text-subhead-lg font-bold text-forest-moss">
                      {item.price}{' '}
                      <span className="text-xs font-normal text-on-surface-variant">{item.unit}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenBooking(item.name)}
                    className="px-4 py-2 rounded-full bg-melaleuca-canopy text-wetland-cream text-label-sm font-label-sm hover:bg-forest-moss transition-colors cursor-pointer"
                  >
                    {currentLang === 'vi' ? 'Chọn vé này' : 'Select Ticket'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
