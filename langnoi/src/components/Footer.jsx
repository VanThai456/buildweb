import { Link } from 'react-router-dom';

export default function Footer({ currentLang }) {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <footer className="w-full bg-[#1b2b1a] text-white/80 border-t border-gray-100">
      {/* Refined Heritage Resort Sitemap */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Identity */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src={`${baseUrl}images/logo-tanlap-mark.png`}
                alt="Làng Nổi Tân Lập Logo"
                className="w-12 h-12 object-contain p-1 rounded-full bg-[#FAF9F5] shadow-md ring-1 ring-white/30 shrink-0"
              />
              <div>
                <span className="font-serif-luxury text-xl font-semibold tracking-[0.22em] uppercase text-white block leading-none">
                  LÀNG NỔI TÂN LẬP
                </span>
                <span className="font-serif-luxury text-[10px] tracking-[0.26em] uppercase text-olive-muted font-medium">
                  ECO SANCTUARY &amp; RESORT • LONG AN
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-white/70 leading-relaxed max-w-sm mb-6 font-light">
              {currentLang === 'vi'
                ? 'Khu du lịch sinh thái di sản ngập nước đặc trưng vùng Đồng Tháp Mười. Cung đường đan xuyên rừng tràm cổ thụ 5km, ngọn tháp quan sát 38m và trải nghiệm nghỉ dưỡng sang trọng giữa thiên nhiên nguyên bản.'
                : 'Pristine flooded cajeput eco-tourism sanctuary in Dong Thap Muoi. Featuring a 5km ancient forest path, 38m panoramic tower and authentic heritage hospitality.'}
            </p>
            <div className="flex items-center gap-3">
              <a
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-olive-moss text-white flex items-center justify-center transition-colors shadow-xs"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-olive-moss text-white flex items-center justify-center transition-colors shadow-xs"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube text-xs"></i>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-olive-moss text-white flex items-center justify-center transition-colors shadow-xs"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-olive-moss text-white flex items-center justify-center transition-colors shadow-xs"
                href="mailto:reservation@langnoitanlap.com.vn"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope text-xs"></i>
              </a>
            </div>
          </div>

          {/* Sitemap Column 1 */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-serif-luxury text-lg tracking-[0.14em] uppercase text-white mb-4">
              {currentLang === 'vi' ? 'Khám Phá' : 'Discover'}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/70">
              <li>
                <Link className="hover:text-olive-muted transition-colors" to="/gioi-thieu">
                  {currentLang === 'vi' ? 'Giới thiệu & Sứ mệnh' : 'About & Mission'}
                </Link>
              </li>
              <li>
                <Link className="hover:text-olive-muted transition-colors" to="/tham-quan">
                  {currentLang === 'vi' ? 'Tham quan & Trải nghiệm' : 'Tours & Experiences'}
                </Link>
              </li>
              <li>
                <Link className="hover:text-olive-muted transition-colors" to="/khach-san-am-thuc">
                  {currentLang === 'vi' ? 'Khách sạn & Ẩm thực' : 'Resort & Dining'}
                </Link>
              </li>
              <li>
                <Link className="hover:text-olive-muted transition-colors" to="/bang-gia-khuyen-mai">
                  {currentLang === 'vi' ? 'Bảng giá dịch vụ & Ưu đãi' : 'Rates & Promotions'}
                </Link>
              </li>
              <li>
                <Link className="hover:text-olive-muted transition-colors" to="/cam-nang">
                  {currentLang === 'vi' ? 'Cẩm nang du lịch & Kinh nghiệm' : 'Field Guide & Notes'}
                </Link>
              </li>
              <li>
                <Link className="hover:text-olive-muted transition-colors" to="/lien-he">
                  {currentLang === 'vi' ? 'Liên hệ & Chỉ đường' : 'Contact & Directions'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap Column 2 */}
          <div className="lg:col-span-4 text-left">
            <h4 className="font-serif-luxury text-lg tracking-[0.14em] uppercase text-white mb-4">
              {currentLang === 'vi' ? 'Liên Hệ Đặt Chỗ' : 'Reservations'}
            </h4>
            <div className="space-y-2.5 font-sans text-xs text-white/70">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-olive-muted shrink-0 mt-0.5">location_on</span>
                <span>Quốc Lộ 62, Xã Tân Lập, Huyện Mộc Hóa, Tỉnh Long An</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-olive-muted shrink-0">call</span>
                <a href="tel:02723968133" className="hover:text-olive-muted transition-colors">
                  0272 3968 133
                </a>
                <span>/</span>
                <a href="tel:0966893943" className="hover:text-olive-muted transition-colors">
                  0966 893 943
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-olive-muted shrink-0">mail</span>
                <a href="mailto:reservation@langnoitanlap.com.vn" className="hover:text-olive-muted transition-colors">
                  reservation@langnoitanlap.com.vn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 7. FOOTER BOTTOM BAR (Exact Stitch Ana Mandara Style) ================= */}
      <div className="w-full bg-olive-moss py-5 px-6 text-center text-white text-xs font-light tracking-widest">
        <p className="opacity-90">
          © Bản quyền thuộc sở hữu của Làng Nổi Tân Lập Resort &amp; Spa 2026
        </p>
      </div>
    </footer>
  );
}
