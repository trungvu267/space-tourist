import React from "react"
import { useContext } from "react"
import { UserContext } from "./Layout"
const Bio = () => {
  const { tabSelected } = useContext(UserContext)
  return <div>{tabSelected.bio}</div>
}

export default Bio
