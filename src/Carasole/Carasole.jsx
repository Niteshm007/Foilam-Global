import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Carasole.scss';
import Paper from './PE Coated Paper/Paper';
import Insulation from './Insulation Material/Insulation';
import CMetalized from './CMetalized/CMetalized';
import CBarrier from './CBarrier/CBarrier';
import CFood from './CFood/CFood';

export default function Carasoul() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Variants for tearing animation effect
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Hidden (teared state)
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',  // Fully visible, intact
      transition: { duration: 1, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Exit (teared state)
      transition: { duration: 0.5, ease: 'easeIn' },
    },
  };

  // Handling the carousel slide event to track active index
  const handleSlide = (direction) => {
    if (direction === 'next') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // Now we have 5 items
    } else {
      setActiveIndex((prevIndex) => (prevIndex - 1 + 5) % 5); // Adjusting for the 5 items
    }
  };

  // Use useEffect to set an automatic interval for the next slide every 1 second (1000 ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlide('next'); // Automatically move to the next slide
    }, 5000); // 1000 ms = 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      id="carouselExampleControls" 
      className="carousel slide m-t" 
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {/* Paper Component */}
        <motion.div
          className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}
          key={activeIndex}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Paper />
        </motion.div>

        {/* Insulation Component */}
        <motion.div
          className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}
          key={activeIndex}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Insulation />
        </motion.div>

        {/* Component 3 */}
        <motion.div
          className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}
          key={activeIndex}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CMetalized />
        </motion.div>

        {/* Component 4 */}
        <motion.div
          className={`carousel-item ${activeIndex === 3 ? 'active' : ''}`}
          key={activeIndex}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CBarrier />
        </motion.div>

        {/* Component 5 */}
        <motion.div
          className={`carousel-item ${activeIndex === 4 ? 'active' : ''}`}
          key={activeIndex}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CFood />
        </motion.div>
      </div>

      {/* Carousel Controls */}
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExampleControls" 
        data-bs-slide="prev"
        onClick={() => handleSlide('prev')}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleControls" 
        data-bs-slide="next"
        onClick={() => handleSlide('next')}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
