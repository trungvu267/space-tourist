import React from "react"
import Layout from "../components/Layout"
import MainConcept from "../components/MainConcept"
import PageName from "../components/PageName"
import data from "../../data.json"
import Name from "../components/Name"
import Description from "../components/Description"
import Travel from "../components/Travel"
import Image from "../components/Image"
import Divider from "../components/Divider"
import { DestinationTabs } from "../components/Tab"
import tw from "twin.macro"
const Destinations = () => {
  const { destinations } = data
  console.log(data)
  return (
    <Layout page="destination" data={destinations}>
      <PageName pageName="PICK YOUR DESTINATION" pageNumber="01" />
      <MainConcept
        col1={<Image />}
        col2={
          <Container>
            <Name />
            <Description />
            <Divider />
            <Travel />
          </Container>
        }
        tabElement={<DestinationTabs />}
        tabPosition={"destination"}
      />
    </Layout>
  )
}
const Container = tw.div`lg:pl-8`
export default Destinations
