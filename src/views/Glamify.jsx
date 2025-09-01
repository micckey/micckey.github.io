import Slider from "../components/Slider";

import dashboardImage from "../assets/glamify/dash.webp";
import profileImage from "../assets/glamify/profile.webp";
import footerImage from "../assets/glamify/footer.webp";
import paymentImage from "../assets/glamify/payment.webp";
import servicesImage from "../assets/glamify/services.webp";

import { SiFlutter } from "react-icons/si";

const slides = [
  {
    image: dashboardImage,
    title: "Dashboard",
    description:
      "Your central hub for all things beauty. Stay updated with your upcoming appointments, special offers, and manage your profile with ease.",
  },
  {
    image: profileImage,
    title: "Service Provider Profile",
    description:
      "Explore detailed profiles of our expert service providers. View their specialties, customer ratings, and availability to find the perfect match for your next beauty experience.",
  },
  {
    image: servicesImage,
    title: "Services",
    description:
      "Browse a variety of top-notch beauty services tailored to your needs. From haircuts to facials, discover the perfect treatment to pamper yourself.",
  },

  {
    image: paymentImage,
    title: "Payment",
    description:
      "Secure and seamless payment options for a smooth transaction experience. Pay for your services safely and efficiently with multiple payment methods.",
  },
  {
    image: footerImage,
    title: "Footer",
    description:
      "Quick access to important links, including contact information, terms and conditions, and social media channels—everything at your fingertips.",
  },
];

export default function Glamify() {
  return (
    <div className="h-full bg-my-bg">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white font-bold mt-20 flex items-center justify-center mb-5">
          Glamify
        </h1>
        <div className="flex justify-center mb-10">
          <SiFlutter className="text-white text-3xl mx-3 dance-animation" />
        </div>
        <Slider slides={slides} />
      </div>
    </div>
  );
}
