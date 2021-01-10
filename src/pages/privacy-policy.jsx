import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function PrivacyPolicy() {
  return (
    <Layout pageInfo={{ pageName: "privacy-policy" }}>
      <SEO title="Privacy Policy" />
      <div
        className="lexdo mb-4 mx-2 lg:mx-32 text-justify break-words"
        dangerouslySetInnerHTML={{
          __html: require("../data/html/privacy_policy.html"),
        }}
      ></div>
    </Layout>
  )
}
