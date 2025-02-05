import React from "react";
import "./OCompany.scss";
import OCLogo from "../../../Images/OCLogo 1.png";
import OCLogo2 from "../../../Images/OCLogo 2.png";

export default function OCompany() {
  return (
    <div className="OCompany m-t">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="OC-l">
              <p className="m-hd">
                <b>OUR COMPANY</b>
              </p>
              <h2 className="mhd">
                We Stay Current With The <br /> Latest{" "}
                <b>
                  Technologies & <br />
                  Current Trends
                </b>
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="OC-r">
              <p pr-sz>
                Foilam Global LLC is putting the new technology and equipment
                into action in its production and project delivery processes to
                find the best way to fulfill the client’s project objectives. We
                use the most advanced and ground-breaking technologies to make
                incremental progress across the globe. We always continuously
                emphasize on an unfazed focus towards the satisfaction and
                success of the client.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="OCD-crcont">
              <div className="OC-crd d-flex">
                <div className="logo">
                  <img src={OCLogo} alt="" />
                </div>
                <div className="cont">
                  <h3>Research And Development</h3>
                  <p className="pr-sz">
                    In an attempt to make findings that may help create new
                    technologies or methods of doing things or try to enhance
                    pre-existing goods or procedures, organizations often expend
                    money on such investigative undertakings. These operations
                    fall under the category of research and development (R&D).
                    <br />
                    <br />
                    We have set up our own research department to deal with the
                    challenges, where our research team continues to discuss
                    fresh ideas for producing new types of products in our
                    industry.
                    <br />
                    <br />
                    The distinctive arrangement of critical and inspired
                    research by our divisions guarantees full class of
                    management from manufacturing to distribution. A team of
                    quality controllers is constantly hard at work to ensure
                    that only the best product is made through the use of
                    high-quality raw materials, an error-free manufacturing
                    process and secure dispatch.
                    <br />
                    <br />A quality management team is continually struggling to
                    guarantee that only the right product is produced using
                    high-quality raw materials, an error-free production
                    process, and safe dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="OCD-crcont">
              <div className="OC-crd d-flex">
                <div className="logo">
                  <img src={OCLogo} alt="" />
                </div>
                <div className="cont">
                  <h3>Core Values</h3>
                  <p>
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
                    It includes the community, individuals (technical experts,
                    auto cad designers and marketing experts) and other
                    approaches employed to create the best development process
                    possible. We’re committed to our beliefs profoundly. We
                    vigorously follow our vision and uphold our principles and
                    values. The same was also communicated to all team members
                    of the company to develop the deep commitment of a company
                    to values and ethics along with motivation to achieve
                    vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="OCD-crcont">
              <div className="OC-crd d-flex">
                <div className="logo">
                  <img src={OCLogo2} alt="" />
                </div>
                <div className="cont">
                  <h3>Vision And Mission</h3>
                  <br />
                  <h3>Vision</h3>
                  <br />
                  <p>
                    At FoiLam Global our vision is to become most trusted
                    manufactures and Quality Product supplier of Solvent Based
                    Laminated Material with solid brand value and providing
                    value against Expectations to each of our customers
                    throughout the business.
                    <br />
                  </p>
                  <br />
                  <h3>Mission</h3>
                  <br />
                  <p>
                    Our mission is practicing such Business process which
                    fulfils our ultimate vision of the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="OCD-crcont">
              <div className="OC-crd d-flex">
                <div className="logo">
                  <img src={OCLogo2} alt="" />
                </div>
                <div className="cont">
                  <h3>Our Team</h3>
                  <p>
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
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
