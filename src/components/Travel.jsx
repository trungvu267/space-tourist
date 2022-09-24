import React from "react"
import { UserContext } from "./Layout"
import { useContext } from "react"
import tw from "twin.macro"

const Travel = () => {
  const { tabSelected } = useContext(UserContext)
  return (
    <TravelStyle>
      <div>
        <Label>Est. travel time</Label>
        <Info>{tabSelected.travel}</Info>
      </div>
      <div>
        <Label>AVG. DISTANCE</Label>
        <Info>{tabSelected.distance}</Info>
      </div>
    </TravelStyle>
  )
}
const TravelStyle = tw.div`text-center lg:text-left font-space-heading uppercase flex justify-around lg:justify-start items-center flex-col md:flex-row gap-y-8 lg:gap-x-11`
const Label = tw.p`text-sm text-space-primary `
const Info = tw.h4`text-space-sx text-space-white`
export default Travel
