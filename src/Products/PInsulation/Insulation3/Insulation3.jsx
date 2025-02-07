import React, { useEffect } from "react";
import "./Insulation3.scss";

export default function Insulation3() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Insulation3 m-tb">
      <div className="mnIns2-br">
        <div className="inner-ply">
          <h1>CUSTOMIZED LAMINATES</h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              <h3>CUSTOMIZED LAMINATES FOR INSULATIONS</h3>
            </div>

            <div className="mn-cont">
              <p>
                We make out the significance of being a reliable Manufacturer.
                The importance we offer to you is our enthusiastic people,
                manufacturing brilliance and customization. Our wide-ranging
                systematic laboratory, designed for both physical and chemical
                sonata testing, presents us the border with in-house testing and
                scrutiny. <span>Foilam Global</span> bases its Corporate values
                on providing sky-scraping levels of Quality, Service and
                Technical novelty.
              </p>
              <p>
                We <span> Foilam Global </span> is a market-focused,
                process-centred organization that enlarges and brings pioneering
                solutions to our customers, and furnishes energetic and exigent
                surroundings for our employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
