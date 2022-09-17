// src/pages/index.js
import Layout from "./../components/Layout"
import React from "react"
import Seo from "../components/seo"
import FeatureSection from "../components/FeatureSection"
const App = () => (
  <Layout page="home">
    <FeatureSection />
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default App
