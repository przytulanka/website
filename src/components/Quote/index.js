import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Container, Text, Author } from './styles';

const Quote = ({ text, author, className }) => (
	<Wrapper className={className}>
		<Container>
			<Text>{text}</Text>
			<Author>{author}</Author>
		</Container>
	</Wrapper>
);

export default Quote;

Quote.propTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Quote.defaultProps = {
	className: null,
};
