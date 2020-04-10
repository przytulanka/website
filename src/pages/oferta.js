import React from 'react';

import SEO from 'components/SEO';
import Offer from 'views/Offer';
import Pricing from 'views/Pricing';

const OfferPage = () => (
	<>
		<SEO title="Oferta" />
		<Offer id="#offer" />
		<Pricing id="#pricing" />
	</>
);

export default OfferPage;
