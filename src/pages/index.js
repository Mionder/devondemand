import React from "react"
import Layout from "../components/Layout/layout.js";
import MainDevelopment from "../components/MainDevelopment/mainDevelopment.js";
import MainProcess from "../components/MainProcess/mainProcess.js";
import MainShare from "../components/MainShare/mainShare.js";
import MainJoin from "../components/MainJoin/mainJoin.js";
import MainPricing from "../components/MainPricing/mainPricing.js";
import MainNotified from "../components/MainNotified/mainNotified.js";
import MainIntegrate from "../components/MainIntegrate/mainIntegrate.js";

export default function Home() {
  return (
    <Layout>
      <MainDevelopment />
      <MainProcess />
      <MainShare />
      <MainJoin />
      <MainPricing />
      <MainNotified />
      <MainIntegrate />
    </Layout>
  )
}