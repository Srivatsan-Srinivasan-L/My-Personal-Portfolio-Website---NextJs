import React from 'react'
import Banner from './Home/Banner/Banner'
import About from './Home/About/About'
import Experiences from './Home/Experiences/Experiences'
import Project from './Home/Project/Project'
import Skills from './Home/Skills/Skills'
import Education from './Home/Education/Education'
import Contact from './Home/Contact/Contact'
import ScrollToUp from './Helper/ScrollToUp'





const Home = () => {
  return (
    <div className='overflow-hidden'>
         <Banner/>     
         <About/>
         <Experiences/>
         <Project/>
         <Skills/>
         <Education/>
         <Contact/>
         <ScrollToUp/>
    </div>
  )
}

export default Home