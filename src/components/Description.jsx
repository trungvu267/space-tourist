import React from "react"
import { useContext } from "react"
import { UserContext } from "./Layout"
const Description = () => {
  const { tabSelected } = useContext(UserContext)
  return <div>{tabSelected.description}</div>
}

export default Description
