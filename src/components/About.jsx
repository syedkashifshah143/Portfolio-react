import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.jpg';

const About = () => {
  const skills = [
    { name: 'HTML & CSS', percentage: 96 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React JS', percentage: 90 },
    { name: 'Node JS', percentage: 70 },
    { name: 'Material UI', percentage: 90 },
    { name: 'Tailwind CSS', percentage: 94 },
  ];

  const stats = [
    { target: 1, label: 'Years Experience' },
    { target: 10, label: 'Projects Completed' },
    { target: 10, label: 'Happy Clients' },
  ];

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
              {skills.map((skill, index) => (
                <div className="flex items-center" key={index}>
                  <label className="w-1/3 md:w-2/12 text-[#E1E1E1] text-sm md:text-base">{skill.name}</label>
                  <div className="flex-1 bg-gray-800 rounded-full h-2.5 relative">
                    <motion.div
                      className={`bg-gradient-to-r from-[#1ABC9C] to-[#3498DB] h-2.5 rounded-full`}
                      style={{ width: `${skill.percentage}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    />
                    <span className="absolute right-0 text-sm text-[#E1E1E1]">{skill.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 gap-[6px] flex justify-between text-center">
              {stats.map((stat, index) => {
                const [count, setCount] = useState(0);

                useEffect(() => {
                  let isMounted = true;

                  const interval = setInterval(() => {
                    if (isMounted && count < stat.target) {
                      setCount((prevCount) => Math.min(prevCount + 1, stat.target));
                    }
                  }, 1000);

                  return () => {
                    isMounted = false;
                    clearInterval(interval);
                  };
                }, [stat.target, count]);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-white">{count}+</h3>
                    <p>{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
