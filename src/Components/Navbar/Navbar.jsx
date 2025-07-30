import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react'
// import logo from '../../assets/me2.png'
// import logo1 from '../../assets/REHAN01.gif'
import logo2 from '../../assets/REHANremovebg.png'
import './Navbar.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Navbar = () => {

  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 70 ? setsticky(true) : setsticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from("li", {
      y: -60,
      stagger: 0.3,
    })
  })

    return (<>
      <nav className={`navbar ${sticky ? 'dark-nav' : ' '}`}>
        <img src={logo2} className='image k1' />
        <ul className='nav'>
          <li ><Link to="hero" smooth={true} offset={-100} duration={500}>Home</Link></li>
          <li>About</li>
          <li><Link to="skill" smooth={true}>Skills</Link></li>
          <li>Projects</li>
        </ul>
        <button className='btn-nav'>Contact</button>
      </nav>
      <br></br><br></br><br></br><br></br><br></br>
      </>
    )
  }
export default Navbar