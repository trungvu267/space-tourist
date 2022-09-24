import React from "react"
import { useContext } from "react"
import tw from "twin.macro"
import { UserContext } from "./Layout"
const Description = () => {
  const { tabSelected } = useContext(UserContext)
  return <DescriptionStyle>{tabSelected.description}</DescriptionStyle>
}
const DescriptionStyle = tw.p`text-space-white font-space-text text-center lg:text-left text-base lg:text-lg`
export default Description
