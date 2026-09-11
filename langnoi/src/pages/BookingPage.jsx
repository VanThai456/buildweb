import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BookingHeroBar from "../components/booking/BookingHeroBar";
import BookingRoomList from "../components/booking/BookingRoomList";
import BookingAddons from "../components/booking/BookingAddons";
import BookingGuestForm from "../components/booking/BookingGuestForm";
import BookingPolicies from "../components/booking/BookingPolicies";
import BookingSummarySidebar from "../components/booking/BookingSummarySidebar";
import BookingSuccessModal from "../components/booking/BookingSuccessModal";

export default function BookingPage({ currentLang = "vi" }) {
  const location = useLocation();

  // Booking Flow Dates & Occupancy
  const [checkInDate, setCheckInDate] = useState("2024-10-20");
  const [checkOutDate, setCheckOutDate] = useState("2024-10-21");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  // Selected Room
  const [selectedRoom, setSelectedRoom] = useState({
    id: "double-river",
    title: "Phòng Đôi Tầng Cao View Rừng Sông",
    titleEn: "High-Floor Double Room • Forest & River View",
    price: 850000,
    bed: "1 Giường King (1m8 × 2m)",
    image: "/images/booking/room-double-river.jpg",
  });

  // Addons matching Stitch defaults (first 2 pre-checked)
  const [addons, setAddons] = useState([
    {
      id: "kayak",
      title: "Chèo xuồng ba lá lướt thảm bèo cám hoa súng",
      titleEn: "Rowing sampan paddle through water fern & water lilies",
      icon: "kayaking",
      price: 80000,
      unit: "người",
      quantity: 2,
      selected: true,
      description:
        "Trang phục nón lá, áo bà ba check-in chụp ảnh, len lỏi qua rạch rừng tràm xanh biếc cùng cô lái đò mộc mạc.",
      descEn:
        "Traditional conical hat and Ba Ba shirt photo-ops, winding through emerald cajeput canals with a local boat rower.",
    },
    {
      id: "bbq",
      title: "Suất ăn tối BBQ đặc sản cá lóc nướng trui & lẩu cá linh bông điên điển",
      titleEn: "Countryside BBQ dinner with straw-grilled snakehead fish & river hotpot",
      icon: "restaurant",
      price: 250000,
      unit: "khách",
      quantity: 2,
      selected: true,
      description:
        "Thực đơn miệt vườn Long An: cá lóc đồng nướng rơm cuốn bánh tráng, chuột đồng nướng lu, lẩu cá linh theo mùa, tráng miệng chè bà ba.",
      descEn:
        "Long An specialties: field snakehead fish grilled in straw, roasted field mouse, seasonal river fish hotpot, sweet soup dessert.",
    },
    {
      id: "cable-boat",
      title: "Đi thuyền cáp kéo mui trần ngắm rạch rừng tràm",
      titleEn: "Open-air motorized cable tow boat cruise through cajeput waterways",
      icon: "directions_boat",
      price: 60000,
      unit: "người",
      quantity: 2,
      selected: false,
      description:
        "Tuyến cáp kéo dài gần 5km dọc rạch sâu, phóng tầm mắt ngắm bạt ngàn chim nước và sen súng.",
      descEn:
        "5km tow cruise line deep into pristine wetlands, spotting abundant waterfowl and blooming water lilies.",
    },
    {
      id: "lunch-set",
      title: "Set cơm đồng quê 5 món truyền thống Nam Bộ",
      titleEn: "Traditional 5-course Southern countryside lunch set",
      icon: "dinner_dining",
      price: 180000,
      unit: "khách",
      quantity: 2,
      selected: false,
      description:
        "Cơm hạt sen, cá rô kho tộ, canh chua cá lóc, rau luộc kho quẹt, chả giò Tân Lập.",
      descEn:
        "Lotus seed rice, braised climbing perch in claypot, sweet & sour snakehead soup, boiled wild vegetables with caramelized dip, Tan Lap spring rolls.",
    },
    {
      id: "bicycle",
      title: "Thuê xe đạp dạo bìa rừng buổi sớm",
      titleEn: "Bicycle rental for morning forest fringe exploration",
      icon: "pedal_bike",
      price: 50000,
      unit: "xe",
      quantity: 1,
      selected: false,
      description:
        "Cung đường ven bìa rừng tràm không khí trong lành, ngắm chim muông kiếm ăn buổi bình minh.",
      descEn:
        "Refreshing scenic trail along the cajeput forest perimeter, spotting morning birds foraging at dawn.",
    },
  ]);

  // Guest Information
  const [guestInfo, setGuestInfo] = useState({
    name: "Nguyễn Văn Minh",
    phone: "0988 123 456",
    email: "minh.nguyen@vietnammail.com",
    checkInTime: "14:00 - 16:00 (Đúng tiêu chuẩn)",
    specialRequests: "",
    vatInvoice: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("qr");

  // Success Modal State
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title =
      currentLang === "vi"
        ? "Đặt Phòng & Đặt Tour Trực Tuyến - Làng Nổi Tân Lập"
        : "Online Hotel & Tour Booking - Tan Lap Floating Village";
  }, [location, currentLang]);

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    setCurrentStep(2);
  };

  const handleToggleAddon = (id) => {
    setAddons((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, selected: !addon.selected } : addon
      )
    );
  };

  const handleChangeAddonQty = (id, newQty) => {
    setAddons((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, quantity: newQty } : addon
      )
    );
  };

  const handleConfirmBooking = ({ finalTotal, nights, discountAmount }) => {
    setCurrentStep(4);
    setConfirmedBookingData({
      room: selectedRoom,
      guestInfo,
      checkInDate,
      checkOutDate,
      guests,
      rooms,
      nights,
      addons: addons.filter((a) => a.selected),
      discountAmount,
      finalTotal,
      bookingCode: "TL-" + Math.floor(100000 + Math.random() * 900000),
    });
    setIsSuccessModalOpen(true);
  };

  return (
    <main className="w-full bg-wetland-cream min-h-screen text-on-surface pb-24">
      {/* 1. Hero & Stepper & Quick Date Filter */}
      <BookingHeroBar
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        guests={guests}
        setGuests={setGuests}
        rooms={rooms}
        setRooms={setRooms}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        currentLang={currentLang}
      />

      {/* 2. Main Booking Grid: Left Steps + Right Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8/12 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Step 1: Chọn Hạng Phòng */}
            <BookingRoomList
              selectedRoomId={selectedRoom.id}
              onSelectRoom={handleSelectRoom}
              currentLang={currentLang}
            />

            {/* Step 2: Dịch Vụ Bổ Sung */}
            <BookingAddons
              addons={addons}
              onToggleAddon={handleToggleAddon}
              onChangeAddonQty={handleChangeAddonQty}
              currentLang={currentLang}
            />

            {/* Step 3: Thông Tin Khách Lưu Trú */}
            <BookingGuestForm
              guestInfo={guestInfo}
              setGuestInfo={setGuestInfo}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              currentLang={currentLang}
            />

            {/* Policies */}
            <BookingPolicies currentLang={currentLang} />
          </div>

          {/* Right Column (4/12 cols): Sticky Summary Sidebar */}
          <div className="lg:col-span-4">
            <BookingSummarySidebar
              selectedRoom={selectedRoom}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              guests={guests}
              rooms={rooms}
              addons={addons}
              onConfirmBooking={handleConfirmBooking}
              currentLang={currentLang}
            />
          </div>
        </div>
      </div>

      {/* 3. Booking Confirmation Success Modal */}
      <BookingSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        bookingData={confirmedBookingData}
        currentLang={currentLang}
      />
    </main>
  );
}
