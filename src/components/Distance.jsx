import React from "react"
import { UserContext } from "./Layout"
import { useContext } from "react"
import tw from "twin.macro"
const Distance = () => {
  const { tabSelected } = useContext(UserContext)
  return (
    <DistanceContainer>
      <Label>AVG. DISTANCE</Label>
      <DistanceStyle>{tabSelected.distance}</DistanceStyle>
    </DistanceContainer>
  )
}
const DistanceContainer = tw.div`uppercase text-center font-space-heading`
const Label = tw.div`text-sm text-space-primary`
const DistanceStyle = tw.div`text-space-sx text-space-white`
export default Distance
