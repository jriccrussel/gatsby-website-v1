import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>   
    <h1>Hello</h1>
    <h2>I'm Russel, a front-end developer living in queen city of the south Cebu</h2>
    <p>Need a developer? <Link to="/contact">Contact me.</Link></p>    
  </Layout>
)

export default IndexPage
