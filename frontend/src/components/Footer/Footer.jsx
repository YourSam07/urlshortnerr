import React from 'react'
import '../Footer/Footer.css'
import Logo from '../../images/logoWhite.svg'
import FB from '../../images/icon-facebook.svg'
import Insta from '../../images/icon-instagram.svg'
import Pin from '../../images/icon-pinterest.svg'
import Twit from '../../images/icon-twitter.svg'

const Footer = () => {
  return (
    <>
      <div className="footerSec">
        <img src={Logo} alt=""/>

        <div className="featuresList">
          <h3 className='head'>Features</h3>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div className="resources">
          <h3 className='head'>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="company">
          <h3 className='head'>Company</h3>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="socialMedia flex-dir-row flex-jc-sb">
          <span><img src={FB} alt="" /></span>
          <span><img src={Twit} alt="" /></span>
          <span><img src={Pin} alt="" /></span>
          <span><img src={Insta} alt="" /></span>
        </div>
      </div>
    </>
  )
}

export default Footer;         