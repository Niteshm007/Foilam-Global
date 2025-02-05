import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";  // Importing framer motion
import "./Paper.scss";

export default function Paper() {
  // Define the animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },  // Start hidden with a little downward offset
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },  // Fade in with upward movement
    exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } },  // Fade out with upward movement
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },  // Initially offscreen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },  // Slide in from left
  };

  return (
    <motion.div 
      className="Paper container" 
      initial="hidden" 
      animate="visible" 
      exit="exit"
      variants={pageVariants}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="outer-br row justify-content-center align-items-center">
            <div className="middle-br row justify-content-center align-items-center">
              <div className="inner-br">
                <motion.div 
                  className="inner-txt-m " 
                  variants={textVariants}
                >
                  <p>Welcome To Foilam Global</p>
                  <h1>Laminated Aluminium Foil <br /> Metlized Film</h1>

                  {/* <div className="car-btn row caras-sm">
                    <div className="col-auto">
                      <Link to="/Ply">
                        <button className="caras-btn">Learn More</button>
                      </Link>
                    </div>
                    <div className="col-auto">
                    <Link to="/Contact">
                        <button className="caras-btn">Request a Sample</button>
                      </Link>
                    </div>
                  </div> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
