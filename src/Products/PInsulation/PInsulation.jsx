import React, { useEffect } from "react";
import "./PInsulation.scss";
import { motion } from "framer-motion";
import InsuImg from "../../Images/Insulation.png";
import Insulation1 from '../../Images/Insulation1.png';
import Insulation2 from '../../Images/Insulation2.png';
import Insulation3 from "../../Images/Insulation3.png";
import { Link } from "react-router-dom";

export default function PInsulation() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="PInsulation container m-t m-tb">
      <div className="row">
        {/* Left Content */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -200 }} // Slide from the left
          animate={{ opacity: 1, x: 0 }} // Final position
          transition={{ duration: 0.8 }}
        >
          <div className="brf">
            <h1 align="center">
              Brief About <br /> <b> Insulation </b>
            </h1>
            <p>
              Insulation Materials are used to reduce the transfer of heat
              between objects or environments. These materials work by slowing
              down the movement of heat, keeping spaces warmer in cold
              conditions and cooler in hot conditions. They are commonly used in
              buildings, appliances, and industrial applications to improve
              energy efficiency, reduce heating and cooling costs, and enhance
              comfort.
              <br />
              <br />
              Common thermal insulation materials include foam boards, mineral
              wool, cellulose, and reflective barriers. Fiberglass and mineral
              wool are made of materials that trap air, which slows heat flow.
              Foam boards, such as rigid polystyrene or polyurethane, have high
              thermal resistance and are often used in walls, roofs, and
              foundations. Reflective barriers, like radiant barriers, are
              designed to reflect heat away from a surface, particularly useful
              in attics where they can block heat from the sun.
              <br />
              <br />
              The effectiveness of thermal insulation is often measured by its
              R-value, which indicates the material's resistance to heat flow. A
              higher R-value means better insulation performance. In addition to
              thermal insulation, many materials also provide benefits like
              noise reduction, fire resistance, and moisture control, making
              them versatile for a range of applications.
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="col-md-6 justify-content-center align-items-center"
          initial={{ opacity: 0, x: 200 }} // Slide from the right
          animate={{ opacity: 1, x: 0 }} // Final position
          transition={{ duration: 0.8 }}
        >
          <div className="brf-img">
            <img src={InsuImg} alt="" className="img-fluid" />
          </div>
        </motion.div>
      </div>

      <div className="row">
        <div className="product-typ row m-t" align="center">
          {/* First Card */}
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: -200 }} // Slide from left for the card
            animate={{ opacity: 1, x: 0 }} // Final position
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card" style={{ width: "20rem" }}>
              <img
                src={Insulation1}
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4>PE Film Laminated Aluminium Foil</h4>
                <p className="card-text">
                  We develop and design new procedures, tools systems for
                  agricultural products environments.
                </p>
                <div className="plink">
                  <Link to="/Insulation1">
                    <a href="">
                      <p>Read More</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: -200 }} // Slide from left for the card
            animate={{ opacity: 1, x: 0 }} // Final position
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="card" style={{ width: "20rem" }}>
              <img
                src={Insulation2}
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4>PE Laminated Metalized Film</h4>
                <p className="card-text">
                  Chemical Research expertise in producing and manipulating
                  chemicals to energy properties.
                </p>
                <div className="plink">
                  <Link to="/Insulation2">
                    <a href="">
                      <p>Read More</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: -200 }} // Slide from left for the card
            animate={{ opacity: 1, x: 0 }} // Final position
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="card" style={{ width: "20rem" }}>
              <img
                src={Insulation3}
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4>Customized Laminates Film</h4>
                <p className="card-text">
                  Creating a dynamic company for the continuous exploration and
                  develop opportunities.
                </p>
                <div className="plink">
                  <Link to="/Insulation3">
                    <a href="">
                      <p>Read More</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
