import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing arrow icon from react-icons

const Hero = () => {
  return (
    <section className="z-50 absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-4 md:p-6 w-full md:w-1/2">
      <div className="p-4 mx-4 md:max-w-5xl">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl font-medium mb-4">
          We’ve really sped up our workflow
        </h1>

        {/* Subheading */}
        <p className="text-sm  md:text-lg mb-6">
          We’ve just released a new update! Check out the all-new dashboard view. Pages now load faster. You can try us for free for 30 days. 
          <br />
          Join 4,000+ companies already growing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="#start-learning"
            className="flex items-center bg-white text-black py-2 px-6 rounded-md w-full md:w-auto justify-center"
          >
            <FaArrowRight className="mr-2" />
            Start Learning Today
          </a>
          <a
            href="#join-now"
            className="bg-[#7D6EEB] text-white py-2 px-6 rounded-md w-full md:w-auto text-center"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
