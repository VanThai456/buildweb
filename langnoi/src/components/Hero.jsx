import { useState } from 'react';

export default function Hero({ onOpenBooking, currentLang }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const baseUrl = import.meta.env.BASE_URL || '/';

  const heroSlides = [
    {
      image: `${baseUrl}images/about/about-hero-sharp.jpg`,
      subtitle: currentLang === 'vi' ? 'BÊN RỪNG TRÀM GIỮA LÒNG ĐỒNG THÁP MƯỜI' : 'AMIDST PRISTINE CAJEPUT OF DONG THAP MUOI',
      title: currentLang === 'vi' ? 'CHẠM VÀO DI SẢN SANG TRỌNG' : 'TOUCH THE LUXURY HERITAGE',
    },
    {
      image: `${baseUrl}images/con-duong-dan.jpg`,
      subtitle: currentLang === 'vi' ? 'CUNG ĐƯỜNG ĐAN XUYÊN RỪNG & THÁP QUAN SÁT 38M' : '5KM TRAIL & 38M PANORAMIC TOWER',
      title: currentLang === 'vi' ? 'THIÊN ĐƯỜNG SINH THÁI MIỀN TÂY' : 'MEKONG ECO SANCTUARY',
    },
    {
      image: `${baseUrl}images/hotel-exterior.jpg`,
      subtitle: currentLang === 'vi' ? 'NGHỈ DƯỠNG BIỆT LẬP THƯ THÁI' : 'EXCLUSIVE SERENE RETREAT',
      title: currentLang === 'vi' ? 'TRẢI NGHIỆM ĐẲNG CẤP BẢN ĐỊA' : 'AUTHENTIC BOTANICAL ELEGANCE',
    },
    {
      image: `${baseUrl}images/thap-quan-sat.jpg`,
      subtitle: currentLang === 'vi' ? 'VỌNG CẢNH 360 ĐỘ TOÀN CẢNH ĐẠI NGÀN' : '360 DEGREE PANORAMIC CANOPY VIEW',
      title: currentLang === 'vi' ? 'ĐỈNH CAO THÁP QUAN SÁT 38M' : 'MAJESTIC 38M OBSERVATION TOWER',
    },
  ];

  const [bookingForm, setBookingForm] = useState({
    checkIn: '18/11/2026',
    checkOut: '20/11/2026',
    roomType: 'Suite Sanctuary Rừng Tràm',
    guests: '2 Người lớn, 0 Trẻ em',
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSearchBooking = (e) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking(bookingForm.roomType, {
        date: bookingForm.checkIn,
        guests: bookingForm.guests,
      });
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-[88vh] min-h-[640px] max-h-[960px] overflow-hidden flex flex-col justify-center items-center text-center text-white">
      {/* Cinematic Hero Image of Melaleuca Swamp Forest & Wetland Nature */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Làng Nổi Tân Lập Sanctuary & Wetland Cajeput Forest"
          className="w-full h-full object-cover object-center transform scale-105 transition-all duration-1000 ease-out"
          src={slide.image}
        />
        {/* Sophisticated subtle dark vignette overlay */}
        <div className="absolute inset-0 bg-black/35 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
      </div>

      {/* Center Play Icon & Hero Titles */}
      <div className="relative z-10 max-w-5xl px-6 flex flex-col items-center">
        {/* Minimalist circular video play button */}
        <button
          aria-label="Play video"
          onClick={() => setVideoModalOpen(true)}
          className="play-btn-pulse relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white mb-6 md:mb-8 transition-all hover:scale-110 hover:bg-black/50 cursor-pointer shadow-lg"
          type="button"
        >
          <span className="material-symbols-outlined text-2xl md:text-3xl translate-x-0.5" data-icon="play_arrow">
            play_arrow
          </span>
        </button>

        {/* Subtitle in elegant tracked small caps */}
        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.32em] text-white/90 mb-3 md:mb-4 font-medium transition-all">
          {slide.subtitle}
        </p>

        {/* Main headline in large, elegant uppercase serif font with generous letter-spacing */}
        <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.18em] text-white font-normal leading-tight md:leading-tight drop-shadow-sm transition-all">
          {slide.title}
        </h1>
      </div>

      {/* Slider Navigation Chevron Arrows on Hero Right Side */}
      <div className="hidden md:flex absolute right-8 bottom-32 flex-col gap-2 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-sm" data-icon="keyboard_arrow_up">
            keyboard_arrow_up
          </span>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-sm" data-icon="keyboard_arrow_down">
            keyboard_arrow_down
          </span>
        </button>
      </div>

      {/* Quick Floating Booking Bar at Bottom of Hero (Exact Stitch Layout) */}
      <div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-20 bg-white/95 backdrop-blur-md shadow-2xl border border-gray-100 text-charcoal-vintage"
        id="booking"
      >
        <form
          onSubmit={handleSearchBooking}
          className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200"
        >
          {/* Check-in */}
          <div className="p-3.5 md:p-4 text-left">
            <label className="block text-[10px] uppercase tracking-wider text-charcoal-muted font-medium mb-1">
              {currentLang === 'vi' ? 'Ngày nhận phòng' : 'Check-in'}
            </label>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-olive-moss text-lg" data-icon="calendar_today">
                calendar_today
              </span>
              <input
                className="w-full p-0 border-0 text-xs font-semibold text-charcoal-vintage focus:ring-0 bg-transparent cursor-pointer"
                type="text"
                value={bookingForm.checkIn}
                onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="p-3.5 md:p-4 text-left">
            <label className="block text-[10px] uppercase tracking-wider text-charcoal-muted font-medium mb-1">
              {currentLang === 'vi' ? 'Ngày trả phòng' : 'Check-out'}
            </label>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-olive-moss text-lg" data-icon="event">
                event
              </span>
              <input
                className="w-full p-0 border-0 text-xs font-semibold text-charcoal-vintage focus:ring-0 bg-transparent cursor-pointer"
                type="text"
                value={bookingForm.checkOut}
                onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
              />
            </div>
          </div>

          {/* Room Type */}
          <div className="p-3.5 md:p-4 text-left">
            <label className="block text-[10px] uppercase tracking-wider text-charcoal-muted font-medium mb-1">
              {currentLang === 'vi' ? 'Hạng phòng' : 'Room Type'}
            </label>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-olive-moss text-lg" data-icon="hotel">
                hotel
              </span>
              <select
                className="w-full p-0 border-0 text-xs font-semibold text-charcoal-vintage focus:ring-0 bg-transparent cursor-pointer"
                value={bookingForm.roomType}
                onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}
              >
                <option>Suite Sanctuary Rừng Tràm</option>
                <option>Phòng Deluxe View Sông</option>
                <option>Biệt thự Villa Làng Nổi</option>
                <option>Gói Trải Nghiệm Sinh Thái</option>
              </select>
            </div>
          </div>

          {/* Guests */}
          <div className="p-3.5 md:p-4 text-left">
            <label className="block text-[10px] uppercase tracking-wider text-charcoal-muted font-medium mb-1">
              {currentLang === 'vi' ? 'Số khách' : 'Guests'}
            </label>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-olive-moss text-lg" data-icon="group">
                group
              </span>
              <select
                className="w-full p-0 border-0 text-xs font-semibold text-charcoal-vintage focus:ring-0 bg-transparent cursor-pointer"
                value={bookingForm.guests}
                onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
              >
                <option>2 Người lớn, 0 Trẻ em</option>
                <option>2 Người lớn, 1 Trẻ em</option>
                <option>Gia đình (4 Khách)</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="col-span-2 md:col-span-1 p-2 flex items-center">
            <button
              className="w-full h-full min-h-[44px] bg-olive-moss hover:bg-olive-dark text-white font-sans text-xs font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
              type="submit"
            >
              <span>{currentLang === 'vi' ? 'TÌM KIẾM' : 'SEARCH'}</span>
              <span className="material-symbols-outlined text-sm" data-icon="search">
                search
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Close video"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/S2pE9b9wZlU?autoplay=1"
                title="Làng Nổi Tân Lập Sanctuary Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
