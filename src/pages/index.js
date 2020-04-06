import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import About from 'views/About';

const IndexPage = () => (
	<>
		<SEO />
		<Hero />
		<About id="about" />
	</>
);

export default IndexPage;
