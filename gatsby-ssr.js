/* eslint react/prop-types:0 */
const React = require('react');
const Layout = require('./src/layouts/index').default;

const seasons = {
	0: 'winter',
	1: 'winter',
	2: 'spring',
	3: 'spring',
	4: 'spring',
	5: 'summer',
	6: 'summer',
	7: 'summer',
	8: 'fall',
	9: 'fall',
	10: 'fall',
	11: 'winter',
};

exports.wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

exports.onRenderBody = ({ setBodyAttributes }) => {
	const month = new Date().getMonth();

	setBodyAttributes({
		className: seasons[month],
	});
};
