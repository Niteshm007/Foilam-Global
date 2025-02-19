import React, { useEffect } from "react";
import "./LAF.scss";
import { motion } from "framer-motion";
import Plyimg from "../../Images/Ply .png";
import LAFP1 from "../../Images/LAFP1.png";
import LAFP2 from "../../Images/LAFP2.png";
import LAFP3 from "../../Images/LAFP3.png";
import { Link } from "react-router-dom";

export default function LAF() {
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
              Brief About <br /> <b> Laminated Aluminium Foil </b>
            </h1>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              A large amount of the heat, up to 93%, is transmitted by
              radiation. A house without insulation loses this radiant heat.
              Insulation materials made solely from glass fibers or cellulose
              cannot stop radiation losses.
              <br />
              <br />
              It is also used for
              <br />
              <br />
              Unlike aluminum foils and aluminum composite films. Aluminum foil
              reflects up to 96% of the radiant heat. Aluminum is ideal as an
              extremely cost-effective and easy-to-shape, adaptable material for
              the insulation of walls and roofs.
              <br />
              <br />
              Aluminum foil is the ideal partner for composite insulations and
              is durable thanks to a protective coating. This makes aluminum
              foil one of the most versatile materials in the insulation of
              houses.
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
          <div className="brf-img">
            <motion.img
              src={Plyimg}
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
        <div className="col-md-6">
          <div className="mn-cont-hd">
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Specifications
            </motion.h2>
          </div>
          <div className="sp-cont">
            <motion.p variants={containerVariants} initial="hidden" animate="visible">
              Aluminium Foil+ PE [7 micron+22micron]
            </motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible">
              Aluminium Foil+ PE [9 micron+22micron]
            </motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible">
              Aluminium Foil+ PE [12 micron+22micron]
            </motion.p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mn-cont-hd">
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Application
            </motion.h2>
          </div>
          <div className="ap-cont">
            <motion.p variants={containerVariants} initial="hidden" animate="visible">
              For insulation material
            </motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible">
              FoiLam Global provides laminated aluminium foils are used as
              facings for laminations with insulation material (Like Air bubble,
              XLPE), rock wool, glass scrims, plastic scrims, and tissues. This
              creates high-performance insulation products used for sound
              absorption, heat insulation, and low-temperature insulation.
            </motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible">
              Our foils are also used with foam insulation panels such as PUR
              foam and PIR foam.
            </motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible">
              <b>Facings for insulation materials</b> have become one of our
              core competencies, and we have in-depth knowledge of what materials
              and treatments are needed to achieve the desired result for
              numerous applications in various environmental settings.
            </motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible">
              Our foils and strips are used to produce packaging material for
              food and beverages, including chocolate and dairies, as well as
              pharmaceuticals.
            </motion.p>
          </div>
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
              <img src={LAFP1} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <motion.h4
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Aluminium Foil For Air Bubble
                </motion.h4>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Aluminum foil reflects radiant heat, while air bubbles trap
                  air, creating a double layer of insulation
                </motion.p>
                <div className="plink">
                  <Link to="/LAFP1">
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
              <img src={LAFP2} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <motion.h4
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Aluminium Foil For XLPE
                </motion.h4>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Aluminum foil bonded to XLPE creates a robust insulation
                  material, combining the foil's reflectivity with XLPE's
                  flexibility and durability
                </motion.p>
                <div className="plink">
                  <Link to="/LAFP2">
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
              <img src={LAFP3} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <motion.h4
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Aluminium Foil For PUR & PIR board
                </motion.h4>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Aluminum foil on PUR/PIR boards enhances their insulation
                  performance by reflecting radiant heat and acts as a vapor
                  barrier.
                </motion.p>
                <div className="plink">
                  <Link to="/LAFP3">
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
