import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Plyimg from "../../Images/Ply .png";
import FourPly from "../../Images/4Ply.png";
import MultiPly from "../../Images/MultiPly.png";
import { Link } from "react-router-dom";

export default function SBLP() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Variants for content animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const leftContentVariants = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const rightContentVariants = {
    hidden: { x: '100vw', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const topContentVariants = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };

  // Card animation with overlapping sliding effect
  const cardVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.3,  // Stagger the cards' animations
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <div className="Ply container m-t m-tb">
      {/* Top content section */}
      <motion.div
        className="row"
        variants={topContentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div
          className="col-md-6"
          variants={leftContentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="brf">
            <h1 align="center">
              Brief About <br /> <b>  Solvant Based Laminated Products </b>
            </h1>
            <p>
              Ply Laminated Foil is a versatile and durable insulation material
              made by bonding multiple layers of aluminum foil to a substrate,
              such as fabric or plastic. The resulting multi-layer structure
              enhances both strength and thermal performance. This material is
              primarily used for reflecting radiant heat and improving thermal
              insulation in a variety of applications, including construction,
              HVAC systems, and packaging.
              <br />
              <br />
              The multiple layers of foil in ply laminated foil help improve
              heat reflection and moisture resistance, making it effective in
              controlling temperature and reducing energy loss. The material is
              often lightweight, flexible, and easy to install, offering
              excellent protection against heat and cold. Additionally, its
              durability ensures it can withstand environmental wear and tear
              while maintaining its insulating properties over time.
              <br />
              <br />
              Ply laminated foil is a cost-effective, high-performance
              alternative to other types of insulation, such as traditional
              radiant barriers, due to its enhanced durability and thermal
              efficiency.
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="col-md-6 justify-content-center align-items-center"
          variants={rightContentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="brf-img">
            <img src={Plyimg} alt="" className="img-fluid" />
          </div>
        </motion.div>
      </motion.div>

      {/* Product Types - Cards Section */}
      <motion.div
        className="row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="product-typ row m-t" align="center">
          {/* First Card */}
          <motion.div
            className="col-md-4"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={0} // Pass index for stagger effect
          >
            <div className="card" style={{ width: "20rem" }}>
              <img src={Plyimg} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Triple Laminate for Packing</h4>
                <p className="card-text">
                  We develop and design new procedures, tools systems for agricultural products environments.
                </p>
                <div className="plink">
                  <Link to="/ThreePly">
                    <a href=""><p>Read More</p></a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="col-md-4"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1} // Pass index for stagger effect
          >
            <div className="card" style={{ width: "20rem" }}>
              <img src={FourPly} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Four Ply Laminate for Packaging</h4>
                <p className="card-text">
                  Chemical Research expertise in producing and manipulating chemicals to energy properties.
                </p>
                <div className="plink">
                  <Link to="/FourPly">
                    <a href=""><p>Read More</p></a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="col-md-4"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={2} // Pass index for stagger effect
          >
            <div className="card" style={{ width: "20rem" }}>
              <img src={MultiPly} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Multy Ply Laminate For Packaging</h4>
                <p className="card-text">
                  Materials Engineering should include scientific and engineering strength relationships of materials.
                </p>
                <div className="plink">
                  <Link to="/MultiPly">
                    <a href=""><p>Read More</p></a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
