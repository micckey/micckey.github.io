import Slider from "../components/Slider";
import dashImage from "../assets/kc_images/dash.webp";
import tournamentImage from "../assets/kc_images/tournament.webp";
import gashukkuImage from "../assets/kc_images/gasshuku.webp";
import gradingImage from "../assets/kc_images/grading.webp";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";

const slides = [
  {
    image: dashImage,
    title: "Dashboard",
    description:
      "Here, users can explore upcoming events, from tournaments to gradings and gashukkus. Additionally, available courses such as referee, coach, and instructor courses are featured.",
  },
  {
    image: tournamentImage,
    title: "Tournaments page",
    description:
      "Here, users can view tournaments and make bookings in advance.",
  },
  {
    image: gashukkuImage,
    title: "Gashukku page",
    description: "Here, users can view upcoming seminars (Gashukkus) and RSVP.",
  },
  {
    image: gradingImage,
    title: "Grading page",
    description:
      "Here, users can view upcoming grading events and confirm attendance.",
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
          <IoLogoFirebase className="text-white text-3xl mx-3 dance-animation" />
        </div>
        <Slider slides={slides} />
      </div>
    </div>
  );
}
