import React from "react"
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import FeatureOne from "./components/SpotlightFeatures"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeatureOne></FeatureOne>
    </Layout>
  )
}
