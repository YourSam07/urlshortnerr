import React, { useState } from 'react'
import '../urlShortner/urlShortner.css'
import bgDesktop from '../../images/bg-shorten-desktop.svg'
import bgMobile from '../../images/bg-shorten-mobile.svg'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'

const UrlShortner = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 426px)' })
  // const [url, setUrl] = useState()
  const [showError, setShowError] = useState(false)
  // const [shorturl, setShortUrl] = useState()
  const [iscopied, setIsCopied] = useState(false)
  const [linkDetails, setLinkDetails] = useState()
  const [allLinks, setAllLinks] = useState([])

  const onchangeHandler = (e) => {
    e.preventDefault()
    setShowError(false)
  }

  const submitFunc = async (e) => {
    e.preventDefault()
    // setUrl(e.target[0].value)

    if (e.target[0].value) {
      try {
        const response = await axios.post("http://localhost:5675/generateUrl", {
          url: e.target[0].value
        })
        console.log(response)
        setLinkDetails({og: response.data.ogUrl, shr: response.data.shortUrl })
        setAllLinks((prev) => [...prev, {og: response.data.ogUrl, shr: response.data.shortUrl }])
        // setShortUrl(response.data.shortUrl)
      } catch (error) {
        console.log(error)
      }
    } else {
      setShowError(true)
    }
  }
  console.log(allLinks)

  const btnClick = () => {
    setIsCopied(true);
    setInterval(function () { setIsCopied(false) }, 10000);
    window.navigator.clipboard.writeText(linkDetails.shr);
  }
  return (
    <>
      <div className="shortnerContainer">
        <form onSubmit={submitFunc} className="shortnerWrapper" style={{
          backgroundImage: `url(${isTabletOrMobile ? bgMobile : bgDesktop})`
        }}>
          <div className="inputErrorWrapper flex flex-dir-col">
            <input type="url" style={{ border: `${showError ? "2px solid var(--Red)" : "none"}` }} placeholder='Shorten a link here' onChange={(e) => onchangeHandler(e)} />
            {showError ? <div className="error"><i>Please add a Link</i></div> : null}
          </div>
          <button type='Submit'>Shorten it!</button>
        </form>
      </div>
      <div className="links">
        {allLinks.map(item => {
          return (<div className='linkBox'>
            <div className="oglink">{item.og}</div>
            {isTabletOrMobile ? <div className="seprator"></div> : null}
            <div className="rightwrapper">
              <div className="shortlink">{item.shr}</div>
              {iscopied ? <button className="copiedBtn">Copied!</button> : <button className="copyBtn" onClick={() => btnClick()}>Copy</button>}
            </div>
          </div>
          )
        })}
        {/* {linkDetails.shr ? <div className='linkBox'>
          <div className="oglink">{linkDetails.og}</div>
          {isTabletOrMobile ? <div className="seprator"></div> : null}
          <div className="rightwrapper">
            <div className="shortlink">{linkDetails.shr}</div>
            {iscopied ? <button className="copiedBtn">Copied!</button> : <button className="copyBtn" onClick={() => btnClick()}>Copy</button>}
          </div>
        </div> : null} */}
      </div>
    </>
  )
}

export default UrlShortner