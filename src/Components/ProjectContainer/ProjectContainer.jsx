import React from 'react'
import './projectContainer.css'
const ProjectContainer = ({ image, github, live, proname, lang }) => {
    return (
        <div id="probox">

            <div id="proimg">
                <img src={image} />

                <div id="protitle">
                    <h1>{proname}</h1>
                    <div id="lang">
                        {
                            lang.map((item, index) => {
                                return <p key={index}>{item}</p>
                            })
                        }
                    </div>
                    <div className="link">
                        <a href={github} target='_blank'>Github</a>
                        <a href={live} target='_blank'>Live</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProjectContainer