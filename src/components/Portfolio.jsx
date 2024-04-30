import BookingBee from "../assets/bee_images/dash.webp";
import PassionPick from "../assets/passion_pick/dash.webp";
import KarateClash from "../assets/kc_images/dash.webp";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div id="portfolio" className="py-5 bg-my-bg text-white">
      <div className="container mx-auto px-5 mb-20">
        <h1 className="text-3xl font-bold text-center">My Work</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
          <div className="work">
            <img src={BookingBee} alt="Booking Bee" className="rounded h-72" />
            <div className="layer text-center">
              <h3 className="font-semibold text-xl ">Booking Bee</h3>
              <p>
                Introducing Booking Bee, your go-to web cinema seat booking app.
                Reserve seats, secure tickets in advance, and never miss a
                screening again. Experience convenience with Booking Bee.
              </p>
              <Link
                to="/projects/booking-bee"
                className="text-gray-500 mt-2 flex items-center text-lg justify-center"
              >
                <span style={{ textDecoration: "underline" }}>View</span>
                <FaArrowUpRightFromSquare className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="work">
            <img
              src={PassionPick}
              alt="Dojo Notes"
              className="rounded h-72 mx-auto"
            />
            <div className="layer text-center">
              <h3 className="font-semibold text-xl">Passion Pick</h3>
              <p>
                Introducing Passion Pick, your premier ecommerce mobile app for
                buying and delivering passion fruits and related products.
                Streamline your passion fruit shopping experience from order to
                delivery with ease and convenience
              </p>
              <Link
                to="/projects/passion-pick"
                className="text-gray-500 mt-2 flex items-center text-lg justify-center"
              >
                <span style={{ textDecoration: "underline" }}>View</span>
                <FaArrowUpRightFromSquare className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="work">
            <img
              src={KarateClash}
              alt="Karate Clash"
              className="rounded h-72 mx-auto"
            />
            <div className="layer text-center">
              <h3 className="font-semibold text-xl ">Karate Clash</h3>
              <p>
                Prepare for the ultimate martial arts experience with Karate
                Clash! Our mobile app keeps karatekas informed about nearby
                tournaments, helping you stay ahead. Seamlessly track events,
                locations, and schedules, ensuring you&#39;re ready to shine on
                the tatami.
              </p>
              <Link
                to="/projects/karate-clash"
                className="text-gray-500 mt-2 flex items-center text-lg justify-center"
              >
                <span style={{ textDecoration: "underline" }}>View</span>
                <FaArrowUpRightFromSquare className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <Link
          to="/projects"
          className="lg:mx-96 mt-6 border border-white px-6 py-3 rounded text-white bg-gray-800 transition-colors duration-500 hover:bg-gray-600 flex items-center justify-center"
        >
          See more
        </Link>
      </div>
    </div>
  );
}
