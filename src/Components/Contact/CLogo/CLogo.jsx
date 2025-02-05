import React from 'react'
import './CLogo.scss'
import Phone from "../../../Images/Phone.png";
import Mail from '../../../Images/Mail.png'
import Map from '../../../Images/Map.png'

export default function CLogo() {
  return (
    <div className='CLogo m-t'>
        <div className="container">
        <div className="row align-items-center justify-content-cente">
          <div className="col-md-6">
            <div className="cl-cont" align="center">
              <h1 className='mhd'>Contact</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cr-cont d-flex">
                <img src={Phone} alt="" className="img-fluid"/>
                <img src={Mail} alt="" className="img-fluid"/>
                <img src={Map} alt="" className="img-fluid mp-img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
