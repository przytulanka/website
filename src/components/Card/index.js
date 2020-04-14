import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Subtitle, Icon, Text } from './styles';

const Card = ({ color, title, subtitle, icon, text, className }) => (
	<Wrapper className={className} bg={color}>
		{title && (
			<Title>
				{title}
				{subtitle && <Subtitle>{subtitle}</Subtitle>}
			</Title>
		)}
		<Icon src={icon} />
		<Text dangerouslySetInnerHTML={{ __html: text }} />
	</Wrapper>
);

Card.propTypes = {
	color: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
};

Card.defaultProps = {
	title: null,
	subtitle: null,
	text: null,
	className: null,
};

export default Card;
