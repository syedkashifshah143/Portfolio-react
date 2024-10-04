import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaSquareUpwork, FaHtml5 } from "react-icons/fa6";
import { SiReact, SiNextdotjs, SiTailwindcss, SiMui } from 'react-icons/si';
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const iconAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.3, type: 'spring', stiffness: 300 } },
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

const IconSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col md:flex-row justify-around bg-gradient-to-r from-[#2C3E50] to-[#1ABC9C] text-white py-10" ref={ref}>
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <h3 className="text-lg md:text-xl font-semibold mb-4">FIND ME IN</h3>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Social Media Icons */}
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] text-white transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <Link to="https://www.facebook.com/syed.kashifshah143/" target="_blank">
              <FaFacebookF className="text-xl text-blue-600 hover:text-white" />
            </Link>
          </motion.div>
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <Link to="https://www.upwork.com/freelancers/~01f0a2e0476db2ea6d" target="_blank">
              <FaSquareUpwork className="text-xl text-green-500 hover:text-white" />
            </Link>
          </motion.div>
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <Link to="https://www.linkedin.com/in/syedkashifshah143/" target="_blank">
              <FaLinkedinIn className="text-xl text-blue-700 hover:text-white" />
            </Link>
          </motion.div>
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <Link to="https://github.com/syedkashifshah143" target="_blank">
              <FaGithub className="text-xl text-white" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-lg md:text-xl font-semibold mb-4">BEST SKILL ON</h3>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Skills Icons */}
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <FaHtml5 className="text-xl text-orange-500 hover:text-white" />
          </motion.div>
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <IoLogoCss3 className="text-xl text-blue-500 hover:text-white" />
          </motion.div>
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <IoLogoJavascript className="text-xl text-yellow-500 hover:text-white" />
          </motion.div>
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <SiReact className="text-xl text-blue-400 hover:text-white" />
          </motion.div>
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <SiNextdotjs className="text-xl text-black hover:text-white" />
          </motion.div>
          <motion.div className="p-4 rounded-lg bg-gray-800 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <SiTailwindcss className="text-xl text-cyan-400 hover:text-white" />
          </motion.div>
          <motion.div className="p-4 rounded-lg bg-gray-800 mt-2 md:mt-0 hover:bg-[#21bc9d] transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <SiMui className="text-xl text-blue-500 hover:text-white" /> {/* Adjusted margin for mobile */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IconSection;
