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
          `roboto\:400`,
          'roboto:400i',
          `roboto\:700`,
          'roboto:700i',
          `roboto\:800`,
          'roboto:800i',
          `DancingScript\:400`,
          'DancingScript:400i',
          `DancingScript\:700`,
          'DancingScript:700i',
          `DancingScript\:800`,
          'DancingScript:800i',
        ],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'coccinelles-et-compagnies',
        accessToken: '47399ff2cad45a9fa0a1d603cf1e8497',
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
