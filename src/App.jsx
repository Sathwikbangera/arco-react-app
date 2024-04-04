import React, { useState } from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our Program" title="WHAT WE OFFER"/>
          <Programs/>
          <About setPlayState={setPlayState}/>
          <Title subTitle="GALLERY" title="CAMPUS PHOTOS"/>
          <Campus/>
          <Title subTitle="TESTIMONIALS" title="What student says"/>
          <Testimonials/>
          <Title subTitle="CONTACT US" title="GET IN TOUCH"/>
          <Contact/>
          <Footer/>

          
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
