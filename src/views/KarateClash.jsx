import Slider from "../components/Slider";

import registerImage from "../assets/kc_images/reg.webp";
import loginImage from "../assets/kc_images/login.webp";
import dashboardImage from "../assets/kc_images/dash.webp";
import tournamentImage from "../assets/kc_images/book.webp";
import paymentImage from "../assets/kc_images/pay.webp";
import postingImage from "../assets/kc_images/post.webp";
import analysisImage from "../assets/kc_images/analysis.webp";
import reportImage from "../assets/kc_images/report.webp";

import { SiFirebase } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";

const slides = [
  {
    image: dashboardImage,
    title: "Dashboard",
    description:
      "A centralized hub to view upcoming events, courses, and Gasshukus.",
  },
  {
    image: registerImage,
    title: "Register",
    description:
      "Seamlessly create your account to access Karate Clash and explore its exciting features.",
  },
  {
    image: loginImage,
    title: "Login",
    description:
      "Securely log in to manage your profile, participate in events, and stay connected.",
  },

  {
    image: tournamentImage,
    title: "Book a Tournament",
    description:
      "Register for tournaments with ease and secure your spot in upcoming competitions.",
  },
  {
    image: paymentImage,
    title: "Payment",
    description:
      "Simplify your transactions with secure payment options for events and courses.",
  },
  {
    image: postingImage,
    title: "Event Posting",
    description:
      "Create and manage event postings to keep your community informed and engaged.",
  },
  {
    image: analysisImage,
    title: "Performance Analysis",
    description:
      "Gain insights regarding confirmed bookings for the tournament.",
  },
  {
    image: reportImage,
    title: "Reports",
    description:
      "Access comprehensive reports to regarding the tournament bookings.",
  },
];

export default function KarateClash() {
  return (
    <div className="h-full bg-my-bg">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white font-bold mt-20 flex items-center justify-center mb-5">
          Karate Clash
        </h1>
        <div className="flex justify-center mb-10">
          <SiFlutter className="text-white text-3xl mx-3 dance-animation" />
          <SiFirebase className="text-white text-3xl mx-3 dance-animation" />
          <FaLaravel className="text-white text-3xl mx-3 dance-animation" />
        </div>
        <Slider slides={slides} />
      </div>
    </div>
  );
}
