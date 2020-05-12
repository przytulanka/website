import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import Newsfeed from 'views/Newsfeed';
import About from 'views/About';
import Crew from 'views/Crew';
import Contact from 'views/Contact';

const IndexPage = () => (
	<>
		<SEO />
		<Hero />
		<Newsfeed id="newsfeed" />
		<About id="about" />
		<Crew id="crew" />
		<Contact id="contact" />
	</>
);

export default IndexPage;
