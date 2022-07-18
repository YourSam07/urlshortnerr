import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import "../../index.css"
import "../Navbar/Navbar.css"
import Logo from "../../images/logo.svg"
import { BiMenu } from 'react-icons/bi'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => {
    setClicked(!clicked)
  }

  const options = ["Features", "Pricing", "Resources"]
  return (
    <>
      {/* Mobile View  */}
      <MediaQuery maxDeviceWidth={768}>
        <div className="container flex flex-dir-row flex-jc-sb">
          <img src={Logo} alt="LOGO" />
          <div className="menuWrapper">
            <div className="icon" onClick={() => handleMenuClick()}>
              <BiMenu color="hsl(257, 7%, 63%)" size='2.2rem' />
            </div>
            {clicked ? <div className="closeOnClick" onClick={() => handleMenuClick()}>
              <div className="dropdown">
                <ul>
                  {options.map(item => {
                    return (
                      <li>{item}</li>
                    )
                  })}
                  <div className="divider"></div>
                  <li>
                    <button className='btn-med'>Login</button>
                  </li>
                  <li>
                    <button className='btn-med'>Sign Up</button>
                  </li>
                </ul>
              </div>
            </div> : null}
          </div>
        </div>
      </MediaQuery>


      {/* Desktop Tablet View  */}
      <MediaQuery minDeviceWidth={1024}>
        <div className="container flex flex-dir-row flex-jc-sb">
          <div className="left flex flex-dir-row flex-jc-sb">
            <img src={Logo} alt="" />
            <div className="navs flex flex-dir-row flex-jc-sb">
              {options.map(item => { return <li>{item}</li> })}
            </div>
          </div>
          <div className="right flex flex-dir-row flex-jc-sb">
            <button className='btn-med'>Login</button>
            <button className='btn-med'>Sign Up</button>
          </div>

        </div>
      </MediaQuery>


    </>
  )
}

export default Navbar

