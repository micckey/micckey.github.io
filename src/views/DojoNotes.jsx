import Slider from "../components/Slider";
import storiesImage from "../assets/dn_images/stories.webp";
import dashImage from "../assets/dn_images/dash.webp";
import scheduleImage from "../assets/dn_images/set schedule.webp";
import notificationImage from "../assets/dn_images/notification and badge.webp";
import kataImage from "../assets/dn_images/kata.webp";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";

const slides = [
  {
    image: storiesImage,
    title: "Stories Page",
    description:
      "Welcome to the Stories Page, your gateway to the app experience.",
  },
  {
    image: dashImage,
    title: "Dashboard",
    description:
      "Welcome to the Dashboard, your hub for saved notes and app features like creating schedules and viewing kata lists",
  },
  {
    image: scheduleImage,
    title: "Setting a schedule",
    description:
      "When a user selects a note, they can schedule a reminder on this page.",
  },
  {
    image: notificationImage,
    title: "Notification",
    description:
      "Here's the notification pop-up along with the schedule reminder badge on the app icon.",
  },
  {
    image: kataImage,
    title: "Kata Page",
    description:
      "Clicking on any kata reveals detailed information alongside a YouTube video featuring high-level karateka performances.",
  },
];

export default function DojoNotes() {
  return (
    <div className="h-full bg-my-bg">
      <div className="container mx-auto">
        <h1 className="text-3xl text-white font-bold mt-20 flex items-center justify-center mb-5">
          Dojo Notes
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
