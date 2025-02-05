import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion
import "./Contact.scss";
import CLogo from "./CLogo/CLogo";
import CMap from "./CMap/CMap";
import CForm from "./CForm/CForm";

export default function Contact() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      className="Contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Fade in the whole page
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }} // Animation for CLogo
      >
        <CLogo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }} // Animation for CMap
      >
        <CMap />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }} // Animation for CForm
      >
        <CForm />
      </motion.div>
    </motion.div>
  );
}
