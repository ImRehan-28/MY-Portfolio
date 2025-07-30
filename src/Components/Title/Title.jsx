import React from 'react'
import './Title.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import skill from '../../assets/icons8-skill.gif';
const Title = ({ title,img }) => {

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from(".title", {
      x: 40,
      scale: 1,
      duration: 1,
    })
  })
  console.log("title is rendering");
  return (
    <div className='title'>
      <h2>{title}</h2>
      <img src={img}/>
    </div>
  )
}

export default Title
