import React, { Children } from "react"
import tw from "twin.macro"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { useContext } from "react"
import { UserContext } from "./Layout"
import { useEffect } from "react"

const MainConcept = ({ col1, col2, tabElement, tabPosition }) => {
  const { data, tabSelected, setTabSelected } = useContext(UserContext)
  useEffect(() => {
    setTabSelected(data[0])
  }, [])

  return (
    <Container>
      <Col>
        {tabPosition === "technology" && tabElement}

        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={tabSelected ? tabSelected.name : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {col1}
          </motion.div>
        </AnimatePresence>
        {tabPosition === "crew" && tabElement}
      </Col>
      <Col1>
        {tabPosition === "destination" && tabElement}
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
const Container = tw.div`max-w-sm md:max-w-xl lg:max-w-6xl min-h-[80vh] bg-red-500 grid grid-rows-2 lg:grid-cols-2 mx-auto overflow-hidden`
const Col = tw.div`bg-blue-400 h-[150%] mx-auto`
const Col1 = tw(Col)`bg-purple-400`
export default MainConcept
