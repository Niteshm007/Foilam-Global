import React from "react";
import { motion } from "framer-motion";
import "./Why.scss";
import Infa from "../../../Images/Infa.png";
import AT from "../../../Images/AT.png";
import IF from "../../../Images/IF.png";
import LT from "../../../Images/LT.png";

export default function Why() {
  return (
    <div className="Why">
      <div className="container">
        <div className="whd" align="center">
          <motion.h1
            className="mhd"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <b>Why Foilam Global</b>
          </motion.h1>
          <motion.p
            className="p-txt-gry pr-sz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We have the expertise and are one of the best in the industry.
          </motion.p>
        </div>
        <div className="wcont">
          <div className="row">
            {/* First Column: Infrastructure */}
            <div className="col-md-3" align="center">
              <motion.div
                className="whlg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img src={Infa} alt="" className="Img-fliud" />
              </motion.div>
              <motion.div
                className="whhc"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h4>Infrastructure</h4>
              </motion.div>
              <motion.div
                className="whc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="p-txt-gry pr-sz">
                  At Foilam Global, we have the best of the facilities to ensure
                  quality products and employee-friendly atmosphere.
                </p>
              </motion.div>
            </div>

            {/* Second Column: Advanced Technology */}
            <div className="col-md-3" align="center">
              <motion.div
                className="whlg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img src={AT} alt="" className="Img-fliud" />
              </motion.div>
              <motion.div
                className="whhc"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h4>Advanced Technology</h4>
              </motion.div>
              <motion.div
                className="whc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="p-txt-gry pr-sz">
                  We ensure that machinery from renowned machine manufacturing
                  companies are used enabling us to deliver products that meet
                  the customer requirements satisfactorily.
                </p>
              </motion.div>
            </div>

            {/* Third Column: Innovation Focused */}
            <div className="col-md-3" align="center">
              <motion.div
                className="whlg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img src={IF} alt="" className="Img-fliud" />
              </motion.div>
              <motion.div
                className="whhc"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h4>Innovation Focused</h4>
              </motion.div>
              <motion.div
                className="whc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="p-txt-gry pr-sz">
                  At Foilam Global, we constantly engage in research and
                  development activities, to manufacture products aimed at
                  providing customers a cost-effective solution.
                </p>
              </motion.div>
            </div>

            {/* Fourth Column: Lamination Technology */}
            <div className="col-md-3" align="center">
              <motion.div
                className="whlg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img src={LT} alt="" className="Img-fliud" />
              </motion.div>
              <motion.div
                className="whhc"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h4>Lamination Technology</h4>
              </motion.div>
              <motion.div
                className="whc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p className="p-txt-gry pr-sz">
                  We have state-of-the-art machinery and technology to deliver
                  quality laminated products ensuring no compromise on customer
                  satisfaction levels.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
