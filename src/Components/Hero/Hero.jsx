import React from 'react'
import './Hero.css'
import personal from '/personal.jpg'
import resume from '/RehanQuadary.pdf'
import down from '/download-24.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Hero = () => {
    useGSAP(() => {
      const t1 = gsap.timeline();

      t1.from(".hero", {
        opacity: 0,
        scale: 1,
        duration: 1,
      })
      t1.from(".one1", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
      })
      t1.from(".rightimg", {
       scale:0,
        opacity: 0,
        duration: 1,
        ease:"power3.out",
      })
    })

  return (
    <div className='hero'>

      <div className='kill'>
        <div className="left">
          <h1 className='hiname one1'>Hi, I'm Rehan Quadary</h1>
          <h2 className='second one1'>A Passionate Web Developer</h2>
          <p className='one1'>I build interactive and engaing digital experinces</p>
        </div>
        <br></br>
        <div className='leftdown one1'>
          <a href="https://github.com/ImRehan-28" target='_blank'><button>Github</button></a>
          <a href="https://www.linkedin.com/in/rehan-quadary-7ab479358/" target='_blank'><button>Linkedin</button></a>
          <a href="resume" download={resume}><button className='imgin'>Resume <img src={down} className='down' /></button></a>
        </div>
      </div>

      <div className="right">
        <img src={personal} className='rightimg' onContextMenu="return false" />
      </div>
    </div>
  )
}

export default Hero
