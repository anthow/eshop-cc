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
  


	return graphql(`
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
  `).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create doc pages
		result.data.produits.edges.forEach(({ node }) => {
			createPage({
        component: path.resolve('./src/templates/ProductTemplate/index.js'),                
        path: `produits/${node.handle}`,
                 context: {
        shopifyId: node.shopifyId,
      },
			});
		});
		// Create blog pages
		result.data.ateliers.edges.forEach(({ node }) => {
			createPage({
        component: path.resolve('./src/templates/AtelierTemplate/index.js'),                
        path: `ateliers/${node.handle}`,
        context: {
          shopifyId: node.shopifyId,
        },
			});
		});
	});
};


 
 