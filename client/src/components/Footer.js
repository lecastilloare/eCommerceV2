import React from 'react'
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.footer`
display: flex;
height: 200px; 
color: Black;
background-color: #F3FFB9; 
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
`
const AboutTitle = styled.h1`
font-size: 1rem;
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
                        We started out words words words words words words words words words words words words
                        words words words words words words words words words words words
                        words words words words words words words words words words words words
                        words words words words words words words words words words words words
                        words words
                    </AboutDesc>

                </AboutContainer>
            </LeftSeciton>

            <CenterSection>
                <TrademarkContainer>
                    <Trademark>WHERE DOES THIS SHOW UP TM</Trademark>
                </TrademarkContainer>

            </CenterSection>

            <RightSection>
                <SocialContainer>
                    <SocialLink>
                        <TwitterIcon fontSize='large' />
                    </SocialLink>
                    <SocialLink>
                        <InstagramIcon fontSize='large' />
                    </SocialLink>

                </SocialContainer>
            </RightSection>

        </Container>
    )
}
