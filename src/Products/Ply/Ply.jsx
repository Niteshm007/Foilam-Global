import React, { useEffect } from "react";
import './Ply.scss'
import { motion } from "framer-motion";
import PlyI from '../../Images/PlyI.jpg'
import Ply1Img from '../../Images/Ply1Img.png'
import Ply2Img from '../../Images/Ply2Img.png'
import Ply3Img from '../../Images/Ply3Img.png'
import { Link } from "react-router-dom";

export default function Ply() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Variants for content animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const leftContentVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const rightContentVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const topContentVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Card animation with overlapping sliding effect
  const cardVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.3, // Stagger the cards' animations
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
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
              Brief About <br /> <b> 3/4 Ply Laminated Foil </b>
            </h1>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              3/4 Ply Laminated Foil is a multi-layered material commonly used
              in packaging and insulation applications due to its durability and
              protective properties. Typically, it consists of three or four
              layers, combining aluminum foil with other materials like plastic
              films or paper. The layers are laminated together to create a
              structure that offers enhanced strength, moisture resistance, and
              thermal insulation. This type of foil is often used in industries
              where protection from external factors like light, moisture, and
              air is crucial, such as food packaging, pharmaceuticals, and
              electronics.
              <br />
              <br />
              The multi-ply construction adds to the overall performance of the
              foil. For example, the aluminum layer acts as a barrier against
              moisture, light, and gases, while the outer layers, such as
              plastic or paper, provide additional structural integrity,
              flexibility, and ease of handling. Laminated foils are often
              designed to maintain the freshness of food, extend shelf life, and
              protect sensitive products during transport and storage. The
              versatility of 3/4 Ply Laminated Foil makes it a popular choice in
              various sectors requiring high-quality, protective packaging
              materials.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="col-md-6 justify-content-center align-items-center"
          variants={rightContentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="brf-img pl-img">
            <motion.img
              src={PlyI}
              alt="Plyimg"
              className="img-fluid"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="row m-t">
        <div className="mn-cont-hd" align="center">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            Specifications
          </motion.h2>
        </div>
        <div className="sp-cont">
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            align="center"
          >
            <b>
              In Lamination, we will give users the required features enables
              the user to get the composite layer structure of different
              laminates (PET/ Foil / BOPP / Nylon / Paper / Poly etc.,) ranging
              from 30 microns to 200 microns (more, if required)
            </b>
          </motion.p>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            PET (Polyester film) +Aluminium Foil+ PE [12micron +7
            micron+30micron- 200micron]
          </motion.p>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            PET (Polyester film) +PA (NY Film)+ PE [12 micron+15 micron (NY
            Film)+ 150 micron]
          </motion.p>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            PET (Polyester film) +Aluminium Foil+ BOPA+ PE [12micron +7
            micron+15micron+60micron-200 micron]
          </motion.p>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            PET (Polyester film) +VMPET + PE [12micron +12 micron+60micron-200
            micron]
          </motion.p>
        </div>
      </div>

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
              <img src={Ply1Img} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <motion.h4
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  PET12/AL7/LDPE
                </motion.h4>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  PET12 is a type of plastic for packaging, AL7 is an aluminum
                  grade, and LDPE is a flexible plastic used for bags.
                </motion.p>
                <div className="plink">
                  <Link to="/Ply1">
                    <a href="">
                      <motion.p
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        Read More
                      </motion.p>
                    </a>
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
              <img src={Ply2Img} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <motion.h4
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  PET12/PA15/LDPE150
                </motion.h4>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  PET12 is a packaging plastic, PA15 is a type of nylon, and
                  LDPE150 is a flexible plastic used for films and bags.
                </motion.p>
                <div className="plink">
                  <Link to="/Ply2">
                    <a href="">
                      <motion.p
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        Read More
                      </motion.p>
                    </a>
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
              <img src={Ply3Img} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <motion.h4
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  PET12/Al7/BOPA15/LDPE
                </motion.h4>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  PET12 is a packaging plastic, Al7 is an aluminum grade, BOPA15
                  is a biaxially oriented nylon, and LDPE is a flexible plastic
                  used for films.
                </motion.p>
                <div className="plink">
                  <Link to="/Ply3">
                    <a href="">
                      <motion.p
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        Read More
                      </motion.p>
                    </a>
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
