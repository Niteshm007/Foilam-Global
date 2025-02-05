import React from "react";
import "./AbWho.scss";
import Machine from "../../../Images/MCN.png";

export default function AbWho() {
  return (
    <div className="AbWho m-t">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="Abwho-l">
              <p>
                <b>Welcome To Foilam Global</b>{" "}
              </p>
              <br />
              <div className="Abwl-cont">
                <h2 className="mhd">
                  <b>Who We Are!!!</b>
                </h2>
                <br />
                <p className="pr-sz">
                  There’s nothing like a first impression, but beginning a
                  lasting relationship needs more than just an introduction.
                  Foilam Global is a top-notched and renowned company based in
                  Ahmedabad with an enormous consideration of quality and
                  solution-based Manufacturing, Exporting and supplying
                  Laminated Aluminium Foil, Multi Laminates Material, Aluminium
                  Foil Coated paper and other Solvent Base Laminates Material.
                  The organisation is fully committed to enabling its customers
                  to experience the highest standard of quality and time-bound
                  delivery.
                  <br />
                  <br />
                  All of the company’s efforts are often geared towards the full
                  satisfaction of its clients. Our strength lies in Export
                  oriented work, Well plan infrastructure, In house R & D
                  facility and our Well Experienced staff members. Most of the
                  team members have expertise in the field of creative Products
                  development, packaging materials and the manufacture of all
                  kind of multi-Laminated Products.
                  <br />
                  <br />
                  Our work partnership is mainly divided into four main
                  categories: Sales and marketing, Production, Finance and
                  Planning and Management. We are an integrated team of
                  individuals offering a higher value for quality goods that
                  allows us to apply the best technology and research know-how
                  to our customers to deliver our goods at an optimum level with
                  zero defects. Fidel Global is committed to providing timely
                  and high-quality products at affordable prices to benefit our
                  customers. Variety of product categories offered by us.
                  <br />
                  <br />
                  Foilam Global is putting the new technology and Best Equipment
                  into action in its production and project delivery processes
                  to find the best way to fulfil the client’s Product
                  Requirement. We use the most advanced machine and
                  ground-breaking technologies to make incremental progress
                  across the globe. We always continuously emphasize on an
                  unfazed focus towards the satisfaction and success of the
                  client.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="Abwho-r">
              <img src={Machine} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
