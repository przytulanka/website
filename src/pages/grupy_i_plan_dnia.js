import React from 'react';

import SEO from 'components/SEO';
import Groups from 'views/Groups';

const OfferPage = () => (
	<>
		<SEO title="Grupy i plan dnia" />
		<Groups id="#groups" />
	</>
);

export default OfferPage;
