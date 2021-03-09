const path = require('path')

// Getting the slug
// exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === 'MarkdownRemark') {
//       const slug = path.basename(node.fileAbsolutePath, '.md')

//       createNodeField({
//         node,
//         name: 'slug',
//         value: slug,
//       })
//     // End createNodeField
//     } 
//     // End If node.internal.type
// }
// // End exports onCreateNode


// Dynamiclly create the slug pages and display in the templates/blog.js
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // 1. Get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    // 2. Get markdown data 
    // const res = await graphql(`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)
  
    // 3. create new pages
    // res.data.allMarkdownRemark.edges.forEach((edge) => {
    //   createPage({
    //     component: blogTemplate,
    //     path: `/blog/${edge.node.fields.slug}`,
    //     context: {
    //       slug: edge.node.fields.slug
    //     }
    //   })
    // })

    const res = await graphql(`
      query{
        allContentfulBlogPost{
          edges{
            node{
              slug
            }
          }
        }
      }
    `)
    
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.slug}`,
        context: {
          slug: edge.node.slug
        }
      })
    })

  }