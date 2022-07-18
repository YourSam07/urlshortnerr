import React from 'react'
import '../Features/Feature.css'
import FeatureCard from './FeatureCard'
import MediaQuery from 'react-responsive'
import Logo1 from '../../images/icon-brand-recognition.svg'
import Logo2 from '../../images/icon-detailed-records.svg'
import Logo3 from '../../images/icon-fully-customizable.svg'
import BoostDesktop from '../../images/bg-boost-desktop.svg'
import BoostMobile from '../../images/bg-boost-mobile.svg'

const Feature = () => {
  const data = [
    {
      logo: Logo1,
      title: "Brand Recognition",
      detail: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
    },
    {
      logo: Logo2,
      title: "Detailed Records",
      detail: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.."
    },
    {
      logo: Logo3,
      title: "Fully Customizable",
      detail: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }
  ]

  return (
    <>
      <div className="featureSection">
        <div className="feature-head">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
        <MediaQuery maxDeviceWidth={768}>
          <div className="feature-tab flex flex-dir-col">
            <FeatureCard heading={data[0].title} details={data[0].detail} imgSrc={data[0].logo} />
            <div className='joinLineVertical'></div>
            <FeatureCard heading={data[1].title} details={data[1].detail} imgSrc={data[1].logo} />
            <div className='joinLineVertical'></div>
            <FeatureCard heading={data[2].title} details={data[2].detail} imgSrc={data[2].logo} />
          </div>

          <div className="boostLinkSec" style={{ backgroundImage: `url(${BoostMobile})` }}>
            <h2>Boost your links today</h2>
            <button className='getStartedBtn'>Get Started</button>
          </div>


        </MediaQuery>

        {/* Desktop View  */}
        <MediaQuery minDeviceWidth={1024}>
          <div className="features flex flex-dir-row flex-jc-c">
            <FeatureCard heading={data[0].title} details={data[0].detail} imgSrc={data[0].logo} />
            <div className='joinLineHorizontal'></div>
            <FeatureCard heading={data[1].title} details={data[1].detail} imgSrc={data[1].logo} mrTop="5rem" />
            <div className='joinLineHorizontal'></div>
            <FeatureCard heading={data[2].title} details={data[2].detail} imgSrc={data[2].logo} mrTop="10rem" />
          </div>

          <div className="boostLinkSec" style={{ backgroundImage: `url(${BoostDesktop})` }}>
            <h2>Boost your links today</h2>
            <button className='getStartedBtn'>Get Started</button>
          </div>
        </MediaQuery>

      </div>
    </>
  )
}

export default Feature