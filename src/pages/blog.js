import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import blogStyles from './blog.module.scss'

// This is only a Blog Page List of Post not the actual Post it self
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
            fields {
              slug
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
      
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map( (edge) => {
          return (
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.fields.slug}</h2>
              <p>{edge.node.frontmatter.date}</p>
              {/* <p>created by, {edge.node.frontmatter.author}</p> */}
            </Link>
          )
        })}
      </ol>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogPage
