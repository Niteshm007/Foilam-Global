import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Ply31 from "../../../Images/Ply3.1.png";
import Ply32 from "../../../Images/Ply3.2.png";

export default function Ply3() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="Ply3 m-t m-tb">
      <div className="mn-br">
        <div className="inner-ply">
          {/* Sliding in header */}
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            PET12/Al7/BOPA15/LDPE
          </motion.h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="m-cont">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span>Foilam Global</span> produces Aluminium Foil For
                PET12/Al7/BOPA15/LDPE
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <ul>
                  <li>
                    PET film, with great mechanical strength ,and good
                    stability, works as print substrate and outside protection.
                  </li>
                  <li>
                    Aluminum foil, trapped between PET film and BOPA film, both
                    are of great mechanical strength.
                  </li>
                  <li>
                    PA film, with good anti-puncture performance, that will
                    prevent the inside products to puncture the package. and
                    also PA film will work as buffer layer for aluminum foil and
                    LDPE film, that avoid de-lamination.
                  </li>
                  <li>
                    LDPE film, which can be modified against the products
                    inside, works as inner sealing layer.
                  </li>
                </ul>
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
                      <img src={Ply31} alt="" className="img-fluid" />
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
                      <img src={Ply32} alt="" className="img-fluid" />
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
