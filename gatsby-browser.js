/* eslint react/prop-types:0 */
/* eslint consistent-return:0 */
import React from 'react';
import Layout from './src/layouts/index';
import { getOffset, smoothScroll } from './src/utils/index';

import './src/assets/styles/fonts.css';

const shouldUpdateScroll = (
	{ routerProps: { location }, prevRouterProps },
	opts = {},
) => {
	const { offsetElement = '#navbar', duration = 1000 } = opts;

	if (!!location.hash && !!prevRouterProps) {
		const destinationElement = document.querySelector(location.hash);
		if (!destinationElement) return false;

		const destination = destinationElement.getBoundingClientRect().top;
		const offset = getOffset(offsetElement);

		smoothScroll(destination, offset, duration);
		return false;
	}
};

const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export { wrapPageElement, shouldUpdateScroll };
