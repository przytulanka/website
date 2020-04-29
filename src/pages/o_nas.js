import React from 'react';

import SEO from 'components/SEO';
import Story from 'views/Story';
import Reference from 'views/Reference';

const AboutPage = () => (
	<>
		<SEO title="O nas" />
		<Story id="story" />
		<Reference id="reference" />
	</>
);

export default AboutPage;
