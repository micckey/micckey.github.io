import { useState } from "react";
import myImage from "../assets/me.webp";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { DiPython, DiGo } from "react-icons/di";
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
              I’m Michael Juma, a Full-Stack Developer and Flutter Enthusiast
              from Nairobi, Kenya. With 3 years of experience in Flutter, React,
              and Laravel, I build scalable, user-focused applications. A
              Computer Science graduate from Daystar University, I’m passionate
              about creating impactful tech solutions and continuously pushing
              my skills forward.
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
                <FaLaravel className="text-3xl lg:text-4xl" />
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
                  <li className="mt-4">
                    <span className="font-bold">Apr 2025 – Present: </span>
                    Full Stack Developer at Bitwise Digital Solutions
                    <ul className="list-disc ml-6 mt-2 text-sm lg:text-lg">
                      <li>
                        Develop cross-platform mobile applications using Flutter
                        and React Native.
                      </li>
                      <li>
                        Contribute to backend development with Node.js and Go
                        (Golang).
                      </li>
                    </ul>
                  </li>

                  <li className="mt-4">
                    <span className="font-bold">Sep 2024 – Feb 2025: </span>
                    Intern Developer at AgentBiz Technologies®
                    <ul className="list-disc ml-6 mt-2 text-sm lg:text-lg">
                      <li>
                        Built responsive mobile and web frontends with Flutter
                        and React.
                      </li>
                      <li>
                        Maintained and enhanced backend systems using Laravel.
                      </li>
                      <li>
                        Collaborated with peers to improve code quality and team
                        efficiency.
                      </li>
                    </ul>
                  </li>

                  <li className="mt-4">
                    <span className="font-bold">May – Jul 2024: </span>
                    Full Stack Developer at PlatDel®
                    <ul className="list-disc ml-6 mt-2 text-sm lg:text-lg">
                      <li>
                        Delivered responsive mobile and web applications with
                        Flutter.
                      </li>
                      <li>
                        Engineered secure, scalable backends with Laravel.
                      </li>
                      <li>
                        Designed intuitive UI/UX interfaces to boost user
                        engagement.
                      </li>
                    </ul>
                  </li>

                  {/* <li className="mt-4">
                    <span className="font-bold">May – Aug 2022: </span>
                    County ICT Assistant at IEBC Office, West Pokot County
                    <ul className="list-disc ml-6 mt-2 text-sm lg:text-lg">
                      <li>
                        Configured and maintained KIEMS kits and electoral
                        software.
                      </li>
                      <li>
                        Set up laptops, printers, and networking infrastructure.
                      </li>
                      <li>
                        Performed data entry and document preparation for
                        elections.
                      </li>
                    </ul>
                  </li>

                  <li className="mt-4">
                    <span className="font-bold">May – Aug 2021: </span>
                    ICT Casual at IEBC Office, Machakos Town
                    <ul className="list-disc ml-6 mt-2 text-sm lg:text-lg">
                      <li>
                        Assisted with maintenance and charging of election kits.
                      </li>
                      <li>Handled data entry and document formatting tasks.</li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className={`${activeTab !== "education" && "hidden"}`}>
              <div className="text-sm lg:text-xl mt-5">
                <ul>
                  <li>
                    <span className="font-extrabold">2020 - 2024</span>
                    <br />
                    BSc Applied Computer Science from Daystar University
                  </li>
                  <li className="mt-2">
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
