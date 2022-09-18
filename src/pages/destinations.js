import React from "react"
import Layout from "../components/Layout"
import MainConcept from "../components/MainConcept"
import PageName from "../components/PageName"
import data from "../../data.json"
import Name from "../components/Name"
import Description from "../components/Description"
import Distance from "../components/Distance"
import Travel from "../components/Travel"
import { DestinationTabs } from "../components/Tab"
const Destinations = () => {
  const { destinations } = data
  return (
    <Layout page="destination" data={destinations}>
      <PageName pageName="PICK YOUR DESTINATION" pageNumber="01" />
      <MainConcept
        col2={
          <>
            <Name />
            <Description />
            <Distance />
            <Travel />
          </>
        }
        tabElement={<DestinationTabs />}
      />
    </Layout>
  )
}

export default Destinations
