import React, { useEffect } from 'react';
import './Home.scss';
import Carasole from '../../Carasole/Carasole'
import OurProducts from './OurProducts/OurProducts'
import Who from './Who We Are/Who';
import Why from './Why/Why';
import HContact from './HContact/HContact';


export default function Home() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="Home Ovr-hd m-tb">
      <div className="row">
        <div className="carasol">
          <Carasole/>
        </div>
        <div className="row"></div>
        <OurProducts />
        <Who />
        <Why/>
        <HContact />
      </div>
    </div>
  );
}