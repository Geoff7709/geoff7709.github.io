import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
width= 18rem;
height= 24rem;`

function Project({ title, description, gitHub, deployed, image }) {
    return (
        <Card className="card">
            <img src={image.src} className="card-img-top" alt={image.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>

                    <h4>Deployed Page: <a href={deployed} className="card-link">{deployed}</a></h4>
                    <h4>GitHub Repository: <a href={gitHub} target="_blank" rel="noreferrer" className="card-link">{gitHub}</a></h4>
                </div>
        </Card>
    )
}

export default Project