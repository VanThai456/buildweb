export default function TravelGuide({ currentLang }) {
  return (
    <section className="py-24 bg-tranquil-sand border-t border-melaleuca-canopy/10" id="guide">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Transportation info */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-forest-moss font-label-lg text-label-lg uppercase tracking-wider mb-2">
              <span className="w-6 h-0.5 bg-forest-moss"></span>
              {currentLang === 'vi' ? 'Cẩm nang đường đi' : 'Travel Route Guide'}
            </div>
            <h2 className="font-headline-lg text-headline-lg text-melaleuca-canopy mb-6">
              {currentLang === 'vi'
                ? 'Hướng Dẫn Di Chuyển Đến Làng Nổi Tân Lập'
                : 'How to Reach Tan Lap Floating Village'}
            </h2>

            <div className="space-y-6 mb-8">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-melaleuca-canopy text-wetland-cream flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">pin_drop</span>
                </div>
                <div>
                  <h4 className="font-subhead-lg text-subhead-lg font-semibold text-melaleuca-canopy">
                    {currentLang === 'vi' ? 'Vị Trí Địa Lý' : 'Geographic Location'}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {currentLang === 'vi'
                      ? 'Quốc lộ 62, Xã Tân Lập, Huyện Mộc Hóa, Tỉnh Long An (cách TP. Tân An 60km, cách TP. Hồ Chí Minh khoảng 100km).'
                      : 'Highway 62, Tan Lap Commune, Moc Hoa District, Long An Province (60km from Tan An, ~100km from HCMC).'}
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-melaleuca-canopy text-wetland-cream flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">directions_car</span>
                </div>
                <div>
                  <h4 className="font-subhead-lg text-subhead-lg font-semibold text-melaleuca-canopy">
                    {currentLang === 'vi' ? 'Lộ Trình Xe Ô Tô / Xe Máy (2 Giờ)' : 'Car & Motorbike Route (2 Hours)'}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {currentLang === 'vi'
                      ? 'Từ TP.HCM đi theo Cao tốc TP.HCM - Trung Lương rẽ ra nút giao Tân An, sau đó chạy thẳng Quốc lộ 62 khoảng 60km là đến cổng khu du lịch.'
                      : 'From HCMC via HCMC - Trung Luong Expressway to Tan An exit, then direct along National Highway 62 for 60km to the entrance.'}
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-melaleuca-canopy text-wetland-cream flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">wb_sunny</span>
                </div>
                <div>
                  <h4 className="font-subhead-lg text-subhead-lg font-semibold text-melaleuca-canopy">
                    {currentLang === 'vi' ? 'Mẹo Du Lịch Mùa Nước Nổi' : 'Best Visiting Season'}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {currentLang === 'vi'
                      ? 'Tháng 9 đến tháng 12 là thời gian đẹp nhất trong năm, khi nước dâng tràn đồng, rừng tràm xanh biếc mướt mát và hoa súng nở rộ khắp các đầm lầy.'
                      : 'September to December brings the magical high-water season when wetlands turn vibrant emerald green and water lilies bloom endlessly.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-melaleuca-canopy text-wetland-cream font-label-lg text-label-lg hover:bg-forest-moss transition-colors shadow-sm"
                href="https://maps.google.com/?q=Khu+Du+Lich+Sinh+Thai+Lang+Noi+Tan+Lap"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined">map</span>
                <span>{currentLang === 'vi' ? 'Chỉ đường trên Google Maps' : 'Get Directions on Google Maps'}</span>
              </a>
            </div>
          </div>

          {/* Right: Map visual placeholder with data-location */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-melaleuca-canopy/10 shadow-lg relative bg-surface-container-lowest">
              <img
                className="w-full h-[440px] object-cover"
                src="/images/map-route.jpg"
                onError={(e) => {
                  e.target.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBT5NrOnT_DW7FuHuavV7ocyu8KqpAnVZuYNa2dYUXnlDQLbjKj4_UGhvb20rCGR11ZbTi0CYYS1sz0q5eYtCMpKSUoeNwmv2RDRep-jbnvSZne8nY-513nz08yojX8-fMAwGph6OHmD_Fv1rAklPRq8-z6IhtAVvl1nU8vnKLrr--G4WAxBnUUppakNUxUSliXpFxw0ZQ00usDL2kWkdLkTbUDz-1Jj88ZBbABQMO135Fethe1TdkRWw=s0';
                }}
                alt="Illustrated Map Route to Tan Lap"
              />
              <div className="absolute top-4 right-4 p-4 rounded-xl bg-wetland-cream/95 backdrop-blur-md shadow-md border border-melaleuca-canopy/10">
                <div className="font-subhead-md text-subhead-md font-bold text-melaleuca-canopy">
                  Khu Du Lịch Sinh Thái Tân Lập
                </div>
                <div className="text-label-sm text-forest-moss font-semibold">
                  {currentLang === 'vi' ? 'Mở cửa: 07:30 - 17:30 Hàng ngày' : 'Open: 07:30 - 17:30 Daily'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
