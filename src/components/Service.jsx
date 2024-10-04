import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Design",
    description: "Crafting visually appealing and user-friendly websites that enhance user experience and engagement.",
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces that enhance user experience and engagement.",
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side logic and database management to ensure seamless functionality and data processing.",
  },
  {
    title: "Full-Stack Development",
    description: "Delivering end-to-end solutions by integrating both frontend and backend technologies for a complete web experience.",
  },
];

const Service = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C3E50] to-[#1ABC9C] text-white py-20" id="service">
      <div className="mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <Link to='#' className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
