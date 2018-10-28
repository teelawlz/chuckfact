import styled, { keyframes } from 'styled-components'

const ContentFadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

const ContentFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const AppBody = styled.div`
  text-align: center;
`

export const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

export const AppButton = styled.button`
  background-color: #222;
  border: none;
  padding: 20px;
  margin-top: 20px;
  color: white;
  font-size: large;
`

export const AppTitle = styled.h1`
  font-size: 1.5em;
`

export const AppContent = styled.div`
  
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  height: 150px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const AppIntro = styled.p`
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
  top: 10%;

  animation: ${
    props => props.fade === "out" ? ContentFadeOut : ContentFadeIn 
  } 1s linear;

  @media only screen and (min-width: 768px) {
    top: 25%;
    font-size: large;
  }
`

export const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`
