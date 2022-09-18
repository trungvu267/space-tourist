import React from "react"
import { UserContext } from "./Layout"
import { useContext } from "react"

const Travel = () => {
  const { tabSelected } = useContext(UserContext)
  return <div>{tabSelected.travel}</div>
}

export default Travel
