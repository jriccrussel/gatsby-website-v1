import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  console.log(data);

  return (
    <Layout>
      <h1>Blog</h1>
      
      <ol>
        {data.allMarkdownRemark.edges.map( (edge) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogPage
