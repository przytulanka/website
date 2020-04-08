import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import About from 'views/About';
import Crew from 'views/Crew';

const IndexPage = () => (
	<>
		<SEO />
		<Hero />
		<About id="about" />
		<Crew id="crew" />
	</>
);

export default IndexPage;
