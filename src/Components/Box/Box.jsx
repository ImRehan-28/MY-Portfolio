/* eslint-disable no-unused-vars */
import React from 'react'
import './Box.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Box = ({ id, name, image }) => {

    useGSAP(()=>{
        const t2=gsap.timeline();

        t2.from(".ski",{
            
        })
    })

    console.log('name', name);
    return (<>
        <div className='ski'>
            <img src={image} className='image2' />
            <div className="info">
                <h2>{name}</h2>
            </div>
        </div>
    </>
    )
}
export default Box