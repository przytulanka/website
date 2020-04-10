import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import About from 'views/About';
import Crew from 'views/Crew';
import Contact from 'views/Contact';

const IndexPage = () => (
	<>
		<SEO />
		<Hero />
		<About id="about" />
		<Crew id="crew" />
		<Contact id="contact" />
	</>
);

export default IndexPage;
