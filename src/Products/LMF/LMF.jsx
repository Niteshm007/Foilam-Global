import React, { useEffect } from "react";
import "./LMF.scss";
import { motion } from "framer-motion";
import LMFImg from "../../Images/LMF.png";
import LMFP1 from "../../Images/LMFP1.jpg";
import { Link } from "react-router-dom";

export default function LMF() {
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
    <div className="LMF container m-t m-tb">
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
              Brief About <br /> <b> Laminated Metallized Film </b>
            </h1>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Metallised films have a reflective silvery surface similar to
              aluminium foil and are highly flammable. The coating also reduces
              the permeability of the film to light, water and oxygen. The
              properties of the film remain, such as higher toughness, the
              ability to be heat sealed, and a lower density at a lower cost
              than an aluminium foil. This gives metallised films some
              advantages over aluminium foil and aluminium foil laminates. It
              was once thought that metallised films would become a replacement
              for aluminium foil laminates, but current films still cannot match
              the barrier properties of foil. Some very high barrier metallised
              films are available using EVOH, but are not yet cost effective
              against foil laminates.
              <br />
              <br />
              Metallised films are used as a susceptor for cooking in microwave
              ovens. An example is a microwave popcorn bag. Many food items are
              also packaged using metallised films for appearance only, as these
              produce a package with greater sparkle when compared to competing
              products that use printed paper or polymer films.
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
              src={LMFImg}
              alt="LMFImg"
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
            <motion.p
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Metallized Film+ PE (12 micron +22micron)
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
            <motion.p
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              For insulation material
            </motion.p>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              FoiLam Global provides laminated Metallized film are used as
              facings for laminations with insulation material (Like Air bubble,
              XLPE).
            </motion.p>
          </div>
        </div>
      </div>

      {/* Product Types - Cards Section */}
      <div className="df">
        {" "}
        <motion.div
          className="row justify-content-center align-items-center"
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
                <img
                  src={LMFP1}
                  className="card-img-top"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <motion.h4
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    For Flexible Packaging
                  </motion.h4>
                  <motion.p
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Laminated metallized films are multi-layered materials used
                    in flexible packaging to provide excellent barrier
                    protection, strength, and a reflective surface.
                  </motion.p>
                  <div className="plink">
                    <Link to="/LMFP">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
