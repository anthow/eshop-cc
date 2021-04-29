const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  


  const {data} = await graphql(`
    {
     produits: allShopifyProduct(filter: {productType: {eq: "Boutique"}    }) {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
      ateliers: allShopifyProduct(filter: {productType: {eq: "Atelier"}    }) {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
    }
  `);

 
  data.produits.edges.forEach(({ node }) => {
    createPage({
      component: produits,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve('./src/templates/ProductTemplate/index.js'),
    });
  });
  data.ateliers.edges.forEach(({ node }) => {
    createPage({
      component: produits,
      context: {
        shopifyId: node.shopifyId,
      },
      component: path.resolve('./src/templates/AtelierTemplate/index.js'),
    });
  });
  };
  


