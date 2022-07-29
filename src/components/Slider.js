// Import the stuff we need
import { React, useState } from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { sliderItems } from '../data/sliderData';

// Main container styled component
const Container = styled.div`
display: flex;
position: relative;
width: 100%;
height: 70vh; 
overflow: hidden;
`

// Styled component for the arrow buttons 
// Remember if you have the double && like that if means that if the condition on the left is true then set the value in the right
const Arrow = styled.div`
width: 40px; 
height: 40px;
background-color: #FFFDE2;
border-radius: 30%;
display: flex;
align-items: center; 
justify-content: center;
position: absolute;
top: 70%;

left: ${props => props.direction === "left" && "10x"};
right: ${props => props.direction === "right" && "10px"};
margin: auto; 
cursor: pointer;
opacity: 0.8;
z-index: 2;
`

// The styled component for the wrapper that encases all the slides
// This is what is responsible for the slider aspect of it
// The translateX() is what allows the image in the slider to move 
const Wrapper = styled.div`
display: flex;
height: 100%;
transition: all .8s ease; 
transform: translateX(${props => props.slideIndex * -100}vw);
`

// The styled component for the Slides
// Takes in props for the 
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-itmes: center;
background-color: #${props => props.bg}
`

// The styled component for a section of the above Slide component, contains the image
const ImgContainer = styled.div`
height: 100%;
flex: 1;
`

//This is where the actual image will be
const Image = styled.img`
height: 70%; 
max-width: 20

`

// The styled component for a section of the above Slide component, contains the description 
const InfoContainer = styled.div`
flex: 1;
padding: 50px; 
`
const Title = styled.h1`
font-size: 40px;
color: #FDF2B0;

`
// Only margin on top and bottom, not left or right 
const Desc = styled.p`
margin: 50px 0px; 
font-size: 14px;
font-weight: 400; 
letter-spacing: 1.5px; 
color: #FDF2B0;
`

const ButtonCon = styled.div`
display: flex;
justify-content: center;
align-items: center;

`



const Button = styled.button`
padding: 10px;
background-color: #FDF2B0;
color: black;
text-decoration: none;
border: none;
font-size: 20px;
border-radius: 5%;

`

//In order for us to position each arrow icon individually, we can use props!
//We'll pass in a prop we named direction. Go back to the arrow styled component

export default function Slider() {

    // This function is responsible for the slider functionality
    // We're using the useState hook for this and pass in an array of our slides

    const [slideIndex, setSlideIndex] = useState(0);
    const swipeTo = (direction) => {

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }


    return (
        <Container>

            <Arrow direction="left" onClick={() => swipeTo("left")}>
                <ArrowBackIcon />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>

                {/* // We'll pass in our backgroun colors as props */}
                {/* We are instead going to use MAP to create the slider images */}
                {sliderItems.map(item => (

                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title> {item.title} </Title>
                            <Desc> {item.desc}</Desc>
                            <ButtonCon>
                                <Button> Store </Button>
                            </ButtonCon>
                        </InfoContainer>
                    </Slide>
                )

                )}

            </Wrapper>

            <Arrow direction="right" onClick={() => swipeTo("right")}>
                <ArrowForwardIcon />
            </Arrow>

        </Container >
    )
}
