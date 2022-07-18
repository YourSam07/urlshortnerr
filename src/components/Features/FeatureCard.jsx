import React from 'react'
import '../Features/FeatureCard.css'

const FeatureCard = ({imgSrc, heading, details, mrTop}) => {
  return (
    <>
      <div className="card" style={{marginTop: mrTop}}>
        <div className="circle grid-pi-c">
          <img src={imgSrc} alt="" />
        </div>
        <h2>{heading}</h2>
        <p>{details}</p>
      </div>
    </>
  )
}

export default FeatureCard