const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Przytulanka - Przedszkole i Klub maluszka',
		description:
			'Małe grupy, ciepła i rodzinna atmosfera. Nie my tak twierdzimy, ale rodzice naszych dzieci :-) Przyjdź i sprawdź. Sulejówek, ul. Kolbego 10B. Zapraszamy!',
		url: 'https://www.przedszkoleprzytulanka.pl',
		author: '@lasmedia',
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
	],
};
