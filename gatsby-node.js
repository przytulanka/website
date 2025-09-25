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

  // źródło pozycji dla dropdownu "galeria"
  const pageGallery = allMarkdown.filter(
    (el) => el.frontmatter.type === 'pageGallery'
  );

  const galleryOrder = pageGallery[0]
    ? pageGallery[0].frontmatter.gallery.map(({ title }) => title)
    : [];

  const allGallery = galleryOrder.map((title) =>
    allMarkdown.find((i) => i.frontmatter.title === title)
  );

  const menuGallery = allGallery
    .map((el) => {
      if (el && el.frontmatter) {
        return {
          title: el.frontmatter.title,
          to: `/galeria/#${el.fields.slug.substr(1)}`,
        };
      }
      return null;
    })
    .filter(Boolean);

  // budowa węzłów Menu
  menu.forEach((el, index) => {
    const baseSub = Array.isArray(el.subMenu) ? el.subMenu : [];
    const merged =
      el.title === 'galeria' ? [...baseSub, ...menuGallery] : baseSub;

    const dataBase = {
      title: el.title,
      to: el.to,
    };

    // KLUCZ: dodaj subMenu tylko jeśli ma elementy
    const data =
      merged.length > 0 ? { ...dataBase, subMenu: merged } : dataBase;

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
        context: { id: node.id },
      });
    }

    if (type === 'reference') {
      createPage({
        path: slug,
        component: path.resolve('src/templates/Reference/index.js'),
        context: { id: node.id },
      });
    }

    if (type === 'rules') {
      createPage({
        path: slug,
        component: path.resolve('src/templates/Rules/index.js'),
        context: { id: node.id },
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
