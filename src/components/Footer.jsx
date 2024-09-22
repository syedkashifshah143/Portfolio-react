import React, { useState } from "react";
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
      message: `New subscription from: ${email}`, // Include the email in the message
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
            <h3 className="text-2xl font-bold mb-1">Subscribe to our newsletter</h3>
            <p className="text-gray-300">Stay updated with the latest news.</p>
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
            {success && <p className="text-white">Subscription successful!</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
