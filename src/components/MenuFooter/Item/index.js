import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { Wrapper, Title, List, ListItem, StyledLink } from './styles';

const shorten = text => {
	if (!text) return text;

	const normalized = text.toLowerCase();

	// --- O NAS ---
	if (normalized.startsWith('opowiadanie o przytulance')) {
		return 'opowiadanie';
	}
	if (normalized.startsWith('rodzice o przytulance')) {
		return 'rodzice';
	}

	// --- GALERIA: KACZUSZKI ---
	if (normalized.includes('najmłodszych') && normalized.includes('kaczuszek')) {
		return 'kaczuszki';
	}

	// --- GALERIA: MISIE (bardziej elastyczne) ---
	if (
		normalized.includes('starszych') &&
		(normalized.includes('misie') || normalized.includes('misi'))
	) {
		return 'misie';
	}

	// --- GALERIA: ZAJĄCZKI ---
	if (normalized.includes('najstarszych') && normalized.includes('zającz')) {
		return 'zajączki';
	}

	// --- GALERIA: BUDYNEK ---
	if (normalized.startsWith('budynek')) {
		return 'budynek';
	}

	// --- GALERIA: PLAC ZABAW ---
	if (normalized.startsWith('plac zabaw')) {
		return 'plac zabaw';
	}

	// Domyślnie nie zmieniamy
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
	subItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavItem;
