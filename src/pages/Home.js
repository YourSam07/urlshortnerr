import React from 'react'
import HeroSec from '../components/HeroSection/HeroSec'
import UrlShortner from '../components/urlShortner/UrlShortner'
import Feature from '../components/Features/Feature'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <HeroSec />
      <UrlShortner />
      <Feature />
      <Footer />
    </>
  )
}

export default Home