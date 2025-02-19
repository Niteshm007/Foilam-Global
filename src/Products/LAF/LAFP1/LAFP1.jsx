import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import "./LAFP1.scss";
import LAFP11 from "../../../Images/LAFP1.1.jpg";
import LAFP12 from "../../../Images/LAFP1.2.png";

export default function LAFP1() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="LAFP1 m-t m-tb">
    <div className="mn-br">
      <div className="inner-ply">
        {/* Sliding in header */}
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          Aluminium Foil For Air Bubble
        </motion.h1>
      </div>
    </div>
    <div className="container m-t">
      <div className="row">
        <div className="main-cont">
          <div className="mn-cont" >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>Foilam Global</span> produces Aluminium Foil For Air
              Bubble
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Laminated Aluminium foil used as facing for air bubble
              insulation material. Our Alu foil laminates are very low
              Emissivity and high reflectivity. We believe that you might be
              interested in our products to be laminate on Air bubble
            </motion.p>
          </div>

          <div className="mn-img">
            <div className="row">
              <div className="col-md-6">
                {/* Sliding in image */}
                <motion.div
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 60, delay: 0.8 }}
                >
                  {" "}
                  <div className="mn-im">
                    <img src={LAFP11} alt="" className="img-fluid" />
                  </div>
                </motion.div>
              </div>
              <div className="col-md-6">
                {/* Sliding in image */}
                <motion.div
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 60, delay: 1 }}
                >
                  <div className="mn-im">
                    <img src={LAFP12} alt="" className="img-fluid" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
