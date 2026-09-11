export default function AboutEcosystem({ currentLang }) {
  const wonders = [
    {
      title: currentLang === 'vi' ? 'Cung Đường Đan Xuyên Rừng Tràm Cổ Thụ' : '5km Elevated Cajeput Trail',
      tag: currentLang === 'vi' ? 'Kỳ quan 5.000m' : '5,000m Landmark',
      tagColor: 'bg-stream-jade/30 border-stream-jade/40',
      desc:
        currentLang === 'vi'
          ? 'Lối mòn đi bộ uốn lượn xuyên qua tầng tầng lớp lớp rừng tràm xanh rì, dẫn lối du khách vào thế giới hoang sơ tĩnh lặng, rộn rã tiếng chim hót gọi bầy.'
          : 'Meandering concrete pathway through towering cajeput trees, introducing guests into serene wilderness with vibrant bird symphonies.',
      image: '/images/about/wonder-path.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAJZuN-cJ3b0dbrY63iVYHNIjP_xO1icRvYrok1irodMtuNJoAyRMosF59PzQos0jBv2rUQ-gzscvP3UGLQSAZRPzxyZIOFtpEhHG_AP2Q3j-GmzmwjHwfQQcNo9EYdZnjnKjEYBxzHttQcBMzu28QYsx742kk0zmBUXgZd8iqtGYJWFGP94PEk3i8mimGfsnVNEtngXjJe2NG3ZbrqvFLbBYtCEFF41rNT51MeDP8A3WSJlya3h-q4kQ=s0',
      span: 'md:col-span-8',
      minHeight: 'min-h-[380px]',
    },
    {
      title: currentLang === 'vi' ? 'Tháp Quan Sát 38m' : '38m Panoramic Observation Tower',
      tag: currentLang === 'vi' ? 'Tầm nhìn 360 độ' : '360° Vision',
      tagColor: 'bg-alluvial-earth/40 border-alluvial-earth/50',
      desc:
        currentLang === 'vi'
          ? 'Nơi chiêm ngưỡng trọn vẹn đại ngàn tràm bạt ngàn xanh mát và ngắm hoàng hôn buông nhuộm vàng mặt nước Đồng Tháp Mười.'
          : 'Elevated vantage point overlooking boundless emerald treetops and breathtaking sunset reflections across the wetlands.',
      image: '/images/about/wonder-tower.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAWgY2wNVDTbVWIBLiIxETt__TNPjfSVEfFlrWB12BL8t6h8G18wAVIagdk3wL58esQRyvdV2urH-53MGEdi16G1ZflMlinGIPpbkqEa9cACpLlmh4KAWzFsghhlaC1Qqwk3FKk9njR9jVeCq7kGPF9aoDJLdmgu9V2yscbQjeBo1Adita1MyzNkorYNwR3IKbF-ArtBPafWUO-dNjTsoaSQyoOp46-zKudzQflyGt80DaqioQY4S8M6A=s0',
      span: 'md:col-span-4',
      minHeight: 'min-h-[380px]',
    },
    {
      title: currentLang === 'vi' ? 'Thảm Bèo Cám & Chèo Xuồng Ba Lá' : 'Duckweed Streams & Sampan Boat',
      tag: currentLang === 'vi' ? 'Trải nghiệm thiền tịnh' : 'Meditative Drift',
      tagColor: 'bg-stream-jade/30 border-stream-jade/40',
      desc:
        currentLang === 'vi'
          ? 'Cảm giác lướt nhẹ trên mặt nước phủ kín lớp thảm bèo xanh mịn như nhung, hít thở hương tràm thanh khiết sảng khoái.'
          : 'Gliding silently over velvety green duckweed carpets, inhaling fresh cajeput essential fragrances carried on morning breezes.',
      image: '/images/about/wonder-duckweed.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAlQhY0Dv7KHM8n25zTDDwGsd_xfWxqc09DAt7Wy8TTXkQOTXFDGg4oVw4ZJWhJivdnK0DWPhKgaxg8oPWH2ejlmMCRQEIzAsn2uD6Qb8piB8WPk8U4NkU1sX852rTo6E1QbpRH59fXbXU0a4Iv-NCQwtb0v8lQFSdga2rFFswNqF4U0YKeBYiNzj7LgdTlGrrlwFc4riG_4dsZveEkg8NxswJZOwNRaghzjXauTjfQeGbDdotbmxUnRw=s0',
      span: 'md:col-span-4',
      minHeight: 'min-h-[340px]',
    },
    {
      title: currentLang === 'vi' ? 'Đảo Chim & Hồ Bán Nguyệt' : 'Bird Island & Crescent Lake',
      tag: currentLang === 'vi' ? 'Khu Ramsar' : 'Ramsar Wildlife Core',
      tagColor: 'bg-waterway-blue/40 border-waterway-blue/50',
      desc:
        currentLang === 'vi'
          ? 'Nơi trú ngụ sinh sôi của đàn cò trắng, diệc lửa, cồng cộc và nhiều loài động vật thủy sinh cần được bảo vệ đặc biệt.'
          : 'Essential breeding and nesting grounds for white egrets, purple herons, cormorants, and delicate marsh aquatic life.',
      image: '/images/about/wonder-birds.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0a1_r3dNt0BNL9oCjGqQD1MdndKPzCag9cAb7xiMRDEtxrgbtqRVlNJQn6A4RWvUnGGsAnNA3KB4Jh_NDfvgoeb-tl5UO_ISKnvYg6qcgxCtHzD5VXVdsYS5xJcU9JQIxPlDaxUJZkHDkY6hl_SnDKmoahYzWU42AfWyh9ORj1naEwGV0ahlV6fuz5KLSSjnRE5rdROeIgFp-4gCi-0eWR4esewwUaokfB3tn4iVz9q5ayY22esw8QA=s0',
      span: 'md:col-span-4',
      minHeight: 'min-h-[340px]',
    },
    {
      title: currentLang === 'vi' ? 'Cầu Chữ X Đầm Sen Súng' : 'X-Bridge Lotus & Water Lily Sanctuary',
      tag: currentLang === 'vi' ? 'Kiến trúc hòa hợp' : 'Harmonious Design',
      tagColor: 'bg-stream-jade/30 border-stream-jade/40',
      desc:
        currentLang === 'vi'
          ? 'Cây cầu bắc qua mặt đầm ngát hương hoa súng, hoa sen Đồng Tháp Mười, là tọa độ check-in nghệ thuật được yêu thích nhất.'
          : 'Iconic timber bridge arching gracefully over fragrant blooming water lilies and pink lotuses under sunlit skies.',
      image: '/images/about/wonder-bridge.jpg',
      fallback:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Ro-pPT-2D5F-frbmeulAww4HCDBPCTMCg6bBphezdoUB-WZZJmmCEKzmDOZV9HDVtCJhWknig2j06-geyxFt2964_fosDj6AEqUmxwWdWhHRvrLKxpblr47-SLsNM8j4EdnT9fEnuufpnzU9eZFUaDCxWHNUZMuvaDhJENwc5UYgMS2jJCyEhAiAW9y8YTAmSL7F5_Zq9fwjYWe2GYsBuJPt79pzVU2iO1_HBFDQdL1sw1xBoxBs-g=s0',
      span: 'md:col-span-4',
      minHeight: 'min-h-[340px]',
    },
  ];

  return (
    <section className="py-24 bg-wetland-cream" id="ecosystem">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-forest-moss font-label-lg text-sm font-semibold tracking-wider mb-2">
              <span className="material-symbols-outlined text-base">landscape</span>
              <span>{currentLang === 'vi' ? 'HỆ SINH THÁI ĐẶC HỮU' : 'ENDEMIC ECOSYSTEM'}</span>
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-melaleuca-canopy font-bold">
              {currentLang === 'vi'
                ? 'Những Kỳ Quan Thiên Nhiên Độc Bản Tại Tân Lập'
                : 'Unique Natural Wonders of Tan Lap'}
            </h2>
          </div>
          <p className="text-base text-on-surface-variant max-w-md">
            {currentLang === 'vi'
              ? 'Mỗi cảnh sắc tại Làng Nổi Tân Lập là một mảnh ghép thi vị được kiến tạo qua bàn tay mẹ thiên nhiên và khối óc gìn giữ của con người.'
              : 'Every landscape in Tan Lap is an evocative tapestry woven by Mother Nature and safeguarded through dedicated human stewardship.'}
          </p>
        </div>

        {/* Asymmetrical Bento Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {wonders.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} rounded-3xl overflow-hidden relative group ${item.minHeight} flex flex-col justify-end p-6 md:p-8 border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={item.image}
                  onError={(e) => {
                    e.target.src = item.fallback;
                  }}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-melaleuca-canopy via-melaleuca-canopy/45 to-transparent"></div>
              </div>
              <div className="relative z-10 text-white max-w-xl">
                <span className={`px-3 py-1 rounded-full border ${item.tagColor} text-xs font-semibold text-white mb-3 inline-block backdrop-blur-md`}>
                  {item.tag}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-wetland-cream/90 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
