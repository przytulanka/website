import React from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';
import { Wrapper, SocialItem, Icon, Text } from './styles';

const Socials = ({ socials, className }) => (
	<Wrapper className={className}>
		{socials.map(social => {
			const { title, to, cover } = social.title.frontmatter;
			return (
				<SocialItem key={title} as={ConditionalLink} to={to}>
					<Icon src={cover.publicURL} />
					<Text>{social.title.rawMarkdownBody}</Text>
				</SocialItem>
			);
		})}
	</Wrapper>
);

Socials.propTypes = {
	socials: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

Socials.defaultProps = {
	className: null,
};

export default Socials;
