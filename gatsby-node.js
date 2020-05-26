const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const menu = require('./src/utils/menu');

exports.sourceNodes = async ({
	actions,
	createNodeId,
	createContentDigest,
}) => {
	const { createNode } = actions;

	menu.forEach((el, index) => {
		const data = {
			title: el.title,
			subMenu: el.subMenu,
		};

		const node = {
			id: createNodeId(`menu-${index}`),
			parent: null,
			children: [],
			internal: {
				type: 'Menu',
				mediaType: 'text/html',
				contentDigest: createContentDigest(data),
			},
			...data,
		};

		createNode(node);
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({
			node,
			getNode,
			basePath: 'pages',
			trailingSlash: false,
		});
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							type
						}
					}
				}
			}
		}
	`);

	if (result.errors) throw result.errors;

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const { slug } = node.fields;
		const { type } = node.frontmatter;

		if (type === 'user') {
			createPage({
				path: slug,
				component: path.resolve('src/templates/Bio/index.js'),
				context: {
					id: node.id,
				},
			});
		}

		if (type === 'reference') {
			createPage({
				path: slug,
				component: path.resolve('src/templates/Reference/index.js'),
				context: {
					id: node.id,
				},
			});
		}

		if (type === 'rules') {
			createPage({
				path: slug,
				component: path.resolve('src/templates/Rules/index.js'),
				context: {
					id: node.id,
				},
			});
		}
	});
};
