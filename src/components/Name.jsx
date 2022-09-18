import React from "react"
import { useContext } from "react"
import { UserContext } from "./Layout"

const Name = () => {
  const { tabSelected } = useContext(UserContext)
  return <div>{tabSelected.name}</div>
}

export default Name
