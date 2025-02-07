import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import "./ThreePly.scss";
import Plyimg from "../../../Images/Ply .png";
import TriplePly from "../../../Images/TriplePly.png";
import Tick from "../../../Images/TickLogo.png";

export default function ThreePly() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="ThreePly">
      <div className="mn-br">
        <div className="inner-ply">
          {/* Sliding in header */}
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            Triple Laminate for Packing
          </motion.h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              {/* Sliding in subheader */}
              <motion.h3
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
              >
                TRIPLE LAMINATE FOR PACKAGING
              </motion.h3>
            </div>

            <div className="mn-cont">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span>Foilam Global</span> produces three ply having the
                following structure : Polyester / Foil / Poly
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                This 3 ply is appropriate for packing conservative products like
                confectionery, tea, consumables etc. The final product
                specifications are made as per agreed pact with the customers
                based on the type of products that are to be packed. Polyester
                to foil and foil to poly lamination is done by dry lamination.
                This foils are usually used for packing pouch.
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
                      <img src={Plyimg} alt="" className="img-fluid" />
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
                      <img src={TriplePly} alt="" className="img-fluid" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="hd m-t">
              <motion.h3
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 60, delay: 1.2 }}
              >
                FOIL MATERIAL
              </motion.h3>
            </div>
            <div className="mn-cont mt-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Soft Aluminium foil made from alloy AA 1200 / AA 1235 / AA 8011
                conforming to Aluminium Association specification.
              </motion.p>
            </div>

            <motion.div
              className="mtr-tbl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <table className="table table-bordered table-responsive">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="bg-dark text-white hd-clr">
                      Std Foil Gauge Options
                    </th>
                    <th className="bg-dark text-white hd-clr">Tolerance ( +/-8% )</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">0.009</td>
                    <td className="">± 0.00072</td>
                  </tr>
                  <tr>
                    <td className="">0.012</td>
                    <td className="">± 0.00096</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <motion.p
              className="p-txt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Note: The quality of foil is as per our light gauge foil
              specification.
            </motion.p>

            <div className="hd mt-3">
              <motion.h3
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 60, delay: 2 }}
              >
                POLYESTER
              </motion.h3>
            </div>
            <motion.div
              className="mtr-tbl2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <table className="table table-bordered table-responsive">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="bg-dark text-white hd-clr">
                      Standard Thickness (micron)
                    </th>
                    <th className="bg-dark text-white hd-clr">Tolerance (± 10%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">10</td>
                    <td className="">± 1</td>
                  </tr>
                  <tr>
                    <td className="">12</td>
                    <td className="">± 1.2</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <div className="hd mt-3">
              <motion.h3
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 60, delay: 2.4 }}
              >
                POLY:
              </motion.h3>
            </div>

            <motion.p
              className="p-txt mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
            >
              Colorless poly conforming to the applicable Government regulations
              as a sealant layer.
            </motion.p>

            <motion.div
              className="mtr-tbl3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              <table className="table table-bordered table-responsive">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="bg-dark text-white hd-clr">
                      Standard Thickness (micron)
                    </th>
                    <th className="bg-dark text-white hd-clr">Tolerance (± 15%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">37.5 (150 gauge)</td>
                    <td className="">± 5.625</td>
                  </tr>
                  <tr>
                    <td className="">25 (100 gauge)</td>
                    <td className="">± 3.750</td>
                  </tr>
                  <tr>
                    <td className="">45 (180 gauge)</td>
                    <td className="">± 6.750</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>

        <div className="prd-desc">
          {/* Adding sliding animations for the list items */}
          <motion.div
            className="prd-dsc d-flex"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 3 }}
          >
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>
                PEEL STRENGTH :
                <br /> Between PET / Foil : 150 g / 15 mm minimum <br />
                Between Foil / Poly : 200 g / 15 mm minimum
              </p>
            </div>
          </motion.div>

          {/* Repeat sliding animations for other items */}
          <motion.div
            className="prd-dsc d-flex"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
          >
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>
                PRINTING : Reverse printed up to eight colours on polyester as
                per text, layout and shade approved by customer.
              </p>
            </div>
          </motion.div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>CONFIGURATION : un-printed 3 Ply available in the reel</p>
              </div>
            </motion.div>
          </div>

          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>
                  WINDING
                  <br />
                  DIRECTION : Generally printed or clear polyester side is out
                  with poly film inside.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>CORE : Material options: (a) Plastic (b) Card board</p>
              </div>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>Core ID : 76 mm or 70 mm ± 1 mm</p>
              </div>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>
                  SPLICES : Butt type made with 25 mm pressure sensitive tape.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>REEL OUTER DIAMETER : 275 ± 5 mm maximum</p>
              </div>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>REEL WANDER : Within ± 1 mm</p>
              </div>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>REEL WIDTH : Minimum 40 mm ± 1 mm</p>
              </div>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>JOINTS PER REEL : Maximum 2. Average less than 1.</p>
              </div>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>
                  IDENTIFICATION : Each reel shall be identified with a sticker
                  pasted inside the centre with Reel number, Specification, Net
                  weight, Gross weight & Date of manufacture.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              className="prd-dsc d-flex"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 3.2 }}
            >
              <div className="prd-lg">
                <img src={Tick} alt="" />
              </div>
              <div className="prd-txt">
                <p>
                  PACKING : Slit size reels are packed in cardboard
                  carton.Relevant markings are provided in each outer package.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
