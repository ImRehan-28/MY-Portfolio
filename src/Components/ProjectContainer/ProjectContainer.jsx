import React from 'react'
import './projectContainer.css'
const ProjectContainer = ({image,github,live,proname}) => {
    return (
            <div id="probox">
                <div id="proimg">

                    <img src={image} />
                    <div id="protitle">
                        <h1>{proname}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae velit magni dolor commodi quia quas eius animi rerum, ad iste?</p>
                    </div>
                </div>

                <div id="floatobj">
                    <a href={github}><button>Github</button></a>
                    <a href={live}><button>Live</button></a>
                </div>

            </div>
    )
}
export default ProjectContainer