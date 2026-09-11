import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookingPage({ currentLang = 'vi' }) {
  // Active Tab: 'hotel', 'tour', 'dining'
  const [activeTab, setActiveTab] = useState('hotel');

  // Dates & Guests
  const [checkInDate, setCheckInDate] = useState('2026-11-18');
  const [checkOutDate, setCheckOutDate] = useState('2026-11-20');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Selected Option
  const [selectedOptionId, setSelectedOptionId] = useState('room-balcony');

  // Selected Addons
  const [selectedAddons, setSelectedAddons] = useState({});

  // Promo Code
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  // Contact Info
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  // Modal / Success State
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [confirmedBookingCode, setConfirmedBookingCode] = useState('');

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title =
      currentLang === 'vi'
        ? 'Đặt Phòng & Đặt Tour Trực Tuyến - Phong Cách Di Sản Làng Nổi Tân Lập'
        : 'Online Reservation | Tan Lap Floating Village Eco Sanctuary';
  }, [currentLang]);

  // Options by Tab
  const hotelOptions = [
    {
      id: 'room-balcony',
      title: currentLang === 'vi' ? 'Phòng Đôi Ban Công View Rừng Tràm' : 'Double Room — Balcony Cajeput Forest View',
      desc: currentLang === 'vi'
        ? 'Diện tích 38m² • Ban công gỗ ngắm trọn kênh rêu • Giường King size cao cấp • Bồn tắm gỗ tràm'
        : '38m² • Private timber balcony facing mossy canals • Luxury King bed • Handcrafted cajeput tub',
      price: 1450000,
      priceLabel: currentLang === 'vi' ? '1.450.000 VNĐ' : '1,450,000 VNĐ',
      priceUnit: currentLang === 'vi' ? '/ đêm / 2 khách' : '/ night / 2 guests',
      badges: currentLang === 'vi'
        ? ['Ăn sáng buffet', 'Miễn phí thuyền đón', 'Trà sen chào đón']
        : ['Buffet Breakfast', 'Complimentary Boat', 'Welcome Lotus Tea'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb0RRNxVLBdVCrFUjtdtWL9-V_Wefhs_vmEWhK3vCdPoWjm_QGtEjJyq-9tBwnvzK4wfKWEgY1yaHO4Mt9NMZ52qS7I9_MEcoJO_l2YkN9U3u5_lW8OoLllzrzvHq-4ouKQsuM19VETbsAFdpecSKcAroJmjK-SxahfAGmJa4IFmFewXTkWuVQN7q8ClGNgOMixLHiSmHenCLiClVdsilJdDoy_8sdM8N_nhuLNALPmzCbDXVD2dz8LA',
      fallbackImage: `${import.meta.env.BASE_URL}images/resort/room-double-garden.jpg`,
    },
    {
      id: 'room-highfloor',
      title: currentLang === 'vi' ? 'Phòng Đôi Tầng Cao Toàn Cảnh' : 'High-Floor Double Room — Wetland Panorama',
      desc: currentLang === 'vi'
        ? 'Diện tích 32m² • Tầng 4 view ngắm trọn tháp quan sát & bình minh miền ngập nước • Giường Queen'
        : '32m² • Level 4 panoramic view of observation tower & wetland dawn • Queen bed',
      price: 1250000,
      priceLabel: currentLang === 'vi' ? '1.250.000 VNĐ' : '1,250,000 VNĐ',
      priceUnit: currentLang === 'vi' ? '/ đêm / 2 khách' : '/ night / 2 guests',
      badges: currentLang === 'vi'
        ? ['Ăn sáng tự chọn', 'Nước suối khoáng 2 chai/ngày']
        : ['Daily Breakfast', '2 Complimentary Mineral Waters'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC3ENjerU_pmwaKlPyum_PF44acjv-ovHTnDNqOHCGS-i0ZNDn4ZxX1xO9zMXVsJYK0b6kmBz-4mnuKfVyAE2e5apU4dvm8GlS0ASmBU2T_R9zGJ_ofEl4I2XGlo5b9PdUl86XPZHQnQO5mhw9-7CjhElxpvT9Y1-eUN-8h-JNHBpVnM7gmpDyVePJ3xw8MDtaJsn-vAWxpwvMJQ5JjuQLyNvqS4xT_jz4eAD16vlW3n0lv1R6NebauQ',
      fallbackImage: `${import.meta.env.BASE_URL}images/resort/room-double-highfloor.jpg`,
    },
    {
      id: 'room-family',
      title: currentLang === 'vi' ? 'Phòng Gia Đình Triple Eco Suite' : 'Triple Family Eco Suite',
      desc: currentLang === 'vi'
        ? 'Diện tích 52m² • Phù hợp 3 - 4 người lớn • 01 giường lớn & 02 giường đơn • Không gian sinh hoạt rộng'
        : '52m² • Up to 3-4 guests • 1 King & 2 Single beds • Generous family living area',
      price: 1980000,
      priceLabel: currentLang === 'vi' ? '1.980.000 VNĐ' : '1,980,000 VNĐ',
      priceUnit: currentLang === 'vi' ? '/ đêm / gia đình' : '/ night / family',
      badges: currentLang === 'vi'
        ? ['Ăn sáng cả gia đình', 'Tặng 01 lượt thuyền chèo']
        : ['Full Family Breakfast', 'Complimentary Sampan Ride'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6MUWdHQW2xNLpj7KetCd6AkrvdiJlg0qTQrpaXPfSJSRZ6xN08g8IgujEk_YhR4VxvusKnA0b-VkpD5bzrmLi9xlfDk_RjfYr3AgSgKJFMycxnTsZQS48XNyjk_wCtZ0w3INH7AXJnu5Hwx4cbE8O6RXDsC5Zw-nH59g99M3KPGgzjdxfxj2eCb1jcvNdu8sn71ReMQv5RlDGnTAseEN_C-kSPUiCwpgoLxOVNqm_Db60brHQ7jjhkg',
      fallbackImage: `${import.meta.env.BASE_URL}images/resort/room-family-triple.jpg`,
    },
  ];

  const tourOptions = [
    {
      id: 'tour-xudong',
      title: currentLang === 'vi' ? 'Tour Chèo Xuồng Ba Lá Xuyên Kênh Tràm' : 'Handcrafted Sampan Tour Through Cajeput Canals',
      desc: currentLang === 'vi'
        ? 'Thời lượng 45 phút • Áo phao bảo hộ • Hướng dẫn viên chèo tay • Tặng nón lá truyền thống'
        : '45-minute duration • Life vest safety gear • Native boatman • Complimentary conical hat',
      price: 120000,
      priceLabel: currentLang === 'vi' ? '120.000 VNĐ' : '120,000 VNĐ',
      priceUnit: currentLang === 'vi' ? '/ vé / khách' : '/ ticket / guest',
      badges: currentLang === 'vi'
        ? ['Áo phao an toàn', 'Tặng nón lá', 'Chèo tay êm ái']
        : ['Safety Vest', 'Conical Hat', 'Silent Gliding'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlJQrNQpKPgS-PeHRFolJII2ZXSQn2m6mObUPGDWHg1rfyfXSphf1Pn6lImlSLxYOf0R5hxpxuCt1-JOsIs9F082NqHjxaRMZyqS5ecD2Es4J1rpWFxo5eI4WUFkIgJkq2sgGk1qb0t6w7G490JD1cIQ8T8vLU9FW1zRVZQ7LyMptru4TaKcdTzNkMAVZaJYVKzVQTRVQoBvKbGAczdyntzB5XF3XZuJkr3ScWERgX-PnuzmOBeFwBqA',
      fallbackImage: `${import.meta.env.BASE_URL}images/cheo-xuong.jpg`,
    },
    {
      id: 'tour-capkeo',
      title: currentLang === 'vi' ? 'Tour Thuyền Cáp Kéo Điện Toàn Cảnh (3km)' : 'Electric Cable Cruise Scenic Tour (3km)',
      desc: currentLang === 'vi'
        ? 'Bao gồm vé vào cổng • Lộ trình xuyên tâm rừng tràm • Ngắm tháp canh và hồ súng nở'
        : 'Includes entrance pass • Deep forest route • Observation tower & blooming lily views',
      price: 180000,
      priceLabel: currentLang === 'vi' ? '180.000 VNĐ' : '180,000 VNĐ',
      priceUnit: currentLang === 'vi' ? '/ vé / khách' : '/ ticket / guest',
      badges: currentLang === 'vi'
        ? ['Bao gồm vé cổng', 'Thuyền ngầm êm ái', 'Hướng dẫn viên']
        : ['Admission Included', 'Silent Electric', 'Guide Included'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZLmNeCxWUUiMqe0S9R-abkTSlOB4I9PRrFOClDB1k8_hFfEljPS9laxggycPHJmRQrhhADSX_bG329lIEU6ZFdGV3nagBw_qnerrY9Deidc8Hf9yneLxyK3mgfdYGMDVu-A1yEL1vjNqY3HgeuVhxTpG25LcQXjJFCcNiVYiVbzNvHDi7pAga-2v0h2jqDByjTil_AmqdkW3DROJz2c2o0LCD8NhKsp3t6ZmFG4kkqTwQyVCu4nZQg',
      fallbackImage: `${import.meta.env.BASE_URL}images/thuyen-cap.jpg`,
    },
  ];

  const diningOptions = [
    {
      id: 'dining-dongthap',
      title: currentLang === 'vi' ? 'Set Tiệc Đồng Quê: Cá Lóc Nướng Trui & Lẩu Mắm' : 'Countryside Heritage Feast: Grilled Fish & Hotpot',
      desc: currentLang === 'vi'
        ? 'Dành cho bàn 2 - 4 khách • 06 món đặc sản miệt vườn kèm rau rừng • Nước lá vối thanh mát'
        : 'For tables of 2 - 4 guests • 6 regional dishes with fresh wild herbs • Refreshing herbal tea',
      price: 450000,
      priceLabel: currentLang === 'vi' ? '450.000 VNĐ' : '450,000 VNĐ',
      priceUnit: currentLang === 'vi' ? '/ khách' : '/ guest',
      badges: currentLang === 'vi'
        ? ['Bàn ven rạch thoáng mát', 'Nguyên liệu tươi trong ngày', 'Tráng miệng trái cây']
        : ['Riverside Table', 'Fresh Daily Catch', 'Fresh Seasonal Fruit'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjtJ8v56LA28TJVoITsLEAVu-_OGmFpok7lagqgSzMQBt2UD6M8cmdkmQhst5rv9kMQZ-6DNOy90rqRopN1PoQi5uMUxBAcC323Y0GaQvVNTunuS-vWiuN3GfALjiXlAop8mQsXzwX4gaM1LveTJjG0hcddncVs-tWAsLmFXH4neFYRO_eKDc8PWLSWyA2MPEqnoyeGSULdrRMb71QON0R90fLKPBc9jS3sRlbYTPYVjcACSp_hdJLeg',
      fallbackImage: `${import.meta.env.BASE_URL}images/ca-loc-nuong.jpg`,
    },
  ];

  // Current active list
  const currentSelectionList =
    activeTab === 'hotel' ? hotelOptions : activeTab === 'tour' ? tourOptions : diningOptions;

  // Ensure valid selection when switching tabs
  const currentSelectedOption =
    currentSelectionList.find((opt) => opt.id === selectedOptionId) || currentSelectionList[0];

  const handleTabSwitch = (tabKey) => {
    setActiveTab(tabKey);
    if (tabKey === 'hotel') setSelectedOptionId('room-balcony');
    if (tabKey === 'tour') setSelectedOptionId('tour-xudong');
    if (tabKey === 'dining') setSelectedOptionId('dining-dongthap');
  };

  const handleAddonToggle = (key, title, price) => {
    setSelectedAddons((prev) => {
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
      } else {
        next[key] = { title, price };
      }
      return next;
    });
  };

  // Pricing calculations
  const basePrice = currentSelectedOption?.price || 0;
  const addonsTotal = Object.values(selectedAddons).reduce((sum, item) => sum + item.price, 0);
  const subtotal = basePrice + addonsTotal;
  const conservationFee = Math.round(subtotal * 0.05); // 5%
  const vatFee = Math.round(subtotal * 0.08); // 8%
  const totalPrice = Math.max(0, subtotal + conservationFee + vatFee - promoDiscount);

  const formatVND = (num) => new Intl.NumberFormat('vi-VN').format(num) + ' VNĐ';

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCodeInput.trim().toUpperCase();
    if (code === 'NUOCNOI' || code === 'TANLAP' || code === 'SEN') {
      setPromoDiscount(150000);
      setPromoMessage(
        currentLang === 'vi'
          ? '✓ Áp dụng thành công mã ưu đãi: Giảm 150.000 VNĐ!'
          : '✓ Promo code applied: 150,000 VNĐ discount!'
      );
    } else if (!code) {
      setPromoDiscount(0);
      setPromoMessage('');
    } else {
      setPromoDiscount(0);
      setPromoMessage(
        currentLang === 'vi'
          ? '✕ Mã không hợp lệ hoặc đã hết hạn.'
          : '✕ Invalid or expired promo code.'
      );
    }
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!contactInfo.name || !contactInfo.phone || !contactInfo.email) {
      alert(
        currentLang === 'vi'
          ? 'Kính mời quý khách điền đầy đủ Họ tên, Số điện thoại và Email để Ban Quản Lý xác nhận tức thì!'
          : 'Please enter your Full Name, Phone Number, and Email address to complete reservation!'
      );
      return;
    }

    const randomCode = 'TL-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBookingCode(randomCode);
    setIsSuccessModalOpen(true);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <main className="flex-grow bg-background text-on-surface antialiased selection:bg-[#555555] selection:text-white">
      {/* =========================================================================
          1. HERO BANNER: HERITAGE & TRANQUIL RESERVATION
          (Matching Stitch Screen be64fdadfc0f4ac38720de0428c44de1)
          - High resolution ambient photo, dark scrim, NO video button
      ========================================================================= */}
      <section className="relative w-full h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBt_68M64s9-abB2TtE6ZXYGeqQ33iZEKeY_lCez909aki9q3PWhCBrWXXPj9bcYcF8WPJeUIabSN_FS9tBPYFdiZ1pqmjlwyWHSZcUXoOoy5UoA3UICNZBvMpLauodbOdCA8vlS86LOcVmW-05-ZIN53B477Y0b6y6tYaMfoDL7pdYnoMlKlaMnp1Gj12tEqn7hdNWI_Nw8hsOXj05yAUDlOMl_fHHieyyTP-die9QHl3mwclsZ30zZw')`,
          }}
        >
          {/* Cinematic Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/75" />
        </div>

        {/* Architectural border inner frame accent */}
        <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none" />

        {/* Banner Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-on-primary">
          <p className="font-eyebrow-serif text-eyebrow-serif uppercase tracking-[0.25em] text-[#d6e5c2] mb-3">
            {currentLang === 'vi'
              ? 'Khu Bảo Tồn Sinh Thái Đất Ngập Nước'
              : 'Wetland Ecological Reserve'}
          </p>

          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight mb-4 tracking-tight uppercase">
            {currentLang === 'vi'
              ? 'ĐẶT TRẢI NGHIỆM & KỲ NGHỈ DI SẢN'
              : 'RESERVE EXPERIENCES & HERITAGE STAYS'}
          </h1>

          <div className="w-16 h-[1px] bg-[#c1f197] mx-auto my-4 opacity-75" />

          <p className="font-body-lg text-body-lg max-w-2xl mx-auto text-on-primary/90 font-light leading-relaxed">
            {currentLang === 'vi'
              ? 'Khởi đầu chuyến du ngoạn giữa miền tràm cổ thụ Đồng Tháp Mười — nơi nhịp sống lắng dịu, di sản sinh thái hòa quyện cùng sự tiện nghi sang trọng thuần túy.'
              : 'Begin your journey amidst the ancient cajeput groves of Dong Thap Muoi — where slow living and ecological heritage unite with refined comfort.'}
          </p>

          {/* Direct Fast Contact Pill */}
          <div className="mt-6 inline-flex items-center gap-3 bg-black/40 backdrop-blur-md px-5 py-2.5 border border-white/25">
            <span className="material-symbols-outlined text-primary-fixed text-lg">support_agent</span>
            <span className="font-label-meta text-label-meta tracking-[0.14em] uppercase text-white/95">
              {currentLang === 'vi' ? 'Hotline Đặt Chỗ Trực Tiếp: ' : 'Direct Concierge Line: '}
              <span className="text-primary-fixed font-bold">0272 3968 133</span> •{' '}
              <span className="text-primary-fixed font-bold">0966 896 833</span>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTRODUCTORY EDITORIAL SPLIT BLOCK
          (Matching Stitch Screen be64fdadfc0f4ac38720de0428c44de1)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-outline-variant/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-label-meta text-label-meta tracking-[0.2em] uppercase text-primary font-semibold block">
              {currentLang === 'vi' ? 'Di Sản Đất Tràm • Không Gian Chữa Lành' : 'Wetland Heritage • Healing Sanctuary'}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
              {currentLang === 'vi'
                ? 'Chạm vào an yên nguyên bản của thiên nhiên phương Nam'
                : 'Touching the pristine serenity of Southern nature'}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {currentLang === 'vi'
                ? 'Nằm ẩn mình sâu trong vương quốc tràm ngập nước Mộc Hóa, Làng Nổi Tân Lập gìn giữ vẹn nguyên thảm thực vật đặc hữu của miền Tây Nam Bộ qua hàng trăm năm. Mỗi phòng nghỉ, hành trình du khảo bằng thuyền cáp hay bàn tiệc ẩm thực đồng nội đều được chuẩn bị với sự trân quý tối cao dành cho tự nhiên và trải nghiệm cá nhân của từng vị khách.'
                : 'Secluded deep within the Moc Hoa wetland forest, Tan Lap preserves the endemic flora of the Southwestern delta. Every guest suite, quiet cable boat voyage, and countryside feast is prepared with reverent stewardship of nature.'}
            </p>
            <div className="pt-2 flex items-center gap-6">
              <div className="border-l-2 border-primary pl-4">
                <span className="block font-headline-lg text-headline-lg text-primary">100%</span>
                <span className="font-label-meta text-label-meta uppercase text-on-surface-variant">
                  {currentLang === 'vi' ? 'Không rác thải nhựa tour' : 'Zero Single-Use Plastic'}
                </span>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <span className="block font-headline-lg text-headline-lg text-primary">135ha</span>
                <span className="font-label-meta text-label-meta uppercase text-on-surface-variant">
                  {currentLang === 'vi' ? 'Rừng nguyên sinh bảo tồn' : 'Preserved Virgin Forest'}
                </span>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <span className="block font-headline-lg text-headline-lg text-primary">24/7</span>
                <span className="font-label-meta text-label-meta uppercase text-on-surface-variant">
                  {currentLang === 'vi' ? 'Xác nhận trực tiếp' : 'Direct Confirmation'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-80 overflow-hidden border border-outline-variant/40">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdQcLfG1HlURjglXDsFf7kifjmNfpMKbfCBIH-QtQiQ_zYc1DXKsU7bWy3C3FSivHr1QE0P_rnpd8BYC61s3ZS8qNRLpHqt83YaBJLRHnFYvM7ZZo8nzCKWTk94zzrn0sDziQl7Lk3ApnnMBluneyjHtvkv40cR9ADpUnEK8zUnLvAd_b9Aiwxkgnyu_-dTAjz7fdjktw_-AA-KpfUAagRiYJdC602Aae73CPWHx0aAQdWGc2A1ndf9Q"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}images/con-duong-dan.jpg`;
                }}
                alt="Đường mòn xuyên rừng Làng Nổi Tân Lập"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                <span className="text-white font-headline-md text-headline-md block">
                  {currentLang === 'vi' ? 'Đường mòn xuyên rừng' : 'Elevated Forest Trail'}
                </span>
                <span className="text-[#c1f197] font-label-meta text-label-meta tracking-[0.14em] uppercase">
                  {currentLang === 'vi' ? 'Con đường lát gạch 5km dài nhất miền Tây' : "Vietnam's longest 5km forest walkway"}
                </span>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden border border-outline-variant/40">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxUpD_g7H0giAlIaP1uLlW7Ys9NfTwN7Ey6-qgZZ9NOugGywcHhNSYgAvZSf16jCwRUe9L3jQIgLpX4P0dwHu3T2iD6m0Mc68ySkNnixvJUNAJQikW1AuxDGsuRBiMlWA4-yRa53-4lGKmQBJuywAILLHJwA1IzYyIWBVfXCXlrilxXBJqnRxlKu5esbxY-CHlBRj2YsaD-pDM81YCituxTxLfY5ZEZaPEoRuxsWimxswHZ_4EXERHNw"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}images/cheo-xuong.jpg`;
                }}
                alt="Thuyền mộc & Cánh sen"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                <span className="text-white font-headline-md text-headline-md block">
                  {currentLang === 'vi' ? 'Thuyền mộc & Cánh sen' : 'Wooden Boat & Water Lilies'}
                </span>
                <span className="text-[#c1f197] font-label-meta text-label-meta tracking-[0.14em] uppercase">
                  {currentLang === 'vi' ? 'Du ngoạn ngắm hoa súng và chim hoang dã' : 'Cruising amidst blooming lilies & wild birds'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CORE RESERVATION ENGINE SECTION
          (Matching Stitch Screen be64fdadfc0f4ac38720de0428c44de1)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" id="booking-section">
        {/* TABS SWITCHER: MULTI-CHANNEL RESERVATION */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between border-b-2 border-outline-variant/40 mb-10 gap-4">
          <div className="flex flex-wrap items-end gap-1 md:gap-2">
            <button
              type="button"
              onClick={() => handleTabSwitch('hotel')}
              className={`px-6 py-4 font-label-cta text-label-cta uppercase tracking-[0.16em] transition-all duration-200 border-b-2 -mb-[2px] flex items-center gap-2.5 cursor-pointer font-bold ${
                activeTab === 'hotel'
                  ? 'border-primary text-primary bg-surface-container-low'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-xl text-primary">hotel</span>
              <span>{currentLang === 'vi' ? '1. Đặt Phòng Khách Sạn' : '1. Hotel Room Reservation'}</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabSwitch('tour')}
              className={`px-6 py-4 font-label-cta text-label-cta uppercase tracking-[0.16em] transition-all duration-200 border-b-2 -mb-[2px] flex items-center gap-2.5 cursor-pointer font-bold ${
                activeTab === 'tour'
                  ? 'border-primary text-primary bg-surface-container-low'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-xl">sailing</span>
              <span>{currentLang === 'vi' ? '2. Đặt Vé Tour Tham Quan' : '2. Day Tour Passes'}</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabSwitch('dining')}
              className={`px-6 py-4 font-label-cta text-label-cta uppercase tracking-[0.16em] transition-all duration-200 border-b-2 -mb-[2px] flex items-center gap-2.5 cursor-pointer font-bold ${
                activeTab === 'dining'
                  ? 'border-primary text-primary bg-surface-container-low'
                  : 'border-transparent text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-xl">restaurant</span>
              <span>{currentLang === 'vi' ? '3. Đặt Bàn Tiệc Ẩm Thực' : '3. Canalside Dining Table'}</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-primary font-label-meta text-label-meta tracking-[0.14em] uppercase py-2">
            <span className="material-symbols-outlined text-primary text-lg">verified</span>
            <span>{currentLang === 'vi' ? 'Bảo chứng giá tốt nhất từ Ban Quản Lý' : 'Best Rate Guarantee Direct'}</span>
          </div>
        </div>

        {/* MAIN BOOKING GRID: FORM (8 COLS) + LIVE SUMMARY (4 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN: DYNAMIC BOOKING FORM */}
          <div className="lg:col-span-8 space-y-10">
            {/* Section 1: Thời Gian & Số Lượng Khách */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {currentLang === 'vi' ? 'Thời gian & Số lượng khách' : 'Schedule & Guest Count'}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {currentLang === 'vi' ? 'Lựa chọn lịch trình nghỉ dưỡng phù hợp' : 'Configure your preferred reservation timing'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-surface mb-2 font-medium">
                    {currentLang === 'vi' ? 'Ngày nhận phòng / Ngày tham quan *' : 'Check-in / Visit Date *'}
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-background border border-outline-variant/60 rounded-none px-4 py-3 text-body-md font-body-md focus:border-primary focus:ring-0 focus:outline-none"
                  />
                </div>

                {activeTab === 'hotel' && (
                  <div>
                    <label className="block font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-surface mb-2 font-medium">
                      {currentLang === 'vi' ? 'Ngày trả phòng *' : 'Check-out Date *'}
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full bg-background border border-outline-variant/60 rounded-none px-4 py-3 text-body-md font-body-md focus:border-primary focus:ring-0 focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-surface mb-2 font-medium">
                    {currentLang === 'vi' ? 'Người lớn (> 12 tuổi)' : 'Adults (> 12 yrs)'}
                  </label>
                  <div className="flex border border-outline-variant/60 bg-background">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-12 h-12 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors text-lg font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      readOnly
                      value={adults}
                      className="w-full text-center bg-transparent border-0 font-body-md focus:ring-0"
                    />
                    <button
                      type="button"
                      onClick={() => setAdults(Math.min(20, adults + 1))}
                      className="w-12 h-12 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-surface mb-2 font-medium">
                    {currentLang === 'vi' ? 'Trẻ em (dưới 1m2 / < 12 tuổi)' : 'Children (< 1.2m / < 12 yrs)'}
                  </label>
                  <div className="flex border border-outline-variant/60 bg-background">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-12 h-12 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors text-lg font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      readOnly
                      value={children}
                      className="w-full text-center bg-transparent border-0 font-body-md focus:ring-0"
                    />
                    <button
                      type="button"
                      onClick={() => setChildren(Math.min(10, children + 1))}
                      className="w-12 h-12 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: LỰA CHỌN HẠNG MỤC PHÒNG NGHỈ / GÓI DỊCH VỤ */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {activeTab === 'hotel' ? 'bed' : activeTab === 'tour' ? 'rowing' : 'restaurant_menu'}
                  </span>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      {activeTab === 'hotel'
                        ? (currentLang === 'vi' ? 'Lựa chọn Hạng Phòng Nghỉ Dưỡng' : 'Select Accommodation Suite')
                        : activeTab === 'tour'
                        ? (currentLang === 'vi' ? 'Lựa chọn Gói Tour Sinh Thái Trong Ngày' : 'Select Day Tour Experience')
                        : (currentLang === 'vi' ? 'Lựa chọn Set Thực Đơn Bàn Tiệc Ven Rạch' : 'Select Canalside Banquet Menu')}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {activeTab === 'hotel'
                        ? (currentLang === 'vi' ? 'Tất cả phòng đều kèm bữa sáng sinh thái & vé đi dạo rừng' : 'All suites include organic breakfast & forest passes')
                        : activeTab === 'tour'
                        ? (currentLang === 'vi' ? 'Bao gồm hướng dẫn viên bản địa và trang thiết bị an toàn' : 'Includes local guide and full safety gear')
                        : (currentLang === 'vi' ? 'Nguyên liệu tươi rói đánh bắt trực tiếp từ đồng nước' : 'Fresh ingredients caught daily from local waters')}
                    </p>
                  </div>
                </div>
                <span className="font-label-meta text-label-meta uppercase tracking-[0.12em] text-outline">
                  {currentSelectionList.length} {currentLang === 'vi' ? 'Lựa Chọn Khả Dụng' : 'Options'}
                </span>
              </div>

              <div className="space-y-4">
                {currentSelectionList.map((option) => {
                  const isSelected = selectedOptionId === option.id;
                  return (
                    <div
                      key={option.id}
                      onClick={() => setSelectedOptionId(option.id)}
                      className={`group relative flex flex-col md:flex-row items-stretch p-4 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-2 border-primary bg-surface-container-low/40'
                          : 'border border-outline-variant/50 hover:border-primary/60 bg-surface-container-lowest'
                      }`}
                    >
                      <div className="w-full md:w-44 h-36 md:h-auto overflow-hidden flex-shrink-0 border border-outline-variant/30 mb-4 md:mb-0">
                        <img
                          src={option.image}
                          onError={(e) => {
                            e.currentTarget.src = option.fallbackImage;
                          }}
                          alt={option.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="md:ml-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                              {option.title}
                            </h4>
                            <span
                              className={`material-symbols-outlined text-2xl ${
                                isSelected ? 'text-primary' : 'text-outline group-hover:text-primary'
                              }`}
                            >
                              {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            {option.desc}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {option.badges.map((badge, bIdx) => (
                              <span
                                key={bIdx}
                                className="text-[11px] font-label-meta uppercase tracking-[0.1em] px-2 py-0.5 bg-secondary-container text-on-secondary-container"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between">
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            {currentLang === 'vi' ? 'Giá ưu đãi trực tiếp:' : 'Direct rate:'}
                          </span>
                          <div className="text-right">
                            <span className="font-headline-lg text-headline-lg text-primary font-semibold">
                              {option.priceLabel}
                            </span>
                            <span className="font-label-meta text-label-meta text-outline block">
                              {option.priceUnit}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 3: DỊCH VỤ CỘNG THÊM & TRẢI NGHIỆM ĐẶC SẮC */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-2xl">nature_people</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {currentLang === 'vi' ? 'Tùy Chọn Dịch Vụ Cộng Thêm' : 'Enhance Your Sanctuary Experience'}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {currentLang === 'vi'
                      ? 'Làm phong phú thêm trải nghiệm của bạn giữa đồng nước Mộc Hóa'
                      : 'Complementary excursions and rustic culinary additions'}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {/* Addon 1 */}
                <label className="flex items-start justify-between p-4 border border-outline-variant/40 bg-surface-container-low/20 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex items-start gap-3.5">
                    <input
                      type="checkbox"
                      checked={!!selectedAddons['lunch']}
                      onChange={() =>
                        handleAddonToggle(
                          'lunch',
                          currentLang === 'vi'
                            ? 'Cơm trưa Cá lóc nướng trui & Canh chua'
                            : 'Grilled Fish & Sour Soup Lunch',
                          250000
                        )
                      }
                      className="mt-1 w-5 h-5 rounded-none border-outline text-primary focus:ring-0"
                    />
                    <div>
                      <span className="font-body-md font-semibold text-on-surface block">
                        {currentLang === 'vi'
                          ? 'Suất ăn trưa đặc sản Cá Lóc Nướng Trui Rơm & Canh Chua Cá Chốt'
                          : 'Straw-Grilled Snakehead Fish & Hotpot Regional Lunch'}
                      </span>
                      <span className="font-body-sm text-on-surface-variant">
                        {currentLang === 'vi'
                          ? 'Phục vụ tại nhà hàng ven rạch lộng gió, kèm rau đồng rừng tràm tươi non'
                          : 'Served at canalside open pavilion with seasonal wetland vegetables'}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span className="font-label-cta text-label-cta text-primary block font-bold">
                      + 250.000 VNĐ
                    </span>
                    <span className="font-label-meta text-[10px] uppercase text-outline">
                      {currentLang === 'vi' ? '/ khách' : '/ guest'}
                    </span>
                  </div>
                </label>

                {/* Addon 2 */}
                <label className="flex items-start justify-between p-4 border border-outline-variant/40 bg-surface-container-low/20 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex items-start gap-3.5">
                    <input
                      type="checkbox"
                      checked={!!selectedAddons['glamping']}
                      onChange={() =>
                        handleAddonToggle(
                          'glamping',
                          currentLang === 'vi'
                            ? 'Thuê lều Glamping ven hồ sen ban đêm'
                            : 'Overnight Glamping Tent Experience',
                          350000
                        )
                      }
                      className="mt-1 w-5 h-5 rounded-none border-outline text-primary focus:ring-0"
                    />
                    <div>
                      <span className="font-body-md font-semibold text-on-surface block">
                        {currentLang === 'vi'
                          ? 'Thuê lều Glamping cắm trại ven hồ Sen & Bãi Cỏ Ban Đêm'
                          : 'Lakeside Glamping Tent & Bonfire Experience'}
                      </span>
                      <span className="font-body-sm text-on-surface-variant">
                        {currentLang === 'vi'
                          ? 'Bao gồm đệm nỉ, đèn bão cổ điển, củi đốt lửa trại và bảo hộ an ninh 24/7'
                          : 'Includes felt bedding, vintage hurricane lantern, firewood, and 24/7 patrol'}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span className="font-label-cta text-label-cta text-primary block font-bold">
                      + 350.000 VNĐ
                    </span>
                    <span className="font-label-meta text-[10px] uppercase text-outline">
                      {currentLang === 'vi' ? '/ set lều / đêm' : '/ tent / night'}
                    </span>
                  </div>
                </label>

                {/* Addon 3 */}
                <label className="flex items-start justify-between p-4 border border-outline-variant/40 bg-surface-container-low/20 hover:border-primary cursor-pointer transition-colors">
                  <div className="flex items-start gap-3.5">
                    <input
                      type="checkbox"
                      checked={!!selectedAddons['guide']}
                      onChange={() =>
                        handleAddonToggle(
                          'guide',
                          currentLang === 'vi'
                            ? 'HDV thuyết minh sinh thái bản địa (2h)'
                            : 'Private Heritage Naturalist Guide (2h)',
                          200000
                        )
                      }
                      className="mt-1 w-5 h-5 rounded-none border-outline text-primary focus:ring-0"
                    />
                    <div>
                      <span className="font-body-md font-semibold text-on-surface block">
                        {currentLang === 'vi'
                          ? 'Hướng dẫn viên thuyết minh sinh thái bản địa riêng (2 giờ)'
                          : 'Private Heritage Naturalist Specialist Guide (2 Hours)'}
                      </span>
                      <span className="font-body-sm text-on-surface-variant">
                        {currentLang === 'vi'
                          ? 'Khám phá các loài chim quý di cư, lịch sử vùng Đồng Tháp Mười và dược liệu tràm'
                          : 'Discover migratory birds, medicinal cajeput ecology, and Dong Thap Muoi folklore'}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span className="font-label-cta text-label-cta text-primary block font-bold">
                      + 200.000 VNĐ
                    </span>
                    <span className="font-label-meta text-[10px] uppercase text-outline">
                      {currentLang === 'vi' ? '/ đoàn' : '/ group'}
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Section 4: THÔNG TIN LIÊN HỆ ĐẶT CHỖ */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-2xl">badge</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {currentLang === 'vi' ? 'Thông Tin Người Đặt Chỗ' : 'Lead Guest Contact Details'}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {currentLang === 'vi'
                      ? 'Vé điện tử và mã QR sẽ được gửi tức thì qua Số điện thoại & Email'
                      : 'E-tickets and QR credentials sent directly via Phone & Email'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-surface mb-2 font-medium">
                    {currentLang === 'vi' ? 'Họ và tên quý khách *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                    placeholder={currentLang === 'vi' ? 'VÍ DỤ: NGUYỄN VĂN AN' : 'E.G. ANTHONY NGUYEN'}
                    className="w-full bg-background border border-outline-variant/60 rounded-none px-4 py-3 text-body-md font-body-md focus:border-primary focus:ring-0 focus:outline-none placeholder:text-outline-variant uppercase"
                  />
                </div>
                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-surface mb-2 font-medium">
                    {currentLang === 'vi' ? 'Số điện thoại liên hệ *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    placeholder="09xx xxx xxx"
                    className="w-full bg-background border border-outline-variant/60 rounded-none px-4 py-3 text-body-md font-body-md focus:border-primary focus:ring-0 focus:outline-none placeholder:text-outline-variant"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-surface mb-2 font-medium">
                    {currentLang === 'vi' ? 'Địa chỉ thư điện tử (Email) *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    placeholder="example@domain.com"
                    className="w-full bg-background border border-outline-variant/60 rounded-none px-4 py-3 text-body-md font-body-md focus:border-primary focus:ring-0 focus:outline-none placeholder:text-outline-variant"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-surface mb-2 font-medium">
                    {currentLang === 'vi' ? 'Yêu cầu đặc biệt (tùy chọn)' : 'Special Requests (Optional)'}
                  </label>
                  <textarea
                    rows={3}
                    value={contactInfo.notes}
                    onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                    placeholder={
                      currentLang === 'vi'
                        ? 'Ghi chú về chế độ ăn kiêng, giờ nhận phòng muộn hoặc setup phòng trăng mật...'
                        : 'Dietary preferences, late check-in arrival, honeymoon setup...'
                    }
                    className="w-full bg-background border border-outline-variant/60 rounded-none px-4 py-3 text-body-md font-body-md focus:border-primary focus:ring-0 focus:outline-none placeholder:text-outline-variant"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MINIMALIST STICKY BOOKING SUMMARY */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-surface-container-lowest border-2 border-primary/40 p-6 md:p-8">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {currentLang === 'vi' ? 'Tóm Tắt Đặt Chỗ' : 'Reservation Summary'}
                  </h3>
                  <span className="font-label-meta text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 bg-primary text-on-primary font-bold">
                    {currentLang === 'vi' ? 'TRỰC TIẾP' : 'DIRECT'}
                  </span>
                </div>

                {/* Summary Items */}
                <div className="py-5 space-y-4 text-body-sm text-on-surface-variant border-b border-outline-variant/30">
                  <div>
                    <span className="font-label-meta text-label-meta uppercase tracking-[0.14em] text-outline block">
                      {currentLang === 'vi' ? 'Hạng mục lựa chọn' : 'Selected Item'}
                    </span>
                    <span className="font-headline-md text-base text-on-surface font-semibold block mt-0.5">
                      {currentSelectedOption?.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-label-meta text-label-meta uppercase tracking-[0.14em] text-outline block">
                        {currentLang === 'vi' ? 'Thời gian' : 'Dates'}
                      </span>
                      <span className="font-body-md text-on-surface font-medium block mt-0.5">
                        {checkInDate.split('-').reverse().join('/')}
                        {activeTab === 'hotel' ? ` — ${checkOutDate.split('-').reverse().join('/')}` : ''}
                      </span>
                    </div>
                    <div>
                      <span className="font-label-meta text-label-meta uppercase tracking-[0.14em] text-outline block">
                        {currentLang === 'vi' ? 'Số lượng' : 'Guests'}
                      </span>
                      <span className="font-body-md text-on-surface font-medium block mt-0.5">
                        {adults} {currentLang === 'vi' ? 'Người lớn' : 'Adults'}
                        {children > 0 ? `, ${children} ${currentLang === 'vi' ? 'Trẻ em' : 'Kids'}` : ''}
                      </span>
                    </div>
                  </div>

                  {/* Selected Addons Dynamic Container */}
                  <div className="space-y-2 pt-2">
                    <span className="font-label-meta text-label-meta uppercase tracking-[0.14em] text-outline block">
                      {currentLang === 'vi' ? 'Dịch vụ bổ sung:' : 'Add-on Services:'}
                    </span>
                    <div className="space-y-1 text-on-surface italic text-xs">
                      {Object.keys(selectedAddons).length > 0 ? (
                        Object.entries(selectedAddons).map(([key, item]) => (
                          <div key={key} className="flex justify-between">
                            <span>+ {item.title}</span>
                            <span className="font-medium not-italic">{formatVND(item.price)}</span>
                          </div>
                        ))
                      ) : (
                        <span className="text-outline">
                          {currentLang === 'vi' ? 'Chưa chọn dịch vụ thêm' : 'No add-ons selected'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="py-5 space-y-2.5 text-body-sm border-b border-outline-variant/30">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">
                      {currentLang === 'vi' ? 'Tạm tính:' : 'Base Rate:'}
                    </span>
                    <span className="font-medium text-on-surface">{formatVND(basePrice)}</span>
                  </div>

                  {addonsTotal > 0 && (
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">
                        {currentLang === 'vi' ? 'Dịch vụ thêm:' : 'Add-ons Subtotal:'}
                      </span>
                      <span className="font-medium text-on-surface">{formatVND(addonsTotal)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">
                      {currentLang === 'vi' ? 'Phí bảo tồn rừng sinh thái (5%):' : 'Conservation Fee (5%):'}
                    </span>
                    <span className="font-medium text-on-surface">{formatVND(conservationFee)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">
                      {currentLang === 'vi' ? 'Thuế VAT (8%):' : 'VAT (8%):'}
                    </span>
                    <span className="font-medium text-on-surface">{formatVND(vatFee)}</span>
                  </div>

                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-primary font-bold">
                      <span>{currentLang === 'vi' ? 'Chiết khấu ưu đãi:' : 'Special Discount:'}</span>
                      <span>- {formatVND(promoDiscount)}</span>
                    </div>
                  )}

                  {/* Promo Code Field */}
                  <form onSubmit={handleApplyPromo} className="pt-3">
                    <div className="flex border border-outline-variant/60">
                      <input
                        type="text"
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value)}
                        placeholder={currentLang === 'vi' ? 'MÃ ƯU ĐÃI (NƯỚC NỔI)' : 'PROMO CODE (NUOCNOI)'}
                        className="w-full bg-background text-xs font-label-meta uppercase tracking-[0.14em] px-3 py-2 border-0 focus:ring-0"
                      />
                      <button
                        type="submit"
                        className="bg-surface-container-high px-3 py-2 font-label-cta text-label-meta uppercase tracking-[0.12em] hover:bg-outline-variant transition-colors text-on-surface font-bold cursor-pointer"
                      >
                        {currentLang === 'vi' ? 'ÁP DỤNG' : 'APPLY'}
                      </button>
                    </div>
                    {promoMessage && (
                      <p className="text-[11px] mt-1.5 text-primary font-medium">{promoMessage}</p>
                    )}
                  </form>
                </div>

                {/* Total Sum */}
                <div className="pt-5 pb-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-label-meta text-label-meta uppercase tracking-[0.15em] font-semibold text-on-surface">
                      {currentLang === 'vi' ? 'TỔNG CỘNG THANH TOÁN:' : 'TOTAL AMOUNT:'}
                    </span>
                    <div className="text-right">
                      <span className="font-headline-xl text-headline-lg md:text-headline-xl text-primary font-bold">
                        {formatVND(totalPrice)}
                      </span>
                      <span className="font-label-meta text-[10px] text-outline block">
                        {currentLang === 'vi' ? 'Đã bao gồm thuế & phí di sản' : 'Inclusive of all taxes & fees'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary Submission Button */}
                <button
                  type="button"
                  onClick={handleSubmitBooking}
                  className="w-full bg-primary hover:bg-[#48692c] text-on-primary font-label-cta text-label-cta py-4 uppercase tracking-[0.2em] transition-colors rounded-none shadow-none flex items-center justify-center gap-2 cursor-pointer font-bold"
                >
                  <span>{currentLang === 'vi' ? 'XÁC NHẬN ĐẶT KỲ NGHỈ' : 'CONFIRM RESERVATION'}</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-outline font-label-meta text-[11px] uppercase tracking-[0.1em]">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  <span>
                    {currentLang === 'vi'
                      ? 'Bảo mật 256-bit • Thanh toán linh hoạt tại quầy'
                      : '256-Bit SSL • Flexible On-site Payment'}
                  </span>
                </div>
              </div>

              {/* Priority Support Card */}
              <div className="bg-surface-container-low border border-outline-variant/40 p-5 space-y-3">
                <div className="flex items-center gap-2 text-primary font-label-meta text-label-meta uppercase tracking-[0.14em] font-bold">
                  <span className="material-symbols-outlined text-base">support_agent</span>
                  <span>
                    {currentLang === 'vi'
                      ? 'Hỗ trợ đặt chỗ khẩn cấp & tư vấn tour'
                      : 'Direct Concierge & Inquiry Desk'}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {currentLang === 'vi'
                    ? 'Quý khách có thể liên hệ trực tiếp lễ tân khu bảo tồn để sắp xếp lịch đón tiễn từ TP.HCM hoặc thực đơn tiệc riêng:'
                    : 'Contact our sanctuary reception directly for Saigon transfers, private charters, or dietary accommodations:'}
                </p>
                <div className="space-y-1 font-body-sm">
                  <p className="font-bold text-on-surface">
                    Hotline 1: <a className="text-primary hover:underline" href="tel:02723968133">0272 3968 133</a>
                  </p>
                  <p className="font-bold text-on-surface">
                    Hotline 2: <a className="text-primary hover:underline" href="tel:0966896833">0966 896 833</a>
                  </p>
                  <p className="text-xs text-outline">
                    {currentLang === 'vi'
                      ? 'Địa chỉ: Quốc lộ 62, Xã Tân Lập, Huyện Mộc Hóa, Tỉnh Long An'
                      : 'Location: National Route 62, Tan Lap, Moc Hoa, Long An'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. GASTRONOMY & EXPERIENCES MINI BENTO (3 Cards)
          (Matching Stitch Screen be64fdadfc0f4ac38720de0428c44de1)
      ========================================================================= */}
      <section className="bg-surface-container-low py-20 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-meta text-label-meta tracking-[0.2em] uppercase text-primary font-semibold block mb-2">
              {currentLang === 'vi' ? 'Đặc Quyền Di Sản' : 'Sanctuary Privileges'}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              {currentLang === 'vi'
                ? 'Hương Sắc Mộc Hóa Giữa Mùa Nước Nổi'
                : 'Moc Hoa Splendor During Floating Season'}
            </h2>
            <div className="w-12 h-[1px] bg-primary mx-auto my-3" />
            <p className="font-body-md text-body-md text-on-surface-variant">
              {currentLang === 'vi'
                ? 'Khám phá chuỗi dịch vụ đậm đà bản sắc địa phương, hòa quyện trọn vẹn trong bầu sinh quyển ngập nước miền Tây.'
                : 'Explore indigenous regional traditions deeply attuned with Southern Vietnam’s wetland ecosystem.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Ẩm Thực */}
            <div className="bg-surface-container-lowest border border-outline-variant/30 overflow-hidden flex flex-col justify-between group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjtJ8v56LA28TJVoITsLEAVu-_OGmFpok7lagqgSzMQBt2UD6M8cmdkmQhst5rv9kMQZ-6DNOy90rqRopN1PoQi5uMUxBAcC323Y0GaQvVNTunuS-vWiuN3GfALjiXlAop8mQsXzwX4gaM1LveTJjG0hcddncVs-tWAsLmFXH4neFYRO_eKDc8PWLSWyA2MPEqnoyeGSULdrRMb71QON0R90fLKPBc9jS3sRlbYTPYVjcACSp_hdJLeg"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/ca-loc-nuong.jpg`;
                  }}
                  alt="Nhà Hàng Ven Rạch Làng Nổi Tân Lập"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-meta text-[10px] tracking-[0.18em] uppercase font-bold">
                  {currentLang === 'vi' ? 'Nhà Hàng Ven Rạch' : 'Riverside Dining'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {currentLang === 'vi' ? 'Ẩm Thực Khẩn Hoang Nam Bộ' : 'Authentic Southern Delta Cuisine'}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {currentLang === 'vi'
                    ? 'Thưởng thức cá lóc nướng trui cuốn lá sen non, lẩu mắm cá linh bông điên điển với nguyên liệu đánh bắt tự nhiên trong ngày.'
                    : 'Straw-roasted snakehead fish with young lotus leaves, seasonal linh fish hotpot, and fresh river herbs.'}
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                <Link
                  to="/khach-san-am-thuc#culinary"
                  className="font-label-meta text-label-meta uppercase tracking-[0.14em] text-primary font-bold hover:underline flex items-center gap-1"
                >
                  <span>{currentLang === 'vi' ? 'Xem Thực Đơn Mùa' : 'View Seasonal Menu'}</span>
                  <span className="material-symbols-outlined text-primary text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Thuyền Cáp Kéo */}
            <div className="bg-surface-container-lowest border border-outline-variant/30 overflow-hidden flex flex-col justify-between group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZLmNeCxWUUiMqe0S9R-abkTSlOB4I9PRrFOClDB1k8_hFfEljPS9laxggycPHJmRQrhhADSX_bG329lIEU6ZFdGV3nagBw_qnerrY9Deidc8Hf9yneLxyK3mgfdYGMDVu-A1yEL1vjNqY3HgeuVhxTpG25LcQXjJFCcNiVYiVbzNvHDi7pAga-2v0h2jqDByjTil_AmqdkW3DROJz2c2o0LCD8NhKsp3t6ZmFG4kkqTwQyVCu4nZQg"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/thuyen-cap.jpg`;
                  }}
                  alt="Tour Thuyền Cáp Kéo Làng Nổi Tân Lập"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-meta text-[10px] tracking-[0.18em] uppercase font-bold">
                  {currentLang === 'vi' ? 'Tour Thuyền Cáp' : 'Electric Cable Cruise'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {currentLang === 'vi' ? 'Du Khảo Thuyền Cáp Kéo Tĩnh Lặng' : 'Silent Underwater Cable Excursion'}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {currentLang === 'vi'
                    ? 'Hệ thống thuyền ngầm tĩnh âm lướt nhẹ nhàng qua 3.000m kênh rạch hoang sơ mà không làm xao động đàn chim di cư trú ngụ.'
                    : 'Underwater cable technology gliding silently across 3,000m of shaded canals without disturbing migratory waterfowl.'}
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                <Link
                  to="/tham-quan"
                  className="font-label-meta text-label-meta uppercase tracking-[0.14em] text-primary font-bold hover:underline flex items-center gap-1"
                >
                  <span>{currentLang === 'vi' ? 'Chi Tiết Lộ Trình' : 'Route Details'}</span>
                  <span className="material-symbols-outlined text-primary text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Tháp Quan Sát */}
            <div className="bg-surface-container-lowest border border-outline-variant/30 overflow-hidden flex flex-col justify-between group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMjijCQzq0GVXpu0jwNBsBF1k6PzpfzkoUPZEeqMg4XCVzVC90D26vruxrSoaTE7ivGAhqDrRg1VRTL9EZLwl7QrUrD2tucjUdb5QmEbJ97i4S8_Gy2wPK6LmDUYED5jfWhL7VnPpIRQFA9RKgUAJ3Wrj5pITUIYcrPS-VfCNca7E2MjZY9YLFi6D5he_uJgpNyqH3RDM6A7X83ap_HwG_3ygHY0j25gO5EOf5--VDIS9GAI-hCSpsXg"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/thap-quan-sat.jpg`;
                  }}
                  alt="Tháp Canh Cao 38m Làng Nổi Tân Lập"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-meta text-[10px] tracking-[0.18em] uppercase font-bold">
                  {currentLang === 'vi' ? 'Tháp Canh Cao 38m' : '38m Watchtower'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {currentLang === 'vi' ? 'Toàn Cảnh Đại Ngàn Đồng Tháp Mười' : '360° Canopy Panorama View'}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {currentLang === 'vi'
                    ? 'Chiêm ngưỡng bình minh rực rỡ và hoàng hôn buông trên bạt ngàn rừng tràm từ ngọn tháp quan sát cao nhất khu vực Tây Nam Bộ.'
                    : 'Behold breathtaking sunrise and golden sunsets over the vast green ocean from the highest vantage point in Long An.'}
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                <Link
                  to="/tham-quan"
                  className="font-label-meta text-label-meta uppercase tracking-[0.14em] text-primary font-bold hover:underline flex items-center gap-1"
                >
                  <span>{currentLang === 'vi' ? 'Khám Phá Điểm Đến' : 'Explore Destination'}</span>
                  <span className="material-symbols-outlined text-primary text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. NEWSLETTER SUBSCRIPTION (OLIVE HERITAGE MONOLITH)
          (Matching Stitch Screen be64fdadfc0f4ac38720de0428c44de1)
      ========================================================================= */}
      <section className="bg-primary text-on-primary py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="material-symbols-outlined text-4xl text-primary-fixed">mark_email_read</span>
          <h2 className="font-display-hero text-headline-lg md:text-headline-xl text-on-primary tracking-wide">
            {currentLang === 'vi'
              ? 'Bản Tin Mùa Nước Nổi & Ưu Đãi Di Sản'
              : 'Floating Season Chronicles & Heritage Privileges'}
          </h2>
          <p className="font-body-md text-body-md text-on-primary/85 max-w-xl mx-auto">
            {currentLang === 'vi'
              ? 'Đăng ký để nhận thông tin cập nhật thời điểm sen nở rộ, mùa chim về làm tổ cùng các chương trình nghỉ dưỡng sinh thái giới hạn hàng tháng.'
              : 'Subscribe to receive seasonal alerts on blooming lilies, bird migrations, and exclusive boutique retreat offers.'}
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto gap-0 pt-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder={
                currentLang === 'vi'
                  ? 'NHẬP ĐỊA CHỈ EMAIL CỦA BẠN...'
                  : 'ENTER YOUR EMAIL ADDRESS...'
              }
              required
              className="w-full bg-[#fafaf0] text-on-surface placeholder:text-outline-variant px-5 py-4 border-0 rounded-none focus:ring-0 font-label-meta text-xs uppercase tracking-[0.14em]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#48692c] hover:bg-[#344d1f] text-on-primary px-8 py-4 font-label-cta text-label-cta uppercase tracking-[0.18em] transition-colors rounded-none whitespace-nowrap font-bold cursor-pointer"
            >
              {newsletterSubscribed
                ? (currentLang === 'vi' ? 'ĐÃ ĐĂNG KÝ ✓' : 'SUBSCRIBED ✓')
                : (currentLang === 'vi' ? 'ĐĂNG KÝ' : 'SUBSCRIBE')}
            </button>
          </form>
          <span className="block font-label-meta text-[10px] tracking-[0.14em] uppercase text-primary-fixed/80">
            {currentLang === 'vi'
              ? 'Cam kết bảo mật tuyệt đối • Không gửi thư rác quảng cáo'
              : 'Complete Privacy Guaranteed • Zero Spam Advertising'}
          </span>
        </div>
      </section>

      {/* =========================================================================
          SUCCESS CONFIRMATION MODAL
      ========================================================================= */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-surface-container-lowest border-2 border-primary max-w-lg w-full p-8 shadow-2xl relative">
            <div className="flex items-center gap-3 text-primary mb-4 pb-3 border-b border-outline-variant/40">
              <span className="material-symbols-outlined text-3xl">verified</span>
              <div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface">
                  {currentLang === 'vi' ? 'Đặt Chỗ Thành Công!' : 'Reservation Confirmed!'}
                </h3>
                <p className="text-xs font-label-meta uppercase tracking-wider text-outline">
                  {currentLang === 'vi' ? 'Mã đặt chỗ: ' : 'Booking Reference: '}
                  <span className="text-primary font-bold">{confirmedBookingCode}</span>
                </p>
              </div>
            </div>

            <div className="space-y-3 text-body-sm text-on-surface-variant mb-6">
              <p>
                {currentLang === 'vi' ? 'Kính chào ' : 'Dear '}
                <strong className="text-on-surface uppercase">{contactInfo.name}</strong>,
              </p>
              <p>
                {currentLang === 'vi'
                  ? `Yêu cầu đặt chỗ cho [${currentSelectedOption?.title}] đã được chuyển tiếp đến Ban Quản Lý Làng Nổi Tân Lập.`
                  : `Your reservation request for [${currentSelectedOption?.title}] has been registered directly with Tan Lap Eco Sanctuary.`}
              </p>
              <div className="bg-surface-container-low p-4 border border-outline-variant/30 space-y-1 text-xs">
                <p>
                  <strong>{currentLang === 'vi' ? 'Tổng thanh toán: ' : 'Total Amount: '}</strong>
                  <span className="text-primary font-bold text-sm">{formatVND(totalPrice)}</span>
                </p>
                <p>
                  <strong>{currentLang === 'vi' ? 'Số điện thoại: ' : 'Phone: '}</strong>
                  {contactInfo.phone}
                </p>
                <p>
                  <strong>{currentLang === 'vi' ? 'Email nhận QR: ' : 'Email: '}</strong>
                  {contactInfo.email}
                </p>
              </div>
              <p className="text-xs text-outline italic">
                {currentLang === 'vi'
                  ? 'Lễ tân sẽ liên hệ qua điện thoại và gửi vé điện tử QR đến hộp thư của bạn trong vòng 10 phút.'
                  : 'Our concierge will phone you and deliver your QR pass within 10 minutes.'}
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="bg-primary text-on-primary hover:bg-[#48692c] px-6 py-3 text-label-cta font-label-cta uppercase tracking-[0.18em] transition-colors font-bold cursor-pointer"
              >
                {currentLang === 'vi' ? 'HOÀN TẤT' : 'DONE'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
