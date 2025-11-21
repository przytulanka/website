import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { Wrapper, Title, List, ListItem, StyledLink } from './styles';

const shorten = text => {
	const normalized = text.toLowerCase();

	// O nas
	if (normalized.startsWith('opowiadanie o przytulance')) {
		return 'opowiadanie';
	}
	if (normalized.startsWith('rodzice o przytulance')) {
		return 'rodzice';
	}

	// Galeria – sale
	if (
		normalized.includes('najmłodszych') &&
		normalized.includes('kaczuszek')
	) {
		return 'kaczuszki';
	}
	if (normalized.includes('starszych dzieci - misie')) {
		return 'misie';
	}
	if (
		normalized.includes('najstarszych') &&
		normalized.includes('zajączków')
	) {
		return 'zajączki';
	}

	// Galeria – budynek / plac zabaw (na wypadek dłuższych nazw)
	if (normalized.startsWith('budynek')) {
		return 'budynek';
	}
	if (normalized.startsWith('plac zabaw')) {
		return 'plac zabaw';
	}

	// Domyślnie bez zmian
	return text;
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
