// src/components/Layout.js
import React from "react"
import { GlobalStyles } from "twin.macro"
import Nav from "./Nav"
import tw from "twin.macro"
import styled from "styled-components"
import { bgHome, bgCrew, bgDestination, bgTechnology } from "../assets/bg-image"

const Layout = ({ children, page, ...rest }) => {
  let urlBg = {}
  switch (page) {
    case "crew":
      urlBg = bgCrew
      break
    case "technology":
      urlBg = bgTechnology
      break
    case "destination":
      urlBg = bgDestination
      break
    default:
      urlBg = bgHome
  }
  return (
    <div {...rest}>
      <GlobalStyles />
      <Wrapper url={urlBg}>
        <Nav />
        {children}
      </Wrapper>
    </div>
  )
}

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
