
export default function AboutSustainability() {
  const commitments = [
    {
      icon: 'delete_forever',
      title: 'Hạn Chế Nhựa 100%',
      description: 'Sử dụng bình thủy tinh, ống hút cỏ bàng tự nhiên và các vật liệu tái sinh thân thiện trong toàn khu nghỉ dưỡng.',
    },
    {
      icon: 'speed',
      title: 'Tàu Cáp Kéo Êm Ái',
      description: 'Hệ thống xuồng máy cáp kéo điều tốc chống ồn, không tạo sóng lớn gây xói mòn bờ và không làm xáo trộn tập tính chim hoang.',
    },
    {
      icon: 'agriculture',
      title: 'Ẩm Thực Nông Nghiệp Sạch',
      description: 'Nông sản và cá tự nhiên thu hái theo mùa, không dùng hóa chất, hỗ trợ kinh tế xanh bền vững cho nông hộ Long An.',
    },
  ];

  return (
    <section className="py-24 bg-tranquil-sand border-y border-primary/10" id="sustainability">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-melaleuca-canopy text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
          {/* Subtle leaf decoration background */}
          <div className="absolute -bottom-16 -right-16 text-white/5 pointer-events-none select-none">
            <span className="material-symbols-outlined text-[320px] leading-none" data-icon="eco">
              eco
            </span>
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-stream-jade font-medium text-sm md:text-base tracking-wider mb-3">
              <span className="material-symbols-outlined text-base" data-icon="volunteer_activism">
                volunteer_activism
              </span>
              <span>CAM KẾT VÌ HÀNH TINH XANH</span>
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Mỗi Khoảnh Khắc Bạn Nghỉ Dưỡng, Thiên Nhiên Được Chữa Lành
            </h2>
            <p className="text-wetland-cream/90 text-base md:text-lg leading-relaxed mb-10">
              Chúng tôi theo đuổi mô hình du lịch sinh thái không tổn hại đến cảnh quan tự nhiên. Mọi hoạt động dịch vụ tại Làng Nổi Tân Lập đều tuân thủ các quy chuẩn sinh thái nghiêm ngặt nhất.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-stream-jade text-3xl mb-3 block" data-icon={item.icon}>
                  {item.icon}
                </span>
                <h4 className="text-xl font-semibold mb-2 text-white font-serif">{item.title}</h4>
                <p className="text-sm text-wetland-cream/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
