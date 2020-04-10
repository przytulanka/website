import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Icon, Text } from './styles';

const Card = ({ color, icon, text, className }) => (
	<Wrapper className={className} bg={color}>
		<Icon src={icon} />
		<Text dangerouslySetInnerHTML={{ __html: text }} />
	</Wrapper>
);

Card.propTypes = {
	color: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	text: PropTypes.string,
	className: PropTypes.string,
};

Card.defaultProps = {
	text: null,
	className: null,
};

export default Card;
