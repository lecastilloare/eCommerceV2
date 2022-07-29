// Import stuff we need
import React from 'react'
import styled from 'styled-components'

// Styled Container compeonent

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center; 
height: 45px; 
background-color: #3E4516;
color: #FDF2B0;
font-size: 1.2rem;
font-weight: bold; 
`



export default function Announcement() {
    return (
        <Container>
            ~ Next Stock Date: August 27th ~
        </Container>

    )
}

