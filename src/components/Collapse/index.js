import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Text } from './styles';

const Collapse = ({ id, title, color, text, isOpen, click }) => (
	<Wrapper bg={color} isOpen={isOpen} id={id}>
		<Title isOpen={isOpen} onClick={() => click(title, id)}>
			{title}
		</Title>
		<Text isOpen={isOpen} dangerouslySetInnerHTML={{ __html: text }} />
	</Wrapper>
);

Collapse.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	click: PropTypes.func.isRequired,
};

export default Collapse;
