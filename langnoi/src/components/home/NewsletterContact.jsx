import { useState } from 'react';

export default function NewsletterContact({ currentLang }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <section className="w-full">
      {/* Solid Olive Green Banner (#608a3d) */}
      <div className="w-full bg-olive-moss py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          {/* Centered White Serif Heading */}
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.16em] text-white font-normal mb-8">
            {currentLang === 'vi'
              ? 'ĐỪNG BỎ LỠ THÔNG TIN VỀ ƯU ĐÃI MỚI NHẤT'
              : "DON'T MISS OUR LATEST EXCLUSIVE PRIVILEGES"}
          </h2>

          {/* Input Box & Muted Khaki Submit Button */}
          {subscribed ? (
            <div className="max-w-xl mx-auto py-4 px-6 bg-white/20 backdrop-blur-md rounded border border-white/40 text-white font-medium text-sm mb-6 animate-fadeIn">
              ✓{' '}
              {currentLang === 'vi'
                ? 'Cảm ơn quý khách! Chúng tôi sẽ gửi những ưu đãi sớm nhất đến email của bạn.'
                : 'Thank you! We will deliver the latest sanctuary privileges to your inbox.'}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto flex flex-col sm:flex-row items-stretch gap-0 mb-6 shadow-md"
            >
              <input
                className="flex-1 bg-white px-5 py-3.5 text-xs text-charcoal-vintage placeholder-gray-400 focus:outline-none focus:ring-0 border-0 uppercase font-medium tracking-wider"
                placeholder={currentLang === 'vi' ? 'EMAIL CỦA BẠN' : 'YOUR EMAIL ADDRESS'}
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-khaki-gold hover:bg-[#a5b280] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3.5 transition-colors cursor-pointer"
                type="submit"
              >
                {currentLang === 'vi' ? 'GỬI' : 'SUBMIT'}
              </button>
            </form>
          )}

          {/* Terms Agreement Checkbox */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/90">
            <input
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="rounded border-white/60 text-olive-dark focus:ring-0 cursor-pointer w-4 h-4 bg-white/20"
              id="terms"
              type="checkbox"
            />
            <label className="cursor-pointer tracking-wider" htmlFor="terms">
              {currentLang === 'vi' ? (
                <>
                  CHẤP NHẬN{' '}
                  <a className="underline hover:text-white" href="#booking">
                    QUY ĐỊNH KHU NGHỈ
                  </a>
                  . *
                </>
              ) : (
                <>
                  ACCEPT{' '}
                  <a className="underline hover:text-white" href="#booking">
                    RESORT POLICIES
                  </a>
                  . *
                </>
              )}
            </label>
          </div>
        </div>
      </div>

      {/* White Social Media & Address Area */}
      <div className="w-full bg-white py-16 px-6 text-charcoal-vintage text-center">
        <div className="max-w-4xl mx-auto">
          {/* Social Media Circle Icon Row (Ana Mandara Style) */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-8">
            <a
              className="w-10 h-10 rounded-full bg-olive-moss text-white flex items-center justify-center hover:bg-olive-dark transition-colors shadow-sm"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f text-sm"></i>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-olive-moss text-white flex items-center justify-center hover:bg-olive-dark transition-colors shadow-sm"
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube text-sm"></i>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-olive-moss text-white flex items-center justify-center hover:bg-olive-dark transition-colors shadow-sm"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-sm"></i>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-olive-moss text-white flex items-center justify-center hover:bg-olive-dark transition-colors shadow-sm"
              href="#booking"
              aria-label="Travel privileges"
            >
              <i className="fa-solid fa-plane-departure text-sm"></i>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-olive-moss text-white flex items-center justify-center hover:bg-olive-dark transition-colors shadow-sm"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-sm"></i>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-olive-moss text-white flex items-center justify-center hover:bg-olive-dark transition-colors shadow-sm"
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <i className="fa-brands fa-tiktok text-sm"></i>
            </a>
          </div>

          {/* Address & Contact Info */}
          <div className="space-y-3 font-sans text-xs md:text-[13px] text-charcoal-muted tracking-wider">
            <p className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-base text-olive-moss" data-icon="location_on">
                location_on
              </span>
              <span>
                {currentLang === 'vi'
                  ? 'Quốc Lộ 62, Xã Tân Lập, Huyện Mộc Hóa, Tỉnh Long An, Việt Nam'
                  : 'National Highway 62, Tan Lap Commune, Moc Hoa District, Long An Province, Vietnam'}
              </span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-1">
              <a className="flex items-center gap-2 hover:text-olive-moss transition-colors" href="tel:02723968133">
                <span className="material-symbols-outlined text-base text-olive-moss" data-icon="call">
                  call
                </span>
                <span className="underline">0272 3968 133</span>
              </a>
              <a
                className="flex items-center gap-2 hover:text-olive-moss transition-colors"
                href="mailto:reservation@langnoitanlap.com.vn"
              >
                <span className="material-symbols-outlined text-base text-olive-moss" data-icon="mail">
                  mail
                </span>
                <span className="underline">reservation@langnoitanlap.com.vn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
