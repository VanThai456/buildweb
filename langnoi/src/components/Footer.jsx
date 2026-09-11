import { Link } from 'react-router-dom';

export default function Footer({ currentLang }) {
  return (
    <footer className="w-full bg-melaleuca-canopy border-t border-primary-container text-alluvial-earth">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-primary-container/60">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-stream-jade text-melaleuca-canopy flex items-center justify-center font-bold shadow-md">
                <span className="material-symbols-outlined">sailing</span>
              </div>
              <span className="font-headline-md text-headline-md text-wetland-cream">
                Làng Nổi Tân Lập
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-surface-variant/80 mb-6 leading-relaxed">
              {currentLang === 'vi'
                ? 'Khu du lịch sinh thái rừng tràm ngập nước đặc trưng vùng Đồng Tháp Mười. Thiên đường thanh lọc tâm hồn, bảo tồn đa dạng sinh học và trải nghiệm văn hóa sông nước nguyên bản.'
                : 'Pristine flooded cajeput eco-tourism sanctuary in Dong Thap Muoi. A haven of biodiversity conservation and authentic Mekong riverway culture.'}
            </p>
            <div className="flex items-center gap-3 text-wetland-cream">
              <a
                className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center hover:bg-forest-moss transition-colors"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center hover:bg-forest-moss transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center hover:bg-forest-moss transition-colors"
                href="mailto:sales@langnoitanlap.com.vn"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
            </div>
          </div>

          {/* Sitemap Quick Links: Điểm tham quan & Giới thiệu */}
          <div className="lg:col-span-3">
            <h4 className="font-headline-sm text-headline-sm text-wetland-cream mb-4">
              {currentLang === 'vi' ? 'Khám Phá' : 'Discover'}
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <Link
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150 font-medium"
                  to="/gioi-thieu"
                >
                  {currentLang === 'vi' ? '🌿 Giới thiệu & Sứ mệnh' : '🌿 About & Mission'}
                </Link>
              </li>
              <li>
                <Link
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150 font-medium"
                  to="/tham-quan"
                >
                  {currentLang === 'vi' ? '🛶 Tham quan & Trải nghiệm' : '🛶 Tours & Experiences'}
                </Link>
              </li>
              <li>
                <Link
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150 font-medium"
                  to="/khach-san-am-thuc"
                >
                  {currentLang === 'vi' ? '🏨 Khách sạn & Ẩm thực' : '🏨 Hotel & Dining'}
                </Link>
              </li>
              <li>
                <a
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150"
                  href="/#attractions"
                >
                  {currentLang === 'vi' ? 'Cung đường đan xuyên rừng tràm' : '5km Cajeput forest path'}
                </a>
              </li>
              <li>
                <a
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150"
                  href="/#attractions"
                >
                  {currentLang === 'vi' ? 'Tháp quan sát 38m' : '38m Observation tower'}
                </a>
              </li>
              <li>
                <a
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150"
                  href="/#experiences"
                >
                  {currentLang === 'vi' ? 'Chèo xuồng ba lá' : 'Handcrafted sampan tour'}
                </a>
              </li>
              <li>
                <a
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150"
                  href="/#resort"
                >
                  {currentLang === 'vi' ? 'Khách sạn Làng Nổi 8 tầng' : '8-floor eco-hotel'}
                </a>
              </li>
              <li>
                <a
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150"
                  href="/#cuisine"
                >
                  {currentLang === 'vi' ? 'Đặc sản cá lóc nướng trui' : 'Grilled snakehead specialty'}
                </a>
              </li>
            </ul>
          </div>

          {/* Sitemap Quick Links: Dịch vụ & Chính sách */}
          <div className="lg:col-span-2">
            <h4 className="font-headline-sm text-headline-sm text-wetland-cream mb-4">
              {currentLang === 'vi' ? 'Dịch Vụ' : 'Services'}
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <Link
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150 font-medium"
                  to="/dat-phong"
                >
                  {currentLang === 'vi' ? '🏨 Đặt phòng trực tuyến' : '🏨 Online Room Booking'}
                </Link>
              </li>
              <li>
                <Link
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150 font-medium"
                  to="/bang-gia-khuyen-mai"
                >
                  {currentLang === 'vi' ? '🏷️ Bảng giá & Ưu đãi' : '🏷️ Rates & Promotions'}
                </Link>
              </li>
              <li>
                <Link
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150"
                  to="/gioi-thieu#sustainability"
                >
                  {currentLang === 'vi' ? 'Chính sách bảo tồn' : 'Conservation policy'}
                </Link>
              </li>
              <li>
                <Link
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150"
                  to="/lien-he#direction-guide"
                >
                  {currentLang === 'vi' ? 'Hướng dẫn đường đi QL62' : 'Directions Highway 62'}
                </Link>
              </li>
              <li>
                <a
                  className="text-surface-variant/80 hover:text-alluvial-earth transition-colors duration-150"
                  href="/#pricing"
                >
                  {currentLang === 'vi' ? 'Combo Package' : 'All-in packages'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Hotline Info */}
          <div className="lg:col-span-3">
            <h4 className="font-headline-sm text-headline-sm text-wetland-cream mb-4">
              {currentLang === 'vi' ? 'Liên Hệ Đặt Chỗ' : 'Contact & Booking'}
            </h4>
            <div className="space-y-3 font-body-sm text-body-sm text-surface-variant/80">
              <p>
                <strong className="text-wetland-cream">
                  {currentLang === 'vi' ? 'Địa chỉ:' : 'Address:'}
                </strong>{' '}
                QL62, Xã Tân Lập, Huyện Mộc Hóa, Long An
              </p>
              <p>
                <strong className="text-wetland-cream">
                  {currentLang === 'vi' ? 'Tổng đài đặt vé:' : 'Tickets:'}
                </strong>{' '}
                <a href="tel:02723968133" className="hover:text-wetland-cream transition-colors">
                  0272 3968 133
                </a>
              </p>
              <p>
                <strong className="text-wetland-cream">
                  {currentLang === 'vi' ? 'Hotline đặt phòng:' : 'Hotel:'}
                </strong>{' '}
                <a href="tel:0966893943" className="hover:text-wetland-cream transition-colors">
                  0966 893 943
                </a>
              </p>
              <p>
                <strong className="text-wetland-cream">Email:</strong> sales@langnoitanlap.com.vn
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-label-sm text-surface-variant/70">
          <div>
            © 2024 Khu Du Lịch Sinh Thái Làng Nổi Tân Lập. Bảo lưu mọi quyền.
          </div>
          <div className="flex gap-6">
            <a className="hover:text-wetland-cream transition-colors" href="#">
              {currentLang === 'vi' ? 'Điều khoản sử dụng' : 'Terms of Use'}
            </a>
            <a className="hover:text-wetland-cream transition-colors" href="#">
              {currentLang === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy'}
            </a>
            <a className="hover:text-wetland-cream transition-colors" href="#">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
