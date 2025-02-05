import React, { useEffect } from 'react';
import "./Faqs.scss";
import Accordian from "./Accordian/Accordian";
import Why from "../../Components/Home/Why/Why";
import HContact from "../../Components/Home/HContact/HContact";

export default function Faqs() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Faqs m-t">
      <div className="Fq-hdr" align="center">
        <h1>FAQs</h1>
      </div>

      <Accordian />
      <Why />
      <HContact/>
    </div>
  );
}
