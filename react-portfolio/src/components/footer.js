import React from 'react'
import styled from 'styled-components'

const styledFooter = styled.footer`
background: blue`



function Footer() {
    return (
    <div className='container'>
        <div className='row'>
    <styledFooter className='page-footer text-center'>
        <h3>Foot</h3>
    </styledFooter>
    </div>
    </div>
    )
}

export default Footer