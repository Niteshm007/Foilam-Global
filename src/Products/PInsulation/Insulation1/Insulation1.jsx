import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./Insulation1.scss";
import PEFilm1 from "../../../Images/PEFilm1.png";
import PEFilm2 from "../../../Images/PEFilm2.png";
import Tick from "../../../Images/TickLogo.png";

export default function Insulation1() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <div className="Insulation1 m-tb">
      <div className="mnins1-br">
        <div className="inner-ply">
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible">
            PE Film Laminated Aluminium Foil
          </motion.h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              <motion.h4 variants={fadeIn} initial="hidden" animate="visible">
              <h3>
                PE FILM LAMINATED ALUMINIUM FOIL ( AL+PE )
              </h3>
              </motion.h4>
            </div>

            <div className="mn-cont">
              <motion.p variants={fadeIn} initial="hidden" animate="visible">
                At <span>Foilam Global</span> we offer a wide-ranging range of
                Industrial PE Laminated Aluminium Foil and Aluminium Foil
                Laminated Materials, which is widely insisted by many industries
                and printing companies owing to their greater quality as below.
              </motion.p>
            </div>

            <div className="mn-img">
              <motion.div className="row" variants={stagger} initial="hidden" animate="visible">
                <motion.div className="col-md-6" variants={slideIn}>
                  <div className="mn-im">
                    <img src={PEFilm1} alt="" className="img-fluid" />
                  </div>
                </motion.div>
                <motion.div className="col-md-6" variants={slideIn}>
                  <div className="mn-im">
                    <img src={PEFilm2} alt="" className="img-fluid" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="prd-desc m-t">
              <motion.h4 variants={fadeIn} initial="hidden" animate="visible">
                PolyFilm Laminated Al Foil Application:
              </motion.h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    PE Coated Foil for Foam Insulations Materials Manufacturing
                  </p>
                </div>
              </div>

              {/* Repeat for other items */}
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Poly Coated Al foil For Heat Lamination with Foam</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>PE coated Al foil For Thermal Insulations Materials</p>
                </div>
              </div>

              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Plastic coated Al foil For Reflective Insulations Barrier
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Reinforced Scrim Laminated Aluminium Foil For Insulation
                    Industries
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Coated Pure Reflective Al foil For Reflective Insulations
                    Industries..
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Foil Laminated Paper and Paper Board For Multi Colour
                    Printing Industries.
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Heat insulation material</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Al foil for Protective Packaging Material</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Laminated Foil for Plastic flexible laminates</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Soap and detergent industries</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Pharmaceuticals</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Food</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Paper cup industries</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Ice Cream</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Multi wall paper bags industries</p>
                </div>
              </div>
              <h4>Benefits:</h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Hot melting offers good outside adhesion for other
                    materials.
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Can be pasted or laminated using methods appropriate for hot
                    melting treated polyester
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Excellent handling characteristics</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Accessible in particular grade appropriate for lamination
                  </p>
                </div>
              </div>
            </div>

            <div className="mtr-tbl mt-3">
              <motion.table
                className="table table-bordered table-responsive"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <thead className="text-white hd-clr align-middle">
                  <tr>
                    <th className="text-white hd-clr align-middle">PROPERTIES</th>
                    <th className="text-white hd-clr align-middle">UNIT</th>
                    <th className="text-white hd-clr align-middle">TYPICAL VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle">Thickness</td>
                    <td>micron</td>
                    <td>12 for AL foil <br /> 20 for LDPE</td>
                  </tr>
                  <tr>
                    <td>Density</td>
                    <td>gr/cm3</td>
                    <td>2.71 for AL foil 0.92 for PE</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>grs/sqm</td>
                    <td>50.92</td>
                  </tr>
                  <tr>
                    <td>Yield</td>
                    <td>sqm/Kg</td>
                    <td>19.638</td>
                  </tr>
                  <tr>
                    <td>Reflectivity</td>
                    <td>%</td>
                    <td>95 ~ 97</td>
                  </tr>
                  <tr>
                    <td>Emissivity</td>
                    <td>%</td>
                    <td>0.03 ~ 0.05</td>
                  </tr>
                  <tr>
                    <td>Flammability</td>
                    <td>-</td>
                    <td>nonflammable</td>
                  </tr>
                  <tr>
                    <td>Elongation</td>
                    <td>%</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>Lamination Temperature</td>
                    <td>C</td>
                    <td>200 ~ 250</td>
                  </tr>
                  <tr>
                    <td>Lamination Pressure</td>
                    <td>kg/cm2</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </motion.table>
            </div>

            <div className="mtr-tbl2">
              <motion.table
                className="table table-bordered table-responsive"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <thead className="text-white hd-clr align-middle">
                  <tr>
                    <th className="text-white hd-clr align-middle">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      -Core ID: 76mm (3inch) Standard <br />
                      -length: 5,000mtrs, Other lengths available On request <br />
                      -Thickness Tolerance: +/-7% Maximum <br />
                      -Width: Up to 1520mm
                    </td>
                  </tr>
                </tbody>
              </motion.table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
