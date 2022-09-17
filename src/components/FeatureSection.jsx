import React from "react"
import tw, { styled } from "twin.macro"
const FeatureSection = () => {
  return (
    <Container>
      <Col1>
        <SubTitle>SO, YOU WANT TO TRAVEL TO</SubTitle>
        <Title>SPACE</Title>
        <Content>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Content>
      </Col1>
      <Col2>
        <CircleBtn>EXPLORE</CircleBtn>
      </Col2>
    </Container>
  )
}

const Container = tw.div`
grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto pt-9 gap-9 px-6 lg:pt-28
`
const Col = tw.div`font-space-heading `
const Col1 = tw(
  Col
)`flex flex-col gap-4 max-w-lg mx-auto lg:text-left items-center lg:items-start`
const Col2 = tw(Col)`flex items-end justify-center lg:justify-end`

const SubTitle = tw.p`text-base md:text-xl text-space-primary`
const Title = tw.h1`text-7xl md:text-space-xl text-space-white`
const Content = tw.p`text-sm md:text-base text-space-primary max-w-sm text-center lg:text-left`
const CircleBtn = tw.button`text-xl md:text-space-sm w-36 h-36 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full bg-space-white text-space-black `

export default FeatureSection
