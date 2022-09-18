import React from "react"
import { UserContext } from "./Layout"
import { useContext } from "react"
import { motion } from "framer-motion"
import tw from "twin.macro"

const DestinationTabs = () => {
  const { data, tabSelected, setTabSelected } = useContext(UserContext)
  const TabElements = data.map(item => (
    <Tab
      onClick={() => {
        setTabSelected(item)
      }}
    >
      {item.name}
      {item === tabSelected ? (
        <motion.div layoutId="underline">
          <UnderLine />
        </motion.div>
      ) : null}
    </Tab>
  ))
  return <Tabs>{TabElements}</Tabs>
}
const CrewTab = () => {
  const { data, setTabSelected } = useContext(UserContext)
  const TabElements = data.map((item, index) => (
    <Tab
      onClick={() => {
        setTabSelected(item)
      }}
    >
      {index + 1}
    </Tab>
  ))
  return <Tabs>{TabElements}</Tabs>
}
const TechnologyTab = () => {
  const { data, setTabSelected } = useContext(UserContext)
  const TabElements = data.map((item, index) => (
    <Tab
      onClick={() => {
        setTabSelected(item)
      }}
    >
      {index + 1}
    </Tab>
  ))
  return <Tabs>{TabElements}</Tabs>
}
const Tab = tw.div`bg-purple-500 relative`
const Tabs = tw.nav`bg-red-500 flex justify-center items-center gap-6`
const UnderLine = tw.div`absolute inset-x-0 bg-blue-500 h-2.5`

export { DestinationTabs, CrewTab, TechnologyTab }
