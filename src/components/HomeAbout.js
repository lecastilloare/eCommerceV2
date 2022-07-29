// Import the stuff we need
import { React } from 'react';
import styled from 'styled-components';

// Main container styled component
const Container = styled.div`
display: flex;
position: relative;
width: 100%;

`

// The styled component for the wrapper that encases all the slides
// This is what is responsible for the slider aspect of it
// The translateX() is what allows the image in the slider to move 
const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`

// The styled component for the Slides
// Takes in props for the 
const Slide = styled.div`
width: 100vw;
height: 70vh;
display: flex;
align-itmes: center;
background-color: #${props => props.bg}
`

// The styled component for a section of the above Slide component, contains the image
const ImgContainer = styled.div`
flex: 1;
display: flex;
height: 100%;
align-items: center; 
justify-content: center;
`

//This is where the actual image will be
const Image = styled.img`
height: 60%; 
border-radius: 10%;

`

// The styled component for a section of the above Slide component, contains the description 
const InfoContainer = styled.div`
color: #3E4516;
flex: 1;
padding: 100px; 
`
const Title = styled.h1`
font-size: 40px;

`
// Only margin on top and bottom, not left or right 
const Desc = styled.p`
color: black;
margin: 50px 0px; 
font-size: 14px;
letter-spacing: 1.5px; 
font-weight: 400; 
`

//In order for us to position each arrow icon individually, we can use props!
//We'll pass in a prop we named direction. Go back to the arrow styled component

export default function HomeAbout() {

    return (
        <Container>
            <Wrapper >

                {/* // We'll pass in our backgroun colors as props */}
                {/* We are instead going to use MAP to create the slider images */}


                <Slide bg="FFFDE2">

                    <InfoContainer>
                        <Title> From Greenhouse to Your House </Title>
                        <Desc> Plant Vandal is an experienced-based plant workshop and premium plant store. We combine plant-based activities, products and environments that bring people together in a way that inspires connection and creativity.

                            Visit one of our retail locations and experience the modern plant revival through do-it-yourself terrariums, organized workshops, premium plant shopping, and a modern yet eclectic ceramic collection. Don't forget to grab a drink at the PlantBar while you're in!</Desc>
                    </InfoContainer>

                    <ImgContainer>
                        <Image src="https://www.russh.com/wp-content/uploads/2020/09/70s-scaled.jpg" />
                    </ImgContainer>
                    \
                </Slide>

            </Wrapper>
        </Container >
    )
}