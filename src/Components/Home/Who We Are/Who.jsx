import React from "react";
import "./Who.scss";
import { Link } from "react-router-dom";

export default function Who() {
  return (
    <div className="Who m-t">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="who-l">
              <h1 className="mhd"><b>Who We Are?</b></h1>
              <p className="who-l-txt pr-sz">
                There’s nothing like a first impression, but beginning a lasting
                relationship needs more than just an introduction. Foilam Global
                is a top-notched and renowned company based in Ahmedabad with an
                enormous consideration of quality and solution-based
                Manufacturing, Exporting and supplying Laminated Aluminium Foil,
                Multi Laminates Material, Aluminium Foil Coated paper and other
                Solvent Base Laminates Material. The organisation is fully
                committed to enabling its customers to experience the highest
                standard of quality and time-bound delivery.
                <br />
              </p>
            </div>
            <div align="center">
            <Link to="/about">
                <button className="wh-btn">Read More</button>
              </Link>
            </div>
          </div>

          <div className="col-md-6 m-t">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button m-hd"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Vision
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body pr-sz">
                  At FoiLam Global our vision is to become most trusted
                    manufactures and Quality Product supplier of Solvent Based
                    Laminated Material with solid brand value and providing
                    value against Expectations to each of our customers
                    throughout the business.
                  </div>
                </div>
              </div>
              <div class="accordion-item accord-i">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed m-hd"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Mission
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body pr-sz">
                  Our mission is practicing such Business process which
                    fulfils our ultimate vision of the organization.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed m-hd"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Core Values
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body pr-sz">
                    Core values are an organisation’s basic beliefs. They
                    determine actions and can help people realise the
                    distinction between right and wrong. Core values often help
                    businesses decide whether they are on the correct track by
                    providing an unwavering map.
                    <br />
                    <br />
                    We primarily consider following elements as a part of our
                    organizational core values:
                    <br />
                    <br />
                    <ul>
                      <li>Customer Commitment</li>
                      <li>Quality</li>
                      <li>Integrity</li>
                      <li>Respect</li>
                      <li>Teamwork</li>
                      <li>Accountability</li>
                      <li>Diversity</li>
                    </ul>
                    <br />
                    It includes the community, individuals (technical experts,
                    auto cad designers and marketing experts) and other
                    approaches employed to create the best development process
                    possible. We’re committed to our beliefs profoundly. We
                    vigorously follow our vision and uphold our principles and
                    values. The same was also communicated to all team members
                    of the company to develop the deep commitment of a company
                    to values and ethics along with motivation to achieve
                    vision.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed m-hd"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Our Team
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body pr-sz">
                  Although our co-members have diverse responsibilities as
                    members of their individual departments, they still have an
                    opportunity to be part of a big family. As employees spend a
                    good portion of their day in the workplace, they can feel
                    comfortable and at ease.In order to build a strong team; we
                    have initiated various steps such as
                    <br />
                    <br />
                    <ul>
                      <li>Establishing Leadership</li>
                      <li>Fostering Teamwork</li>
                      <li>Setting Ground Rules for Teamwork</li>
                      <li>Good Infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
