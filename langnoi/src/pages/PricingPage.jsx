import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PricingPage({ currentLang = 'vi', onOpenBooking }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '2026-11-20',
    service: 'combo-180k',
    guests: 2,
    specialRequest: '',
    policyAgree: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title =
      currentLang === 'vi'
        ? 'Bảng Giá Dịch Vụ & Ưu Đãi - Phong Cách Di Sản Làng Nổi Tân Lập'
        : 'Rates & Packages | Tan Lap Floating Village Eco Sanctuary';
  }, [currentLang]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking({
        title: getServiceLabel(formData.service),
        fullName: formData.fullName,
        phone: formData.phone,
        date: formData.date,
        guests: formData.guests,
        notes: formData.specialRequest,
      });
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const getServiceLabel = (val) => {
    switch (val) {
      case 'combo-180k':
        return currentLang === 'vi' ? 'Combo Cổng + Xuồng + Tháp 38m (180k)' : 'Combo Gate + Sampan + Tower (180k)';
      case 'tour-day':
        return currentLang === 'vi' ? 'Gói Day Tour Chạm Sâu Di Sản (390k)' : 'Full Day Heritage Tour (390k)';
      case 'hotel-2n1d':
        return currentLang === 'vi' ? 'Gói Nghỉ Dưỡng Khách Sạn 2N1Đ (1.690k)' : '2D1N Hotel Retreat Package (1,690k)';
      case 'glamping':
        return currentLang === 'vi' ? 'Lều Cắm Trại Rừng Tràm & Tiệc Nướng' : 'Forest Glamping & BBQ';
      case 'custom-group':
        return currentLang === 'vi' ? 'Đặt Tiệc Gala & Team Building Cho Đoàn' : 'Corporate Gala & Team Building';
      case 'gate-only':
        return currentLang === 'vi' ? 'Vé Vào Cổng Cơ Bản (70k)' : 'General Admission Ticket (70k)';
      default:
        return currentLang === 'vi' ? 'Dịch Vụ Làng Nổi Tân Lập' : 'Tan Lap Tourism Service';
    }
  };

  // 6 Exact Ticket Cards from Stitch Screen 146a3478c63444318f5d1988c3e6ba16
  const ticketCards = [
    {
      id: 'ticket-gate',
      badge: currentLang === 'vi' ? 'Tham quan cơ bản' : 'General Admission',
      icon: 'hiking',
      title:
        currentLang === 'vi'
          ? 'Vé Vào Cổng & Cung Đường Đan 5km'
          : 'Gate Ticket & 5km Forest Walkway',
      desc:
        currentLang === 'vi'
          ? 'Tự do tản bộ khám phá con đường bê tông đan xuyên lòng rừng tràm dài nhất Việt Nam, chinh phục cầu khỉ và vườn sen.'
          : "Full walking access to Vietnam's longest elevated forest walkway, crossing rustic monkey bridges and blooming lotus ponds.",
      featured: false,
      tiers: [
        {
          label: currentLang === 'vi' ? 'Người lớn (> 1.2m)' : 'Adult (> 1.2m)',
          price: '70.000',
          unit: 'VNĐ',
          isSpecial: false,
        },
        {
          label: currentLang === 'vi' ? 'Trẻ em (0.9m - 1.2m)' : 'Child (0.9m - 1.2m)',
          price: '40.000',
          unit: 'VNĐ',
          isSpecial: false,
        },
        {
          label: currentLang === 'vi' ? 'Trẻ nhỏ (< 0.9m)' : 'Toddler (< 0.9m)',
          price: currentLang === 'vi' ? 'Miễn phí 100%' : '100% Free',
          unit: '',
          isSpecial: true,
        },
      ],
      ctaText: currentLang === 'vi' ? 'Chọn Đặt Vé' : 'Select Ticket',
    },
    {
      id: 'ticket-sampan',
      badge: currentLang === 'vi' ? 'Chèo tay truyền thống' : 'Traditional Rowing',
      icon: 'rowing',
      title:
        currentLang === 'vi'
          ? 'Xuồng Ba Lá Lướt Bèo & Ngắm Hoa Súng'
          : 'Handcrafted Sampan Duckweed Tour',
      desc:
        currentLang === 'vi'
          ? 'Chầm chậm lướt trên thảm bèo tai chuột xanh mướt ngát hương hoa súng, cùng lắng nghe các cô chèo xuồng hát điệu hò Nam Bộ mộc mạc.'
          : 'Drift along emerald duckweed waterways carpeted with wild lilies, accompanied by the gentle folk melodies of local boatmen.',
      featured: true,
      featureBadge: currentLang === 'vi' ? 'Trải Nghiệm Đặc Trưng Nhất' : 'Signature Experience',
      tiers: [
        {
          label: currentLang === 'vi' ? 'Giá vé / Khách' : 'Rate / Guest',
          price: '80.000',
          unit: 'VNĐ',
          isSpecial: false,
          isBoldPrice: true,
        },
        {
          label: currentLang === 'vi' ? 'Thời lượng hải trình' : 'Cruise duration',
          price: currentLang === 'vi' ? '30 - 45 Phút' : '30 - 45 Mins',
          unit: '',
          isSpecial: false,
        },
        {
          label: currentLang === 'vi' ? 'Sức chứa thuyền' : 'Boat capacity',
          price: currentLang === 'vi' ? '3 - 4 khách / xuồng' : '3 - 4 guests / boat',
          unit: '',
          isSpecial: false,
        },
      ],
      ctaText: currentLang === 'vi' ? 'Đặt Vé Xuồng Ba Lá' : 'Book Sampan Tour',
    },
    {
      id: 'ticket-cable-boat',
      badge: currentLang === 'vi' ? 'Du ngoạn rẽ sóng' : 'Electric Cable Cruise',
      icon: 'directions_boat',
      title:
        currentLang === 'vi'
          ? 'Du Ngoạn Thuyền Cáp Kéo Máy Dưới Nước'
          : 'Underwater Cable Powered Boat Cruise',
      desc:
        currentLang === 'vi'
          ? 'Trải nghiệm cảm giác lướt êm ái trên mặt nước không tiếng ồn động cơ truyền thống, lượn sâu vào vùng tràm ngập nước nguyên sơ.'
          : 'Glide serenely across shaded wetland waterways with zero engine noise, venturing into deep pristine cajeput reserves.',
      featured: false,
      tiers: [
        {
          label: currentLang === 'vi' ? 'Giá vé / Khách' : 'Rate / Guest',
          price: '70.000',
          unit: 'VNĐ',
          isSpecial: false,
        },
        {
          label: currentLang === 'vi' ? 'Thời lượng di chuyển' : 'Travel duration',
          price: currentLang === 'vi' ? '20 - 30 Phút' : '20 - 30 Mins',
          unit: '',
          isSpecial: false,
        },
        {
          label: currentLang === 'vi' ? 'Trẻ em (< 0.9m)' : 'Children (< 0.9m)',
          price: currentLang === 'vi' ? 'Miễn phí vé' : 'Free admission',
          unit: '',
          isSpecial: true,
        },
      ],
      ctaText: currentLang === 'vi' ? 'Chọn Đặt Thuyền Cáp' : 'Book Cable Boat',
    },
    {
      id: 'ticket-combo-day',
      badge: currentLang === 'vi' ? 'Gói trải nghiệm tối ưu' : 'Optimal Value Combo',
      icon: 'confirmation_number',
      title:
        currentLang === 'vi'
          ? 'Combo Trọn Gói: Cổng + Xuồng Chèo + Tháp 38m'
          : 'All-in Combo: Gate + Sampan + 38m Tower',
      desc:
        currentLang === 'vi'
          ? 'Tiết kiệm hơn 25% so với mua lẻ. Bao trọn toàn bộ hành trình đi bộ xuyên rừng, chèo xuồng ngắm hoa và lên đỉnh tháp ngắm toàn cảnh 360°.'
          : 'Save 25% compared to individual tickets. Includes forest walkway entry, scenic rowing sampan, and panoramic 360° tower access.',
      featured: false,
      tiers: [
        {
          label: currentLang === 'vi' ? 'Giá Combo trọn gói' : 'All-inclusive Rate',
          price: '180.000',
          unit: 'VNĐ',
          isSpecial: false,
          isBoldPrice: true,
        },
        {
          label: currentLang === 'vi' ? 'Tiết kiệm' : 'Savings',
          price: currentLang === 'vi' ? '40.000 VNĐ / người' : '40,000 VNĐ / person',
          unit: '',
          isSpecial: true,
        },
      ],
      ctaText: currentLang === 'vi' ? 'Chọn Đặt Combo 180K' : 'Book 180K Combo',
    },
    {
      id: 'ticket-fishing',
      badge: currentLang === 'vi' ? 'Giải trí thanh nhàn' : 'Leisurely Recreation',
      icon: 'phishing',
      title:
        currentLang === 'vi'
          ? 'Câu Cá Đồng Tự Nhiên & Mượn Cần'
          : 'Wild River Fishing & Rod Rental',
      desc:
        currentLang === 'vi'
          ? 'Trút bỏ mọi ồn ã phố thị với buổi câu cá tĩnh lặng ven bờ rạch. Bao gồm cần câu trúc, mồi câu trùn/cám và hỗ trợ sơ chế theo yêu cầu.'
          : 'Cast away urban bustle with peaceful angling along natural canals. Bamboo rod, fresh bait, and kitchen preparation included.',
      featured: false,
      tiers: [
        {
          label: currentLang === 'vi' ? 'Chi phí thuê cần & suất' : 'Rod hire & access',
          price: '100.000',
          unit: 'VNĐ',
          isSpecial: false,
        },
        {
          label: currentLang === 'vi' ? 'Thời gian trải nghiệm' : 'Experience time',
          price: currentLang === 'vi' ? 'Không giới hạn giờ' : 'Unlimited hours',
          unit: '',
          isSpecial: false,
        },
      ],
      ctaText: currentLang === 'vi' ? 'Mượn Cần Câu' : 'Rent Fishing Rod',
    },
    {
      id: 'ticket-guide',
      badge: currentLang === 'vi' ? 'Thuyết minh chuyên sâu' : 'Specialized Narrative',
      icon: 'interpreter_mode',
      title:
        currentLang === 'vi'
          ? 'Hướng Dẫn Viên Bản Địa Đồng Tháp Mười'
          : 'Local Heritage Specialist Guide',
      desc:
        currentLang === 'vi'
          ? 'Người con miệt thứ dẫn lối, thuyết minh tường tận về hệ sinh thái ngập nước, tập tính các loài chim nước quý và văn hóa sinh kế trăm năm.'
          : 'Native wetlands storytellers guiding you through ecological wonders, endangered bird habitats, and century-old Mekong heritage.',
      featured: false,
      tiers: [
        {
          label: currentLang === 'vi' ? 'Mức phí theo đoàn' : 'Rate per group',
          price: '300.000',
          unit: 'VNĐ',
          isSpecial: false,
        },
        {
          label: currentLang === 'vi' ? 'Quy mô đoàn tối đa' : 'Max group capacity',
          price: currentLang === 'vi' ? 'Dưới 25 khách / Tour' : 'Up to 25 guests / Tour',
          unit: '',
          isSpecial: false,
        },
      ],
      ctaText: currentLang === 'vi' ? 'Yêu Cầu HDV Riêng' : 'Request Private Guide',
    },
  ];

  // 3 Exclusive Packages from Stitch Screen
  const packages = [
    {
      id: 'pkg-day-tour',
      badge: currentLang === 'vi' ? 'Tour 1 Ngày (Sáng - Chiều)' : '1-Day Tour (Morning - Afternoon)',
      isHero: false,
      title: currentLang === 'vi' ? 'Gói Day Tour "Chạm Sâu Di Sản"' : 'Day Tour "Deep Heritage Encounter"',
      desc:
        currentLang === 'vi'
          ? 'Lựa chọn hoàn hảo cho kỳ nghỉ ngắn ngày cuối tuần. Khám phá toàn cảnh mà không tốn công lên lịch trình chi tiết.'
          : 'Perfect choice for refreshing weekend escapes. Fully curated itinerary showcasing the best of the wetland canopy.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBmA9RhBkWCpGKxE6PAlY1UAGMblsH8UsfF-av5zvTyfHEXQieUBM-QZuOmb1X7gtACbDbbbJHG9W5HDMmSkx08H1buzTHnlCpMO71iTWYqdaPGDfaszg8Rw5v9jv63Ni3_WdyyBlmj2VDP1ypaOXqgRDasSBk3FEZXCsS31tLQXm0vxSaTN6vdd5rCGpQ8foxxqAYFmrUpB8qEeeMVV79GddKIRroCUlMuGGeYvqpbjDfKldOFjzCK8A',
      fallbackImage: `${import.meta.env.BASE_URL}images/pricing/promo-sampan.jpg`,
      features: [
        currentLang === 'vi' ? 'Vé vào cổng & cung đường 5km xuyên rừng' : 'Gate ticket & 5km elevated forest walkway',
        currentLang === 'vi' ? 'Hải trình 45 phút xuồng ba lá lướt thảm bèo' : '45-minute handcrafted wooden sampan cruise',
        currentLang === 'vi' ? 'Bữa trưa đặc sản: Cá lóc nướng trui & canh chua' : 'Authentic lunch: Grilled snakehead fish & sour soup',
        currentLang === 'vi' ? 'Thưởng thức trà thảo mộc & bánh xèo Nam Bộ' : 'Herbal tea tasting & crispy Mekong banh xeo',
      ],
      oldPrice: '480.000 VNĐ',
      price: '390.000',
      priceUnit: 'VNĐ',
      priceSubtitle: currentLang === 'vi' ? 'Giá trọn gói / khách' : 'All-inclusive / guest',
      btnText: currentLang === 'vi' ? 'Đặt Gói Day Tour' : 'Book Day Tour',
    },
    {
      id: 'pkg-2n1d',
      badge: currentLang === 'vi' ? 'Kỳ Nghỉ 2 Ngày 1 Đêm' : '2 Days 1 Night Retreat',
      isHero: true,
      heroBadge: currentLang === 'vi' ? 'Bán Chạy Nhất' : 'Best Seller',
      title: currentLang === 'vi' ? 'Gói Nghỉ Dưỡng Thảnh Thơi 2N1Đ' : 'Serene 2D1N Eco-Retreat Package',
      desc:
        currentLang === 'vi'
          ? 'Trải nghiệm trọn vẹn 24 giờ tách biệt cùng thiên nhiên hoang sơ, đón bình minh vàng ươm rọi qua tán tràm cổ thụ.'
          : 'Immerse yourself for 24 tranquil hours secluded in wild nature, welcoming golden sunrays through ancient cajeput branches.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuARkYUGMgFe-YeuCwyZJ5JCUxkRdnvJ8SaEHB1ALE89rLImfhlLIUBI6DGBmmMd9CxFcHBPRQ0p4EkgAxmquwpfaN5QDu4tw7RlG02u3Jgu9wEGJdV8CWFSsiCu0Y4uEJl-1QqQWJ7LKWmFvBsFJb3ZcIfGDba1En0U9Cs-8SHxCbhAw3qiib4fhjKruppMjsWxZjfNkxD1gXzMwt5z-lrmneh0dY3RXinB4ACbzBlaL1TxZYldXE9Bdw',
      fallbackImage: `${import.meta.env.BASE_URL}images/pricing/promo-hotel.jpg`,
      features: [
        currentLang === 'vi' ? '1 đêm tại phòng Deluxe Khách sạn Vọng Cảnh view rừng' : '1 night in Deluxe Forest View Room at Landmark Tower',
        currentLang === 'vi' ? 'Buffet sáng đồng quê & 1 bữa tiệc tối hoàng hôn ven hồ' : 'Country breakfast buffet & 1 lakeside sunset dinner',
        currentLang === 'vi' ? 'Chèo xuồng ba lá ngắm sen súng buổi sớm mai' : 'Early morning sampan cruise amidst blooming lilies',
        currentLang === 'vi' ? 'Vé tháp quan sát 38m & mượn cần câu cá thư giãn' : '38m observation tower pass & complimentary fishing gear',
      ],
      oldPrice: '2.100.000 VNĐ',
      price: '1.690.000',
      priceUnit: 'VNĐ',
      priceSubtitle: currentLang === 'vi' ? 'Giá combo / 2 khách' : 'Combo price / 2 guests',
      btnText: currentLang === 'vi' ? 'Đặt Combo 2N1Đ Ngay' : 'Book 2D1N Combo',
    },
    {
      id: 'pkg-group',
      badge: currentLang === 'vi' ? 'Dành Cho Đoàn Từ 20 Khách' : 'Groups From 20 Guests',
      isHero: false,
      title: currentLang === 'vi' ? 'Gói Gala Đoàn & Team Building Ven Rạch' : 'Riverside Corporate Gala & Team Building',
      desc:
        currentLang === 'vi'
          ? 'Gắn kết tinh thần đồng đội với chuỗi trò chơi dân gian sông nước độc đáo (bắt cá mương, chèo xuồng tiếp sức, đu dây qua rạch).'
          : 'Ignite team spirit with authentic folk water challenges: canal fishing, relay sampan races, and rope crossings.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCDvl0QWpsAubcAGpBGUQXp5AA9K5_0Wv9oxUIWoKZ9qLnWL5elX0_bLpmdxNr2vtHKdpTNCIR9-BrMGBZODW3Fi3-A6eaLeu-0Ufi-Mh9ehy1AutUM78M6hERwWjmtnLqbh8S8v0HPNd6oZkgF_RQal-SrwTaIP2RbhPcNwtV2Ka_plTRGOoiZBlC0U-8o6fOa8enQCKqA-83Yhs5FzxyHddVmrZ6Xe6fwzvF9b5WtCvlLJv9jJdwGRg',
      fallbackImage: `${import.meta.env.BASE_URL}images/pricing/promo-group.jpg`,
      features: [
        currentLang === 'vi' ? 'Sân bãi trò chơi dân gian & trang bị áo bà ba truyền thống' : 'Folk games arena & traditional Southern ba-ba attire',
        currentLang === 'vi' ? 'Âm thanh, ánh sáng & sân khấu Gala ngoài trời chuyên nghiệp' : 'Professional outdoor stage, audio, and atmospheric lighting',
        currentLang === 'vi' ? 'Tiệc nướng BBQ thịt xiên & lẩu đồng quê thịnh soạn' : 'Sumptuous BBQ skewers & rich river delta hotpot dinner',
        currentLang === 'vi' ? 'MC hoạt náo viên năng động & hỗ trợ xuyên suốt' : 'Dynamic MC host & dedicated event coordinators',
      ],
      oldPrice: null,
      price: '520.000',
      priceUnit: 'VNĐ',
      priceSubtitle: currentLang === 'vi' ? 'Mức giá / Khách (Trọn gói)' : 'Rate / Guest (All-in)',
      btnText: currentLang === 'vi' ? 'Nhận Báo Giá Đoàn' : 'Request Group Quote',
    },
  ];

  return (
    <main className="flex-grow bg-background text-on-surface antialiased selection:bg-[#555555] selection:text-white">
      {/* =========================================================================
          1. HERO SECTION (Art-Monograph Heritage Banner)
          (Matching Stitch Screen 146a3478c63444318f5d1988c3e6ba16)
          - Ultra-sharp aerial photography, linear depth scrim, NO video button
      ========================================================================= */}
      <section className="relative w-full h-[760px] min-h-[560px] flex items-end pb-20 justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJ8IoPx28JALlT85xBC135Y8NBsd_sgHbBe_31I4vRj23spqSLPVwwzrv82IZmAyEdu8jjDohLUnsKLkO-18KjwKSg4DgUjgoaSR1GDVL1kXx9qwxbBKv-lg1WY4isBPSyff5NSrmFXFdM9Gd0BFH7YnTjFngjMUiCx6RlBGEr3CQYCfZAEKbKf0h_tzYu7XRcRfvkxuMShQqtOUz_WCYuTBTaioHm1R1fE1mdKfT8gwk3LFE-c_7QpA')`,
          }}
        />

        {/* Linear Depth Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15 pointer-events-none" />

        {/* Architectural border inner frame accent */}
        <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-3 mb-4 text-[#e6e6ac]">
            <span className="h-[1px] w-8 bg-[#e6e6ac]/60" />
            <p className="font-eyebrow-serif text-eyebrow-serif tracking-[0.25em] uppercase">
              {currentLang === 'vi'
                ? 'BẢN GIAO HƯỞNG MIỀN TÂY SÔNG NƯỚC'
                : 'MEKONG DELTA HERITAGE SYMPHONY'}
            </p>
            <span className="h-[1px] w-8 bg-[#e6e6ac]/60" />
          </div>

          <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-[54px] font-normal leading-tight tracking-[0.05em] uppercase mb-6 text-surface-container-lowest">
            {currentLang === 'vi'
              ? 'BẢNG GIÁ DỊCH VỤ & ĐẶC QUYỀN TRẢI NGHIỆM'
              : 'SERVICE RATES & EXPERIENTIAL PRIVILEGES'}
          </h1>

          <p className="font-body-lg text-white/90 max-w-2xl mx-auto font-light text-base md:text-lg mb-8 tracking-wide">
            {currentLang === 'vi'
              ? 'Minh bạch — Chu đáo — Đậm đà phong vị đồng bằng rực rỡ mùa sen súng ngát hương giữa rừng tràm cổ thụ.'
              : 'Transparent, thoughtful, and steeped in southern hospitality amidst fragrant blooming lotus and ancient wetlands.'}
          </p>

          {/* Quick Anchor Badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-white/90">
            <a
              href="#ve-tham-quan"
              className="px-4 py-2 border border-white/30 hover:border-white text-label-meta font-label-meta uppercase tracking-[0.15em] backdrop-blur-sm bg-black/20 hover:bg-black/40 transition-colors"
            >
              {currentLang === 'vi' ? 'Vé Tham Quan & Xuồng' : 'Admission & Sampan'}
            </a>
            <a
              href="#luu-tru"
              className="px-4 py-2 border border-white/30 hover:border-white text-label-meta font-label-meta uppercase tracking-[0.15em] backdrop-blur-sm bg-black/20 hover:bg-black/40 transition-colors"
            >
              {currentLang === 'vi' ? 'Khách Sạn & Ẩm Thực' : 'Hotel & Dining'}
            </a>
            <a
              href="#combo"
              className="px-4 py-2 border border-[#B5B57F] text-[#f4f4eb] hover:bg-[#608A3D] text-label-meta font-label-meta uppercase tracking-[0.15em] backdrop-blur-sm bg-[#3f661d]/50 transition-colors"
            >
              {currentLang === 'vi' ? 'Combo Nghỉ Dưỡng Mùa Nước' : 'Seasonal Retreat Combos'}
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. EDITORIAL NARRATIVE PROLOGUE
          (Matching Stitch Screen 146a3478c63444318f5d1988c3e6ba16)
      ========================================================================= */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto" id="gioi-thieu">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Text & Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-label-meta text-label-meta uppercase text-primary tracking-[0.2em] mb-3 block font-semibold">
              {currentLang === 'vi' ? 'Gìn Giữ Tinh Hoa Bản Địa' : 'Preserving Native Essence'}
            </span>
            <h2 className="font-headline-lg text-headline-lg md:text-[34px] md:leading-tight text-on-surface font-normal mb-6">
              {currentLang === 'vi'
                ? 'Chạm vào an yên mộc mạc giữa ốc đảo xanh thuần khiết'
                : 'Embracing rustic serenity within a pristine green oasis'}
            </h2>
            <div className="w-16 h-[2px] bg-[#608A3D] mb-6" />
            <p className="font-body-md text-on-surface-variant mb-5 leading-relaxed">
              {currentLang === 'vi'
                ? 'Cách Sài Gòn chưa đầy 2 giờ di chuyển, Khu Du Lịch Sinh Thái Làng Nổi Tân Lập mở ra không gian nguyên sơ với cánh rừng tràm bạt ngàn 135 ha. Mọi chi phí dịch vụ tại đây được niêm yết chuẩn mực và minh bạch, nhằm mang lại cho quý khách một kỳ nghỉ dưỡng trọn vẹn, thanh lọc tâm trí và hòa nhịp cùng nhịp thở sông nước Cửu Long.'
                : 'Less than two hours from Saigon, Tan Lap Floating Village reveals 135 hectares of pristine wetlands. Every tariff is clearly articulated to assure peace of mind, mindful wellness, and harmony with the rhythm of the Mekong waterways.'}
            </p>
            <div className="flex items-center gap-6 pt-4 border-t border-outline-variant/40">
              <div>
                <p className="font-headline-md text-headline-md text-primary">5,000 m</p>
                <p className="text-label-meta font-label-meta uppercase tracking-[0.15em] text-outline">
                  {currentLang === 'vi' ? 'Cung đường đan xuyên rừng' : 'Forest trail length'}
                </p>
              </div>
              <div className="w-px h-10 bg-outline-variant/40" />
              <div>
                <p className="font-headline-md text-headline-md text-primary">38 m</p>
                <p className="text-label-meta font-label-meta uppercase tracking-[0.15em] text-outline">
                  {currentLang === 'vi' ? 'Độ cao tháp quan sát' : 'Tower height'}
                </p>
              </div>
              <div className="w-px h-10 bg-outline-variant/40" />
              <div>
                <p className="font-headline-md text-headline-md text-primary">100%</p>
                <p className="text-label-meta font-label-meta uppercase tracking-[0.15em] text-outline">
                  {currentLang === 'vi' ? 'Thiên nhiên nguyên bản' : 'Pristine wilderness'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Dual Framed Photography */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative overflow-hidden border border-outline-variant/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlJQrNQpKPgS-PeHRFolJII2ZXSQn2m6mObUPGDWHg1rfyfXSphf1Pn6lImlSLxYOf0R5hxpxuCt1-JOsIs9F082NqHjxaRMZyqS5ecD2Es4J1rpWFxo5eI4WUFkIgJkq2sgGk1qb0t6w7G490JD1cIQ8T8vLU9FW1zRVZQ7LyMptru4TaKcdTzNkMAVZaJYVKzVQTRVQoBvKbGAczdyntzB5XF3XZuJkr3ScWERgX-PnuzmOBeFwBqA"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}images/cheo-xuong.jpg`;
                }}
                alt="Xuồng ba lá Làng Nổi Tân Lập"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="p-4 bg-surface-container-low border-t border-outline-variant/30">
                <span className="font-label-meta text-label-meta uppercase tracking-[0.15em] text-outline">
                  {currentLang === 'vi' ? 'Hình ảnh tư liệu' : 'Archive Chronicle'}
                </span>
                <p className="font-headline-md text-base text-on-surface">
                  {currentLang === 'vi' ? 'Xuồng ba lá len lỏi luồng tràm' : 'Sampan threading cajeput canal'}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden border border-outline-variant/40 sm:translate-y-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2HQH5k6p4wz2mAmCt2gHNbmybpvwnGZDOpnOhGvK8TxY9K41HO7ixuF1NSi4hDJ-XxXoHHCxtwSC943RxHgzM1YbbS3wVJ73RCQohXacT7bv9lzkHbe7RRr_3a6wV6gGU8kkogWtyE-lLWYLS7Vy2fLIyg17-haNKJFVaq9AgIhG30uldg8SphVJ41y2hfButUlxTvzmlm1NripIhsDYUW2LqoQ5WvXfFTEVOT4yjKJ5ZznL4Dcz2w"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}images/ca-loc-nuong.jpg`;
                }}
                alt="Ẩm thực đồng quê Tân Lập"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="p-4 bg-surface-container-low border-t border-outline-variant/30">
                <span className="font-label-meta text-label-meta uppercase tracking-[0.15em] text-outline">
                  {currentLang === 'vi' ? 'Đặc sản miệt vườn' : 'Riverside Delicacy'}
                </span>
                <p className="font-headline-md text-base text-on-surface">
                  {currentLang === 'vi' ? 'Cá lóc nướng trui & Rau đồng' : 'Straw-grilled snakehead fish & herbs'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. TICKET & ACTIVITY TARIFF (Structured Magazine Table & Cards)
          (Matching Stitch Screen 146a3478c63444318f5d1988c3e6ba16)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/40" id="ve-tham-quan">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-eyebrow-serif text-eyebrow-serif uppercase tracking-[0.2em] text-primary mb-2">
              {currentLang === 'vi' ? 'BIỂU PHÍ NIÊM YẾT MỚI NHẤT' : 'OFFICIAL PUBLISHED TARIFF'}
            </p>
            <h2 className="font-headline-xl text-headline-xl md:text-4xl text-on-surface font-normal mb-4">
              {currentLang === 'vi'
                ? 'Vé Tham Quan & Hoạt Động Rừng Tràm'
                : 'Admission & Wetland Experiences'}
            </h2>
            <p className="text-on-surface-variant font-body-md text-base">
              {currentLang === 'vi'
                ? 'Giá vé áp dụng cho tất cả các ngày trong tuần, bao gồm thứ Bảy, Chủ Nhật và các dịp Lễ Tết truyền thống.'
                : 'Standard rates apply seven days a week, including weekends and public holiday seasons.'}
            </p>
          </div>

          {/* Bento Grid Pricing Cards (6 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ticketCards.map((card) => (
              <div
                key={card.id}
                className={`bg-surface-container-lowest flex flex-col justify-between p-8 transition-colors ${
                  card.featured
                    ? 'border-2 border-primary relative'
                    : 'border border-outline-variant/40 hover:border-primary'
                }`}
              >
                {card.featured && (
                  <div className="absolute -top-3 left-6 bg-primary text-white px-3 py-1 text-label-meta font-label-meta uppercase tracking-[0.18em]">
                    {card.featureBadge}
                  </div>
                )}

                <div>
                  <div className={`flex items-center justify-between mb-4 ${card.featured ? 'mt-2' : ''}`}>
                    <span
                      className={`font-label-meta text-label-meta uppercase tracking-[0.15em] ${
                        card.featured ? 'text-primary font-semibold' : 'text-outline'
                      }`}
                    >
                      {card.badge}
                    </span>
                    <span className="material-symbols-outlined text-primary text-2xl">
                      {card.icon}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-2xl text-on-surface mb-2 font-normal">
                    {card.title}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                    {card.desc}
                  </p>

                  <div className="space-y-3 py-4 border-y border-outline-variant/30 text-body-sm font-body-sm">
                    {card.tiers.map((tier, tIdx) => (
                      <div key={tIdx} className="flex justify-between items-baseline">
                        <span className={tier.isSpecial ? 'text-outline' : 'text-on-surface'}>
                          {tier.label}
                        </span>
                        {tier.isSpecial ? (
                          <span className="text-label-meta font-label-meta uppercase tracking-wider text-secondary font-semibold">
                            {tier.price}
                          </span>
                        ) : (
                          <span
                            className={`font-headline-md ${
                              tier.isBoldPrice ? 'text-2xl font-semibold' : 'text-xl font-medium'
                            } text-primary`}
                          >
                            {tier.price}{' '}
                            <span className="text-xs uppercase font-sans">{tier.unit}</span>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenBooking) {
                        onOpenBooking({ title: card.title, price: card.tiers[0]?.price, category: 'tour' });
                      } else {
                        const el = document.getElementById('dat-ve');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full text-center block py-3 text-label-cta font-label-cta tracking-[0.18em] uppercase transition-colors cursor-pointer font-bold ${
                      card.featured
                        ? 'bg-[#608A3D] text-white hover:bg-[#48692C]'
                        : 'border border-[#608A3D] text-primary hover:bg-[#608A3D] hover:text-white'
                    }`}
                  >
                    {card.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ACCOMMODATION & GASTRONOMY (Editorial Split Screen)
          (Matching Stitch Screen 146a3478c63444318f5d1988c3e6ba16)
      ========================================================================= */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto" id="luu-tru">
        <div className="flex flex-col gap-20">
          {/* Section Title Header */}
          <div className="border-b border-outline-variant/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-meta text-label-meta uppercase text-primary tracking-[0.2em] mb-2 block font-semibold">
                {currentLang === 'vi'
                  ? 'Không Gian Nghỉ Dưỡng & Tiệc Nướng Ven Rạch'
                  : 'Sanctuary Stays & Canalside Dining'}
              </span>
              <h2 className="font-headline-xl text-headline-xl md:text-4xl text-on-surface font-normal">
                {currentLang === 'vi'
                  ? 'Lưu Trú Sinh Thái & Ẩm Thực Miền Tây'
                  : 'Eco Accommodations & Southern Heritage Gastronomy'}
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md text-sm">
              {currentLang === 'vi'
                ? 'Tận hưởng trọn vẹn sự tĩnh lặng tuyệt đối khi màn đêm buông xuống giữa rừng tràm cùng các tiện nghi đạt chuẩn 4 sao mộc mạc.'
                : 'Experience absolute tranquility as dusk falls over the forest canopy, paired with refined 4-star rustic amenities.'}
            </p>
          </div>

          {/* Split Block 1: Khách Sạn Tháp Vọng Cảnh */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 overflow-hidden border border-outline-variant/40 relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCgDHwmsvCQdclu0BJ3-1xSq1KEip2GrbYmaVT8TJV9Nys-x7YuGTH9qUg8NBbmKZ2KR9HA52sb2vEOyOb5iZCIiGaveX1QZD_HQYF74-1MeC3Fh4skP2mHN8o2mcGvnhP5eyriyYO0G2maROeRWD56dYLRef4NKZqpfIcp4ZIgO2wd8R9WUPtfuMx6UfxqpHMMSYvMH2McORNefHpcsVdLff_RayDRvVpdxNhqwOd00zC3LkuyUnVSQ"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}images/room-suite.jpg`;
                }}
                alt="Khách sạn sinh thái Làng Nổi Tân Lập"
                className="w-full h-[420px] object-cover hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 text-white border border-white/20">
                <p className="font-label-meta text-label-meta uppercase tracking-widest text-[#B5B57F]">
                  {currentLang === 'vi' ? 'Khách sạn Tháp Vọng Cảnh 8 Tầng' : '8-Storey Tower Hotel'}
                </p>
                <p className="font-headline-md text-sm">
                  {currentLang === 'vi'
                    ? 'Phòng ngắm bình minh rừng nguyên sinh'
                    : 'Sunrise viewing suites facing virgin wetlands'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-3 py-1 bg-surface-container text-primary text-label-meta font-label-meta uppercase tracking-[0.15em] font-semibold">
                {currentLang === 'vi' ? 'Lưu Trú Cao Cấp' : 'Premier Accommodations'}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-normal">
                {currentLang === 'vi'
                  ? 'Khách Sạn Sinh Thái & Phòng Nghỉ Biệt Thự'
                  : 'Eco Hotel Suites & Canalside Villas'}
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {currentLang === 'vi'
                  ? 'Tọa lạc ngay trung tâm khu du lịch với 8 tầng ngắm trọn toàn cảnh Đồng Tháp Mười bao la. Mỗi phòng đều trang bị ban công thoáng đãng, điều hòa 2 chiều êm ái, bồn tắm gỗ thơm và miễn phí vé tham quan rừng.'
                  : 'Located at the heart of the reserve, our 8-storey tower commands panoramic wetland views. Features private balconies, fragrant wooden tubs, and complimentary entrance passes.'}
              </p>
              <div className="space-y-3 border-t border-b border-outline-variant/30 py-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface font-medium">
                    {currentLang === 'vi' ? 'Phòng Superior Rừng Tràm (2 Khách)' : 'Superior Forest Room (2 Guests)'}
                  </span>
                  <span className="font-headline-md text-xl text-primary font-medium">
                    950.000 VNĐ <span className="text-xs text-outline font-sans">/ Đêm</span>
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface font-medium">
                    {currentLang === 'vi' ? 'Phòng Deluxe View Hồ Súng (2-3 Khách)' : 'Deluxe Lily Pond View (2-3 Guests)'}
                  </span>
                  <span className="font-headline-md text-xl text-primary font-medium">
                    1.450.000 VNĐ <span className="text-xs text-outline font-sans">/ Đêm</span>
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface font-medium">
                    {currentLang === 'vi' ? 'Suite Panorama Tầng 8 Hoàng Hôn (Gia Đình)' : 'Level 8 Panorama Sunset Suite (Family)'}
                  </span>
                  <span className="font-headline-md text-xl text-primary font-medium">
                    2.350.000 VNĐ <span className="text-xs text-outline font-sans">/ Đêm</span>
                  </span>
                </div>
                <p className="text-label-meta font-label-meta uppercase tracking-wider text-secondary pt-1">
                  {currentLang === 'vi'
                    ? '* Đã bao gồm buffet điểm tâm đồng quê & vé tắm hồ bơi sinh thái.'
                    : '* Country breakfast buffet and ecological pool access included.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onOpenBooking) {
                    onOpenBooking({ title: 'Khách Sạn Sinh Thái Tháp 8 Tầng', category: 'hotel' });
                  } else {
                    const el = document.getElementById('dat-ve');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-3 bg-[#608A3D] text-white px-8 py-3.5 text-label-cta font-label-cta uppercase tracking-[0.18em] hover:bg-[#48692C] transition-colors cursor-pointer font-bold"
              >
                <span>{currentLang === 'vi' ? 'Kiểm Tra Phòng Trống' : 'Check Availability'}</span>
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </button>
            </div>
          </div>

          {/* Split Block 2: Ẩm Thực & Cắm Trại Rừng Tràm */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <span className="inline-block px-3 py-1 bg-surface-container text-primary text-label-meta font-label-meta uppercase tracking-[0.15em] font-semibold">
                {currentLang === 'vi' ? 'Ẩm Thực & Dã Ngoại' : 'Dining & Wilderness Excursions'}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-normal">
                {currentLang === 'vi'
                  ? 'Đại Tiệc Đồng Quê & Lều Cắm Trại Rừng'
                  : 'Countryside Feasts & Forest Glamping'}
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {currentLang === 'vi'
                  ? 'Thưởng thức ẩm thực sông nước tươi rói được đánh bắt trong ngày tại nhà hàng nổi: cá lóc đồng nướng trui cuộn lá sen non chấm mắm me, lẩu mắm cá linh bèo bọt bông điên điển thơm lừng nức mũi.'
                  : 'Savor seasonal Mekong seafood caught fresh daily: straw-grilled snakehead fish with young lotus leaves and tangy tamarind dip, simmered fish hotpot with aromatic sesbania flowers.'}
              </p>
              <div className="space-y-3 border-t border-b border-outline-variant/30 py-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface font-medium">
                    {currentLang === 'vi' ? 'Cơm phần đặc sản miền Tây (Set Menu)' : 'Southern Specialty Set Menu'}
                  </span>
                  <span className="font-headline-md text-xl text-primary font-medium">
                    180.000 - 350.000 <span className="text-xs text-outline font-sans">VNĐ / Khách</span>
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface font-medium">
                    {currentLang === 'vi' ? 'Tiệc cá lóc nướng trui cuốn lá sen non' : 'Straw-grilled snakehead fish feast'}
                  </span>
                  <span className="font-headline-md text-xl text-primary font-medium">
                    220.000 <span className="text-xs text-outline font-sans">VNĐ / Con (1.2kg)</span>
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-on-surface font-medium">
                    {currentLang === 'vi' ? 'Thuê lều cắm trại cao cấp qua đêm giữa rừng' : 'Overnight Safari Glamping Tent'}
                  </span>
                  <span className="font-headline-md text-xl text-primary font-medium">
                    150.000 - 250.000 <span className="text-xs text-outline font-sans">VNĐ / Lều</span>
                  </span>
                </div>
                <p className="text-label-meta font-label-meta uppercase tracking-wider text-outline pt-1">
                  {currentLang === 'vi'
                    ? '* Lều trang bị đệm hơi, túi ngủ vệ sinh, đèn bão cổ điển và bảo vệ tuần tra 24/7.'
                    : '* Tents equipped with air mattress, sleeping bags, retro storm lanterns, and 24/7 patrol.'}
                </p>
              </div>
              <Link
                to="/khach-san-am-thuc#culinary"
                className="inline-flex items-center gap-3 border border-[#608A3D] text-primary px-8 py-3.5 text-label-cta font-label-cta uppercase tracking-[0.18em] hover:bg-[#608A3D] hover:text-white transition-colors font-bold"
              >
                <span>{currentLang === 'vi' ? 'Xem Thực Đơn Đầy Đủ' : 'View Full Menu'}</span>
                <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
              </Link>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden border border-outline-variant/40 relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBTcnLvuqWf2JJNOKsqwgyaUZXZOF03oeSEZOtr_tLptJmQ9DqzfEV3esZxytjryqx8vXNYfrWy9VnfJpaxlzruvEOz_U15iImVrstaSyiAegzK3HNePNxv9r2a7O28ViYWMXBp-uqq-topCNRSyQY_khYdIEScL4bheOB_yhuWQMA8WQPaWG7WJUeSgZKm-p0lRY0gAS12n5UER6EQVH_UzOM9aTaVbWmsRj53mOLLIozdorC7GEkmg"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}images/pricing/promo-culinary.jpg`;
                }}
                alt="Cắm trại qua đêm rừng tràm Tân Lập"
                className="w-full h-[420px] object-cover hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 text-white border border-white/20 text-right">
                <p className="font-label-meta text-label-meta uppercase tracking-widest text-[#B5B57F]">
                  {currentLang === 'vi' ? 'Glamping Trải Nghiệm' : 'Safari Glamping'}
                </p>
                <p className="font-headline-md text-sm">
                  {currentLang === 'vi'
                    ? 'Ngủ giữa ngàn sao và hương tràm đêm'
                    : 'Sleep beneath starlight and nocturnal cajeput fragrance'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. EXCLUSIVE PACKAGES (Curated High-End Editorial Bento)
          (Matching Stitch Screen 146a3478c63444318f5d1988c3e6ba16)
      ========================================================================= */}
      <section className="py-20 md:py-28 bg-surface-container border-y border-outline-variant/40" id="combo">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-eyebrow-serif text-eyebrow-serif uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              {currentLang === 'vi' ? 'KỲ NGHỈ THẢNH THƠI & TIẾT KIỆM' : 'EFFORTLESS & VALUE-FOCUSED HOLIDAYS'}
            </span>
            <h2 className="font-headline-xl text-headline-xl md:text-4xl text-on-surface font-normal mb-4">
              {currentLang === 'vi'
                ? 'Bộ Sưu Tập Gói Ưu Đãi Mùa Nước Nổi'
                : 'Curated Floating Season Package Collection'}
            </h2>
            <p className="text-on-surface-variant font-body-md text-base">
              {currentLang === 'vi'
                ? 'Các gói kỳ nghỉ thiết kế chuyên sâu dành cho gia đình, cặp đôi hoặc đoàn thể muốn chạm sâu vào di sản sinh thái với chi phí tối ưu nhất.'
                : 'Thoughtfully crafted getaways for families, couples, and corporate retreats seeking deep cultural connection with optimized value.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-surface-container-lowest flex flex-col justify-between overflow-hidden group relative ${
                  pkg.isHero ? 'border-2 border-[#608A3D]' : 'border border-outline-variant/50'
                }`}
              >
                {pkg.isHero && (
                  <div className="absolute top-4 right-4 z-10 bg-[#608A3D] text-white px-3 py-1 text-label-meta font-label-meta uppercase tracking-[0.18em] font-semibold">
                    {pkg.heroBadge}
                  </div>
                )}

                <div>
                  <div className="h-56 w-full overflow-hidden relative">
                    <img
                      src={pkg.image}
                      onError={(e) => {
                        e.currentTarget.src = pkg.fallbackImage;
                      }}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 text-label-meta font-label-meta uppercase tracking-[0.15em] text-primary font-semibold">
                      {pkg.badge}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-headline-lg text-2xl text-on-surface mb-2 font-normal">
                      {pkg.title}
                    </h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                      {pkg.desc}
                    </p>

                    <ul className="space-y-2.5 text-body-sm font-body-sm text-on-surface-variant mb-6">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-[18px]">
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-baseline">
                      <div>
                        <span className="text-label-meta font-label-meta uppercase tracking-[0.15em] text-outline block">
                          {pkg.priceSubtitle}
                        </span>
                        {pkg.oldPrice && (
                          <span className="text-xs text-outline line-through">{pkg.oldPrice}</span>
                        )}
                      </div>
                      <span className="font-headline-md text-2xl text-primary font-bold">
                        {pkg.price} <span className="text-xs uppercase font-sans">{pkg.priceUnit}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenBooking) {
                        onOpenBooking({ title: pkg.title, price: `${pkg.price} VNĐ`, category: 'combo' });
                      } else {
                        const el = document.getElementById('dat-ve');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full text-center block py-3.5 text-label-cta font-label-cta tracking-[0.18em] uppercase transition-colors cursor-pointer font-bold ${
                      pkg.isHero
                        ? 'bg-[#608A3D] text-white hover:bg-[#48692C]'
                        : 'border border-[#608A3D] text-primary hover:bg-[#608A3D] hover:text-white'
                    }`}
                  >
                    {pkg.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. RESERVATION FORM & POLICIES (Sharp Monolithic Inputs)
          (Matching Stitch Screen 146a3478c63444318f5d1988c3e6ba16)
      ========================================================================= */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto" id="dat-ve">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left 7 cols: Interactive Booking Inquire Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/40 p-8 md:p-12">
            <span className="font-label-meta text-label-meta uppercase text-primary tracking-[0.2em] mb-2 block font-semibold">
              {currentLang === 'vi' ? 'Đặt Trước Để Nhận Ưu Đãi 10%' : 'Book in Advance for 10% Savings'}
            </span>
            <h2 className="font-headline-lg text-headline-lg md:text-3xl text-on-surface font-normal mb-6">
              {currentLang === 'vi'
                ? 'Đăng Ký Đặt Vé & Combo Trải Nghiệm'
                : 'Reserve Tickets & Experience Packages'}
            </h2>
            <p className="text-body-md text-on-surface-variant mb-8">
              {currentLang === 'vi'
                ? 'Quý khách vui lòng để lại thông tin đặt vé, bộ phận lễ tân Làng Nổi Tân Lập sẽ liên hệ xác nhận lịch trình và gửi mã QR vé điện tử trong vòng 15 phút.'
                : 'Please provide your details below. Our concierge will contact you within 15 minutes with official confirmation and electronic QR admission.'}
            </p>

            {submitted ? (
              <div className="p-6 bg-primary/10 border border-primary text-primary mb-6">
                <p className="font-headline-md text-lg font-bold mb-1">
                  {currentLang === 'vi' ? 'Gửi Yêu Cầu Thành Công!' : 'Reservation Submitted Successfully!'}
                </p>
                <p className="text-body-sm font-body-sm">
                  {currentLang === 'vi'
                    ? 'Cảm ơn Quý khách! Lễ tân Làng Nổi Tân Lập sẽ liên hệ với bạn trong vòng 15 phút.'
                    : 'Thank you! Our concierge will get in touch with you within 15 minutes.'}
                </p>
              </div>
            ) : null}

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.15em] text-on-surface-variant mb-2">
                    {currentLang === 'vi' ? 'Họ & Tên Khách Hàng *' : 'Guest Full Name *'}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="NGUYỄN VĂN A"
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary focus:ring-0 text-body-md p-3.5 rounded-none outline-none uppercase placeholder:tracking-wider placeholder:text-outline/70"
                  />
                </div>
                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.15em] text-on-surface-variant mb-2">
                    {currentLang === 'vi' ? 'Số Điện Thoại / Zalo *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0908 123 456"
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary focus:ring-0 text-body-md p-3.5 rounded-none outline-none placeholder:text-outline/70"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.15em] text-on-surface-variant mb-2">
                    {currentLang === 'vi' ? 'Ngày Dự Kiến Tham Quan *' : 'Preferred Visit Date *'}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary focus:ring-0 text-body-md p-3 rounded-none outline-none text-on-surface"
                  />
                </div>
                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.15em] text-on-surface-variant mb-2">
                    {currentLang === 'vi' ? 'Dịch Vụ Quan Tâm *' : 'Selected Service *'}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary focus:ring-0 text-body-md p-3.5 rounded-none outline-none text-on-surface"
                  >
                    <option value="combo-180k">
                      {currentLang === 'vi'
                        ? 'Combo Tham Quan + Xuồng Ba Lá + Tháp (180k)'
                        : 'Combo Gate + Sampan + 38m Tower (180k)'}
                    </option>
                    <option value="tour-day">
                      {currentLang === 'vi'
                        ? 'Gói Day Tour Chạm Sâu Di Sản (390k)'
                        : 'Full Day Heritage Tour (390k)'}
                    </option>
                    <option value="hotel-2n1d">
                      {currentLang === 'vi'
                        ? 'Gói Nghỉ Dưỡng Khách Sạn 2N1Đ (1.690k)'
                        : '2D1N Hotel Retreat Package (1,690k)'}
                    </option>
                    <option value="glamping">
                      {currentLang === 'vi'
                        ? 'Lều Cắm Trại Rừng Tràm & Tiệc Nướng'
                        : 'Forest Glamping & BBQ Dinner'}
                    </option>
                    <option value="custom-group">
                      {currentLang === 'vi'
                        ? 'Đặt Tiệc Gala & Team Building Cho Đoàn'
                        : 'Corporate Gala & Team Building'}
                    </option>
                    <option value="gate-only">
                      {currentLang === 'vi'
                        ? 'Vé Vào Cổng Cơ Bản (70k)'
                        : 'Standard Gate Admission (70k)'}
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.15em] text-on-surface-variant mb-2">
                    {currentLang === 'vi' ? 'Số Lượng Khách Dự Kiến' : 'Estimated Guest Count'}
                  </label>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary focus:ring-0 text-body-md p-3.5 rounded-none outline-none text-on-surface"
                  />
                </div>
                <div>
                  <label className="block font-label-meta text-label-meta uppercase tracking-[0.15em] text-on-surface-variant mb-2">
                    {currentLang === 'vi' ? 'Yêu Cầu Đặc Biệt (Nếu Có)' : 'Special Inquiries (Optional)'}
                  </label>
                  <input
                    type="text"
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleInputChange}
                    placeholder={
                      currentLang === 'vi'
                        ? 'Ăn chay, phòng view cao, xuất hóa đơn VAT...'
                        : 'Vegetarian meals, high-floor room, VAT invoice...'
                    }
                    className="w-full bg-surface-container-low border border-outline-variant/60 focus:border-primary focus:ring-0 text-body-md p-3.5 rounded-none outline-none placeholder:text-outline/70"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  name="policyAgree"
                  id="policy_agree"
                  checked={formData.policyAgree}
                  onChange={handleInputChange}
                  required
                  className="w-4 h-4 text-[#608A3D] focus:ring-0 rounded-none mt-1 border-outline-variant"
                />
                <label htmlFor="policy_agree" className="text-body-sm font-body-sm text-on-surface-variant">
                  {currentLang === 'vi'
                    ? 'Tôi đồng ý với chính sách đặt giữ chỗ và điều khoản bảo mật thông tin khách hàng của Làng Nổi Tân Lập.'
                    : 'I agree with the reservation policies and data protection terms of Tan Lap Floating Village.'}
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#608A3D] hover:bg-[#48692C] text-white py-4 text-label-cta font-label-cta tracking-[0.18em] uppercase rounded-none transition-colors duration-200 font-bold cursor-pointer"
              >
                {currentLang === 'vi'
                  ? 'GỬI YÊU CẦU ĐẶT CHỖ & NHẬN MÃ ƯU ĐÃI'
                  : 'SUBMIT INQUIRY & RECEIVE PROMO CODE'}
              </button>
            </form>
          </div>

          {/* Right 5 cols: Policies & Regulations Monograph */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="font-label-meta text-label-meta uppercase text-primary tracking-[0.2em] mb-2 block font-semibold">
                  {currentLang === 'vi' ? 'Quy Định & Quyền Lợi Khách Hàng' : 'Policies & Visitor Rights'}
                </span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-normal">
                  {currentLang === 'vi'
                    ? 'Chính Sách Tham Quan & Hoàn Hủy'
                    : 'Visiting & Cancellation Guidelines'}
                </h3>
              </div>

              {/* Policy Items */}
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-headline-md text-lg text-on-surface mb-1 font-medium">
                    {currentLang === 'vi' ? 'Chính Sách Trẻ Em & Người Cao Tuổi' : 'Children & Senior Citizen Policy'}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    {currentLang === 'vi' ? (
                      <>
                        • Trẻ em dưới 0.9m: Miễn phí hoàn toàn vé vào cổng và vé xuồng khi đi cùng người lớn.
                        <br />
                        • Người cao tuổi trên 70 tuổi và người khuyết tật: Giảm trực tiếp 30% giá vé tham quan khi xuất trình CCCD tại quầy kiểm soát.
                      </>
                    ) : (
                      <>
                        • Children under 0.9m: 100% free entrance and boat fare when accompanied by adults.
                        <br />
                        • Seniors over 70 and differently-abled guests: 30% discount with valid ID at entry.
                      </>
                    )}
                  </p>
                </div>

                <div className="border-l-2 border-outline-variant/60 pl-4">
                  <h4 className="font-headline-md text-lg text-on-surface mb-1 font-medium">
                    {currentLang === 'vi' ? 'Quy Định Hoàn / Hủy Vé & Dời Lịch' : 'Cancellation & Date Change Policy'}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    {currentLang === 'vi' ? (
                      <>
                        • Báo trước 24 giờ so với giờ hẹn: Miễn phí hoàn 100% hoặc hỗ trợ dời ngày tham quan linh hoạt trong vòng 60 ngày.
                        <br />
                        • Hủy trong vòng 24 giờ do thời tiết mưa bão bất khả kháng: Được hoàn 100% cọc dịch vụ.
                      </>
                    ) : (
                      <>
                        • 24+ hours advance notice: 100% free cancellation or flexible rescheduling within 60 days.
                        <br />
                        • Same-day cancellation due to severe storms / force majeure: 100% deposit refunded.
                      </>
                    )}
                  </p>
                </div>

                <div className="border-l-2 border-outline-variant/60 pl-4">
                  <h4 className="font-headline-md text-lg text-on-surface mb-1 font-medium">
                    {currentLang === 'vi' ? 'Bảo Tồn Môi Trường Sinh Thái' : 'Ecological Stewardship Pledge'}
                  </h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    {currentLang === 'vi'
                      ? 'Khu bảo tồn áp dụng tiêu chuẩn Không Rác Thải Nhựa. Quý khách vui lòng không bẻ cành tràm, không xả rác xuống dòng kênh và tuân thủ mặc áo phao cứu sinh khi đi xuồng ba lá.'
                      : 'Our reserve adheres to zero single-use plastic principles. Please refrain from damaging branches, do not litter in waterways, and always wear life vests while boarding wooden sampans.'}
                  </p>
                </div>
              </div>

              {/* Quick Hotline Box */}
              <div className="p-6 bg-surface-container-low border border-outline-variant/40 flex items-center gap-5">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <p className="text-label-meta font-label-meta uppercase tracking-[0.15em] text-outline">
                    {currentLang === 'vi' ? 'Hotline Hỗ Trợ 24/7 & Đặt Vé Đoàn' : '24/7 Concierge & Group Booking'}
                  </p>
                  <p className="font-headline-md text-xl text-primary font-bold tracking-wide">
                    0272 3968 133 — 0966 893 943
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. NEWSLETTER BANNER (Olive Monolithic Heritage)
          (Matching Stitch Screen 146a3478c63444318f5d1988c3e6ba16)
      ========================================================================= */}
      <section className="bg-[#608A3D] text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-eyebrow-serif text-eyebrow-serif uppercase tracking-[0.25em] text-[#e6e6ac] mb-2 block">
            {currentLang === 'vi' ? 'BẢN TIN DI SẢN & ƯU ĐÃI THEO MÙA' : 'HERITAGE DISPATCH & SEASONAL PRIVILEGES'}
          </span>
          <h2 className="font-headline-xl text-headline-xl md:text-3xl font-normal mb-4 text-white">
            {currentLang === 'vi'
              ? 'Nhận Tin Dự Báo Mùa Bèo Nở & Voucher Nghỉ Dưỡng'
              : 'Receive Seasonal Bloom Forecasts & Exclusive Retreat Vouchers'}
          </h2>
          <p className="font-body-md text-white/80 max-w-xl mx-auto mb-8 font-light text-sm md:text-base">
            {currentLang === 'vi'
              ? 'Đăng ký để nhận các bộ ảnh thiên nhiên tuyệt đẹp theo mùa sen, mùa nước nổi và các đặc quyền giảm giá độc quyền dành cho khách hàng thân thiết.'
              : 'Subscribe to receive fine nature photobooks of water lily seasons and privileged member-only benefits.'}
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row max-w-xl mx-auto">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder={
                currentLang === 'vi'
                  ? 'NHẬP ĐỊA CHỈ EMAIL CỦA QUÝ KHÁCH...'
                  : 'ENTER YOUR EMAIL ADDRESS...'
              }
              required
              className="flex-1 bg-white text-on-surface placeholder:text-outline px-5 py-4 rounded-none border-0 outline-none text-body-sm font-body-sm tracking-wider uppercase"
            />
            <button
              type="submit"
              className="bg-[#B5B57F] hover:bg-[#a3a36c] text-[#1c1d00] font-label-cta text-label-cta px-8 py-4 uppercase tracking-[0.18em] rounded-none transition-colors duration-200 mt-2 sm:mt-0 font-bold cursor-pointer"
            >
              {newsletterSubscribed
                ? (currentLang === 'vi' ? 'ĐÃ ĐĂNG KÝ ✓' : 'SUBSCRIBED ✓')
                : (currentLang === 'vi' ? 'ĐĂNG KÝ' : 'SUBSCRIBE')}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
