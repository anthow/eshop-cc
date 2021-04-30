

// Create pages for docs
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const docTemplate = path.resolve('src/templates/docTemplate.js');
	const blogTemplate = path.resolve('src/templates/blogTemplate.js');

	// Individual doc and blog pages
	// All in one go
	return graphql(`
		{
			blogs: allMarkdownRemark(
				filter: { fileAbsolutePath: { glob: "**/src/pages/blog/*.md" } }
				sort: { order: DESC, fields: frontmatter___date }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			docs: allMarkdownRemark(
				filter: {
					fileAbsolutePath: { glob: "**/src/pages/project/*.md" }
				}
				sort: { order: DESC, fields: frontmatter___order }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create doc pages
		result.data.docs.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: docTemplate,
			});
		});
		// Create blog pages
		result.data.blogs.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: docTemplate,
			});
		});
	});
};

