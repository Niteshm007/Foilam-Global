import React, { useEffect } from "react";
import { motion } from "framer-motion";
import LMFP1 from "../../../Images/LMFP1.png";
import LMFP2 from "../../../Images/LMFP2.png";

export default function LMFP() {
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
            Laminated Metallized Film For Flexible Packaging
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
                <span>Foilam Global</span> produces Laminated Metallized Film
                For Flexible Packaging
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Laminated metallized film for flexible packaging is a type of
                film that combines a thin layer of metal, usually aluminum, with
                plastic film. This laminated structure enhances the packaging's
                barrier properties, providing resistance to moisture, light, and
                oxygen, which helps extend shelf life and preserve product
                quality. It's commonly used in packaging food, pharmaceuticals,
                and other consumer goods.
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
                      <img src={LMFP1} alt="" className="img-fluid" />
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
                      <img src={LMFP2} alt="" className="img-fluid" />
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
