import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Wrapper, Cross } from './styles';

const Close = ({ closeTo, color }) => (
	<Wrapper as={Link} to={closeTo} state={{ noScroll: true }}>
		<Cross bg={color} />
	</Wrapper>
);

Close.propTypes = {
	closeTo: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default Close;
