const path = require('path');
const menuMobile = require('./src/utils/menuMobile');

module.exports = {
	siteMetadata: {
		title: 'Przytulanka - Przedszkole i Klub maluszka',
		description:
			'Małe grupy, ciepła i rodzinna atmosfera. Nie my tak twierdzimy, ale rodzice naszych dzieci :-) Przyjdź i sprawdź. Sulejówek, ul. Kolbego 10B. Zapraszamy!',
		url: 'https://www.przedszkoleprzytulanka.pl',
		author: '@lasmedia',
		menuMobile,
	},
	mapping: {
		'MarkdownRemark.frontmatter.socials.title':
			'MarkdownRemark.frontmatter.title',
		'MarkdownRemark.frontmatter.users.title':
			'MarkdownRemark.frontmatter.title',
		'MarkdownRemark.frontmatter.prices.title':
			'MarkdownRemark.frontmatter.title',
		'MarkdownRemark.frontmatter.groups.title':
			'MarkdownRemark.frontmatter.title',
		'MarkdownRemark.frontmatter.rules.title':
			'MarkdownRemark.frontmatter.title',
		'MarkdownRemark.frontmatter.refs.title': 'MarkdownRemark.frontmatter.title',
		'MarkdownRemark.frontmatter.gallery.title':
			'MarkdownRemark.frontmatter.title',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				assets: path.join(__dirname, 'src/assets'),
				components: path.join(__dirname, 'src/components'),
				layouts: path.join(__dirname, 'src/layouts'),
				pages: path.join(__dirname, 'src/pages'),
				templates: path.join(__dirname, 'src/templates'),
				utils: path.join(__dirname, 'src/utils'),
				helpers: path.join(__dirname, 'src/helpers'),
				views: path.join(__dirname, 'src/views'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/content/pages/media`,
				name: 'img',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'icons',
				path: `${__dirname}/src/assets/icons`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'fonts',
				path: `${__dirname}/src/assets/fonts`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: `${__dirname}/content`,
			},
		},
		{
			resolve: 'gatsby-plugin-modal-routing',
			options: {
				modalProps: {
					bodyOpenClassName: 'ReactModal__Body--open',
					htmlOpenClassName: 'ReactModal__Html--open',
					overlayClassName: 'ReactModal__Overlay',
					className: 'ReactModal__Content',
				},
			},
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-transformer-remark',
		'gatsby-plugin-react-leaflet',
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				htmlTitle: 'Panel zarządzania',
				htmlFavicon: (__dirname, 'src/assets/images/logo.png'),
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Strona przedszkola Przytulanka',
				short_name: 'Przedszkola Przytulanka',
				lang: 'pl',
				start_url: '/',
				background_color: '#6A1485',
				theme_color: '#6A1485',
				display: 'minimal-ui',
				icon: 'src/assets/images/logo.png',
			},
		},
		'gatsby-plugin-offline',
	],
};
