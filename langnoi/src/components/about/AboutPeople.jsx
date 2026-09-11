
export default function AboutPeople() {
  const people = [
    {
      name: 'Cô Ba Hương',
      role: 'Người Chèo Xuồng Ba Lá (12 năm gắn bó)',
      roleColor: 'text-alluvial-earth',
      image: '/images/about/person-ba-huong.jpg',
      quote:
        'Khách phương xa về đây nghe tiếng bìm bịp kêu, thấy bèo xanh trải dài ai cũng trầm trồ. Chèo cho khách là niềm vui cả đời của tui.',
    },
    {
      name: 'Anh Nguyễn Văn Tấn',
      role: 'Đội Trưởng Tuần Rừng & Bảo Tồn Chim',
      roleColor: 'text-forest-moss',
      image: '/images/about/person-tan.jpg',
      quote:
        'Mỗi tổ chim non chào đời, mỗi khoảnh rừng tràm đâm chồi xanh mướt là công sức và tình yêu của cả anh em đội kiểm lâm Tân Lập.',
    },
    {
      name: 'Bếp Trưởng Tư Lộc',
      role: 'Nghệ Nhân Ẩm Thực Khẩn Hoang Miệt Vườn',
      roleColor: 'text-timeless-bark',
      image: '/images/about/person-tu-loc.jpg',
      quote:
        'Cá lóc nướng trui cuốn lá sen non, bông súng chấm mắm kho... món ăn nơi đây đượm vị mộc mạc mà đậm đà tình người đất Mộc Hóa.',
    },
  ];

  return (
    <section className="py-24 bg-wetland-cream" id="stories">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm md:text-base tracking-wider mb-2">
            <span className="material-symbols-outlined text-base" data-icon="sentiment_satisfied">
              sentiment_satisfied
            </span>
            <span>HỒN CỐT ĐỒNG THÁP MƯỜI</span>
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold mb-4">
            Những Người Giữ Hồn Rừng Tân Lập
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            Nụ cười chân chất, tà áo bà ba giản dị và sự gắn kết ruột thịt với từng gốc tràm, cánh chim là điều níu giữ bước chân du khách mỗi lần ghé thăm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {people.map((person, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl p-8 border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-tranquil-sand shadow-md">
                <img
                  className="w-full h-full object-cover"
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                />
              </div>
              <h4 className="font-serif text-xl text-melaleuca-canopy font-bold">{person.name}</h4>
              <span className={`text-sm ${person.roleColor} font-medium mt-1 mb-4 block`}>
                {person.role}
              </span>
              <p className="text-sm text-on-surface-variant italic leading-relaxed mt-auto">
                &ldquo;{person.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
