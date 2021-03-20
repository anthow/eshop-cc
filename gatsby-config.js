require('dotenv').config({
  path: `.env`,
});

module.exports = {
  /* Your site config here */
  flags: { PRESERVE_WEBPACK_CACHE: true,
    PARALLEL_SOURCING: true,
    FAST_DEV:true,
    DEV_SSR: true,
   },
  siteMetadata: {
    title: `Coccinelles et compagnies`,
    description:``,
    author:`Anthony Englebert`,
    company:`Avant conseils`,
    companyWebsite:``,
  },
  plugins: [
    `gatsby-plugin-remove-fingerprints`,
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:400`,
          'open sans:400i',
          `open sans\:700`,
          'open sans:700i',
          `open sans\:800`,
          'open sans:800i',
        ],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'testdemaboutiqueeee',
        accessToken: 'b5fdf24cf012d3f3f409ee14a4ac84e9',
        apiVersion: '2021-01',     },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
