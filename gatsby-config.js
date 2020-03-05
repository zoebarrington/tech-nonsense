const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Tech Nonsense`,
    description: `Really good stuff.`,
    author: `@zoeBarrington`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/mango.png`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`
          },
          `gatsby-remark-copy-images`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/markdown`
      }
    }
  ]
};
