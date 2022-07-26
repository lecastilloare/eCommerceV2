// Import the stuff we need
import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


// Main container styled component
const Container = styled.div`
display: flex;
background-color: #523637; 
position: relative;
width: 100%;
height: 100vh; 
`

// Styled component for the arrow buttons 
// Remember if you
const Arrow = styled.div`
width: 40px; 
height: 40px;
background-color: #A1AE25;
border-radius: 30%;
display: flex;
align-items: center; 
justify-content: center;
position: absolute;
top: 0;
bottom: 0; 
left: ${ props => props.direction === "left" && "30px"};
right: ${ props => props.direction === "right" && "30px"};
margin: auto; 
cursor: pointer;
opacity: 0.5;
`

//In order for us to position each arrow icon individually, we can use props!
//We'll pass in a prop we named direction. Go back to the arrow styled component

export default function Slider() {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowBackIcon />
            </Arrow>
            <Arrow direction="right">
                <ArrowForwardIcon />
            </Arrow>
        </Container>
    )
}
