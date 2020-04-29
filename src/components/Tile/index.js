import React from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';
import { Wrapper, Text, Signature } from './styles';

const Tile = ({ bg, to, text, signature }) => (
	<Wrapper bg={bg} as={ConditionalLink} to={to}>
		<Text>{text}</Text>
		<Signature>{signature}</Signature>
	</Wrapper>
);
Tile.propTypes = {
	bg: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	signature: PropTypes.string.isRequired,
};

export default Tile;
