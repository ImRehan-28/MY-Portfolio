import React from 'react'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './project.css'
const Project = ({ project }) => {
  return (
    <div id="bigbox">
      <div id="mainbox">
        {
          project.map((item) => {
            return <ProjectContainer {...item} key={item.id}></ProjectContainer>
          })
        }
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default Project