import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TourPage from './pages/TourPage';
import ResortPage from './pages/ResortPage';
import PricingPage from './pages/PricingPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [lang, setLang] = useState('vi');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Vé tham quan & Tour trọn gói');
  const [bookingDetails, setBookingDetails] = useState({
    date: '15/10/2024',
    guests: '2 Người lớn, 1 Trẻ em',
  });

  const handleOpenBooking = (serviceName, details = null) => {
    setSelectedService(serviceName || 'Vé tham quan & Tour trọn gói');
    if (details) {
      setBookingDetails(details);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-wetland-cream text-on-surface flex flex-col selection:bg-stream-jade selection:text-melaleuca-canopy">
      {/* Shared Top Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        currentLang={lang}
        setLang={setLang}
      />

      {/* Routed Pages */}
      <div className="flex-1 w-full">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                currentLang={lang}
              />
            }
          />
          <Route
            path="/gioi-thieu"
            element={
              <AboutPage
                onOpenBooking={handleOpenBooking}
                currentLang={lang}
              />
            }
          />
          <Route
            path="/tham-quan"
            element={
              <TourPage
                onOpenBooking={handleOpenBooking}
                currentLang={lang}
              />
            }
          />
          <Route
            path="/tham-quan-trai-nghiem"
            element={<Navigate to="/tham-quan" replace />}
          />
          <Route
            path="/khach-san-am-thuc"
            element={
              <ResortPage
                onOpenBooking={handleOpenBooking}
                currentLang={lang}
              />
            }
          />
          <Route
            path="/khach-san"
            element={<Navigate to="/khach-san-am-thuc" replace />}
          />
          <Route
            path="/nha-hang-khach-san"
            element={<Navigate to="/khach-san-am-thuc" replace />}
          />
          <Route
            path="/bang-gia-khuyen-mai"
            element={
              <PricingPage
                onOpenBooking={handleOpenBooking}
                currentLang={lang}
              />
            }
          />
          <Route
            path="/bang-gia"
            element={<Navigate to="/bang-gia-khuyen-mai" replace />}
          />
          <Route
            path="/khuyen-mai"
            element={<Navigate to="/bang-gia-khuyen-mai" replace />}
          />
          <Route
            path="/uu-dai"
            element={<Navigate to="/bang-gia-khuyen-mai" replace />}
          />
          <Route
            path="/dat-phong"
            element={<BookingPage currentLang={lang} />}
          />
          <Route
            path="/dat-phong-truc-tuyen"
            element={<Navigate to="/dat-phong" replace />}
          />
          <Route
            path="/dat-tour"
            element={<Navigate to="/dat-phong" replace />}
          />
          <Route
            path="/booking"
            element={<Navigate to="/dat-phong" replace />}
          />
          <Route
            path="/lien-he"
            element={<ContactPage currentLang={lang} />}
          />
          <Route
            path="/lien-he-chi-duong"
            element={<Navigate to="/lien-he" replace />}
          />
          <Route
            path="/chi-duong"
            element={<Navigate to="/lien-he" replace />}
          />
          <Route
            path="/contact"
            element={<Navigate to="/lien-he" replace />}
          />
          <Route
            path="*"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                currentLang={lang}
              />
            }
          />
        </Routes>
      </div>

      {/* Shared Footer */}
      <Footer currentLang={lang} />

      {/* Shared Interactive Booking Modal */}
      {isBookingOpen && (
        <BookingModal
          key={`${selectedService}-${bookingDetails?.date || ''}`}
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialService={selectedService}
          initialDetails={bookingDetails}
          currentLang={lang}
        />
      )}
    </div>
  );
}
