import React from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';
import { Wrapper, SocialItem, Icon, Text } from './styles';

const Socials = ({ socials, className }) => (
	<Wrapper className={className}>
		{socials.map(social => {
			const { title, to, cover } = social.title.frontmatter;
			const mailto = title === 'mail' ? `mailto:${to}` : null;
			const phoneto = title === 'mobile' ? `tel:${to}` : null;
			return (
				<SocialItem
					key={title}
					as={ConditionalLink}
					to={mailto || phoneto || to}
				>
					<Icon src={cover.publicURL} />
					<Text>{social.title.rawMarkdownBody}</Text>
				</SocialItem>
			);
		})}
	</Wrapper>
);

Socials.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	socials: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

Socials.defaultProps = {
	className: null,
};

export default Socials;
