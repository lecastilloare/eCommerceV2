// Import the stuff we need
import { React } from 'react';
import styled from 'styled-components';
import { articleItems } from '../data/articleData';

// Main container styled component
const Container = styled.div`
display: flex;
position: relative;
width: 100%;
`

// The styled component for the wrapper that encases all the articles
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
width: 65%;
height: 90%;
`

// The styled component for a section of the above Slide component, contains the description 
const InfoContainer = styled.div`
flex: 1;
padding: 100px; 
`
const Title = styled.h1`
font-size: 70px;
color: #d64e04;

`
// Only margin on top and bottom, not left or right 
const Desc = styled.p`
margin: 50px 0px; 
color: #black;
font-size: 14px;
font-weight: 400; 
letter-spacing: 1.5px; 
`

//In order for us to position each arrow icon individually, we can use props!
//We'll pass in a prop we named direction. Go back to the arrow styled component

export default function Article() {

    return (
        <Container>
            <Wrapper >

                {/* // We'll pass in our backgroun colors as props */}
                {/* We are instead going to use MAP to create the slider images */}

                {articleItems.map(item => (

                    <Slide bg={item.bg} key={item.id}>

                        <InfoContainer>
                            <Title> {item.title} </Title>
                            <Desc> {item.desc}</Desc>
                        </InfoContainer>

                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>

                    </Slide>
                )

                )}

            </Wrapper>
        </Container >
    )
}