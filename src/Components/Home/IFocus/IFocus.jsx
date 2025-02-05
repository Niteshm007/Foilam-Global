import React from "react";
import "./IFocus.scss";
import Roof from "../../../Images/RoofI.png";
import Pouch from "../../../Images/TriplePly.png";
import TM from "../../../Images/PCM.png";

export default function IFocus() {
  return (
    <div className="IFocus m-t">
      <div className="container">
        <div className="ifh" align="center">
          <h1 className="mhd">
            <b>Industries In Focus</b>
          </h1>
          <p className="p-txt-gry pr-sz">
            We use our industry-agnostic knowledge and solutions to address the
            flexible packaging needs of your business.
          </p>
        </div>
        <div className="row" align="center">
          <div className="col-12 col-md-4">
            <div className="image-card">
              <img src={Roof} alt="Image 1" className="img-fluid" />
            </div>
              <p className="p-txt-gry pr-sz PS">Insulation Material</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="image-card">
              <img src={Pouch} alt="Image 2" className="img-fluid" />
            </div>
            <p className="p-txt-gry pr-sz PS">Packaging Material</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="image-card">
              <img src={TM} alt="Image 3" className="img-fluid" />
            </div>
              <p className="p-txt-gry pr-sz PS">Engineering (Machine Tool Packaging )</p>
          </div>
        </div>
      </div>
    </div>
  );
}
