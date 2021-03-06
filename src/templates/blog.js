import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

// export const query = graphql `
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

//  body { raw } query is the latest version
// export const query = graphql `
//   query ($slug: String!) {
//     contentfulBlogPost (slug: {
//         eq: $slug
//       }) {
//       title
//       slug
//       body {
//         raw
//       }
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const src = node.data.target.fields.file['en-US'].url
        const alt = node.data.target.fields.title['en-US']
        return <img src={src} alt={alt} />
      }
    }
  }

  return (
      <Layout>
          {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div> */}

          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}

{/*       Latest version
          { documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw, options)) } */}
      </Layout>
  )
}

export default Blog
