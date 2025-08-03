import React from 'react'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './project.css'
const Project = ({ project }) => {
  return (
    <>
      <div id="mainbox">
        {
          project.map((item) => {
            return <ProjectContainer {...item} key={item.id}></ProjectContainer>
          })
        }
      </div>
      <br /><br /><br /><br />
    </>
  )
}

export default Project