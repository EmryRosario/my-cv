import React from 'react'
import HeaderBox from './HeaderBox'
import EducationsBox from './EducationsBox'
import SkillsBox from './SkillsBox'
import ExperiencesBox from './ExperiencesBox'
import Perfil from '../components/Perfil'
import CoverLetter from '../components/CoverLetter'
import Footer from '../components/Footer'


const App = () => (
  <div className='App-container'>
    <HeaderBox/>
    <Perfil/>
    <CoverLetter/>
    <EducationsBox/>
    <SkillsBox/>
    <ExperiencesBox/>
    <Footer/>
  </div>
)

export default App
