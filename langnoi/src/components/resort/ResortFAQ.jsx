import { useState } from 'react';

export default function ResortFAQ({ currentLang }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q:
        currentLang === 'vi'
          ? 'Giờ nhận phòng và trả phòng tại Khách Sạn Làng Nổi là mấy giờ?'
          : 'What are check-in and check-out times at Tan Lap Hotel?',
      a:
        currentLang === 'vi'
          ? 'Giờ nhận phòng tiêu chuẩn là từ 14:00 và giờ trả phòng trước 12:00 trưa ngày hôm sau. Quý khách đến sớm có thể gửi hành lý tại quầy lễ tân để dạo chơi cung đường đan và trải nghiệm chèo xuồng trước.'
          : 'Standard check-in time is from 14:00 PM and check-out is before 12:00 PM noon. Early arrivals may safely store luggage at reception to explore the forest trails first.',
    },
    {
      q:
        currentLang === 'vi'
          ? 'Nhà hàng có phục vụ thực đơn ăn chay hoặc chế độ ăn kiêng không?'
          : 'Does the restaurant cater to vegetarian or dietary requirements?',
      a:
        currentLang === 'vi'
          ? 'Nhà hàng phục vụ đầy đủ các món chay phong phú từ nấm tràm, hoa sen, hoa súng, rau rừng ngập nước và đậu hũ hữu cơ. Quý khách vui lòng báo trước khi đặt bàn để đầu bếp chuẩn bị chu đáo nhất.'
          : 'We gladly prepare wholesome vegetarian dishes featuring lotus, water lilies, cajeput mushrooms, and organic tofu. Please notify us during table reservation.',
    },
    {
      q:
        currentLang === 'vi'
          ? 'Khu du lịch có dịch vụ xe đưa đón từ TP. Hồ Chí Minh không?'
          : 'Is there a private shuttle transfer service from Ho Chi Minh City?',
      a:
        currentLang === 'vi'
          ? 'Làng Nổi Tân Lập hỗ trợ liên hệ xe du lịch 7 chỗ, 16 chỗ và 29 chỗ chất lượng cao đón trả tận nơi tại TP.HCM theo yêu cầu của đoàn, thời gian di chuyển khoảng 2 giờ qua cao tốc Trung Lương và Quốc Lộ 62.'
          : 'We coordinate dedicated 7, 16, and 29-seat private shuttles pick-up and drop-off anywhere in HCMC, taking approximately 2 hours via Highway 62.',
    },
    {
      q:
        currentLang === 'vi'
          ? 'Trẻ em đi cùng bố mẹ có bị tính phụ thu phòng hoặc vé không?'
          : 'Are children subject to extra fees for lodging and admission?',
      a:
        currentLang === 'vi'
          ? 'Trẻ em dưới 1m2 được miễn phí vé cổng tham quan cơ bản và miễn phí lưu trú khi ngủ chung giường có sẵn với bố mẹ (tối đa 1 trẻ/phòng). Trẻ em trên 1m2 hoặc yêu cầu kê thêm giường phụ sẽ áp dụng mức phụ thu nhẹ.'
          : 'Children under 1.2 meters enjoy complimentary admission and free stay when sharing existing beds with parents (max 1 child/room). Extra bedding incurs a modest surcharge.',
    },
  ];

  return (
    <section className="py-20 bg-wetland-cream border-t border-forest-moss/10" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-forest-moss font-medium text-sm mb-2">
            <span className="w-6 h-[2px] bg-forest-moss"></span>
            <span>{currentLang === 'vi' ? 'Giải Đáp Thắc Mắc' : 'Need Help?'}</span>
            <span className="w-6 h-[2px] bg-forest-moss"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-melaleuca-canopy mb-3">
            {currentLang === 'vi'
              ? 'Câu Hỏi Thường Gặp Về Lưu Trú & Ẩm Thực'
              : 'Frequently Asked Questions'}
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant">
            {currentLang === 'vi'
              ? 'Thông tin chi tiết giúp quý khách chuẩn bị chu đáo nhất cho chuyến nghỉ dưỡng.'
              : 'Helpful details to ensure your countryside holiday is smooth and enjoyable.'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-2xl border border-forest-moss/15 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-melaleuca-canopy hover:text-forest-moss transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-forest-moss transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-on-surface-variant leading-relaxed border-t border-forest-moss/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
