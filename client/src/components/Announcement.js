// Import stuff we need
import React from 'react'
import styled from 'styled-components'

// Styled Container compeonent

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center; 
height: 30px; 
background-color: #6C0E23;
color: white;
font-size: 1rem;
font-weight: bold; 
`



export default function Announcement() {
    return (
        <Container>
            Next Stock Date: August 27th
        </Container>

    )
}

