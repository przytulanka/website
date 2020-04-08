import React from 'react';
import PropTypes from 'prop-types';

import BioCover from 'components/BioCover';
import { SectionText } from 'components/Share';
import { Wrapper, Header, Title, StyledCover, StyledText } from './styles';

const Bio = ({ title, cover, text, className }) => (
	<Wrapper className={className}>
		<Header>
			<StyledCover as={BioCover} cover={cover} />
			<Title>{title}</Title>
		</Header>
		<StyledText as={SectionText} dangerouslySetInnerHTML={{ __html: text }} />
	</Wrapper>
);

Bio.propTypes = {
	cover: PropTypes.shape(),
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Bio.defaultProps = {
	cover: null,
	className: null,
};

export default Bio;
