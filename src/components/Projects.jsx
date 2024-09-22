import React from "react";
import { motion } from "framer-motion";
import MyPortolio from '../assets/myportolio.jpg';
import IceCreamStore from '../assets/IceCreamStore.jpg';
import { Link } from "react-router-dom";
import portolio from '../assets/portolio.jpg'

const projects = [
  {
    id: 1,
    name: "Person Portfolio",
    technologies: "HTML & CSS & JavaScript",
    image: MyPortolio,
    github: "https://github.com/syedkashifshah143/Person-Portfolio",
  },
  {
    id: 2,
    name: "Ice Cream Store",
    technologies: "MERN Stack | React.js | Tailwind CSS",
    image: IceCreamStore,
    github: "https://github.com/syedkashifshah143/Ice-Cream-Store",
  },
  {
    id: 3,
    name: "Portfolio",
    technologies: "MERN Stack React.js | Tailwind CSS",
    image: portolio,
    github: "https://github.com/YouafKhan1",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C3E50] to-[#1ABC9C] text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{
                opacity: 0,
                x: project.id === 1 ? -50 : project.id === 2 ? 0 : 50,
                y: project.id === 2 ? -50 : 0
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              {project.image && (
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
              )}
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <Link to={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
