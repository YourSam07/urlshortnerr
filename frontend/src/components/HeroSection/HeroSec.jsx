import React from 'react'
import '../HeroSection/HeroSec.css'
import "../../index.css"
import HeroImg from '../../images/illustration-working.svg'
import MediaQuery from 'react-responsive'

const HeroSec = () => {
  return (
    <>
      <MediaQuery maxDeviceWidth={425}>
        <div className="heroSecWrapper">
          <img src={HeroImg} alt="" />
          <div className="title">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights on how your links are performing. </p>
            <button className='getStartedBtn'>Get Started</button>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minDeviceWidth={426}>
      <div className="heroSecWrapper flex flex-dir-row">
          <div className="img-container">
            <img src={HeroImg} alt="" />
          </div>
          <div className="title">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights on how your links are performing. </p>
            <button className='getStartedBtn'>Get Started</button>
          </div>
        </div>
      </MediaQuery>
    </>
  )
}

export default HeroSec