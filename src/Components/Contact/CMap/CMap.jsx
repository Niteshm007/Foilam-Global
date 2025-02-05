import React from "react";
import "./CMap.scss";
import { FaPhoneFlip } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export default function CMap() {
  return (
    <div className="CMap m-t">
      <div className="container">
        <div className="row align-content-center">
          <div className="col-md-6">
            <div className="cm-l">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70919.2845848031!2d72.64334533147964!3d23.016575885317383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e7d004399a9c1%3A0xfe0cf9ff461983bb!2sFoilam%20Global!5e1!3m2!1sen!2sin!4v1738643718427!5m2!1sen!2sin"
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cm-r">
              <div className="cmr-hdr m-hd">
                <p>WE BUILD THINGS DIFFERENTLY</p>
                <h1 className="mhd">
                  Schedule an estimate <br />
                  Let's <b>Work Together</b>
                </h1>
                <br />
                <p>
                  If you are looking for any Products/Services, Foilam Global is
                  the optimum choice. Give us a call on below numbers:
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="cmr-cont">
                    <div className="crd-br d-flex">
                      <div className="logo-br">
                        <div className="logo-inr">
                          <FaPhoneFlip className="lg-icon" />
                        </div>
                      </div>
                      <div className="cmd-cont">
                        <h5>Admin</h5>
                        <p className="uln">+91 90234 07993</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cmr-cont">
                    <div className="crd-br d-flex">
                      <div className="logo-br">
                        <div className="logo-inr">
                          <FaPhoneFlip className="lg-icon" />
                        </div>
                      </div>
                      <div className="cmd-cont">
                        <h5>Marketing</h5>
                        <p className="uln">+91 90992 00228</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="cmr-cont">
                    <div className="crd-br d-flex">
                      <div className="logo-br">
                        <div className="logo-inr">
                          <FiMail className="lg-icon" />
                        </div>
                      </div>
                      <div className="cmd-cont">
                        <h5>Admin</h5>
                        <p className="uln">admin@foilamglobal.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cmr-cont">
                    <div className="crd-br d-flex">
                      <div className="logo-br">
                        <div className="logo-inr">
                          <FiMail className="lg-icon" />
                        </div>
                      </div>
                      <div className="cmd-cont">
                        <h5>Marketing</h5>
                        <p className="uln">sales@foilamglobal.com</p>
                      </div>
                    </div>
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
