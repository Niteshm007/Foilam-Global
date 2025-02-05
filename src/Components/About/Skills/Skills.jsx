import React from "react";
import "./Skills.scss";
import TD from "../../../Images/TD.png";
import CC from "../../../Images/CC.png";
import CP from "../../../Images/CP.png";
import QA from "../../../Images/QA.png";

// Importing framer-motion
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="Skills m-t">
      <div className="container">
        <div className="whd" align="center">
          <h1 className="mhd">
            <b>Our Skills and Expertise</b>
          </h1>
        </div>
        <div className="row">
          {/* First Column: Infrastructure */}
          <div className="col-md-3" align="center">
            <div className="sl-con">
              <div className="slg">
                {/* Apply motion.div to the image for scaling animation */}
                <motion.img
                  src={TD}
                  alt=""
                  className="Img-fluid"
                  animate={{ scale: [1, 1.1, 1] }} // Scaling from 1 to 1.1 and back to 1
                  transition={{
                    duration: 2,
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "loop", // Loop the animation
                    ease: "easeInOut", // Smooth easing
                  }}
                />
              </div>
            </div>
            <div className="whhc">
              <h4>Timebound Delivery</h4>
            </div>
          </div>

          {/* Second Column: Advanced Technology */}
          <div className="col-md-3" align="center">
            <div className="sl-con">
              <div className="slg">
                {/* Apply motion.div to the image for scaling animation */}
                <motion.img
                  src={CC}
                  alt=""
                  className="Img-fluid sim-2"
                  animate={{ scale: [1, 1.1, 1] }} // Scaling from 1 to 1.1 and back to 1
                  transition={{
                    duration: 2,
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "loop", // Loop the animation
                    ease: "easeInOut", // Smooth easing
                  }}
                />
              </div>
            </div>
            <div className="whhc">
              <h4>Communication & Cooperation</h4>
            </div>
          </div>

          {/* Third Column: Innovation Focused */}
          <div className="col-md-3" align="center">
            <div className="sl-con">
              <div className="slg">
                {/* Apply motion.div to the image for scaling animation */}
                <motion.img
                  src={CP}
                  alt=""
                  className="Img-fluid sim-3"
                  animate={{ scale: [1, 1.1, 1] }} // Scaling from 1 to 1.1 and back to 1
                  transition={{
                    duration: 2,
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "loop", // Loop the animation
                    ease: "easeInOut", // Smooth easing
                  }}
                />
              </div>
            </div>
            <div className="whhc">
              <h4>Competitive Pricing</h4>
            </div>
          </div>

          {/* Fourth Column: Lamination Technology */}
          <div className="col-md-3" align="center">
            <div className="sl-con">
              <div className="slg">
                {/* Apply motion.div to the image for scaling animation */}
                <motion.img
                  src={QA}
                  alt=""
                  className="Img-fluid"
                  animate={{ scale: [1, 1.1, 1] }} // Scaling from 1 to 1.1 and back to 1
                  transition={{
                    duration: 2,
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "loop", // Loop the animation
                    ease: "easeInOut", // Smooth easing
                  }}
                />
              </div>
            </div>
            <div className="whhc">
              <h4>Manufacturing Checks & Quality Assurance</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
