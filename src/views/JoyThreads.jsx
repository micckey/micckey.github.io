import Slider from "../components/Slider";
import dashImage from "../assets/joy_threads/sales.webp";
import inventoryImage from "../assets/joy_threads/inventory.webp";
import uniformImage from "../assets/joy_threads/inventory2.webp";
import weekImage from "../assets/joy_threads/weeksales.webp";
import monthImage from "../assets/joy_threads/monthsales.webp";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";

const slides = [
  {
    image: dashImage,
    title: "Dashboard",
    description:
      "This is the dashboard displaying the day's transactions that have taken place.",
  },
  {
    image: inventoryImage,
    title: "Inventory",
    description:
      "This is the inventory page, presenting various uniform categories available.",
  },
  {
    image: uniformImage,
    title: "Uniform",
    description:
      "This page displays available colors and designs for the chosen uniform category.",
  },
  {
    image: weekImage,
    title: "Week's Sales Analysis",
    description: "This is the sales analysis for the week.",
  },
  {
    image: monthImage,
    title: "Months' sales analysis",
    description:
      "This is the year-round sales analysis, providing insightful comparisons.",
  },
];

export default function JoyThreads() {
  return (
    <div className="h-full bg-my-bg">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white font-bold mt-20 flex items-center justify-center mb-5">
          Joy Threads
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
