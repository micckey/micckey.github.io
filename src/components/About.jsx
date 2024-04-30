import { useState } from "react";
import myImage from "../assets/me.webp";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { DiPython, DiLaravel, DiGo } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about" className="py-20 bg-my-bg text-white px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-10">
          <div className="about-col-1">
            <img
              src={myImage}
              alt="Me"
              className="w-full lg:w-4/5 rounded-lg"
            />
          </div>
          <div className="about-col-2">
            <h1 className="text-3xl font-bold">About me</h1>
            <p className="mb-8 text-sm lg:text-xl">
              My name is Michael Juma, a Full Stack Developer residing in
              Nairobi, Kenya. Currently pursuing a degree in Computer Science at
              Daystar University, I am passionate about technology and committed
              to expanding my knowledge base. With an open-minded approach, I
              eagerly embrace opportunities to learn and actively contribute to
              engaging projects.
            </p>
            <div className="flex space-x-5">
              <p
                className={`text-base lg:text-xl font-bold cursor-pointer ${
                  activeTab === "skills" && "border-b-2 border-yellow-500"
                }`}
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                className={`text-base lg:text-xl font-bold cursor-pointer ${
                  activeTab === "experience" && "border-b-2 border-yellow-500"
                }`}
                onClick={() => openTab("experience")}
              >
                Experience
              </p>
              <p
                className={`text-base lg:text-xl font-bold cursor-pointer ${
                  activeTab === "education" && "border-b-2 border-yellow-500"
                }`}
                onClick={() => openTab("education")}
              >
                Education
              </p>
            </div>
            <div className={`${activeTab !== "skills" && "hidden"}`}>
              <div className="flex space-x-5 items-center mt-5">
                <SiFlutter className="text-3xl lg:text-4xl" />
                <DiPython className="text-3xl lg:text-4xl" />
                <FaNodeJs className="text-3xl lg:text-4xl" />
                <DiLaravel className="text-3xl lg:text-4xl" />
                <DiGo className="text-3xl" />
              </div>
              <div className="flex space-x-5 items-center mt-5">
                <FaReact className="text-3xl lg:text-4xl" />
                <FaHtml5 className="text-3xl lg:text-4xl" />
                <FaCss3 className="text-3xl lg:text-4xl" />
              </div>
            </div>
            <div className={`${activeTab !== "experience" && "hidden"}`}>
              <div className="text-sm lg:text-xl mt-5">
                <ul>
                  <li>Building School Projects</li>
                  <li>Building Personal Projects</li>
                </ul>
              </div>
            </div>
            <div className={`${activeTab !== "education" && "hidden"}`}>
              <div className="text-sm lg:text-xl mt-5">
                <ul>
                  <li>
                    <span className="font-extrabold">2024</span>
                    <br />
                    BSc Applied Computer Science from Daystar University
                  </li>
                  <li>
                    <span className="font-extrabold">2022</span>
                    <br />
                    Powerlearn Project #1MillionDevs4Africa Program.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
