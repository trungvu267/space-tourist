import React from "react"
import Layout from "../components/Layout"
import PageName from "../components/PageName"
import MainConcept from "../components/MainConcept"
import data from "../../data.json"
import Description from "../components/Description"
import Name from "../components/Name"
import { TechnologyTab } from "../components/Tab"
const Technology = () => {
  const { technology } = data
  return (
    <Layout page="technology" data={technology}>
      <PageName pageName="SPACE LAUNCH 101" pageNumber="03" />

      <MainConcept
        col2={
          <>
            <div>THE TERMINOLOGY…</div>
            <Name />
            <Description />
          </>
        }
        tabElement={<TechnologyTab />}
      />
    </Layout>
  )
}

export default Technology
