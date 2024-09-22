import React from "react";
import { motion } from "framer-motion";
import Heroimage from "../assets/hero.png";
import { Link } from "react-router-dom";
import KashifShahCV from "../assets/KashifShahCV.pdf";
import IconSection from "./IconSection";

const Hero = () => {
  const handleOpenCV = (e) => {
    e.preventDefault();
    window.open(KashifShahCV, "_blank");
  };

  const iconAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1, transition: { duration: 0.3, type: 'spring', stiffness: 300 } },
  };

  return (
    <div className="bg-gradient-to-r from-[#2C3E50] to-[#1ABC9C] text-white text-center py-16 relative">
      <motion.div
        className="mx-auto mb-8 w-48 h-48 overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={Heroimage}
          alt="Hero"
          className="object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </motion.div>

      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="overflow-hidden">
          <div className="transform transition-transform duration-300 hover:scale-110 inline-block">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ABC9C] to-[#FFD700]">
              Syed Kashif Shah
            </span>
            <span className="block text-2xl text-[#E1E1E1] mt-2">
              Full-Stack Developer
            </span>
          </div>
        </div>
      </motion.h1>

      <motion.div
        className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg text-[#E1E1E1] transform transition-transform duration-300 hover:scale-110">
          A dedicated Full-Stack Developer with expertise in both frontend and
          backend technologies. Passionate about creating seamless web
          applications and delivering exceptional user experiences. Committed to
          staying updated with the latest industry trends and best practices.
        </p>
      </motion.div>

      <div className="mt-8 space-x-4 flex justify-center">
        <Link to="/contact">
          <motion.button
            className="bg-gradient-to-r from-[#1ABC9C] to-[#3498DB] text-white 
            transform transition-transform duration-300 hover:scale-105 hover:shadow-lg px-6 py-3 rounded-full font-semibold 
            tracking-wide"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Contact Me
          </motion.button>
        </Link>

        <motion.button
          onClick={handleOpenCV}
          className="bg-gradient-to-r from-[#1ABC9C] to-[#3498DB] text-white 
          transform transition-transform duration-300 hover:scale-105 hover:shadow-lg px-6 py-3 rounded-full font-semibold 
          tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Open CV
        </motion.button>
      </div>
      <IconSection/>
    </div>
  );
};

export default Hero;
