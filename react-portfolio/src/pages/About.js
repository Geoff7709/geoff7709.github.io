import React from 'react'
import GeoffZ from '../images/GeoffZ.JPG'
import styled from 'styled-components'

const Img = styled.img`
    max-height: 500px;
    width: 375px; `
console.log(GeoffZ)
function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <div className="card">
                        <Img src={GeoffZ} className="rounded float-left card-img-top" id="headshot" alt="Geoffrey Zimmerman" />
                        <div className="card-body">
                            <h4>GitHub Profile: <a href="https://github.com/Geoff7709" target="_blank" rel="noreferrer" className="card-link">https://github.com/Geoff7709</a></h4>
                            <h4>LinkedIn: <a href="https://www.linkedin.com/in/geoffzimmerman23/" target="_blank" rel="noreferrer" className="card-link">https://www.linkedin.com/in/geoffzimmerman23/</a></h4>
                            <h4><a href="https://docs.google.com/document/d/1UnyIADUvbvS3Nha7QGKYRby7bvEVI8bsuknDCsY8k2k/edit?usp=sharing" target="_blank" rel="noreferrer" className="card-link">Resume Link</a></h4>
                        </div>
                        <h5 className="card-title">About</h5>
                        <p className="card-text">	Full stack web developer referencing a background in acting and the service industry to provide an engaging and satisfying user experience. Currently earning a certificate in Full Stack Development at Northwestern University with current skills in HTML, JS, CSS, and multiple front-end frameworks and API’s. Starting with my undergraduate degree in acting I have cultivated a desire to entertain and comfort those around me. After spending the first half of my professional life in the service industry, I have gained a deep appreciation and passion for fulfilling the needs of a variety of clients. I have also developed very strong teamwork skills both as a leading and supporting member to guide guests through a truly enjoyable and memorable experience.  Most recently as a member of a programming team, I was able to apply analytical skills with more than a little creativity to develop a Covid info and tracking application that presents data in a mobile-first, accessible format. Combining this service-oriented attitude with technical skills in coding and great problem solving I look forward to exercising my creativity in building engaging  and dynamic applications.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About