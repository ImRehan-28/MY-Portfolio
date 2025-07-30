/* eslint-disable no-unused-vars */
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import Hero from './Components/Hero/Hero'
import Skill from './Components/Skill/Skill'
import {data,image} from './Data'
import { useState } from 'react'
import Title from './Components/Title/Title'
import Project from './Components/Projects/Project'
function App() {
  const [skill, setskill] = useState(data)
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Title title="Skills" img={image[0].image}></Title>
      <Skill skill={skill}></Skill>
      <Title title="Projects"></Title>
      <Project project={Project}></Project>
    </div>
  )
}

export default App