import React from "react"
import { UserContext } from "./Layout"
import { useContext } from "react"
const Distance = () => {
  const { tabSelected } = useContext(UserContext)
  return <div>{tabSelected.distance}</div>
}

export default Distance
