import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ResortPage({ currentLang = 'vi', onOpenBooking }) {
  const [selectedService, setSelectedService] = useState('hotel-tower');
  const [checkInDate, setCheckInDate] = useState('18 / 11 / 2026');
  const [checkOutDate, setCheckOutDate] = useState('20 / 11 / 2026');
  const [guestsCount, setGuestsCount] = useState('2-adults');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title =
      currentLang === 'vi'
        ? 'Khách Sạn Nghỉ Dưỡng & Ẩm Thực Sinh Thái | Làng Nổi Tân Lập'
        : 'Eco Sanctuary Resort & Heritage Dining | Tan Lap Floating Village';
  }, [currentLang]);

  const handleBookingSearch = (e) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking({
        title:
          selectedService === 'hotel-tower'
            ? (currentLang === 'vi' ? 'Nghỉ Dưỡng Khách Sạn Tháp 8 Tầng' : '8-Storey Tower Hotel Stay')
            : selectedService === 'villa'
            ? (currentLang === 'vi' ? 'Biệt Thự Ven Rạch Nổi' : 'Canal-side Eco Villa')
            : selectedService === 'dining'
            ? (currentLang === 'vi' ? 'Đặt Bàn Nhà Hàng Ẩm Thực P12' : 'P12 Heritage Restaurant Table')
            : (currentLang === 'vi' ? 'Combo Trọn Gói Phòng & Ẩm Thực' : 'Room & Dining Package'),
        notes: `Nhận: ${checkInDate} | Trả: ${checkOutDate} | Khách: ${guestsCount}`,
      });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  // 4 Exact Accommodations from Stitch Screen d408aaa1f88d4a59bf8a143dd5d13ca1
  const rooms = [
    {
      id: 'room-double-balcony',
      badge: currentLang === 'vi' ? 'Khách Sạn Tháp • Ban Công Riêng' : 'Tower Hotel • Private Balcony',
      badgeColor: 'bg-primary text-on-primary',
      title:
        currentLang === 'vi'
          ? 'Phòng Giường Đôi Ban Công View Rừng & Sông'
          : 'Double Room — Balcony Forest & River View',
      subtitle: 'Double Room — Balcony Forest & River View',
      desc:
        currentLang === 'vi'
          ? 'Thiết kế mở tối đa với ban công rộng nhìn thẳng ra dòng sông uốn lượn và rặng tràm cổ thụ. Lý tưởng để đón bình minh mát lành và ngắm đàn chim bay về tổ.'
          : 'Expansive open layout with private scenic balcony overlooking the winding river and ancient cajeput groves. Perfect for tranquil sunrise breezes and watching bird flocks return at dusk.',
      specs: [
        { icon: 'aspect_ratio', label: currentLang === 'vi' ? 'Diện tích: 42 m²' : 'Area: 42 m²' },
        { icon: 'balcony', label: currentLang === 'vi' ? 'Ban công ngắm chim trời' : 'Canopy Birdwatching Balcony' },
        { icon: 'bathtub', label: currentLang === 'vi' ? 'Bồn tắm gốm men rạn' : 'Crackle-glazed Ceramic Tub' },
        { icon: 'king_bed', label: currentLang === 'vi' ? 'Giường King cao cấp' : 'Luxury King Bed' },
      ],
      price: '1.650.000',
      unit: currentLang === 'vi' ? 'VND / Đêm' : 'VND / Night',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD7qomPisOvRyq9vKLSKnEFt7G8vC5Slu2lqHFZhhdaCvC4ybW5KSDVUj7GLXCBojBWkjWuq-t9IvgHwcmgxOsRKdqssozXBiLikXvkEguSi6JpqfwJj2jJ5l2vGPLqhR88P9N1BL06jVxxMzxxrCCk961uSwQzBzms7r3WdqSds5QNn9BX6-Bx4xZo8HT963rVVxehiX17YTgxU3AqsZrqkIhqjF6ELNnvyfeZ1b7ZP5VizmLXFRiJUA',
      fallbackImage: `${import.meta.env.BASE_URL}images/resort/room-double-garden.jpg`,
    },
    {
      id: 'room-highfloor-panorama',
      badge: currentLang === 'vi' ? 'Tháp Cao Tầng 6 - 8' : 'Tower High Floor 6 - 8',
      badgeColor: 'bg-tertiary-container text-white',
      title:
        currentLang === 'vi'
          ? 'Phòng Đôi Tầng Cao Vọng Cảnh Rừng Tràm'
          : 'Double Room — High Floor Forest Panorama',
      subtitle: 'Double Room — High Floor Forest Panorama',
      desc:
        currentLang === 'vi'
          ? 'Tọa lạc tại các tầng cao nhất của tháp khách sạn. Cửa kính panorama kịch trần mở ra tầm nhìn bao la bát ngát ôm trọn biển tràm bạt ngàn của Nam Bộ.'
          : 'Situated on the pinnacle upper floors of the sanctuary tower. Floor-to-ceiling panoramic glass windows reveal boundless views across the legendary Southern wetlands.',
      specs: [
        { icon: 'aspect_ratio', label: currentLang === 'vi' ? 'Diện tích: 48 m²' : 'Area: 48 m²' },
        { icon: 'landscape', label: currentLang === 'vi' ? 'View 360° đỉnh tháp' : '360° Tower Summit View' },
        { icon: 'hot_tub', label: currentLang === 'vi' ? 'Bồn ngâm thảo dược gỗ pơmu' : 'Hinoki Herbal Soaking Tub' },
        { icon: 'coffee', label: currentLang === 'vi' ? 'Trà sen & cà phê mộc' : 'Artisanal Lotus Tea & Coffee' },
      ],
      price: '1.950.000',
      unit: currentLang === 'vi' ? 'VND / Đêm' : 'VND / Night',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCJf4_kWW_fv6IGD070g7FjX_mcQt1J5qrBIxucelK5e4VFwWyZJwN1uqr0nQboUdSsUWhC1Hn9TrI_FvnXKzmef2LlTlxITRyU8PXg5KKrbCfSzfolZeRjFC21yd7i4JpKDOvio1II-Me-O11BDlC3dhVdJgDo_JT_X8gMCsoPeRNhd_MVg6BfBLgMgXKsR0YtxE1nsJtp-u_GfEiZli4GQYTjxzv3cqERjXua71IyWyp-n38nmxbsAA',
      fallbackImage: `${import.meta.env.BASE_URL}images/resort/room-double-highfloor.jpg`,
    },
    {
      id: 'room-single-stream',
      badge: currentLang === 'vi' ? 'Linh Hoạt Tầng • Tĩnh Lặng' : 'Flexible Levels • Deep Solitude',
      badgeColor: 'bg-outline text-white',
      title:
        currentLang === 'vi'
          ? 'Phòng Đơn Tầng Cao & Thấp View Sông Rạch'
          : 'Single Room — Forest & River View',
      subtitle: 'Single Room — Forest & River View',
      desc:
        currentLang === 'vi'
          ? 'Thiết kế dành cho những chuyến độc hành tìm về sự tĩnh lặng hoặc nhà nghiên cứu thiên nhiên. Cửa sổ vòm mở tầm mắt hướng dòng kinh rợp bóng tràm mát rượi.'
          : 'Tailored for solitary mindful retreats or ecological naturalists. Arched wooden shutters open to gentle riparian waterways shadowed by tranquil cajeput branches.',
      specs: [
        { icon: 'aspect_ratio', label: currentLang === 'vi' ? 'Diện tích: 28 m²' : 'Area: 28 m²' },
        { icon: 'water', label: currentLang === 'vi' ? 'Nhìn trực diện mặt nước' : 'Direct Waterfront Vista' },
        { icon: 'shower', label: currentLang === 'vi' ? 'Vòi sen mưa thảo mộc' : 'Botanical Rain Shower' },
        { icon: 'menu_book', label: currentLang === 'vi' ? 'Góc đọc sách thư thái' : 'Peaceful Reading Nook' },
      ],
      price: '950.000',
      unit: currentLang === 'vi' ? 'VND / Đêm' : 'VND / Night',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCdnPl0XoVrp3R6EJR4oJOT3mG5HemJ8JNvj-NXIIpeKNPH5qf3Wxx1W2HSGlMdpQSDd9efTO4R1Rc_R1HTo9zd-6FA8mO0jPyaVDJh9P3ADL8pGCX-mZ44NKGziStVngoJjdPjDgRRPTBcYSvCmTwZumWFIBAvPCtPgECFq9NpUVQzXUB0C_IyYTMXqWhAjrDi0WEYOFD8QM48uepe1vJBxHJywIuwilop_Qgu4SebR01gphes4d7fhQ',
      fallbackImage: `${import.meta.env.BASE_URL}images/resort/room-single-standard.jpg`,
    },
    {
      id: 'room-triple-family',
      badge: currentLang === 'vi' ? 'Gia Đình • Không Gian Rộng' : 'Family • Generous Living',
      badgeColor: 'bg-primary text-on-primary',
      title:
        currentLang === 'vi'
          ? 'Phòng Triple Dành Cho Gia Đình'
          : 'Triple Room — Family Heritage Suite',
      subtitle: 'Triple Room — Family Heritage Suite',
      desc:
        currentLang === 'vi'
          ? 'Bố trí 03 giường đơn thoải mái hoặc 01 giường đôi + 01 giường đơn cho chuyến sum vầy gia đình. Ban công kép kết nối trọn vẹn cảnh sắc thiên nhiên nguyên bản.'
          : 'Configured with 3 plush twin beds or 1 double + 1 single bed for memorable family gatherings. Dual balconies directly connect your senses with pristine wetlands.',
      specs: [
        { icon: 'aspect_ratio', label: currentLang === 'vi' ? 'Diện tích: 56 m²' : 'Area: 56 m²' },
        { icon: 'groups', label: currentLang === 'vi' ? 'Sức chứa: 3 - 4 khách' : 'Capacity: 3 - 4 Guests' },
        { icon: 'deck', label: currentLang === 'vi' ? 'Ban công kép hướng rừng' : 'Dual Balconies Forest View' },
        { icon: 'bed', label: currentLang === 'vi' ? 'Đệm bông ép êm ái' : 'Organic Comfort Bedding' },
      ],
      price: '2.350.000',
      unit: currentLang === 'vi' ? 'VND / Đêm' : 'VND / Night',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDhIp2Np7nv1l-QoUMUAp4jXxHspzgUJGmkJjeLKcJFL2nm0y5GBN0429OLvJFaRA915rYIongfT5g57ZMboidDWF4SHpDoN33C4uqfs5fAwF4ITDnhN4Pq6KvT3jp_d3tKfZ6p2ARG5VDrEe6-AwJ6zJUFkv8mCy_7mBDFUOnzYIyzmSR5vWjZNJM6vgI9eUb3RUoG5C-eVwGdMgn6xsCRK7w_L7_1Wcpd5surL2DRJ3x-CaLrKyEcBA',
      fallbackImage: `${import.meta.env.BASE_URL}images/resort/room-family-triple.jpg`,
    },
  ];

  // 5 Exact Culinary Dishes from Stitch Bento Grid
  const dishes = [
    {
      id: 'dish-snakehead',
      colSpan: 'md:col-span-7',
      isHeroBento: true,
      tag: currentLang === 'vi' ? 'Đặc Sản Trứ Danh' : 'Signature Delicacy',
      title:
        currentLang === 'vi'
          ? 'Cá Lóc Nướng Trui Cuốn Lá Sen Non'
          : 'Charcoal Grilled Snakehead Fish in Young Lotus Leaves',
      desc:
        currentLang === 'vi'
          ? 'Cá lóc đồng tươi sống vùi rơm khô nướng cháy cạnh, thịt trắng ngọt lịm cuộn cùng lá sen non chát nhẹ nơi đầu lưỡi và mắm me đồng nội cay nồng đậm đà.'
          : 'Wild freshwater snakehead fish grilled over crisp dry straw embers, yielding tender sweet white flakes wrapped in delicate young lotus leaves with rich sweet-tangy tamarind dip.',
      time: currentLang === 'vi' ? 'Thời gian phục vụ: Trưa & Tối' : 'Service: Lunch & Dinner',
      price: '280.000 VND / Phần',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtZgBjJvWZYD4wEmxog_P0WPEadxGBMLDLfFJdAhvIiFlJIr0o1SvXoTsGCqX0I0kIcB-uUACu_tj-xLXIKqGJr7GjUhnZzzb7U5rP4CAQ3SKZCiR2fUY8uCQ7yn_6Da9CNCF-h2A748S2zlHaf1tcoDD6_e3xCtkZ7A5iwd349J2sERAvo5nShWkatBDgloiXG_Bzavwrpf_MDWk-EZ4SUbFhjI9mmarG9JJ57Fr2C3e2Bqcq8N0YiA',
      fallbackImage: `${import.meta.env.BASE_URL}images/ca-loc-nuong.jpg`,
    },
    {
      id: 'dish-hotpot',
      colSpan: 'md:col-span-5',
      isHeroBento: true,
      tag: currentLang === 'vi' ? 'Mùa Nước Nổi' : 'Floating Season Specialty',
      title:
        currentLang === 'vi'
          ? 'Lẩu Cá Linh Bông Điên Điển'
          : 'Linh Fish Hotpot with Yellow Sesbania Flowers',
      desc:
        currentLang === 'vi'
          ? 'Vị chua thanh mát của me dầm kết hợp vị bùi béo của cá linh non và sắc vàng rực rỡ của đóa điên điển ven sông.'
          : 'Delicate young linh fish simmered in tangy tamarind and aromatic herb broth, paired with golden yellow river sesbania flowers and crisp water lilies.',
      time: currentLang === 'vi' ? 'Nước dùng thảo mộc' : 'Herbal broth infusion',
      price: '350.000 VND / Nồi',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAT3sPTSJh1QjUh_Tt2kLpXKp4ylKFJmoK1nyReThj2fFjW0W0qHk5e2f6zka_FdGeYEaYsi5iQvZ5DDHEHEXJL4wOnrWivKyTHDGahau4BjeDB5gOVL_2NDPbevc_JpWTWqNDW8WYhuoQTzTGo4uzUpj2ATlrtlD00i5hcNxxs4KY_GmtuYW-jGXz6wbnETFvEkh0slVrBk5QVtik8jq1vX030Kou20t3OxHLwhLOxlFvT6KVR4ZskGw',
      fallbackImage: `${import.meta.env.BASE_URL}images/lau-ca-linh.jpg`,
    },
    {
      id: 'dish-field-rat',
      colSpan: 'md:col-span-4',
      isHeroBento: false,
      tag: currentLang === 'vi' ? 'Mỹ Vị Đồng Bằng' : 'Plains Delicacy',
      title: currentLang === 'vi' ? 'Chuột Đồng Nướng Lu' : 'Jar-Roasted Wild Field Rat',
      desc:
        currentLang === 'vi'
          ? 'Thịt chuột mùa gặt béo ngậy tẩm ướp ngũ vị, nướng chín giòn rụm trong lu sành đất nung, giữ trọn độ ẩm ngọt ngào.'
          : 'Post-harvest grain-fed field meat marinated in spices and slow-roasted in terracotta earthen jars until crispy golden outside and succulent inside.',
      feature: currentLang === 'vi' ? 'Đặc sản mùa lúa' : 'Harvest Season Specialty',
      price: '220.000 VND',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCDmUEZktItN2VdG01m5cGrex5HKMdU0gZ9xWdX_ZAESGl-V1tw9SrJB8VXEiNqVTLgDqO4xQRkVL5dFIOd78f8GrV40A2_HHf1lrhPNmjjCYRdUcHLQqx6d1paDxzEA4rng14o5ZetJdtGhS9U4weirqPMU_IGm1c6Q6kxFLPqPnti5frMbHb1UDllPUhf50Q_K2m4MouF23pkftokQO7oE69fp9IH1gc9k_v9NELltcTNFCEC_hve8g',
      fallbackImage: `${import.meta.env.BASE_URL}images/chuot-dong.jpg`,
    },
    {
      id: 'dish-shrimp-salad',
      colSpan: 'md:col-span-4',
      isHeroBento: false,
      tag: currentLang === 'vi' ? 'Tươi Mát Thuần Khiết' : 'Pure Freshness',
      title:
        currentLang === 'vi' ? 'Gỏi Tép Rong Bông Súng' : 'Crispy Water Lily & River Shrimp Salad',
      desc:
        currentLang === 'vi'
          ? 'Cọng bông súng đỏ tía tước sợi giòn sần sật trộn tép rong bắt tại con rạch Tân Lập, thấm đượm vị giấm chuông dân dã.'
          : 'Crisp purple water lily stems tossed with wild sweet canal shrimp, toasted crushed peanuts, and zesty home-fermented fruit vinegar.',
      feature: currentLang === 'vi' ? 'Khai vị sông nước' : 'Riverbank Appetizer',
      price: '160.000 VND',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCgF-FiTnxpuQxWSQF6tzj4VZ-RJPC1WUweqSIi8tUrJrug2_xMYbdG-k7Sqt1jlnpAdu7mhT8jiJe8-InUZBUovUAaSJpOOycd__3kfHUA0e7K-4p3CgC_cN3JeXY37NfDFxmCWj6JUJb5f4ZoNYU4yD6qhmpscZCZv-iL7Bwt2EP6kDlEJITP0Fshj6OvaYKqiYTjODACerTlC6QpHkL28pyp1UrfrzQARiXYJzSJUuDGa2ODJ8wafw',
      fallbackImage: `${import.meta.env.BASE_URL}images/goi-ngo-sen.jpg`,
    },
    {
      id: 'dish-banh-xeo',
      colSpan: 'md:col-span-4',
      isHeroBento: false,
      tag: currentLang === 'vi' ? 'Hồn Quê Mộc Mạc' : 'Rustic Soul',
      title:
        currentLang === 'vi' ? 'Bánh Xèo Miền Tây Giòn Rụm' : 'Crispy Southern Banh Xeo Crepe',
      desc:
        currentLang === 'vi'
          ? 'Vỏ bánh mỏng tang vàng ươm bột nghệ và nước cốt dừa béo thơm, gói trọn rau rừng thiên nhiên hơn 10 loại lá quý.'
          : 'Paper-thin golden turmeric crepe with rich coconut milk, loaded with river shrimp, pork, and served with over 10 wild medicinal forest leaves.',
      feature: currentLang === 'vi' ? 'Đổ nóng tại bàn' : 'Sizzled Hot Tableside',
      price: '180.000 VND',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB631yl0EcuPiJ06p2SK7R94zIwNNVz8g9qGPYPT2Vd907Abaar-LrHPAjC9gKL-pZtQPwzlRVEgPiPs9wauc_B4eUblFFXV_SZ8n41a46fFxJMvwnq3dMRxOhM6zLwnDW_NFDRK75cTxKAv3FqXfGGyL7qRYdo-1jUSoaulpbAXb777S8PjvAzS9_XtUjOjjaQZfG4nXu10Xg5O5G4ix_MmOJf1hmlHCwB3ix34b0KhBB5iMRglTGmyw',
      fallbackImage: `${import.meta.env.BASE_URL}images/resort/dish-steamed-chicken.jpg`,
    },
  ];

  return (
    <main className="flex-grow bg-surface text-on-surface antialiased selection:bg-[#555555] selection:text-white">
      {/* =========================================================================
          HERO HEADER: Chốn Nghỉ Dưỡng Biệt Lập Giữa Miền Tràm Cổ
          (Matching Stitch Screen d408aaa1f88d4a59bf8a143dd5d13ca1)
          - Sharp high-res photography, dark gradient, inner architectural frame accent
          - NO video buttons
      ========================================================================= */}
      <section className="relative w-full h-[760px] min-h-[580px] max-h-[820px] flex items-end justify-start overflow-hidden">
        {/* Sharp High-Res Hero Photo */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-1000"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM8NUL7n5btTMFTDOw5xyCvxeweHrrSA6iFY5dmfy0H-LQodoNb0I-EtC6Iwe-gNnO5DS69sr_JGYo7y1smjbPbzAL_BRc3WmBIh64durQNrkUeqOygefqMjqQQavvkHIYmHof60hAOY9k5n3BxCx4VKKx6COEqLegaoaFf3-iZ5ttwRPvbuAdR3QeREBSFanVCO4zJyUV0eUCvI_g8lz0cl_XL67duQmKjqvbH8_qZUuSOoJtpFVH-Q"
          onError={(e) => {
            e.currentTarget.src = `${import.meta.env.BASE_URL}images/room-suite.jpg`;
          }}
          alt="Luxury Resort Master Suite overlooking cajeput wetland forest"
        />

        {/* Cinematic Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        {/* Architectural Border Inner Frame Accent */}
        <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none" />

        {/* Hero Content Cluster */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-16 md:pb-20 text-on-primary">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-secondary-fixed" />
            <p className="font-eyebrow-serif text-eyebrow-serif tracking-[0.22em] uppercase text-secondary-fixed">
              {currentLang === 'vi'
                ? 'Di Sản Khẩn Hoang — Độc Bản Tây Nam Bộ'
                : 'Pioneer Heritage — Southwestern Singularity'}
            </p>
          </div>

          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-[54px] max-w-4xl font-normal leading-tight tracking-[0.08em] uppercase mb-6 text-surface-bright">
            {currentLang === 'vi'
              ? 'CHỐN NGHỈ DƯỠNG BIỆT LẬP GIỮA MIỀN TRÀM CỔ — KHÁCH SẠN NGHỈ DƯỠNG & ẨM THỰC DI SẢN'
              : 'SECLUDED SANCTUARY AMIDST ANCIENT CAJEPUT — HERITAGE RESORT & CUISINE'}
          </h1>

          <p className="font-body-lg text-body-lg text-white/85 max-w-2xl font-light leading-relaxed mb-8">
            {currentLang === 'vi'
              ? 'Được bao bọc bởi 135 hécta rừng tràm nguyên sinh vùng Đồng Tháp Mười, nơi tiếng chim rừng ban mai hòa cùng dòng kinh xanh ngát, đem lại giấc ngủ an yên tuyệt đối.'
              : 'Enfolded within 135 hectares of pristine cajeput forest in Dong Thap Muoi wetlands, where morning birdsong merges with serene canals for truly restorative slumber.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#villas"
              className="bg-primary text-on-primary px-8 py-3.5 text-label-cta font-label-cta tracking-[0.18em] uppercase rounded-none hover:bg-[#48692c] transition-colors border border-primary font-bold inline-flex items-center"
            >
              {currentLang === 'vi' ? 'Khám Phá Phòng & Biệt Thự' : 'Explore Rooms & Villas'}
            </a>
            <a
              href="#culinary"
              className="bg-transparent text-surface-bright border border-white/60 px-8 py-3.5 text-label-cta font-label-cta tracking-[0.18em] uppercase rounded-none hover:bg-white hover:text-on-surface transition-all font-bold inline-flex items-center"
            >
              {currentLang === 'vi' ? 'Mỹ Vị Đồng Quê P12' : 'P12 Countryside Cuisine'}
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: QUICK BOOKING BAR (Architectural Monolithic Dock)
          (Matching Stitch Screen d408aaa1f88d4a59bf8a143dd5d13ca1)
      ========================================================================= */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-6 md:px-12" id="booking">
        <div className="bg-surface-container-lowest border border-outline-variant/40 shadow-none p-6 md:p-8">
          <form onSubmit={handleBookingSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="space-y-1.5">
              <label className="block text-label-meta font-label-meta tracking-[0.15em] uppercase text-on-surface-variant">
                {currentLang === 'vi' ? 'Dịch Vụ Chọn Lựa' : 'Selected Service'}
              </label>
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/60 py-3 px-3 text-body-sm font-body-sm text-on-surface rounded-none focus:ring-0 focus:border-primary"
                >
                  <option value="hotel-tower">{currentLang === 'vi' ? 'Nghỉ Dưỡng Khách Sạn Tháp 8 Tầng' : '8-Storey Hotel Tower Stay'}</option>
                  <option value="villa">{currentLang === 'vi' ? 'Biệt Thự Ven Rạch Nổi' : 'Canalside Eco Villa'}</option>
                  <option value="dining">{currentLang === 'vi' ? 'Đặt Bàn Nhà Hàng Ẩm Thực P12' : 'P12 Heritage Restaurant'}</option>
                  <option value="combo">{currentLang === 'vi' ? 'Combo Trọn Gói Phòng & Ẩm Thực' : 'All-Inclusive Room & Dining'}</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-label-meta font-label-meta tracking-[0.15em] uppercase text-on-surface-variant">
                {currentLang === 'vi' ? 'Ngày Nhận Phòng / Dùng Bữa' : 'Check-in / Dining Date'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/60 py-3 px-3 text-body-sm font-body-sm text-on-surface rounded-none focus:ring-0 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-label-meta font-label-meta tracking-[0.15em] uppercase text-on-surface-variant">
                {currentLang === 'vi' ? 'Ngày Trả Phòng' : 'Check-out Date'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/60 py-3 px-3 text-body-sm font-body-sm text-on-surface rounded-none focus:ring-0 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-label-meta font-label-meta tracking-[0.15em] uppercase text-on-surface-variant">
                {currentLang === 'vi' ? 'Khách & Phòng' : 'Guests & Rooms'}
              </label>
              <div className="relative">
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/60 py-3 px-3 text-body-sm font-body-sm text-on-surface rounded-none focus:ring-0 focus:border-primary"
                >
                  <option value="2-adults">{currentLang === 'vi' ? '02 Người Lớn • 01 Phòng' : '02 Adults • 01 Room'}</option>
                  <option value="3-adults">{currentLang === 'vi' ? '03 Người Lớn • 01 Phòng Triple' : '03 Adults • 01 Triple Room'}</option>
                  <option value="family">{currentLang === 'vi' ? 'Gia Đình (2 Lớn, 2 Trẻ Nhỏ)' : 'Family (2 Adults, 2 Children)'}</option>
                  <option value="group">{currentLang === 'vi' ? 'Đoàn Sự Kiện / Doanh Nghiệp' : 'Corporate / Retreat Group'}</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full h-[46px] bg-primary text-on-primary hover:bg-[#48692c] transition-colors text-label-cta font-label-cta tracking-[0.18em] uppercase rounded-none font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>{currentLang === 'vi' ? 'TÌM KIẾM PHÒNG' : 'SEARCH ROOMS'}</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTRODUCTORY SPLIT-SCREEN EDITORIAL
          (Matching Stitch Screen d408aaa1f88d4a59bf8a143dd5d13ca1)
      ========================================================================= */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Text & Heritage Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-label-meta font-label-meta tracking-[0.18em] uppercase text-secondary font-semibold">
              {currentLang === 'vi' ? 'Triết Lý Không Gian' : 'Spatial Philosophy'}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-normal leading-tight">
              {currentLang === 'vi'
                ? 'Khẽ chạm vào di sản ngàn năm của đại ngàn tràm gió.'
                : 'Gently touching the millenary heritage of ancient cajeput groves.'}
            </h2>
            <div className="w-12 h-[1px] bg-outline-variant" />
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {currentLang === 'vi'
                ? 'Nằm ẩn mình sâu bên dòng rạch Tân Lập êm đềm, khu phức hợp khách sạn Tháp 8 Tầng và cụm biệt thự độc bản kiến tạo trải nghiệm nghỉ ngơi giao hòa tuyệt đối cùng đất trời Nam Bộ.'
                : 'Tucked deep along the gentle canals of Tan Lap, our 8-storey tower hotel and lakeside eco-villas offer a restful retreat in pure symbiosis with the wetland ecology.'}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {currentLang === 'vi'
                ? 'Mỗi căn phòng là một không gian thưởng lãm mỹ thuật mộc mạc: chất gỗ tràm ấm sực, tường vôi trắng tinh khôi, bồn tắm gốm thủ công men rạn và ban công mở toang đón gió rặng tràm ríu rít tiếng cò vạc về tổ lúc hoàng hôn.'
                : 'Every chamber is a celebration of rustic craftsmanship: warm native timber, lime-washed masonry, crackle-glazed ceramic baths, and wide balconies embracing twilight breezes and nesting egrets.'}
            </p>
            <div className="pt-4 flex items-center gap-8">
              <div>
                <p className="font-display-hero text-headline-lg text-primary">
                  135<span className="text-lg">ha</span>
                </p>
                <p className="font-label-meta text-label-meta uppercase tracking-wider text-outline">
                  {currentLang === 'vi' ? 'Rừng tràm bảo tồn' : 'Preserved forest'}
                </p>
              </div>
              <div className="w-[1px] h-10 bg-outline-variant/60" />
              <div>
                <p className="font-display-hero text-headline-lg text-primary">
                  08<span className="text-lg">{currentLang === 'vi' ? 'Tầng' : 'Floors'}</span>
                </p>
                <p className="font-label-meta text-label-meta uppercase tracking-wider text-outline">
                  {currentLang === 'vi' ? 'Tháp vọng cảnh tráng lệ' : 'Scenic tower landmark'}
                </p>
              </div>
              <div className="w-[1px] h-10 bg-outline-variant/60" />
              <div>
                <p className="font-display-hero text-headline-lg text-primary">100%</p>
                <p className="font-label-meta text-label-meta uppercase tracking-wider text-outline">
                  {currentLang === 'vi' ? 'Vật liệu sinh thái' : 'Eco-conscious materials'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Framed Architectural Photography & Floating Quote */}
          <div className="lg:col-span-7 relative">
            <div className="border border-outline-variant/50 p-2 md:p-3 bg-surface-container-low">
              <img
                className="w-full h-[480px] md:h-[560px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlx_gzG4cLkU-hpc8ZMZ9IKcfKQkwvp5NWdZQzoFlBQgbMSU4Di3uwSdQmVxAkFbPmcfjqw6ce5xv-rkrTBVtIb7_bVMgf4lb4hT6T5vJuJ-vIHG-DryIFHSNqeK4F9WJVB2dqHl6K0VN-2kOGGIVF6B-KlvfwRJAsYdvKA2oX4RwXnR_GEbQuYNMSDzMq7i6wi_TduFDQISyk6MhLdkzpJeor0LxWnmDkkmHPJE_hOVR8rmxj06TLdw"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}images/resort/hotel-balcony.jpg`;
                }}
                alt="Balcony among ancient melaleuca trees at Tan Lap Floating Village"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-surface-container-lowest p-6 border border-outline-variant/50 max-w-xs shadow-none">
              <p className="font-eyebrow-serif text-sm italic text-secondary mb-1">
                {currentLang === 'vi'
                  ? '“Một sớm thức giấc giữa đầm tràm, thấy lòng thanh thản như cánh lục bình trôi.”'
                  : '“Waking at dawn amidst cajeput waters, the mind drifts peacefully like wild water hyacinths.”'}
              </p>
              <span className="font-label-meta text-[11px] uppercase tracking-wider text-outline">
                {currentLang === 'vi' ? '— Ghi chép Lữ Khách' : '— Traveler Chronicle'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HỆ THỐNG HẠNG PHÒNG NGHỈ DƯỠNG (Khách Sạn Tháp 8 Tầng & Biệt Thự)
          (Matching Stitch Screen d408aaa1f88d4a59bf8a143dd5d13ca1)
      ========================================================================= */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/40" id="villas">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-outline-variant/30">
            <div>
              <span className="text-label-meta font-label-meta tracking-[0.2em] uppercase text-secondary font-medium">
                {currentLang === 'vi' ? 'Lưu Trú Sinh Thái' : 'Ecological Stays'}
              </span>
              <h2 className="font-display-hero text-headline-xl md:text-[44px] text-on-surface font-normal mt-2">
                {currentLang === 'vi'
                  ? 'Hạng Phòng Khách Sạn & Biệt Thự Ven Rạch'
                  : 'Hotel Suites & Canalside Eco Villas'}
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md mt-4 md:mt-0 font-light">
              {currentLang === 'vi'
                ? 'Các hạng phòng được bố trí dọc theo cấu trúc Tháp Vọng Cảnh 8 tầng và vạt ven hồ, mang trọn phong vị thiên nhiên trù phú miền Tây Nam Bộ.'
                : 'Accommodations situated along the iconic 8-Storey Observation Tower and waterfront shores, embracing Southern Vietnam’s lush natural heritage.'}
            </p>
          </div>

          {/* Room Bento Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-surface-container-lowest border border-outline-variant/40 flex flex-col group transition-all duration-300"
              >
                {/* Room Image & Badge */}
                <div className="relative overflow-hidden h-72 md:h-80">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={room.image}
                    onError={(e) => {
                      e.currentTarget.src = room.fallbackImage;
                    }}
                    alt={room.title}
                  />
                  <span
                    className={`absolute top-4 left-4 ${room.badgeColor} text-[11px] font-label-meta tracking-widest uppercase px-3 py-1 font-semibold`}
                  >
                    {room.badge}
                  </span>
                </div>

                {/* Room Details & Meta */}
                <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                      {room.title}
                    </h3>
                    <p className="text-label-meta font-label-meta tracking-wider uppercase text-outline mb-4">
                      {room.subtitle}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {room.desc}
                    </p>
                  </div>

                  {/* Specs & Amenities Pills */}
                  <div className="border-t border-b border-outline-variant/30 py-4 grid grid-cols-2 gap-3 text-label-meta font-label-meta text-on-surface-variant">
                    {room.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          {spec.icon}
                        </span>
                        <span>{spec.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA Action */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-label-meta text-outline uppercase tracking-wider block">
                        {currentLang === 'vi' ? 'Giá từ' : 'Rates from'}
                      </span>
                      <p className="font-headline-md text-primary font-medium">
                        {room.price}{' '}
                        <span className="text-sm text-on-surface-variant font-normal">
                          {room.unit}
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenBooking) {
                          onOpenBooking({ title: room.title, price: `${room.price} VND`, category: 'hotel' });
                        }
                      }}
                      className="bg-primary text-on-primary hover:bg-[#48692c] transition-colors px-6 py-3 text-label-cta font-label-cta tracking-[0.18em] uppercase rounded-none font-bold cursor-pointer"
                    >
                      {currentLang === 'vi' ? 'ĐẶT PHÒNG' : 'BOOK ROOM'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: KHÔNG GIAN ẨM THỰC NHÀ HÀNG SINH THÁI P12 & MỸ VỊ ĐỒNG QUÊ
          (Matching Stitch Screen d408aaa1f88d4a59bf8a143dd5d13ca1)
      ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="culinary">
        {/* Culinary Header Block */}
        <div className="max-w-3xl mb-16">
          <span className="text-label-meta font-label-meta tracking-[0.2em] uppercase text-secondary font-medium">
            {currentLang === 'vi'
              ? 'Mỹ Vị Phương Nam • Nhà Hàng Ẩm Thực P12'
              : 'Southern Delicacies • P12 Heritage Restaurant'}
          </span>
          <h2 className="font-display-hero text-headline-xl md:text-[46px] text-on-surface font-normal mt-2 leading-tight">
            {currentLang === 'vi'
              ? 'Hương Vị Đồng Quê Giữa Mênh Mang Sông Nước'
              : 'Flavors of Countryside Amidst Sprawling Waters'}
          </h2>
          <div className="w-16 h-[1px] bg-primary mt-4 mb-6" />
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {currentLang === 'vi'
              ? 'Ẩm thực tại Làng Nổi Tân Lập là khúc ca tôn vinh thổ nhưỡng hào sảng của miền Tây. Từ những đọt bông súng giòn ngọt mới hái, con tép rong bơi ngược dòng, đến cá đồng tươi rói nướng rơm thơm lừng nức mũi.'
              : 'Dining at Tan Lap Floating Village is a culinary hymn celebrating the bountiful Southwestern soil: crisp wild water lilies, fresh canal river shrimp, and fragrant straw-grilled fish.'}
          </p>
        </div>

        {/* Culinary Dishes Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {dishes.map((dish) => {
            if (dish.isHeroBento) {
              return (
                <div
                  key={dish.id}
                  className={`${dish.colSpan} bg-surface-container-low border border-outline-variant/40 flex flex-col group overflow-hidden`}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={dish.image}
                      onError={(e) => {
                        e.currentTarget.src = dish.fallbackImage;
                      }}
                      alt={dish.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                      <span className="text-label-meta font-label-meta uppercase tracking-widest text-secondary-fixed mb-1 block">
                        {dish.tag}
                      </span>
                      <h3 className="font-headline-md text-headline-md text-surface-bright">
                        {dish.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4">
                    <p className="font-body-md text-on-surface-variant leading-relaxed">
                      {dish.desc}
                    </p>
                    <div className="flex items-center justify-between text-label-meta text-outline font-label-meta uppercase tracking-wider pt-2 border-t border-outline-variant/30">
                      <span>{dish.time}</span>
                      <span className="text-primary font-bold text-body-md">{dish.price}</span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={dish.id}
                className={`${dish.colSpan} bg-surface-container-lowest border border-outline-variant/40 p-6 flex flex-col justify-between group`}
              >
                <div>
                  <div className="relative h-48 mb-4 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={dish.image}
                      onError={(e) => {
                        e.currentTarget.src = dish.fallbackImage;
                      }}
                      alt={dish.title}
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-label-meta tracking-widest uppercase text-tertiary font-bold block mb-1">
                      {dish.tag}
                    </span>
                    <h4 className="font-headline-md text-lg text-on-surface mb-2">{dish.title}</h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                      {dish.desc}
                    </p>
                  </div>
                </div>
                <div className="text-label-meta font-label-meta text-primary font-bold uppercase tracking-wider border-t border-outline-variant/20 pt-3 flex justify-between items-center">
                  <span>{dish.feature}</span>
                  <span>{dish.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Không Gian Thưởng Thức Tiệc Ven Rạch & Tiệc BBQ Hoàng Hôn (Split Layout) */}
        <div className="bg-surface-container-low border border-outline-variant/40 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-label-meta font-label-meta tracking-[0.18em] uppercase text-secondary font-medium">
                {currentLang === 'vi' ? 'Không Gian & Yến Tiệc' : 'Venues & Banquets'}
              </span>
              <h3 className="font-headline-xl text-headline-xl text-on-surface">
                {currentLang === 'vi'
                  ? 'Tiệc Ven Rạch Hữu Tình & Tiệc Nướng BBQ Hoàng Hôn'
                  : 'Picturesque Canalside Banquets & Sunset BBQ Feasts'}
              </h3>
              <div className="w-10 h-[1px] bg-primary" />
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {currentLang === 'vi'
                  ? 'Nhà hàng sinh thái P12 sở hữu sàn gỗ nổi vươn dài ra mặt rạch. Khi bóng hoàng hôn nhuộm đỏ rực cánh rừng tràm, ánh đèn bão ấm áp được thắp lên, mở ra bữa tiệc nướng hải sản đồng quê bên tiếng đàn kìm réo rắt.'
                  : 'P12 Eco Restaurant features floating wooden platforms jutting out over tranquil waterways. As the crimson sunset blankets the cajeput canopy, rustic lantern fires awaken warm river seafood barbecue dinners.'}
              </p>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">done</span>
                  <span>
                    {currentLang === 'vi'
                      ? 'Sức chứa sảnh yến tiệc nổi lên đến 350 khách'
                      : 'Floating banquet pavilion accommodating up to 350 guests'}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">done</span>
                  <span>
                    {currentLang === 'vi'
                      ? 'Thiết kế mộc mạc hài hòa tuyệt đối cùng sinh thái tràm'
                      : 'Rustic timber design completely attuned with the wetland sanctuary'}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">done</span>
                  <span>
                    {currentLang === 'vi'
                      ? 'Tổ chức tiệc cưới ngoài trời, gala dinner & BBQ lãng mạn'
                      : 'Romantic open-air weddings, corporate galas & sunset BBQ celebrations'}
                  </span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenBooking) {
                      onOpenBooking({
                        title: currentLang === 'vi' ? 'Đặt Bàn Tiệc Ven Rạch & BBQ Hoàng Hôn' : 'Canalside Banquet & Sunset BBQ',
                        category: 'dining',
                      });
                    }
                  }}
                  className="inline-block bg-primary text-on-primary hover:bg-[#48692c] transition-colors px-8 py-3.5 text-label-cta font-label-cta tracking-[0.18em] uppercase rounded-none font-bold cursor-pointer"
                >
                  {currentLang === 'vi' ? 'ĐẶT BÀN TIỆC VEN RẠCH' : 'RESERVE CANALSIDE TABLE'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden border border-outline-variant/40">
                <img
                  className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVTxTxah3MvOAriqWnosPFKxMbGWBdQ035Rm_V_C9P2MNHKurQ-wNX_SowaH_SoMGku-uwhzs4PJHAp1dVklmqOE-2e-63mfgLv8SkTaZMMnuqHT1JJha8kKQkvvItQMicw3zQC1VNHxbwhp5uwMaWu-LomvUGDA2QYjDxwbSEOdYnd0-Pz5a5wj2oR1-5YKf-bP7zNqTNEnKMvbioP7kbRgRYvhBI3kQo4R6YwaAHtnsASB_drPdkEg"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/resort/restaurant-ambience.jpg`;
                  }}
                  alt="Riverside dining pavilion at twilight"
                />
              </div>
              <div className="overflow-hidden border border-outline-variant/40 mt-6">
                <img
                  className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBddP1kt0hFAS79RXyiKkUkU7yNchzuRsUqoRmEXbG_6jPfl6jE_NkBcuEk7XFAXypIgjS92IZn3AXbb5F2QfdJbSc6oClB2xdtuca4cxmK46hbF_h6a3HnSniWWr6LI9d-tlrU7srEb7PZNDsuR31u4VYlIfaeLhjjL62wPzyGL3LhsL2DlCEAgIwpoV41PsoHqF4Frzq9QQa6em0tdq0x5aAuHK9GUx5WGh8cWuOLXlKqpszPvu82PA"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/resort/dish-roasted-meat.jpg`;
                  }}
                  alt="Sunset BBQ setting along wooden pier"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DẢI NEWSLETTER XANH Ô-LIU (#608A3D)
          (Matching Stitch Screen d408aaa1f88d4a59bf8a143dd5d13ca1)
      ========================================================================= */}
      <section className="bg-[#608a3d] text-on-primary py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-label-meta font-label-meta tracking-[0.2em] uppercase text-secondary-fixed block mb-2 font-semibold">
              {currentLang === 'vi' ? 'Bản Tin Di Sản & Sinh Thái' : 'Heritage & Ecology Dispatch'}
            </span>
            <h3 className="font-headline-lg text-headline-lg text-surface-bright font-normal mb-2">
              {currentLang === 'vi'
                ? 'Đăng Ký Nhận Thư Giới Thiệu & Ưu Đãi Mùa Nước Nổi'
                : 'Subscribe for Seasonal Floating Updates & Exclusive Privileges'}
            </h3>
            <p className="font-body-md text-white/85 font-light">
              {currentLang === 'vi'
                ? 'Nhận thông tin cập nhật về mùa hoa sen, mùa cá linh non và những gói ưu đãi nghỉ dưỡng thanh tịnh nhất năm.'
                : 'Receive intimate chronicles on seasonal blooms, linh fish migrations, and restorative eco-retreat packages.'}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-0">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
              placeholder={
                currentLang === 'vi'
                  ? 'NHẬP ĐỊA CHỈ EMAIL CỦA BẠN...'
                  : 'ENTER YOUR EMAIL ADDRESS...'
              }
              className="w-full bg-surface-container-lowest text-on-surface px-4 py-3.5 text-body-sm font-body-sm placeholder:text-outline-variant focus:outline-none focus:ring-0 rounded-none border-0 tracking-wider"
            />
            <button
              type="submit"
              className="bg-[#48692c] hover:bg-[#344e1d] text-on-primary px-8 py-3.5 text-label-cta font-label-cta tracking-[0.18em] uppercase rounded-none font-bold transition-colors whitespace-nowrap cursor-pointer"
            >
              {subscribed
                ? (currentLang === 'vi' ? 'ĐÃ ĐĂNG KÝ ✓' : 'JOINED ✓')
                : (currentLang === 'vi' ? 'GỬI NGAY' : 'SEND')}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
