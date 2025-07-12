const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const menu = require('./src/utils/menu');

exports.sourceNodes = async ({
	actions,
	createNodeId,
	createContentDigest,
	getNodesByType,
}) => {
	const { createNode } = actions;
	const allMarkdown = getNodesByType('MarkdownRemark');
	const pageGallery = allMarkdown.filter(
		el => el.frontmatter.type === 'pageGallery',
	);
	const galleryOrder = pageGallery[0].frontmatter.gallery.map(
		({ title }) => title,
	);
	const allGallery = galleryOrder.map(el => allMarkdown.find(i => i.frontmatter.title === el));

	const menuGallery = allGallery
		.map(el => {
			if (el.frontmatter.images.length) {
				const link = {
					title: el.frontmatter.title,
					to: `/galeria/#${el.fields.slug.substr(1)}`,
				};
				return link;
			}
			return null;
		})
		.filter(el => !!el);

	menu.forEach((el, index) => {
		const data = {
			title: el.title,
			to: el.to,
			subMenu:
        el.title === 'galeria' ? [...el.subMenu, ...menuGallery] : el.subMenu,
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

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === 'build-html' || stage === 'develop-html') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /react-leaflet|leaflet|react-player|hls\.js/,
						use: loaders.null(),
					},
				],
			},
		});
	}
};
