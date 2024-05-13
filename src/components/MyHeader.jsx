// import { useEffect, useState } from "react";
import backgroundImage from "../assets/background2.webp";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div
      id="header"
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white pt-15 px-10 lg:px-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className="text-2xl mb-4">Full Stack Developer 🧑‍💻️</p>
      <h1 className="text-4xl lg:text-6xl font-bold text-center">
        <Typewriter
          options={{
            strings: ["Hi, I am Mike from Kenya. Welcome to my page."],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}
