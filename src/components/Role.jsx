import React from "react"
import { useContext } from "react"
import { UserContext } from "./Layout"
const Role = () => {
  const { tabSelected } = useContext(UserContext)
  return <div>{tabSelected.role}</div>
}

export default Role
