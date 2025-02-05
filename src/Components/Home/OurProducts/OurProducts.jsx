import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./OurProducts.scss";

export default function OProduct() {
  const cardVariants = {
    hidden: (direction) => ({
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger effect
        duration: 0.5,
      },
    }),
  };

  return (
    <div>
      <div className="OProduct container second-section m-t">
        <div className="row">
          <div className="second-title">
            <div className="heading-section" align="center">
              <p className="m-hd">OUR PRODUCTS</p>
              <div className="heading-text">
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  Leader in Solvent Base Laminates Material like
                </motion.span>{" "}
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  <b>Aluminium Foil , Metalized Film</b>
                </motion.span>{" "}
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  and
                </motion.span>{" "}
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                >
                  <b>Paper Manufacturing </b>
                </motion.span>{" "}
              </div>
            </div>

            <div className="second-card">
              <div className="row">
                <div className="col-md-4">
                  <motion.div
                    className="card mb-4 card-2"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    custom="left"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inner-card img-1">
                      <div className="hover-overlay">
                        <div className="second-txt">
                        Laminated Aluminium Foil / Metlized Film
                          <Link className="dropdown-item" to="/Ply">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-4">
                  <motion.div
                    className="card mb-4 card-2"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    custom="right"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inner-card img-2">
                      <div className="hover-overlay">
                        <div className="second-txt">
                        Laminated Aluminium Foil / Metalized Paper
                          <Link className="dropdown-item" to="/Insulation">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-4">
                  <motion.div
                    className="card mb-4 card-2"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    custom="left"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inner-card img-3">
                      <div className="hover-overlay">
                        <div className="second-txt">
                        3/4 Ply Laminated Products
                          <Link className="dropdown-item" to="/Metalized">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="second-title">
            <div className="second-card">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <motion.div
                    className="card mb-4 card-2"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    custom="left"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inner-card img-4">
                      <div className="hover-overlay">
                        <div className="second-txt">
                        Insulation Material
                          <Link className="dropdown-item" to="/Food">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-4">
                  <motion.div
                    className="card mb-4 card-2"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    custom="right"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inner-card img-5">
                      <div className="hover-overlay">
                        <div className="second-txt">
                        Solvant Based Laminated Products
                          <Link className="dropdown-item" to="/Food">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
