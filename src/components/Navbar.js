// This Navbar is nested in Home.js 

import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./cssFiles/navBar.css"

// The below are styled components
// We use div at the end because that's the html element we want to create and use when we nest it
// Note: We are using back ticks


// Main NavBar container
const Container = styled.div`
height: 55px;
color: #523637; 
font-size: 1.4rem;
font-weight: 450;
background-color: #F3FFB9; 
`

// Wrapper component 
// Padding from top and bottm || left and right
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 20px; 
`
// Styled components for each section of the nav bar 
const LeftSection = styled.div`
flex: 1;
font-weight: 600;
color: #C42021;`

const CenterSection = styled.div`
flex: 1;`

const RightSection = styled.div`
flex: 1;
display: flex;
align-items: center; 
justify-content: center;
`

const MenuItem = styled.div`
margin-left: 50px; 
cursor: pointer;

`

// The below actually exports the Nav Bar
export default function Navbar() {
    return (
        <Container>
            <Wrapper>

                <LeftSection> <Link to="/" className='navLink'> PLANT VANDAL </Link></LeftSection>
                <CenterSection>  </CenterSection>
                <RightSection>

                    <MenuItem><Link to="/store" className='navLink'> STORE </Link></MenuItem>
                    <MenuItem><Link to="/contact" className='navLink'> CONTACT </Link></MenuItem>
                    <MenuItem><Link to="/plantcare" className='navLink'> PLANT CARE </Link></MenuItem>
                </RightSection>

            </Wrapper>

        </Container>
    )
}
