import React from "react";
import Layout from "../components/Layout/layout.js";
import About from "../components/About/about.js";
import Portfol from "../components/Portfolio/portfolio.js";

 const Portfolio = () => {
  return (
    <Layout>
      <About />
      <div className="image_separator"></div>
      <Portfol />
    </Layout>
  )
}

export default Portfolio;