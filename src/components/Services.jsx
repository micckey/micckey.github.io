import { FaCode } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

export default function Services() {
  return (
    <div id="services" className="py-12 bg-my-bg">
      <div className="container mx-auto my-12">
        <h1 className="subtitle text-center text-white text-3xl font-bold">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 mt-6 lg:mt-10">
          <div className="bg-gray-700 rounded-lg px-5 py-2 mx-5 transition duration-500 transform hover:bg-gray-600 hover:-translate-y-2">
            <FaCode className="text-2xl lg:text-5xl text-white mb-1 lg:mb-6" />
            <h2 className="text:xl lg:text-2xl font-semibold text-white mb-2 lg:mb-4">
              Web Development
            </h2>
            <p className="text-white lg:text-xl">
              Transforming visions into stunning digital realities is my
              expertise. From concept to code, I specialize in crafting dynamic
              and intuitive web applications that captivate audiences and
              elevate online experiences to new heights.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg px-5 py-2 mx-5 transition duration-500 transform hover:bg-gray-600 hover:-translate-y-2">
            <FaAndroid className="text:2xl lg:text-5xl text-white mb-1 lg:mb-6" />
            <h2 className="text:xl lg:text-2xl font-semibold text-white mb-2 lg:mb-4">
              App Development
            </h2>
            <p className="text-white lg:text-xl">
              Empowering your business with personalized mobile solutions is my
              passion. From ideation to execution, I specialize in crafting
              custom mobile applications that seamlessly integrate with your
              objectives, delivering unparalleled user experiences and driving
              tangible results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
