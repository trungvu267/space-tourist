// src/pages/index.js
import Layout from "./../components/Layout"
import React from "react"
import tw from "twin.macro"
import Seo from "../components/seo"
import FeatureSection from "../components/FeatureSection"
const App = () => (
  <Layout>
    <FeatureSection />
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default App
