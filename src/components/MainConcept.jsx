import React, { Children } from "react"
import tw from "twin.macro"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import Name from "./Name"
import Description from "./Description"
import Distance from "./Distance"
import Travel from "./Travel"
import Image from "./Image"
import { useContext } from "react"
import { UserContext } from "./Layout"
import { useEffect } from "react"
import { DestinationTabs } from "./Tab"

const MainConcept = ({ col1, col2, tabElement }) => {
  const { data, tabSelected, setTabSelected } = useContext(UserContext)
  useEffect(() => {
    setTabSelected(data[0])
  }, [])

  return (
    <Container>
      <Col>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={tabSelected ? tabSelected.name : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {col1}
            {/* <Image /> */}
          </motion.div>
        </AnimatePresence>
      </Col>
      <Col1>
        {tabElement}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={tabSelected ? tabSelected.name : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {col2}
          </motion.div>
        </AnimatePresence>
      </Col1>
    </Container>
  )
}
const Container = tw.div`max-w-6xl min-h-screen bg-red-500 grid grid-rows-2 mx-auto`
const Col = tw.div`bg-blue-400`
const Col1 = tw(Col)`bg-purple-400`
export default MainConcept
