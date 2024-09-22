import React from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.jpg';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C3E50] to-[#1ABC9C] text-white py-20">
      <div className="mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <motion.img
            src={hero}
            alt=""
            className="w-72 h-[420px] rounded-3xl object-cover mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex-1">
            <motion.p
              className="text-lg text-[#E1E1E1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I am a passionate Full-Stack Developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
            </motion.p>
            <div className="space-y-4">
              {['HTML & CSS', 'JavaScript', 'React JS', 'Node JS', 'Material UI', 'Tailwind CSS'].map((skill, index) => (
                <div className="flex items-center" key={index}>
                  <label className="w-1/3 md:w-2/12 text-[#E1E1E1] text-sm md:text-base">{skill}</label>
                  <div className="flex-1 bg-gray-800 rounded-full h-2.5">
                    <motion.div
                      className={`bg-gradient-to-r from-[#1ABC9C] to-[#3498DB] h-2.5 rounded-full`}
                      style={{ width: `${[96, 80, 90, 70, 90, 94][index]}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${[96, 80, 90, 70, 90, 94][index]}%` }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12  gap-[6px] flex justify-between text-center">
              {[
                { value: '1+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Completed' },
                { value: '10+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
