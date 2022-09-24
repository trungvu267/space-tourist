import React from "react"
import { UserContext } from "./Layout"
import { useContext } from "react"
import { motion } from "framer-motion"
import tw from "twin.macro"

const DestinationTabs = () => {
  const { data, tabSelected, setTabSelected } = useContext(UserContext)
  const TabElements = data.map(item => {
    return (
      <Tab
        onClick={() => {
          setTabSelected(item)
        }}
      >
        {
          <motion.div>
            {item === tabSelected ? (
              <TabDesSelected>{item.name}</TabDesSelected>
            ) : (
              <TabDestinationName>{item.name}</TabDestinationName>
            )}
          </motion.div>
        }
        {item === tabSelected ? (
          <motion.div layoutId="underline">
            <UnderLine />
          </motion.div>
        ) : null}
      </Tab>
    )
  })
  return <DestinationTabsStyle>{TabElements}</DestinationTabsStyle>
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
const DestinationTabsStyle = tw(Tabs)`my-8 lg:justify-start lg:pl-8`
const TabDestinationName = tw.div`text-sm md:text-base text-space-primary font-space-text uppercase hover:text-space-white`
const TabDesSelected = tw(TabDestinationName)`text-space-white`
const UnderLine = tw.div`absolute inset-x-0 bg-space-white h-1`

export { DestinationTabs, CrewTab, TechnologyTab }
