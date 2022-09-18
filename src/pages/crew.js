import React from "react"
import Layout from "../components/Layout"
import PageName from "../components/PageName"
import MainConcept from "../components/MainConcept"
import data from "../../data.json"
import Bio from "../components/Bio"
import Name from "../components/Name"
import Role from "../components/Role"
import { CrewTab } from "../components/Tab"
const Crew = () => {
  const { crew } = data

  return (
    <Layout page="crew" data={crew}>
      <PageName pageName="MEET YOUR CREW" pageNumber="02" />

      <MainConcept
        col2={
          <>
            <Role />
            <Name />
            <Bio />
          </>
        }
        tabElement={<CrewTab />}
      />
    </Layout>
  )
}

export default Crew
