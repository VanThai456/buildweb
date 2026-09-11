import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage({ currentLang = "vi", onOpenBooking }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "day_tour",
    message: "",
    agreement: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title =
      currentLang === "vi"
        ? "Liên Hệ & Hướng Dẫn Đường Đi - Làng Nổi Tân Lập Eco Sanctuary"
        : "Contact & Route Directions | Tan Lap Floating Village Eco Sanctuary";
  }, [currentLang]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking({
        title:
          formData.serviceType === "day_tour"
            ? (currentLang === "vi" ? "Tour tham quan trong ngày & Xuồng chèo" : "Day Tour & Sampan Experience")
            : formData.serviceType === "resort_stay"
            ? (currentLang === "vi" ? "Nghỉ dưỡng phòng khách sạn & Villa" : "Resort Room & Heritage Villa")
            : formData.serviceType === "gala_teambuilding"
            ? (currentLang === "vi" ? "Tiệc gala / Hoạt động Team building" : "Corporate Gala & Team Building")
            : (currentLang === "vi" ? "Liên Hệ Tư Vấn Dịch Vụ" : "Consultation Inquiry"),
        fullName: formData.fullName,
        phone: formData.phone,
        notes: formData.message,
      });
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setTimeout(() => setNewsletterSubmitted(false), 4000);
      setNewsletterEmail("");
    }
  };

  return (
    <main className="w-full bg-background text-on-surface font-body-md text-body-md antialiased selection:bg-[#555555] selection:text-white">
      {/* =========================================================================
          1. HERO BANNER SECTION (Editorial Heritage Scrim, Zero Video Button)
          (Matching Stitch Screen 5af7ed7730494d0f87dfa30446708407)
      ========================================================================= */}
      <section className="relative w-full h-[460px] md:h-[540px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8NPs_f3lX-eoeitZ55g6inFjC76a7KYom2dVXYlDpDlPjpdr3XjkdciIZhEFm4LK6wJkROWLIsj0iSOm2M0U4_ZIYJHFdit6OaDdU2c4fgglsuPYVdvxAEjDKr2K2TycOyMvYm4htV8PMHjpho6SVjG0vQ4d_gpJNJfa_macwG-km0qC68pEWcRCNEvPEQFpuHFCwIEf2LebwtPP-IN1Gyb4gTsxetwbivguLR1NuODBT_-HggcGhYQ')`,
          }}
        />

        {/* Architectural Monograph Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />

        {/* Architectural border inner frame accent */}
        <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-on-primary">
          <span className="inline-block text-eyebrow-serif font-eyebrow-serif text-[#e6e6ac] tracking-[0.22em] uppercase mb-3">
            {currentLang === "vi" ? "Thông Tin Liên Lạc & Vị Trí Địa Lý" : "Contact & Geographic Location"}
          </span>
          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-display-hero uppercase tracking-[0.12em] font-normal leading-tight text-white mb-4">
            {currentLang === "vi" ? "KẾT NỐI VỚI CHÚNG TÔI" : "CONNECT WITH US"}
          </h1>
          <div className="w-16 h-[1px] bg-[#e6e6ac]/60 mx-auto mb-5" />
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
            {currentLang === "vi"
              ? "Cánh cửa mở ra hành trình khám phá di sản vùng ngập nước Đồng Tháp Mười nguyên bản, thanh bình và biệt lập."
              : "The gateway opening to your journey into the pristine, tranquil and secluded Dong Thap Muoi wetland heritage."}
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. DIRECT CONTACT & MANAGEMENT DIRECTORY (Bento Grid)
          (Matching Stitch Screen 5af7ed7730494d0f87dfa30446708407)
      ========================================================================= */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-label-meta font-label-meta text-primary tracking-[0.2em] uppercase font-semibold block mb-2">
            {currentLang === "vi" ? "Ban Quản Lý Khu Bảo Tồn" : "Sanctuary Management Board"}
          </span>
          <h2 className="font-headline-xl text-headline-xl md:text-4xl font-normal text-on-surface tracking-[0.04em]">
            {currentLang === "vi" ? "Thông Tin Liên Hệ Trực Tiếp" : "Direct Contact Directory"}
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md mt-3">
            {currentLang === "vi"
              ? "Đội ngũ quản lý và hướng dẫn viên luôn sẵn lòng hỗ trợ quý khách trên từng bước chân tìm về cội nguồn thiên nhiên."
              : "Our sanctuary management and guides are always delighted to assist your return to the roots of mother nature."}
          </p>
        </div>

        {/* Bento Cards Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Địa Chỉ */}
          <div className="bg-surface-container-low border border-outline-variant/40 p-8 flex flex-col justify-between hover:border-primary/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[26px]">location_on</span>
              </div>
              <span className="text-label-meta font-label-meta text-primary uppercase tracking-[0.15em] font-semibold block mb-2">
                {currentLang === "vi" ? "Vị Trí Chính Thức" : "Official Location"}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                {currentLang === "vi" ? "Tọa Độ Di Sản" : "Heritage Coordinates"}
              </h3>
              <p className="text-on-surface-variant text-body-md leading-relaxed">
                {currentLang === "vi"
                  ? "Quốc lộ 62, Xã Tân Lập, Huyện Mộc Hóa, Tỉnh Long An."
                  : "National Route 62, Tan Lap Commune, Moc Hoa District, Long An Province."}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-outline-variant/30 text-body-sm font-body-sm text-tertiary">
              {currentLang === "vi"
                ? "Cách TP.HCM ~100km (khoảng 2 giờ lái xe qua cao tốc)."
                : "~100km from HCMC (approx. 2 hours drive via expressway)."}
            </div>
          </div>

          {/* Card 2: Hotline */}
          <div className="bg-surface-container-low border border-outline-variant/40 p-8 flex flex-col justify-between hover:border-primary/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[26px]">call</span>
              </div>
              <span className="text-label-meta font-label-meta text-primary uppercase tracking-[0.15em] font-semibold block mb-2">
                {currentLang === "vi" ? "Đường Dây Nóng" : "Dedicated Lines"}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                {currentLang === "vi" ? "Hỗ Trợ Trực Tuyến" : "Online Support"}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] font-label-meta uppercase tracking-wider text-on-surface-variant font-medium">
                    {currentLang === "vi" ? "Vé & Phòng Nghỉ Dưỡng:" : "Tickets & Rooms:"}
                  </p>
                  <a className="text-on-surface font-semibold text-body-lg hover:text-primary transition-colors block" href="tel:02723968133">
                    0272 3968 133
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-label-meta uppercase tracking-wider text-on-surface-variant font-medium">
                    {currentLang === "vi" ? "Tour Đoàn & Sự Kiện:" : "Groups & Events:"}
                  </p>
                  <a className="text-on-surface font-semibold text-body-lg hover:text-primary transition-colors block" href="tel:0966896833">
                    0966 896 833
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-outline-variant/30 text-body-sm font-body-sm text-tertiary">
              {currentLang === "vi" ? "Hỗ trợ tư vấn Zalo & di động 24/7." : "24/7 Phone & Zalo assistance."}
            </div>
          </div>

          {/* Card 3: Thư Điện Tử */}
          <div className="bg-surface-container-low border border-outline-variant/40 p-8 flex flex-col justify-between hover:border-primary/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[26px]">mail</span>
              </div>
              <span className="text-label-meta font-label-meta text-primary uppercase tracking-[0.15em] font-semibold block mb-2">
                {currentLang === "vi" ? "Thư Điện Tử" : "Electronic Mail"}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                {currentLang === "vi" ? "Hộp Thư Tiếp Nhận" : "Official Inboxes"}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] font-label-meta uppercase tracking-wider text-on-surface-variant font-medium">
                    {currentLang === "vi" ? "Đặt Dịch Vụ:" : "Reservations:"}
                  </p>
                  <a className="text-primary hover:underline block break-all text-body-sm font-medium" href="mailto:booking@langnoitanlap.com.vn">
                    booking@langnoitanlap.com.vn
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-label-meta uppercase tracking-wider text-on-surface-variant font-medium">
                    {currentLang === "vi" ? "Ban Quản Lý & Đối Tác:" : "Corporate Partnerships:"}
                  </p>
                  <a className="text-primary hover:underline block break-all text-body-sm font-medium" href="mailto:info@langnoitanlap.com">
                    info@langnoitanlap.com
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-outline-variant/30 text-body-sm font-body-sm text-tertiary">
              {currentLang === "vi" ? "Phản hồi văn bản trong vòng 4 giờ làm việc." : "Written reply within 4 business hours."}
            </div>
          </div>

          {/* Card 4: Giờ Mở Cửa */}
          <div className="bg-surface-container-low border border-outline-variant/40 p-8 flex flex-col justify-between hover:border-primary/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[26px]">schedule</span>
              </div>
              <span className="text-label-meta font-label-meta text-primary uppercase tracking-[0.15em] font-semibold block mb-2">
                {currentLang === "vi" ? "Thời Gian Đón Khách" : "Operating Hours"}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                {currentLang === "vi" ? "Khung Giờ Phục Vụ" : "Visiting Hours"}
              </h3>
              <div className="space-y-2">
                <p className="text-on-surface text-body-md font-medium">07:30 – 17:30</p>
                <p className="text-on-surface-variant text-body-sm">
                  {currentLang === "vi"
                    ? "Áp dụng tất cả các ngày trong tuần (kể cả Lễ, Tết)."
                    : "Seven days a week, including weekends & public holidays."}
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-outline-variant/30 text-body-sm font-body-sm text-primary font-medium">
              {currentLang === "vi" ? "Khu nghỉ dưỡng & Villa: Lễ tân 24/7." : "Resort & Villas: 24/7 Reception."}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. INQUIRY FORM & EDITORIAL SPLIT BLOCK
          (Matching Stitch Screen 5af7ed7730494d0f87dfa30446708407)
      ========================================================================= */}
      <section className="bg-surface-container-low border-y border-outline-variant/30 py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Narrative (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-label-meta font-label-meta text-primary tracking-[0.2em] uppercase font-semibold block mb-3">
                {currentLang === "vi" ? "Tư Vấn Tận Tâm" : "Personalized Guidance"}
              </span>
              <h2 className="font-headline-xl text-headline-xl font-normal text-on-surface tracking-[0.04em] leading-tight mb-6">
                {currentLang === "vi"
                  ? "Gửi Lời Nhắn Đến Ban Quản Lý Khu Bảo Tồn"
                  : "Send an Inquiry to the Eco Reserve Team"}
              </h2>
              <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed mb-8">
                {currentLang === "vi"
                  ? "Dù quý khách đang chuẩn bị cho chuyến tản bộ cầu chữ X xuyên rừng tràm, kỳ nghỉ an dưỡng cuối tuần cùng gia đình, hay sự kiện hội nghị gắn kết doanh nghiệp, chúng tôi luôn trân trọng từng yêu cầu cá nhân hóa."
                  : "Whether planning an elevated boardwalk stroll, a rejuvenating family weekend, or a corporate retreat, our team is committed to crafting your ideal experience."}
              </p>
              <div className="bg-surface border-l-2 border-primary p-6 space-y-3 mb-8">
                <p className="italic font-headline-md text-on-surface text-body-lg">
                  {currentLang === "vi"
                    ? '"Đồng Tháp Mười đẹp nhất bông sen – Tân Lập đẹp nhất khi lòng người chạm vào khoảng lặng của thiên nhiên hoang sơ."'
                    : '"Dong Thap Muoi is renowned for its blooming lotus — and Tan Lap is at its most beautiful when guests embrace the quietude of pristine wetlands."'}
                </p>
                <span className="text-label-meta font-label-meta tracking-widest uppercase text-tertiary block">
                  {currentLang === "vi" ? "— Ban Điều Hành Làng Nổi Tân Lập" : "— Tan Lap Sanctuary Directorate"}
                </span>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-outline-variant/40">
              <div>
                <span className="text-headline-lg font-headline-lg text-primary block mb-1">100%</span>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  {currentLang === "vi" ? "Không gian sinh thái được bảo tồn nguyên vẹn" : "Pristine preserved wetland habitat"}
                </p>
              </div>
              <div>
                <span className="text-headline-lg font-headline-lg text-primary block mb-1">135ha</span>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  {currentLang === "vi" ? "Rừng tràm cổ thụ xanh ngút ngàn tầm mắt" : "Ancient cajeput canopy as far as the eye can see"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Monolithic Form Box (7 Cols) */}
          <div className="lg:col-span-7 bg-surface p-8 md:p-12 border border-outline-variant/50 shadow-none">
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 font-normal">
              {currentLang === "vi" ? "Đăng Ký Tư Vấn Trực Tuyến" : "Online Inquiry Registration"}
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-8">
              {currentLang === "vi"
                ? "Vui lòng điền thông tin bên dưới. Chuyên viên dịch vụ sẽ liên hệ lại trong vòng 60 phút."
                : "Please fill in the form below. Our concierge will contact you within 60 minutes."}
            </p>

            {submitted ? (
              <div className="p-6 bg-primary/10 border border-primary text-primary mb-6">
                <p className="font-headline-md text-lg font-bold mb-1">
                  {currentLang === "vi" ? "Gửi Yêu Cầu Thành Công!" : "Inquiry Sent Successfully!"}
                </p>
                <p className="text-body-sm font-body-sm">
                  {currentLang === "vi"
                    ? "Cảm ơn Quý khách! Ban Điều Hành Làng Nổi Tân Lập sẽ phản hồi bạn trong thời gian sớm nhất."
                    : "Thank you! Our concierge team will reach out to you shortly."}
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Họ và Tên */}
                <div className="space-y-1.5">
                  <label className="block text-label-meta font-label-meta tracking-[0.15em] uppercase text-on-surface-variant font-semibold" htmlFor="full_name">
                    {currentLang === "vi" ? "Họ và tên *" : "Full Name *"}
                  </label>
                  <input
                    required
                    type="text"
                    id="full_name"
                    name="full_name"
                    placeholder="NGUYỄN VĂN AN"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-0 rounded-none transition-colors uppercase"
                  />
                </div>

                {/* Số điện thoại / Zalo */}
                <div className="space-y-1.5">
                  <label className="block text-label-meta font-label-meta tracking-[0.15em] uppercase text-on-surface-variant font-semibold" htmlFor="phone_number">
                    {currentLang === "vi" ? "Số điện thoại / Zalo *" : "Phone Number / WhatsApp *"}
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    placeholder="0901 234 567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-0 rounded-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-label-meta font-label-meta tracking-[0.15em] uppercase text-on-surface-variant font-semibold" htmlFor="email_address">
                    {currentLang === "vi" ? "Địa chỉ Email" : "Email Address"}
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-0 rounded-none transition-colors"
                  />
                </div>

                {/* Dịch Vụ Quan Tâm */}
                <div className="space-y-1.5">
                  <label className="block text-label-meta font-label-meta tracking-[0.15em] uppercase text-on-surface-variant font-semibold" htmlFor="service_type">
                    {currentLang === "vi" ? "Loại dịch vụ quan tâm *" : "Interested Service *"}
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md text-on-surface focus:border-primary focus:ring-0 rounded-none transition-colors cursor-pointer"
                  >
                    <option value="day_tour">
                      {currentLang === "vi" ? "Tour tham quan trong ngày & Xuồng chèo" : "Day Tour & Sampan Experience"}
                    </option>
                    <option value="resort_stay">
                      {currentLang === "vi" ? "Nghỉ dưỡng phòng khách sạn & Villa" : "Resort Room & Heritage Villa"}
                    </option>
                    <option value="gala_teambuilding">
                      {currentLang === "vi" ? "Tiệc gala / Hoạt động Team building" : "Corporate Gala & Team Building"}
                    </option>
                    <option value="culinary_table">
                      {currentLang === "vi" ? "Đặt bàn ẩm thực đặc sản miền Tây" : "Mekong Specialty Dining"}
                    </option>
                    <option value="photography">
                      {currentLang === "vi" ? "Thuê bối cảnh quay phim & Nhiếp ảnh" : "Media, Film & Photography Booking"}
                    </option>
                  </select>
                </div>
              </div>

              {/* Nội dung tin nhắn */}
              <div className="space-y-1.5">
                <label className="block text-label-meta font-label-meta tracking-[0.15em] uppercase text-on-surface-variant font-semibold" htmlFor="message_content">
                  {currentLang === "vi"
                    ? "Nội dung ghi chú hoặc yêu cầu chi tiết"
                    : "Detailed Notes or Specific Requests"}
                </label>
                <textarea
                  rows={4}
                  id="message_content"
                  name="message_content"
                  placeholder={
                    currentLang === "vi"
                      ? "Số lượng khách dự kiến, ngày khởi hành hoặc nhu cầu thực đơn riêng..."
                      : "Expected guest count, estimated date, or dietary preferences..."
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-outline-variant p-4 text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-0 rounded-none transition-colors resize-none"
                />
              </div>

              {/* Checkbox Đồng Ý */}
              <div className="flex items-start gap-3">
                <input
                  required
                  id="agreement"
                  name="agreement"
                  type="checkbox"
                  checked={formData.agreement}
                  onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded-none text-primary border-outline-variant focus:ring-0 cursor-pointer"
                />
                <label htmlFor="agreement" className="text-body-sm font-body-sm text-on-surface-variant cursor-pointer">
                  {currentLang === "vi"
                    ? "Tôi đồng ý cung cấp thông tin để Ban Quản Lý Làng Nổi Tân Lập liên hệ giải đáp và tư vấn lộ trình phù hợp."
                    : "I agree to share contact info for Tan Lap Sanctuary team to reach out with personalized guidance."}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-[#48692c] text-on-primary py-4 px-8 text-label-cta font-label-cta tracking-[0.18em] uppercase transition-colors duration-200 font-bold cursor-pointer"
              >
                {currentLang === "vi" ? "GỬI YÊU CẦU TƯ VẤN NGAY" : "SUBMIT CONSULTATION REQUEST"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TRAVEL DIRECTIONS & SATELLITE MAP (From TP.HCM)
          (Matching Stitch Screen 5af7ed7730494d0f87dfa30446708407)
      ========================================================================= */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <span className="text-label-meta font-label-meta text-primary tracking-[0.2em] uppercase font-semibold block mb-2">
            {currentLang === "vi" ? "Hành Trình Di Chuyển" : "Travel Directions"}
          </span>
          <h2 className="font-headline-xl text-headline-xl font-normal text-on-surface tracking-[0.04em]">
            {currentLang === "vi" ? "Hướng Dẫn Đường Đi Từ TP. Hồ Chí Minh" : "Scenic Routes from Ho Chi Minh City"}
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md mt-3">
            {currentLang === "vi"
              ? "Khoảng cách chừng 100km với đường sá nhựa hoàn thiện, thông thoáng, rất thuận lợi cho cả ô tô gia đình lẫn xe phượt ngắm cảnh Đồng bằng sông Cửu Long."
              : "Approximately 100km of smooth, paved highway and national roads, ideal for family cars, tour buses, and scenic motorcycle riders."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Route Protocols (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Tuyến 1 */}
            <div className="bg-surface-container-low border border-outline-variant/40 p-8 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary text-on-primary flex items-center justify-center font-bold text-label-meta">
                  01
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {currentLang === "vi" ? "Tuyến Ô Tô & Xe Khách Du Lịch" : "Automobile & Tourist Coach Route"}
                </h3>
              </div>
              <div className="text-label-meta font-label-meta text-tertiary uppercase tracking-wider mb-3">
                {currentLang === "vi" ? "Lộ trình nhanh nhất: ~2 giờ (95 km)" : "Fastest Route: ~2 hours (95 km)"}
              </div>
              <ol className="space-y-3 text-body-md text-on-surface-variant list-decimal list-inside leading-relaxed">
                <li className="pl-1">
                  {currentLang === "vi" ? (
                    <>
                      Xuất phát từ trung tâm TP.HCM vào <strong className="text-on-surface">Cao tốc TP.HCM – Trung Lương</strong>.
                    </>
                  ) : (
                    <>Depart HCMC via the <strong className="text-on-surface">HCMC - Trung Luong Expressway</strong>.</>
                  )}
                </li>
                <li className="pl-1">
                  {currentLang === "vi" ? (
                    <>
                      Đi qua trạm thu phí Tân An, rẽ phải vào nút giao <strong className="text-on-surface">Quốc lộ 62</strong> theo hướng Thị xã Kiến Tường / Mộc Hóa.
                    </>
                  ) : (
                    <>Exit at Tan An toll plaza, turn right onto <strong className="text-on-surface">National Route 62</strong> toward Moc Hoa.</>
                  )}
                </li>
                <li className="pl-1">
                  {currentLang === "vi" ? (
                    <>
                      Chạy thẳng liên tục dọc theo QL62 khoảng <strong className="text-on-surface">60km</strong>.
                    </>
                  ) : (
                    <>Drive straight along Route 62 for approximately <strong className="text-on-surface">60km</strong>.</>
                  )}
                </li>
                <li className="pl-1">
                  {currentLang === "vi" ? (
                    <>
                      Cổng chào Khu du lịch Làng Nổi Tân Lập nằm ngay bên phía tay trái tuyến đường, có bãi đậu xe rộng lớn đối diện cổng chính.
                    </>
                  ) : (
                    <>The sanctuary welcome portal appears on your left with spacious parking lots across the main gate.</>
                  )}
                </li>
              </ol>
            </div>

            {/* Tuyến 2 */}
            <div className="bg-surface-container-low border border-outline-variant/40 p-8 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-label-meta">
                  02
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {currentLang === "vi" ? "Tuyến Xe Máy & Phượt Trải Nghiệm" : "Motorcycle & Scenic Explorer Route"}
                </h3>
              </div>
              <div className="text-label-meta font-label-meta text-tertiary uppercase tracking-wider mb-3">
                {currentLang === "vi"
                  ? "Lộ trình danh lam ngắm cảnh: ~2.5 giờ (105 km)"
                  : "Scenic Nature Route: ~2.5 hours (105 km)"}
              </div>
              <ol className="space-y-3 text-body-md text-on-surface-variant list-decimal list-inside leading-relaxed">
                <li className="pl-1">
                  {currentLang === "vi" ? (
                    <>
                      Từ hướng Bình Chánh đi theo trục đường <strong className="text-on-surface">Quốc lộ 1A</strong> hướng về Miền Tây.
                    </>
                  ) : (
                    <>From Binh Chanh, take <strong className="text-on-surface">National Route 1A</strong> toward the Mekong Delta.</>
                  )}
                </li>
                <li className="pl-1">
                  {currentLang === "vi" ? (
                    <>
                      Đi qua Cầu Bến Lức, qua Cầu Tân An để tiến vào trung tâm <strong className="text-on-surface">TP. Tân An (Long An)</strong>.
                    </>
                  ) : (
                    <>Cross Ben Luc & Tan An bridges into the heart of <strong className="text-on-surface">Tan An City</strong>.</>
                  )}
                </li>
                <li className="pl-1">
                  {currentLang === "vi" ? (
                    <>
                      Rẽ phải vào vòng xuyến nối <strong className="text-on-surface">Quốc lộ 62</strong>.
                    </>
                  ) : (
                    <>Turn right at the roundabout connecting <strong className="text-on-surface">National Route 62</strong>.</>
                  )}
                </li>
                <li className="pl-1">
                  {currentLang === "vi" ? (
                    <>
                      Tiếp tục chạy thẳng theo biển chỉ dẫn Mộc Hóa - Kiến Tường đến km số 60 là đặt chân tới khu sinh thái.
                    </>
                  ) : (
                    <>Follow directional signs toward Moc Hoa / Kien Tuong until Km 60 to arrive at Tan Lap.</>
                  )}
                </li>
              </ol>
            </div>

            {/* Fast Route Tips */}
            <div className="bg-surface border border-outline-variant/60 p-5 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-[28px] shrink-0">assistant_direction</span>
              <div className="text-body-sm font-body-sm text-on-surface leading-relaxed">
                <strong className="font-semibold text-primary">
                  {currentLang === "vi" ? "Mẹo tìm đường Google Maps:" : "Google Maps Quick Tip:"}
                </strong>{" "}
                {currentLang === "vi" ? (
                  <>
                    Quý khách chỉ cần tìm kiếm từ khóa chính xác:{" "}
                    <span className="italic text-primary font-medium">"Khu Du Lịch Sinh Thái Làng Nổi Tân Lập"</span> để nhận chỉ dẫn rẽ chính xác vào bãi giữ xe.
                  </>
                ) : (
                  <>
                    Simply search for <span className="italic text-primary font-medium">"Tan Lap Floating Village"</span> to get turn-by-turn guidance directly into the parking courtyard.
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Map Mockup (6 Cols) */}
          <div className="lg:col-span-6 bg-surface-container border border-outline-variant/50 flex flex-col justify-between overflow-hidden relative min-h-[500px]">
            {/* Map Canvas Display */}
            <div className="relative w-full h-[400px] lg:h-full bg-surface-dim overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_ILmoFCTITtnpMWOM5nyStpcYr5hiYzEhKSsPt-7TfQSLt1kSQQLRNc0eR20FL4uHraPPssSvBz3q6nj-rNzNuIKxQIkNuKTy_BG5tlDPAjJmXRzCxmAIqZmof7zO-b8-QNs-im7qQKp5T6a4ANqPIqfpY3I-RGlZtCyzRwZzpoJfyHl0VHYW2RbYwpWLHY-8YGiN5kpN-_sghVALVi7u2HnJxhMurK8z6AshKTqm466th2mfI6Q4wQ"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}images/contact/contact-map.jpg`;
                }}
                alt="Topographic cartography and road network to Tan Lap Floating Village"
                className="w-full h-full object-cover grayscale contrast-125 opacity-85"
              />

              {/* Map Overlay Card HUD */}
              <div className="absolute top-6 left-6 right-6 bg-surface/95 backdrop-blur-sm border border-outline-variant/40 p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-label-meta tracking-[0.2em] uppercase text-primary font-bold block">
                    {currentLang === "vi" ? "Tọa Độ GPS Vệ Tinh" : "Satellite GPS Coordinates"}
                  </span>
                  <p className="font-mono text-body-sm font-semibold text-on-surface">10.6558° N, 105.9897° E</p>
                  <p className="text-[12px] text-on-surface-variant">QL62, Tân Lập, Mộc Hóa, Long An</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Lang+Noi+Tan+Lap+Moc+Hoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-[#48692c] text-on-primary px-4 py-2 text-label-meta font-label-meta uppercase tracking-wider flex items-center gap-1.5 transition-colors font-bold"
                >
                  <span>{currentLang === "vi" ? "Xem Map" : "Open Maps"}</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>

              {/* Route Marker Pin Highlight */}
              <div className="absolute bottom-10 right-10 bg-surface border border-outline-variant/50 p-4 shadow-sm max-w-[240px]">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    nature_people
                  </span>
                  <span className="font-headline-md text-[16px] text-on-surface font-semibold">
                    {currentLang === "vi" ? "Cổng Chào Tân Lập" : "Sanctuary Gateway"}
                  </span>
                </div>
                <p className="text-[12px] text-on-surface-variant leading-tight">
                  {currentLang === "vi"
                    ? "Bãi giữ xe tập trung có mái che và trạm kiểm soát an ninh 24/7."
                    : "Covered centralized parking facility with 24/7 security checkpoint."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. QUICK FAQ: PARKING & TRANSIT
          (Matching Stitch Screen 5af7ed7730494d0f87dfa30446708407)
      ========================================================================= */}
      <section className="bg-surface-container-low border-t border-outline-variant/30 py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-label-meta font-label-meta text-primary tracking-[0.2em] uppercase font-semibold block mb-2">
              {currentLang === "vi" ? "Hỏi Đáp Nhanh" : "Transit Amenities"}
            </span>
            <h2 className="font-headline-xl text-headline-xl font-normal text-on-surface tracking-[0.04em]">
              {currentLang === "vi" ? "Bãi Xe & Tiện Ích Di Chuyển" : "Parking & Transport Conveniences"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-outline-variant/40 p-6">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-[32px]">local_parking</span>
              </div>
              <h4 className="font-headline-md text-[18px] font-semibold text-on-surface mb-2">
                {currentLang === "vi" ? "Bãi Đỗ Xe Rộng Rãi" : "Complimentary Parking"}
              </h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {currentLang === "vi"
                  ? "Khuôn viên bãi đỗ hoàn toàn miễn phí cho cả ô tô 4-45 chỗ và xe gắn máy, có mái che râm mát và camera an ninh giám sát suốt ngày đêm."
                  : "Generous parking areas free of charge for 4-45 seater buses and motorcycles, shaded under roof with 24/7 CCTV surveillance."}
              </p>
            </div>

            <div className="bg-surface border border-outline-variant/40 p-6">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-[32px]">ev_station</span>
              </div>
              <h4 className="font-headline-md text-[18px] font-semibold text-on-surface mb-2">
                {currentLang === "vi" ? "Trạm Sạc Xe Điện" : "EV Fast Charging"}
              </h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {currentLang === "vi"
                  ? "Tích hợp trụ sạc nhanh xe điện đạt tiêu chuẩn an toàn cao cấp tại bãi xe trung tâm, phục vụ khách lưu trú và ghé thăm trong ngày."
                  : "Integrated high-speed electric vehicle charging stations installed right at the central courtyard for resort & day visitors."}
              </p>
            </div>

            <div className="bg-surface border border-outline-variant/40 p-6">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-[32px]">directions_boat</span>
              </div>
              <h4 className="font-headline-md text-[18px] font-semibold text-on-surface mb-2">
                {currentLang === "vi" ? "Xe Điện & Thuyền Trung Chuyển" : "Buggy & River Shuttle"}
              </h4>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {currentLang === "vi"
                  ? "Dịch vụ xe điện vận chuyển hành lý miễn phí từ bãi xe vào bến tàu, cùng đội thuyền vỏ lãi đón tiếp du khách sang khuôn viên lõi rừng."
                  : "Free electric buggy luggage transfer from parking to the harbor, coupled with traditional river shuttles to the core forest."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OLIVE GREEN NEWSLETTER SECTION
          (Matching Stitch Screen 5af7ed7730494d0f87dfa30446708407)
      ========================================================================= */}
      <section className="bg-primary text-on-primary py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display-hero text-headline-xl md:text-headline-xl uppercase tracking-[0.1em] font-normal mb-4">
            {currentLang === "vi"
              ? "ĐỪNG BỎ LỠ THÔNG TIN VỀ ƯU ĐÃI MỚI NHẤT"
              : "STAY INFORMED ON OUR SEASONAL PRIVILEGES"}
          </h2>
          <p className="font-body-md text-body-md text-on-primary-container max-w-2xl mx-auto mb-8 font-light">
            {currentLang === "vi"
              ? "Đăng ký để nhận bản tin sinh thái định kỳ, hướng dẫn trải nghiệm mùa nước nổi và các chương trình đặc quyền lưu trú tại Làng Nổi Tân Lập."
              : "Subscribe to receive periodic ecological newsletters, high water season guides, and exclusive retreat privileges."}
          </p>

          {newsletterSubmitted ? (
            <div className="p-6 bg-white/10 border border-white/30 text-white max-w-xl mx-auto">
              <p className="font-medium text-body-sm">
                {currentLang === "vi"
                  ? "✓ Cảm ơn quý khách đã đăng ký nhận bản tin di sản Làng Nổi Tân Lập!"
                  : "✓ Thank you for subscribing to Tan Lap Eco Sanctuary news!"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-0">
              <input
                required
                type="email"
                placeholder={currentLang === "vi" ? "EMAIL CỦA QUÝ KHÁCH" : "YOUR EMAIL ADDRESS"}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-white text-on-surface border-0 px-6 py-4 text-body-md placeholder:text-outline-variant focus:ring-0 rounded-none uppercase tracking-wider"
              />
              <button
                type="submit"
                className="bg-tertiary-fixed text-on-tertiary-fixed font-label-cta text-label-cta px-10 py-4 uppercase tracking-[0.18em] hover:bg-tertiary-fixed-dim transition-colors rounded-none font-bold cursor-pointer"
              >
                {currentLang === "vi" ? "GỬI" : "SUBMIT"}
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="w-4 h-4 bg-white text-primary flex items-center justify-center text-[12px] font-bold">
              ✓
            </span>
            <span className="text-body-sm font-body-sm text-on-primary-container tracking-wider">
              {currentLang === "vi" ? (
                <>
                  CHẤP NHẬN{" "}
                  <a href="#" className="underline underline-offset-4 hover:text-white">
                    QUY ĐỊNH BẢO VỆ MÔI TRƯỜNG & KHU NGHỈ
                  </a>
                  . *
                </>
              ) : (
                <>
                  AGREE TO{" "}
                  <a href="#" className="underline underline-offset-4 hover:text-white">
                    ENVIRONMENTAL & SANCTUARY CODES
                  </a>
                  . *
                </>
              )}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
