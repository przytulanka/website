import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { Wrapper, Title, List, ListItem, StyledLink } from './styles';

const shorten = text => {
	switch (text) {
		case 'opowiadanie o Przytulance':
			return 'opowiadanie';
		case 'rodzice o Przytulance':
			return 'rodzice';
		case 'sala najmłodszych dzieci - kaczuszek':
			return 'kaczuszki';
		case 'sala starszych dzieci - misie':
			return 'misie';
		case 'sala najstarszych dzieci - zajączków':
			return 'zajączki';
		default:
			return text;
	}
};

const NavItem = ({ title, to, subItems }) => (
	<Wrapper>
		<Title as={ConditionalLink} to={to}>
			{title}
		</Title>
		<List>
			{subItems.map(subItem => (
				<ListItem key={subItem.title}>
					<StyledLink as={ConditionalLink} to={subItem.to}>
						{shorten(subItem.title)}
					</StyledLink>
				</ListItem>
			))}
		</List>
	</Wrapper>
);

NavItem.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	subItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavItem;
