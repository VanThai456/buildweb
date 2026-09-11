import { Link } from 'react-router-dom';

export default function AboutCTA({ onOpenBooking }) {
  return (
    <section className="py-20 bg-tranquil-sand" id="booking">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div className="p-10 md:p-14 rounded-3xl bg-wetland-cream border border-primary/10 shadow-lg relative overflow-hidden">
          <span className="material-symbols-outlined text-stream-jade text-4xl mb-4 inline-block" data-icon="spa">
            spa
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-melaleuca-canopy font-bold mb-4">
            Lên Lịch Cho Hành Trình Trở Về Với Mẹ Thiên Nhiên
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Chỉ cách TP. Hồ Chí Minh 2 giờ di chuyển, rừng tràm Tân Lập mở ra một ốc đảo biệt lập, tĩnh lặng cho tâm trí nghỉ ngơi và hồi phục năng lượng.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-melaleuca-canopy hover:bg-forest-moss text-white font-medium text-base transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span className="material-symbols-outlined text-lg" data-icon="calendar_month">
                calendar_month
              </span>
              <span>Xem tour &amp; bảng giá</span>
            </Link>
            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking('Vé Tham Quan & Khách Sạn')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-melaleuca-canopy text-melaleuca-canopy hover:bg-melaleuca-canopy hover:text-white font-medium text-base transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg" data-icon="phone_in_talk">
                phone_in_talk
              </span>
              <span>Liên hệ đặt chỗ ngay</span>
            </button>
          </div>
          <p className="text-sm text-outline mt-8">
            Địa chỉ: Quốc lộ 62, Xã Tân Lập, Huyện Mộc Hóa, Tỉnh Long An • Mở cửa từ 07:30 - 17:30 hàng ngày
          </p>
        </div>
      </div>
    </section>
  );
}
