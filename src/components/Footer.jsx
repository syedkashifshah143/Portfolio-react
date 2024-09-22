import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import emailjs from "emailjs-com";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const templateParams = {
      email,
    };

    emailjs
      .send(
        "service_oyrxd5p",
        "template_9f6ohto",
        templateParams,
        "AEC4iLC-jmTTW_GgH"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setEmail("");
        },
        (err) => {
          console.log("FAILED...", err);
          setError("Failed to subscribe. Please try again later.");
        }
      );
  };

  const iconAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1, transition: { duration: 0.3, type: 'spring', stiffness: 300 } },
  };

  return (
    <footer className="bg-gradient-to-r from-[#2C3E50] to-[#1ABC9C] text-white py-8">
      <div className="mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:space-x-12 items-center mb-6"
        >
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-1">Syed Kashif Shah</h3>
            <p className="text-gray-300">
              Full-Stack Developer based in Pakistan, specializing in web and software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center md:justify-end" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400 placeholder-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg transition duration-300 hover:bg-green-500"
              >
                Subscribe
              </button>
            </form>
            {success && <p className="text-green-500">Subscription successful!</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white text-center md:text-left">
            &copy; {new Date().getFullYear()} SKS. All rights reserved.
          </p>
          <div className="flex space-x-6 my-4 md:my-0">
            <motion.div {...iconAnimation}>
              <Link to="https://www.facebook.com/syed.kashifshah143/" target="_blank" className="text-white hover:text-white transition duration-300">
                <FaFacebook className="text-2xl" />
              </Link>
            </motion.div>
            <motion.div {...iconAnimation}>
              <Link to="https://www.upwork.com/freelancers/~01f0a2e0476db2ea6d" target="_blank" className="text-white hover:text-white transition duration-300">
                <FaSquareUpwork className="text-2xl" />
              </Link>
            </motion.div>
            <motion.div {...iconAnimation}>
              <Link to="https://www.linkedin.com/in/syed-kashif-shah-a917082a1/" target="_blank" className="text-white hover:text-white transition duration-300">
                <FaLinkedin className="text-2xl" />
              </Link>
            </motion.div>
            <motion.div {...iconAnimation}>
              <Link to="https://github.com/syedkashifshah143" target="_blank" className="text-white hover:text-white transition duration-300">
                <FaGithub className="text-2xl" />
              </Link>
            </motion.div>
          </div>
          <div className="flex space-x-4">
            <Link to="#" className="text-white hover:text-white transition duration-300">
              Privacy
            </Link>
            <Link to="#" className="text-white hover:text-white transition duration-300">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
