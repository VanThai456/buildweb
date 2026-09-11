export default function AboutVision({ currentLang }) {
  const pillars = [
    {
      title: currentLang === 'vi' ? 'Bảo Tồn & Tái Sinh Sinh Thái' : 'Ecological Conservation & Regeneration',
      badge: currentLang === 'vi' ? 'Trụ Cột Thứ Nhất' : 'First Pillar',
      icon: 'nest_eco_leaf',
      iconColor: 'bg-stream-jade/20 text-melaleuca-canopy',
      badgeColor: 'text-stream-jade',
      desc:
        currentLang === 'vi'
          ? 'Cam kết duy trì và mở rộng thảm xanh của hơn 135ha rừng tràm, duy trì độ phèn tự nhiên giúp lưu giữ nguồn nước ngọt quý báu và bảo vệ hàng chục vạn chim di cư cùng muôn loài thủy sản đặc hữu.'
          : 'Committed to safeguarding over 135 hectares of melaleuca forests, conserving freshwater reserves, and sheltering hundreds of thousands of migratory birds and endemic aquatic species.',
      meta: currentLang === 'vi' ? 'Kiểm định rừng hàng quý' : 'Quarterly forestry inspection audits',
    },
    {
      title: currentLang === 'vi' ? 'Giáo Dục & Trải Nghiệm Khơi Gợi' : 'Nature Education & Immersive Experiences',
      badge: currentLang === 'vi' ? 'Trụ Cột Thứ Hai' : 'Second Pillar',
      icon: 'local_library',
      iconColor: 'bg-alluvial-earth/20 text-timeless-bark',
      badgeColor: 'text-alluvial-earth',
      desc:
        currentLang === 'vi'
          ? 'Biến mỗi chuyến đi thành lớp học thiên nhiên sống động. Thế hệ trẻ và các gia đình được tự tay chạm vào thảm bèo cám, ngắm chim di cư từ tháp quan sát và thấu hiểu giá trị của vùng đất ngập nước.'
          : 'Transforming journeys into living open-air classrooms. Younger generations touch water ferns, spot rare avian wildlife, and internalize the profound ecological value of Ramsar wetlands.',
      meta: currentLang === 'vi' ? 'Hơn 40.000 học sinh & du khách/năm' : '40,000+ students & visitors annually',
    },
    {
      title: currentLang === 'vi' ? 'Sinh Kế & Lan Tỏa Cộng Đồng' : 'Sustainable Local Livelihoods',
      badge: currentLang === 'vi' ? 'Trụ Cột Thứ Ba' : 'Third Pillar',
      icon: 'groups_3',
      iconColor: 'bg-waterway-blue/20 text-waterway-blue',
      badgeColor: 'text-waterway-blue',
      desc:
        currentLang === 'vi'
          ? '100% người lái xuồng, hướng dẫn viên và đầu bếp là con em nông dân địa phương Long An. Tạo nguồn thu nhập ổn định quanh năm, gìn giữ nét văn hóa hiếu khách đậm chất miệt vườn sông nước.'
          : '100% of rowers, tour guides, and culinary artisans are local farmers and community members, cultivating stable sustainable livelihoods and preserving authentic Mekong warmth.',
      meta: currentLang === 'vi' ? '180+ việc làm trực tiếp bản địa' : '180+ direct local jobs created',
    },
  ];

  return (
    <section className="py-24 bg-tranquil-sand" id="vision">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-forest-moss font-label-lg text-sm font-semibold tracking-wider mb-3">
            <span className="material-symbols-outlined text-base">target</span>
            <span>{currentLang === 'vi' ? 'ĐỊNH HƯỚNG BỀN VỮNG' : 'SUSTAINABILITY ORIENTATION'}</span>
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-melaleuca-canopy font-bold mb-4">
            {currentLang === 'vi'
              ? 'Tầm Nhìn & Sứ Mệnh 3 Trụ Cột Vì Một Tương Lai Xanh'
              : 'Vision & 3-Pillar Mission for a Green Future'}
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            {currentLang === 'vi'
              ? 'Đưa Làng Nổi Tân Lập trở thành biểu tượng du lịch sinh thái nghỉ dưỡng chuẩn mực của Đồng bằng Sông Cửu Long, nơi từng bước chân của du khách đều đóng góp vào sự phát triển trường tồn của tự nhiên và cộng đồng.'
              : 'Establishing Tan Lap Floating Village as a premier benchmark for sustainable eco-resort tourism in the Mekong Delta, where every guest footstep enriches ecological longevity.'}
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${pillar.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                </div>
                <span className={`font-label-sm text-xs uppercase tracking-wider font-semibold ${pillar.badgeColor}`}>
                  {pillar.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-melaleuca-canopy mt-1 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-[15px] text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-primary/5 flex items-center gap-2 text-forest-moss text-xs font-semibold">
                <span className="material-symbols-outlined text-base text-stream-jade">check_circle</span>
                <span>{pillar.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
