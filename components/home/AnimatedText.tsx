"use client";
import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => {
  return (
    <div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-light mb-4 sm:mb-8 h-12 uppercase">
      <TypeAnimation
        sequence={[
          "Computer Science Engineer",
          2000,
          "Full Stack Developer",
          2000,
          "Problem solver",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="font-mono"
      />
    </div>
  );
};

export default AnimatedText;
