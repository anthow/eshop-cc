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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: `4bc27cba78206fcf7af0cf18aa3816`,
  
        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',
  
        
        },
      },
  
  
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto Mono`,
          `Dancing Script`,
        ],
        display: 'swap'
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
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: optional To create a default crumb
        // see Click Tracking default crumb example below
        defaultCrumb: {
          location: {
            pathname: "/",
          },
          crumbLabel: "Accueil",
          crumbSeparator: " / ",
        },
        
      }
    },
  ],
};
