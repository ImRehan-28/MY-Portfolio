import React from 'react'
import './Skill.css'
// import { useState } from 'react'
import Box from '../Box/Box';
const Skill = ({ skill }) => {

  console.log(skill, "inside skill")
  return (
    <>
      <div className='skill'>
        {
          skill.map((item) => {
            return <Box {...item} key={item.id}></Box>
          })
        }
      </div><br /><br />
      </>
  )
}
export default Skill