import React, { useEffect } from 'react';
import "./Gallery.scss";
import G1 from "../../Images/GL1.png";
import G2 from "../../Images/GL2.jpg";
import G3 from "../../Images/GL3.jpg";
import G4 from "../../Images/GL4.jpg";
import G5 from "../../Images/GL5.jpg";
import G6 from "../../Images/GL6.png";
import G7 from "../../Images/Gl7.jpg";
import G8 from "../../Images/GL8.png";
import G9 from "../../Images/GL9.jpg";
import G10 from "../../Images/GL10.jpg";
import G11 from "../../Images/GL11.jpg";
import G12 from "../../Images/GL12.jpg";
import G13 from "../../Images/GL13.jpg";
import G14 from "../../Images/GL14.jpg";
import G15 from "../../Images/GL15.jpg";
import G16 from "../../Images/MCN.png";
import G17 from "../../Images/GL17.jpg";
import G18 from "../../Images/GL18.webp";
import G19 from "../../Images/GL19.jpg";
import G20 from "../../Images/GL28.jpg";
import G21 from "../../Images/GL29.png";
import G22 from "../../Images/GL30.jpg";
import G23 from "../../Images/GL23.webp";
import G24 from "../../Images/GL24.png";
import G25 from "../../Images/GL31.webp";
import G26 from "../../Images/GL26.webp";
import G27 from "../../Images/GL32.webp";
import G28 from "../../Images/GL28.jpg";
import G29 from "../../Images/GL29.png";
import G30 from "../../Images/GL30.jpg";
import G31 from "../../Images/GL31.webp";
import G32 from "../../Images/GL32.webp";

export default function Galley() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Gallary container m-t m-tb">
      <div className="Glr-hd" align="center">
        <h1 className='mhd'>Gallary</h1>
      </div>

      <div className="Galley-Img mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G1} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G2} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G3} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G4} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G5} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G6} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G7} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G8} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G9} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G10} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G11} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G12} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G13} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G14} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G15} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G16} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G17} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G18} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G19} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G20} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G21} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G22} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G23} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G24} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G25} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G26} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G27} alt="" />
            </div>
          </div>
          {/* <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G28} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G29} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G30} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G31} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G32} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
