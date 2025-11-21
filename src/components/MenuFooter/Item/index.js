import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { Wrapper, Title, List, ListItem, StyledLink } from './styles';

const NavItem = ({ title, to, subItems }) => (
	<Wrapper>
		<Title as={ConditionalLink} to={to}>
			{title}
		</Title>

		{subItems && subItems.length > 0 && (
			<List>
				{subItems.map(subItem => (
					<ListItem key={subItem.title}>
						<StyledLink as={ConditionalLink} to={subItem.to}>
							{subItem.title}
						</StyledLink>
					</ListItem>
				))}
			</List>
		)}
	</Wrapper>
);

NavItem.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	// może być puste
	// eslint-disable-next-line react/forbid-prop-types
	subItems: PropTypes.arrayOf(PropTypes.object),
};

NavItem.defaultProps = {
	subItems: [],
};

export default NavItem;
