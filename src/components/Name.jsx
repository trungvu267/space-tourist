import React from "react"
import { useContext } from "react"
import tw from "twin.macro"
import { UserContext } from "./Layout"

const Name = () => {
  const { tabSelected } = useContext(UserContext)
  return <NameStyle>{tabSelected.name}</NameStyle>
}
const NameStyle = tw.h1`font-space-heading text-space-white text-center lg:text-left text-space-md md:text-7xl lg:text-space-lg uppercase md:my-8`
export default Name
