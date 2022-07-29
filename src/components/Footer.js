import React from 'react'
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../components/cssFiles/navBar.css"

const Container = styled.footer`
display: flex;
height: 200px; 
color: #FDF2B0;
background-color: #AD4913; 
`

const LeftSeciton = styled.div`
flex: 1;
flex-direction: column;
padding: 30px ; 
`
const CenterSection = styled.div`
flex: 1;
`
const TrademarkContainer = styled.div`
display: flex;
height: 100%;
justify-content: center;
position: relative;
`
const Trademark = styled.p`
position: absolute;
bottom: 0px;
`
const RightSection = styled.div`
flex: 1;
padding: 60px 0px; 
`
const AboutContainer = styled.div`
align-items: center;
justify-content: center;
letter-spacing: 1.5px; 
`
const AboutTitle = styled.h1`
font-size: 1.2rem;
`

const AboutDesc = styled.p`
font-size: .8rem;
`

const SocialContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const SocialLink = styled.a`
`

export default function Footer() {
    return (
        <Container>

            <LeftSeciton>
                <AboutContainer>
                    <AboutTitle> About Us</AboutTitle>
                    <AboutDesc>Welcome to the worlds of plants!
                        Want hands-on plant expertise IRL? Stop by one of our stores in NYC, Boston, Chicago, LA, or San Francisco to explore more plants, planters, & care accessories.
                    </AboutDesc>

                </AboutContainer>
            </LeftSeciton>

            <CenterSection>
                <TrademarkContainer>
                    <Trademark>PLANT VANDAL &copy;</Trademark>
                </TrademarkContainer>

            </CenterSection>

            <RightSection>
                <SocialContainer>
                    <SocialLink href='https://twitter.com/?lang=en' className='iconImg'>
                        <TwitterIcon fontSize='large' />
                    </SocialLink>
                    <SocialLink href='https://www.instagram.com/' className='iconImg'>
                        <InstagramIcon fontSize='large' />
                    </SocialLink>

                </SocialContainer>
            </RightSection>

        </Container>
    )
}
