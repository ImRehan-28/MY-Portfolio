/* eslint-disable no-unused-vars */
import React from 'react'
import './Box.css'
const Box = ({ id, name, image }) => {

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