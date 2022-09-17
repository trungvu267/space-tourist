// src/components/Layout.js
import React from "react"
import { GlobalStyles } from "twin.macro"
import Nav from "./Nav"
import tw from "twin.macro"
import homeMobile from "../../public/assets/home/background-home-mobile.jpg"
import homeTablet from "../../public/assets/home/background-home-tablet.jpg"
import homeDesktop from "../../public/assets/home/background-home-desktop.jpg"
import styled from "styled-components"
const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Wrapper url={[homeMobile, homeTablet, homeDesktop]}>
      <Nav />
      {children}
    </Wrapper>
  </div>
)
const Container = tw.div`min-h-screen bg-center bg-cover bg-no-repeat lg:p-6`
const Wrapper = styled(Container)`
  background-image: url(${props => props.url[0]});
  @media (min-width: 768px) {
    background-image: url(${props => props.url[1]});
  }
  @media (min-width: 1280px) {
    background-image: url(${props => props.url[2]});
  }
`

export default Layout
