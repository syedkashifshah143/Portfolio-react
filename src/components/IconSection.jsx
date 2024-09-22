import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiFigma } from 'react-icons/si';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const iconAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.3, type: 'spring', stiffness: 300 } },
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

const IconSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-around bg-gradient-to-r from-[#2C3E50] to-[#1ABC9C] text-white py-10" ref={ref}>
      
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-4">FIND ME IN</h3>
        <div className="flex space-x-4">
          <motion.div
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <FaFacebookF className="text-xl text-white" />
          </motion.div>
          <motion.div
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <FaTwitter className="text-xl text-white" />
          </motion.div>
          <motion.div
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <FaLinkedinIn className="text-xl text-white" />
          </motion.div>
        </div>
      </div>

      
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-4">BEST SKILL ON</h3>
        <div className="flex space-x-4">
          <motion.div
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <SiReact className="text-xl text-white" />
          </motion.div>
          <motion.div
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <SiNextdotjs className="text-xl text-white" />
          </motion.div>
          <motion.div
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <SiTailwindcss className="text-xl text-white" />
          </motion.div>
          <motion.div
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            variants={iconAnimation}
          >
            <SiFigma className="text-xl text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IconSection;
