module.exports = {
  siteMetadata: {
    title: 'Gatsby Bootcamp',
    author: 'Jeffone Audric Russel'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}