import React from 'react'
import Banner from './Home/Banner/Banner'
import About from './Home/About/About'
import Experiences from './Home/Experiences/Experiences'
import Project from './Home/Project/Project'
import Skills from './Home/Skills/Skills'

const Home = () => {
  return (
    <div className='overflow-hidden'>
         <Banner/>
         <About/>
         <Experiences/>
         <Project/>
         <Skills/>
    </div>
  )
}

export default Home