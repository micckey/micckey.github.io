import Slider from "../components/Slider";
import landingImage from "../assets/bee_images/landing.webp";
import dashImage from "../assets/bee_images/dash.webp";
import bookingImage from "../assets/bee_images/booking.webp";
import paymentImage from "../assets/bee_images/payment.webp";
import historyImage from "../assets/bee_images/history.webp";
import bookedImage from "../assets/bee_images/booked.webp";
import { DiGo } from "react-icons/di";
import { FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";

const slides = [
  {
    image: landingImage,
    title: "Landing Page",
    description:
      "Welcome to our homepage! Discover website details and current cinema listings. Please note, booking is only available after logging in.",
  },
  {
    image: dashImage,
    title: "Dashnoard",
    description:
      "Explore available movies and select your favorite. Click 'Book' to access seat layout based on your chosen cinema.",
  },
  {
    image: bookingImage,
    title: "Seat Booking",
    description:
      "Choose your desired seat. Once selected, it turns grey. After payment, it turns blue and becomes unavailable for others for that movie and cinema.",
  },
  {
    image: paymentImage,
    title: "Payment Page",
    description:
      "After selecting seats and clicking 'Pay', users land here. They see a summary of selected seats and total amount due. Payments reserve their seats.",
  },
  {
    image: historyImage,
    title: "History Page",
    description:
      "Users can view paid seats and cancel within the set time for a refund.",
  },
  {
    image: bookedImage,
    title: "Booked Seats",
    description:
      "Blue seats are booked, unavailable for further bookings for the same movie.",
  },
];

export default function BookingBee() {
  return (
    <div className="h-full bg-my-bg">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white font-bold mt-20 flex items-center justify-center mb-5">
          Booking Bee
        </h1>
        <div className="flex justify-center mb-10">
          <DiGo className="text-white text-3xl mx-3 dance-animation" />
          <FaHtml5 className="text-white text-3xl mx-3 dance-animation" />
          <FaCss3 className="text-white text-3xl mx-3 dance-animation" />
          <FaBootstrap className="text-white text-3xl mx-3 dance-animation" />
        </div>
        <Slider slides={slides} />
      </div>
    </div>
  );
}
