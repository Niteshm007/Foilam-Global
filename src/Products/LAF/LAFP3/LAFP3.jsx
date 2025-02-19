import React, { useEffect } from "react";
import { motion } from "framer-motion";
import LAFP31 from '../../../Images/LAFP3.1.png';
import LAFP32 from '../../../Images/LAFP3.2.png';

export default function LAFP3() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="LAFP3 m-t m-tb">
      <div className="mn-br">
        <div className="inner-ply">
          {/* Sliding in header */}
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            Aluminium Foil For PUR & PIR board
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
                <span>Foilam Global</span> produces Aluminium Foil For PUR & PIR
                board
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Laminated Aluminium foil used as facing for PUR/PIR panels base
                insulation material. Our Alu foil laminates are very low
                Emissivity and high reflectivity. We believe that you might be
                interested in our products to be laminate on PUR/PIR panels base
                insulation material. PUR/PIR panels with aluminum foil are
                completely recyclable.
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
                      <img src={LAFP31} alt="" className="img-fluid" />
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
                      <img src={LAFP32} alt="" className="img-fluid" />
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
