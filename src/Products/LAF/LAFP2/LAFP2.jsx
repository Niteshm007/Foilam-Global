import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Plyimg from "../../../Images/Ply .png";
import TriplePly from "../../../Images/TriplePly.png";
import LAPFP21 from "../../../Images/LAFP2.1.png";
import LAPFP22 from "../../../Images/LAFP2.2.png";

export default function LAFP2() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="LAFP2 m-t m-tb">
      <div className="mn-br">
        <div className="inner-ply">
          {/* Sliding in header */}
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            Aluminium Foil For XLPE
          </motion.h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="mn-cont">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span>Foilam Global</span> produces Aluminium Foil For XLPE
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Laminated Aluminium foil used as facing for XLPE base insulation
                material. Our Alu foil laminates are very low Emissivity and
                high reflectivity. We believe that you might be interested in
                our products to be laminate on XLPE base insulation material
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
                      <img src={LAPFP21} alt="" className="img-fluid" />
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
                      <img src={LAPFP22} alt="" className="img-fluid" />
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
