import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { SlideInFadeRight } from '../Styles/AnimationComponents';


const FadeUp = keyframes`
    0% {
        opacity: 0%;
        transform: translateY(30px) scale(0.9);
    }

    100% {
        opacity: 1;
        transform: translateY(0px) scale(1);
    }
`

const Nav = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1a1c1a;
    height: 80px;
    width: 100%;
    overflow: hidden;
    z-index: 100;
`

const NavLink = styled.a`

    color: #ffffff;
    text-align: center;
    font-family: Josefin Sans;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    margin-right:40px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 3px;
    position: relative;
    
    background-image: linear-gradient(90deg, white, white);
    background-clip: text;
    -webkit-text-fill-color: white;
    animation: ${FadeUp} 0.5s linear;
    &:hover:after{
        width: 100%;
        transition: 0.3s;
    }


    &:after{
        content:"";
        position: absolute;
        background-image: linear-gradient(90deg, #c2fd15, #70d8a9);
        height: 3px;
        width: 0;
        left: 0;
        bottom: -10px;
        transition: 0.3s;
    
    }
`


const LogoImage = styled.img`
    height: 100%;
`

const LogoNav = styled.a`
    display: flex;
    text-align: center;
    height: 60%;
    margin-left:35px;
    text-decoration: none;
    color: white;
    animation: ${SlideInFadeRight} .5s linear;
`

const LogoTitle = styled.h1`
padding-left: 10px;
    line-height: 55px;
    font-family: Josefin Sans;
`

function Navbar(){
  return (
    <>
        <Nav>
            <LogoNav href ="/">
                <LogoImage src="/images/pickleball.png"/>
                <LogoTitle>pickleBOT</LogoTitle>
            </LogoNav>

            <nav>
                <NavLink href="getstarted">Get Started</NavLink>
            </nav>

              

        </Nav>
    
    </>
  )
}

export default Navbar