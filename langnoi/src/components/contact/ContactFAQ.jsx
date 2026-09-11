import { useState } from "react";

export default function ContactFAQ({ currentLang = "vi" }) {
  const isEn = currentLang === "en";
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: isEn
        ? "How far in advance should we book for large groups of 30+ visitors?"
        : "Cần liên hệ đặt trước bao lâu đối với đoàn đông người trên 30 khách?",
      answer: isEn
        ? "For corporate retreats, school trips, or teambuilding conferences of more than 30 guests, we recommend contacting our hotline 0966 893 943 or submitting our online inquiry form 3 to 5 days ahead. This allows our team to arrange enough wooden sampans, reserve riverside banquet tables, and assign dedicated tour guides."
        : "Đối với đoàn du lịch công ty, trường học hoặc tổ chức hội nghị teambuilding trên 30 người, quý khách nên liên hệ qua hotline kinh doanh 0966 893 943 hoặc gửi form tư vấn trước từ 3 đến 5 ngày. Điều này giúp Ban Quản lý chuẩn bị chu đáo số lượng xuồng chèo ba lá, suất ăn ẩm thực miền Tây tại nhà hàng và bố trí hướng dẫn viên riêng hỗ trợ đoàn.",
    },
    {
      question: isEn
        ? "Does the resort have parking for 45-seat buses and motorbikes? Is there a parking fee?"
        : "Khu du lịch có bãi giữ xe 45 chỗ và xe máy không? Có tính phí giữ xe không?",
      answer: isEn
        ? "Yes! The resort features a paved 5,000m² parking facility right at the welcome center gate, comfortably accommodating dozens of 16-to-45-seat coaches and hundreds of motorbikes. All parking is shaded, guarded 24/7, and 100% FREE for all visitors."
        : "Khu du lịch có bãi giữ xe nhựa hóa rộng hơn 5.000m² ngay trước cổng trung tâm tiếp đón, tiếp nhận an toàn cùng lúc hàng chục xe du lịch từ 16 đến 45 chỗ và hàng trăm xe máy. Toàn bộ dịch vụ trông giữ xe có mái che, bảo vệ 24/24 và hoàn toàn MIỄN PHÍ cho du khách tham quan hoặc lưu trú.",
    },
    {
      question: isEn
        ? "Who should I call for route assistance or date changes in case of stormy weather?"
        : "Nếu gặp thời tiết mưa bão muốn đổi lịch hẹn hoặc hỗ trợ đường đi thì gọi ai?",
      answer: isEn
        ? "If weather fluctuates or you need real-time updates on Highway 62 road conditions, please call our emergency hotline 0988 123 456 or reception desk 0272 3968 133. Our team will assist with safe route navigation or reschedule your visit free of charge."
        : "Trong trường hợp thời tiết biến động hoặc quý khách cần cập nhật tình trạng giao thông tuyến Quốc Lộ 62, vui lòng liên hệ ngay hotline khẩn cấp 0988 123 456 hoặc tổng đài 0272 3968 133. Nhân viên điều hành sẽ tư vấn lộ trình an toàn hoặc hỗ trợ đổi ngày tham quan hoàn toàn miễn phí.",
    },
    {
      question: isEn
        ? "Is the cajeput forest walkway suitable and safe for elderly visitors and young children?"
        : "Người cao tuổi hoặc trẻ nhỏ đi lại trong rừng có thuận tiện và an toàn không?",
      answer: isEn
        ? "Yes. The 5km trail is paved with flat concrete tiles, protected by sturdy guardrails over waterways, and features frequent shaded resting pavilions. Visitors can also opt for the smooth, open-air motorized cable tow boat cruise, which is completely effortless and safe for all ages."
        : "Cung đường xuyên rừng tràm dài 5km được lát đan bê tông phẳng phiu, có lan can bảo hộ chắc chắn ở các đoạn qua cầu nước và nhiều chòi dừng chân râm mát. Ngoài ra, du khách có thể lựa chọn thuyền cáp kéo mui trần rất êm ái, an toàn tuyệt đối cho người cao tuổi và các bé nhỏ.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-wetland-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-alluvial-earth text-xs font-bold uppercase tracking-widest">
            {isEn ? "Quick Inquiries" : "Giải Đáp Nhanh Thắc Mắc"}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-melaleuca-canopy mt-1">
            {isEn ? "Reception & Route FAQs" : "Câu Hỏi Về Tiếp Đón & Lộ Trình"}
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-2">
            {isEn
              ? "Common questions from travelers preparing for their trip to Tan Lap Floating Village"
              : "Một số câu hỏi thường gặp của du khách khi chuẩn bị xuất phát về Làng Nổi Tân Lập"}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-forest-moss/15 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-serif font-bold text-sm md:text-base text-melaleuca-canopy">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-forest-moss transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
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
