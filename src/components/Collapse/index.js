import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Text } from './styles';

const Collapse = ({ title, color, text, isOpen, click }) => (
	<Wrapper bg={color} isOpen={isOpen}>
		<Title isOpen={isOpen} onClick={() => click(title)}>
			{title}
		</Title>
		<Text isOpen={isOpen} dangerouslySetInnerHTML={{ __html: text }} />
	</Wrapper>
);

Collapse.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	click: PropTypes.func.isRequired,
};

export default Collapse;
