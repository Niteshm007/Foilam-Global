import React, { useEffect } from "react";
import "./About.scss";
import AboutImg from "../../Images/About.png";
import AbWho from "./AbWho/AbWho";
import Skills from "./Skills/Skills";
import OCompany from "./OCompany/OCompany";
import { motion } from "framer-motion";

export default function About() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="About Ovr-hd m-tb">
      {/* Animation for the whole About section */}
      <motion.div
        className="row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <div className="col-ms-12">
          <motion.div
            className="about-img"
            initial={{ opacity: 0, x: -100 }} // Start off-screen from the left
            animate={{ opacity: 1, x: 0 }} // Slide to its natural position
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={AboutImg} alt="About Us" className="img-fluid" />
          </motion.div>
        </div> */}
      </motion.div>

      {/* Animated AbWho Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }} // Start off-screen from the left
        animate={{ opacity: 1, x: 0 }} // Slide to its natural position
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <AbWho />
      </motion.div>

      {/* Animated Skills Section */}

      <Skills />

      {/* Animated OCompany Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }} // Start off-screen from the left
        animate={{ opacity: 1, x: 0 }} // Slide to its natural position
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <OCompany />
      </motion.div>
    </div>
  );
}
