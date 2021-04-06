import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const styledFooter = styled.footer`
background-color: blue`



function Footer() {
    return (
        <div className='container'>
            <div className='row'>
                <styledFooter className='page-footer text-center'>
                    <ul className='list-inline'>
                        <li className="nav-item list-inline-item">
                            <Link className="nav-link active textColor" to="/"><h3>Portfolio</h3></Link>
                        </li>
                        <li className="nav-item list-inline-item">
                            <Link className="nav-link textColor" to="/contact"><h3>Contact</h3></Link>
                        </li>
                        <li className="nav-item list-inline-item">
                            <Link className="nav-link textColor" to="/about"><h3>About</h3></Link>
                        </li>
                    </ul>
                </styledFooter>
            </div>
        </div>
    )
}

export default Footer