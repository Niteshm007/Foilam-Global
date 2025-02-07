import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import "./MultiPly.scss";
import MultiPly1 from "../../../Images/MultiPly1.png";
import MultiPly2 from "../../../Images/MultiPly2.png";
import Tick from "../../../Images/TickLogo.png";

export default function Multiply() {
    useEffect(() => {
        // Smoothly scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    // Define animation variants for smooth transitions
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="MultiPly m-tb">
            <motion.div 
                className="mn-mltbr"
                variants={fadeIn} 
                initial="hidden" 
                animate="visible"
            >
                <motion.div className="inner-ply">
                    <h1>Multi Ply Laminate for Packing</h1>
                </motion.div>
            </motion.div>

            <motion.div className="container m-t" variants={fadeIn} initial="hidden" animate="visible">
                <div className="row">
                    <div className="main-cont">
                        {/* Header */}
                        <motion.div className="hd" variants={fadeIn} initial="hidden" animate="visible">
                            <h3>MULTY-PLY LAMINATES FOIL</h3>
                        </motion.div>

                        {/* Paragraphs */}
                        <motion.div className="mn-cont" variants={fadeIn} initial="hidden" animate="visible">
                            <p>
                                Flexible packaging is quickly rising as an efficient substitute
                                to conventional metal, plastic and glass containers. It's light,
                                simple to knob and money-spinning. And most imperative, it
                                offers an superb exterior for printing. Multi layer foils can be
                                offered different kinds of flexible packaging materials with
                                amalgamations of diverse materials like Polyester film,
                                Aluminium Foil, Paper, BOPP, LDPE, Cellophane etc without
                                printing
                            </p>
                            <p>
                                Also can be offered in reverse printed film laminates. Multi Ply
                                Laminates comprises of multi ply security laminates, multi ply
                                semi rigid laminates etc.
                            </p>
                            <p>
                                This 3 ply is apt for packing conservative products like
                                confectionery, tea, consumables etc. The final product
                                specifications are made as per agreed contract with the
                                customers based on the kind of products that are to be packed.
                                Polyester to foil and foil to poly lamination is done by dry
                                lamination.
                            </p>
                        </motion.div>

                        {/* Images */}
                        <motion.div className="mn-img" variants={fadeIn} initial="hidden" animate="visible">
                            <div className="row">
                                <motion.div className="col-md-6" variants={slideInLeft} initial="hidden" animate="visible">
                                    <div className="mn-im">
                                        <img src={MultiPly1} alt="" className="img-fluid" />
                                    </div>
                                </motion.div>
                                <motion.div className="col-md-6" variants={slideInRight} initial="hidden" animate="visible">
                                    <div className="mn-im">
                                        <img src={MultiPly2} alt="" className="img-fluid" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Product Description */}
                        <motion.div className="prd-desc m-t" variants={fadeIn} initial="hidden" animate="visible">
                            <h4>This Multy Layer foils can be further grouped in to two Part</h4>
                            <div className="prd-dsc d-flex mt-3">
                                <motion.div className="prd-lg" variants={fadeIn} initial="hidden" animate="visible">
                                    <img src={Tick} alt="" />
                                </motion.div>
                                <motion.div className="prd-txt" variants={fadeIn} initial="hidden" animate="visible">
                                    <p>Paper Based Multy ply Laminates.</p>
                                </motion.div>
                            </div>
                            <div className="prd-dsc d-flex">
                                <motion.div className="prd-lg" variants={fadeIn} initial="hidden" animate="visible">
                                    <img src={Tick} alt="" />
                                </motion.div>
                                <motion.div className="prd-txt" variants={fadeIn} initial="hidden" animate="visible">
                                    <p>Polyester based Multy ply Laminates.</p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Foil Material Section */}
                        <motion.div className="hd mt-3" variants={fadeIn} initial="hidden" animate="visible">
                            <h3>Standard Specifications of PET Laminates:</h3>
                        </motion.div>

                        {/* Table */}
                        <motion.div className="mtr-tbl mt-3" variants={fadeIn} initial="hidden" animate="visible">
                            <table className="table table-bordered table-responsive">
                                <thead className="text-white hd-clr align-middle">
                                    <tr>
                                        <th className="text-white hd-clr align-middle align-middle">
                                            Std Foil Gauge Options
                                        </th>
                                        <th className="text-white hd-clr align-middle align-middle">
                                            PET <br /> gsm <br />
                                            +/-5%
                                        </th>
                                        <th className="text-white hd-clr align-middle align-middle">
                                            Foil <br />
                                            gsm <br />
                                            +/-8%
                                        </th>
                                        <th className="text-white hd-clr align-middle align-middle">
                                            LDPE <br />
                                            gsm <br />
                                            +/-5%
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12 mic PET/ 9 mic Foil / 37 mic LDPE</td>
                                        <td>16.8</td>
                                        <td>24.3</td>
                                        <td>34.5</td>
                                    </tr>
                                    <tr>
                                        <td>12 mic PET/ 12 mic Foil / 37 mic LDPE</td>
                                        <td>16.8</td>
                                        <td>32.4</td>
                                        <td>34.5</td>
                                    </tr>
                                    <tr>
                                        <td>12 mic PET/ 12 mic Foil / 50 mic LDPE</td>
                                        <td>16.8</td>
                                        <td>32.4</td>
                                        <td>46</td>
                                    </tr>
                                    <tr>
                                        <td>12 mic PET/ 12 mic Foil / 62.5 mic LDPE</td>
                                        <td>16.8</td>
                                        <td>32.4</td>
                                        <td>57.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>

                        {/* Second Table */}
                        <motion.div className="mtr-tbl2 mt-3" variants={fadeIn} initial="hidden" animate="visible">
                            <table className="table table-bordered table-responsive">
                                <thead className="text-white hd-clr align-middle">
                                    <tr>
                                        <th className="text-white hd-clr align-middle" colSpan="2">
                                            For all above structures:
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Aluminium Foil Alloy</td>
                                        <td>AA 1200 / AA 1235</td>
                                    </tr>
                                    <tr>
                                        <td>Foil Finish</td>
                                        <td>Matt / Bright</td>
                                    </tr>
                                    <tr>
                                        <td>Bond Strength</td>
                                        <td>180 grams/ 15 mm (min)</td>
                                    </tr>
                                    <tr>
                                        <td>Lamination Surface</td>
                                        <td>Matt/ Bright</td>
                                    </tr>
                                    <tr>
                                        <td>Printing Substrate</td>
                                        <td>Polyester</td>
                                    </tr>
                                    <tr>
                                        <td>Printing side</td>
                                        <td>Top / Reverse printing</td>
                                    </tr>
                                    <tr>
                                        <td>Text and Design</td>
                                        <td>As per artwork</td>
                                    </tr>
                                    <tr>
                                        <td>Repeat Length</td>
                                        <td>As per artwork</td>
                                    </tr>
                                    <tr>
                                        <td>Repeat Length Tolerance</td>
                                        <td>+/- 0.5 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Registration</td>
                                        <td>+/- 0.5 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Core Type</td>
                                        <td>Plastic / Aluminium / Card Board</td>
                                    </tr>
                                    <tr>
                                        <td>Core ID</td>
                                        <td>70 mm / 76 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Reel OD</td>
                                        <td>250-350 mm (standard)</td>
                                    </tr>
                                    <tr>
                                        <td>OD Tolerance</td>
                                        <td>+/-5 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Slit Width Tolerance</td>
                                        <td>+/- 0.5 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Type of Joint</td>
                                        <td>Single Butt/ Double Butt / Lap Joint</td>
                                    </tr>
                                    <tr>
                                        <td>Type of Tape/ Colour</td>
                                        <td>Cello Tape / Red Colour (standard)</td>
                                    </tr>
                                    <tr>
                                        <td>Type of Packing</td>
                                        <td>Wooden Case / Pallet / Corrugated Carton</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>

                        {/* Paper Laminate Specifications */}
                        <motion.div className="hd mt-3" variants={fadeIn} initial="hidden" animate="visible">
                            <h3>Standard Specifications of Paper based Laminates (Four Ply):</h3>
                        </motion.div>

                        {/* Third Table */}
                        <motion.div className="mtr-tbl3 mt-3" variants={fadeIn} initial="hidden" animate="visible">
                            <table className="table table-bordered table-responsive">
                                <thead className="text-white hd-clr align-middle">
                                    <tr>
                                        <th className="text-white hd-clr align-middle">
                                            Structure <br />
                                            XX gsm Paper / XX micron LDPE/ <br />
                                            XX micron Foil/ XX micron LDPE
                                        </th>
                                        <th className="text-white hd-clr align-middle">
                                            Paper <br />
                                            gsm <br />
                                            +/-5%
                                        </th>
                                        <th className="text-white hd-clr align-middle">
                                            LDPE <br />
                                            gsm <br />
                                            +/-5%
                                        </th>
                                        <th className="text-white hd-clr align-middle">
                                            Foil <br />
                                            gsm <br />
                                            +/-8%
                                        </th>
                                        <th className="text-white hd-clr align-middle">
                                            LDPE <br />
                                            gsm <br />
                                            +/-5%
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>41 Paper/ 15 LDPE / 9 Foil / 25 LDPE</td>
                                        <td>41</td>
                                        <td>13.8</td>
                                        <td>24.3</td>
                                        <td>23.00</td>
                                    </tr>
                                    <tr>
                                        <td>41 Paper/ 17 LDPE / 9 Foil / 32 LDPE</td>
                                        <td>41</td>
                                        <td>15.64</td>
                                        <td>24.3</td>
                                        <td>29.44</td>
                                    </tr>
                                    <tr>
                                        <td>41 Paper/ 15 LDPE / 9 Foil / 37 LDPE</td>
                                        <td>41</td>
                                        <td>15.64</td>
                                        <td>24.3</td>
                                        <td>34.04</td>
                                    </tr>
                                    <tr>
                                        <td>41 Paper/ 20 LDPE / 9 Foil / 25 LDPE</td>
                                        <td>41</td>
                                        <td>18.4</td>
                                        <td>24.3</td>
                                        <td>34.04</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>

                        {/* Fourth Table */}
                        <motion.div className="mtr-tbl4 mt-3" variants={fadeIn} initial="hidden" animate="visible">
                            <table className="table table-bordered table-responsive">
                                <thead className="text-white hd-clr align-middle">
                                    <tr>
                                        <th className="text-white hd-clr align-middle" colSpan="2">
                                            For all above structures:
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Aluminium Foil Alloy</td>
                                        <td>AA 1200 / AA 1235</td>
                                    </tr>
                                    <tr>
                                        <td>Foil Finish</td>
                                        <td>Matt / Bright</td>
                                    </tr>
                                    <tr>
                                        <td>Temper</td>
                                        <td>Soft</td>
                                    </tr>
                                    <tr>
                                        <td>Paper</td>
                                        <td>Glassine / Other</td>
                                    </tr>
                                    <tr>
                                        <td>Lamination surface</td>
                                        <td>Matt / Bright</td>
                                    </tr>
                                    <tr>
                                        <td>Sealing Strength</td>
                                        <td>600 grams/ 15 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Sealing Surface</td>
                                        <td>LDPE to LDPE</td>
                                    </tr>
                                    <tr>
                                        <td>Sealing temperature</td>
                                        <td>160 deg C</td>
                                    </tr>
                                    <tr>
                                        <td>Dwell Time</td>
                                        <td>0.5 sec.</td>
                                    </tr>
                                    <tr>
                                        <td>Printing substrate</td>
                                        <td>Paper</td>
                                    </tr>
                                    <tr>
                                        <td>Text, design, Shade</td>
                                        <td>As per artwork</td>
                                    </tr>
                                    <tr>
                                        <td>Repeat length tolerance</td>
                                        <td>+/- 0.5 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Registration tolerance</td>
                                        <td>+/- 0.5 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Core Type</td>
                                        <td>Plastic / Aluminium / Cardboard</td>
                                    </tr>
                                    <tr>
                                        <td>Core ID</td>
                                        <td>70 / 76 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Reel OD</td>
                                        <td>250-300 mm (standard)</td>
                                    </tr>
                                    <tr>
                                        <td>Reel OD tolerance</td>
                                        <td>+/- 5 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Type of Joint</td>
                                        <td>Single butt / Double butt / Lap Joint</td>
                                    </tr>
                                    <tr>
                                        <td>Type of Tape / Colour</td>
                                        <td>Cello Tape / Paper Tape, Brown/Red/Black</td>
                                    </tr>
                                    <tr>
                                        <td>Reel Width</td>
                                        <td>As per artwork</td>
                                    </tr>
                                    <tr>
                                        <td>Width tolerance</td>
                                        <td>+/- 0.5 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Packing</td>
                                        <td>Corrugated Cartons/ Pallets/ Wooden Cases</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
