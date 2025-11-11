import React from "react";
import { PlayCircle, Laptop } from "lucide-react";
import studentImg from "../assets/student.png";
import groupImg from "../assets/group.jpg";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#35689F] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 overflow-hidden">
      {/* Left Text Section */}
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Best Platform Improve <br /> Your Learning Skills.
        </h1>
        <p className="text-base md:text-lg text-gray-200">
          Edufit offers comprehensive courses, interactive quizzes, and peer
          reviewed assignments to enhance learning skills across various.
        </p>

        <button className="bg-white text-[#35689F] font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

      {/* Right Image Section with Play Icon */}
      <div className="relative mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
        <div className="relative">
          <img
            src={studentImg}
            alt="Student"
            className="w-[400px] md:w-[500px] lg:w-[600px] object-contain z-10"
          />
          {/* Play Icon on top of student image */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PlayCircle className="w-16 h-16 text-white/90 hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Floating Card */}
        <div className="absolute top-10 right-4 bg-white text-gray-900 px-5 py-4 rounded-xl shadow-lg flex items-center gap-3">
          <div className="bg-[#E5EEFB] p-3 rounded-full">
            <Laptop className="w-6 h-6 text-[#35689F]" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Online Classes</h3>
            <p className="text-sm text-gray-500">Flexible online classes</p>
          </div>
        </div>
      </div>

      {/* Group Image - Centered below both sections */}
      <div className="mt-12 w-full flex justify-center">
        <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
          <img
            src={groupImg}
            alt="Students learning"
            className="object-cover w-full h-48 md:h-56"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;