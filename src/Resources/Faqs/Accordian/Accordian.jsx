import React from "react";
import "./Accordian.scss";

export default function Accordian() {
  return (
    <div className="Accordian container m-t">
      <div className="accordion" id="accordionExample">
        {/* Existing Accordion Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What Kind of Product Company Offer?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Foilam Global is a top-notched and renowned company based in
              Ahmedabad with an enormous consideration of quality and
              solution-based Manufacturing, Exporting and supplier of Thermal
              insulation material, Poly Coated paper, Woven and Non-woven based
              extrusion laminated materials and Extrusion Laminated Product
              require as per Client.
            </div>
          </div>
        </div>

        {/* Existing Accordion Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Why Should Use Aluminium Foil Insulation?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Approximately 75% of heat transmission is by radiation, most
              material used on buildings absorb radiation heat and re-radiate
              it, which makes the room temperature much higher than outside, and
              has Air-conditioning to work constantly. But aluminium foil
              insulation can reflect 97% radiation heat, so it saves your energy
              bill and provides you comfortable room temperature.
            </div>
          </div>
        </div>

        {/* Existing Accordion Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Radiant Barrier Works in Summer?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Just like a space suit, the Radiant Barrier reflects the sun’s
              heat before it can warm up the insulation in your attic. When the
              insulation stays cooler, your house will stay cooler. It helps to
              understand how Radiant Barrier will work for you if you think of
              other things that work in much the same way.
            </div>
          </div>
        </div>

        {/* Existing Accordion Item 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              What are the benefits of insulation?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The biggest reason to install insulation is the energy savings.
              Besides helping you save money and increase the energy efficiency
              of your home; insulation can help reduce noise and improve
              interior comfort levels.
            </div>
          </div>
        </div>

        {/* New Accordion Item 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              How Does Radiant Barrier / Reflective Aluminium Foil Insulation
              Work?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Reflective Aluminium Foil Insulations don’t absorb heat, they
              block the flow of radiation. Installing Reflective Aluminium Foil
              between the heat source (sun) and an existing insulation will
              improve the effectiveness of the R-Value rated insulation. The
              reason is that only a little part of the heat is now hitting the
              R-Value rated insulation and therefore, it will take longer for it
              to absorb 100% of its potential thereby holding the heat longer
              before passing out the back side into the room. Reflective
              Aluminium Foil reflects up to 97% radiant heat striking its
              surface.
            </div>
          </div>
        </div>

        {/* New Accordion Item 6 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              How to Install Radiant barrier / Reflective Aluminium Foil
              Insulation Correctly?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is important to maintain at least a 3/4″ air space on the side
              of the radiant barrier you want to reflect heat. So, you can
              prevent introducing any conductive heat flow to the aluminium to
              the aluminium foil facing and improve the efficiency for
              insulation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
