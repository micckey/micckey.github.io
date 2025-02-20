import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import joyThreadsImage from "../assets/joy_threads/mockup.webp";
import bookingBeeImage from "../assets/bee_images/mockup.webp";
import dojoNotesImage from "../assets/dn_images/mockup.webp";
import karateClashImage from "../assets/kc_images/mockup.webp";
import glamifyImage from "../assets/glamify/mockup.webp";
import passionPickImage from "../assets/passion_pick/mockup.webp";
import faithBridgeImage from "../assets/faith_bridge/mockup.webp";

function ProjectsPage() {
  return (
    <div className="bg-my-bg">
      <div className="mx-10 lg:mx-28 mt-20 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white font-bold mt-8 mb-4">Projects</h1>

        <div className="grid grid-cols-1 gap-8">
          <ProjectCard
            image={karateClashImage}
            title="Karate Clash"
            description="Prepare for the ultimate martial arts experience with Karate Clash! Our mobile app keeps karatekas informed about nearby tournaments, helping you stay ahead. Seamlessly track events, locations, and schedules, ensuring you're ready to shine on the tatami."
            link="/projects/karate-clash"
          />  
          <ProjectCard
            image={glamifyImage}
            title="Glamify"
            description="Glam starts here, where every detail brings out your unique beauty."
            link="/projects/glamify"
          />
          <ProjectCard
            image={dojoNotesImage}
            title="Dojo Notes"
            description="Introducing Dojo Notes, the ultimate mobile app for karatekas. Plan your training effortlessly, optimize every session, and empower your martial arts journey."
            link="/projects/dojo-notes"
          />
          <ProjectCard
            image={passionPickImage}
            title="Passion Pick"
            description="Introducing Passion Pick, your premier ecommerce mobile app for buying and delivering passion fruits and related products. Streamline your passion fruit shopping experience from order to delivery with ease and convenience"
            link="/projects/passion-pick"
          />
          <ProjectCard
            image={joyThreadsImage}
            title="Joy Threads"
            description="Joy Threads Inventory Management App is a powerful tool that seamlessly manages your inventory, track stock levels, and effortlessly make sales transactions with a user-friendly interface. The app empowers Joy Threads with real-time insights into sales and profits, allowing for strategic analysis and decision-making."
            link="/projects/joy-threads"
          />
          <ProjectCard
            image={bookingBeeImage}
            title="Booking Bee"
            description="The Booking Bee organization collaborates with numerous cinemas, enabling them to showcase upcoming movie premieres and facilitate advance bookings for their customers. This resolves the inconvenience of waiting in line on premiere day, only to discover that preferred seats are unavailable, leaving only less immersive options at the back."
            link="/projects/booking-bee"
          />
          <ProjectCard
            image={faithBridgeImage}
            title="Faith Bridge Academy"
            description="Faith Bridge Academy, located in Kachibora, Trans Nzoia County, is dedicated to providing quality education while nurturing spiritual growth. Our mission is to empower students through excellence, professionalism, and self-driven motivation."
            link="https://vision2030stamped.co.ke/faithbridge"
          />
          <div className="mb-2"></div>
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ image, title, description, link }) => {
  const isExternal = link.startsWith("http");
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 sm:grid-cols-4 p-6">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-60 h-52 object-contain sm:col-span-1"
      />

      {/* Title and Link */}
      <div className="sm:col-span-3 flex flex-col justify-between items-center mt-1">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        {/* Description (visible on larger screens) */}
        <p className="text-gray-700 hidden sm:block">{description}</p>

        {/* Link */}
        {isExternal ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black p-2 rounded-md hover:bg-gray-300"
          >
            View Project
          </a>
        ) : (
          <Link
            to={link}
            className="border border-black p-2 rounded-md hover:bg-gray-300"
          >
            View Project
          </Link>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectsPage;
