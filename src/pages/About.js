import React from 'react'
import GeoffZ from '../images/GeoffZ.JPG'
import styled from 'styled-components'

const Img = styled.img`
    max-height: 500px;
    width: 375px; `
const Anchor = styled.a`
word-wrap:break-word;
`
function About() {
    return (
        <div >

            <Img src={GeoffZ} className="rounded img-fluid" id="headshot" alt="Geoffrey Zimmerman" />
            <div className="card-body">
                <h4>GitHub Profile: <Anchor href="https://github.com/Geoff7709" target="_blank" rel="noreferrer" className="card-link">https://github.com/Geoff7709</Anchor></h4>
                <h4>LinkedIn: <Anchor href="https://www.linkedin.com/in/geoffzimmerman23/" target="_blank" rel="noreferrer" className="card-link">https://www.linkedin.com/in/geoffzimmerman23/</Anchor></h4>
                <h4><Anchor href="https://docs.google.com/document/d/1UnyIADUvbvS3Nha7QGKYRby7bvEVI8bsuknDCsY8k2k/edit?usp=sharing" target="_blank" rel="noreferrer" className="card-link">Resume Link</Anchor></h4>
            </div>
            <h5 className="card-title">About</h5>
            <p className="card-text">	Full stack web developer referencing a background in acting and the service industry to provide an engaging and satisfying user experience. Currently earning a certificate in Full Stack Development at Northwestern University with current skills in HTML, JS, CSS, and multiple front-end frameworks and API’s. Starting with my undergraduate degree in acting I have cultivated a desire to entertain and comfort those around me. After spending the first half of my professional life in the service industry, I have gained a deep appreciation and passion for fulfilling the needs of a variety of clients. I have also developed very strong teamwork skills both as a leading and supporting member to guide guests through a truly enjoyable and memorable experience.  Most recently as a member of a programming team, I was able to apply analytical skills with more than a little creativity to develop a Covid info and tracking application that presents data in a mobile-first, accessible format. Combining this service-oriented attitude with technical skills in coding and great problem solving I look forward to exercising my creativity in building engaging  and dynamic applications.</p>
            <h5>
                Technical Proficiencies:
            </h5>
            <ul>
                <li>
                    Javascript, HTML, and CSS
                </li>
                <li>
                    Express, Node
                </li>
                <li>
                    MySQL, Mongoose/MongoDB
                </li>
                <li>
                    React, Handlebars, Bootstrap, Foundation
                </li>
                <li>
                   RESTful API's, NPM's (client- and server-side)
                </li>
            </ul>
        </div>
    )
}

export default About