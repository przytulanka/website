import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';

import Dropdown from './Dropdown';
import { Wrapper, MenuList, MenuItem, MenuHeader } from './styles';

// docelowa kolejność w MENU DESKTOP
const DESKTOP_ORDER = ['oferta', 'plan dnia', 'galeria', 'o nas', 'kontakt'];

// zamiana edges => node oraz odfiltrowanie śmieci
const normalizeItems = items => {
	if (!Array.isArray(items)) return [];

	return items
		.filter(Boolean)
		.map(edge => (edge && edge.node ? edge.node : edge));
};

// sortowanie po docelowej kolejności
const sortForDesktop = nodes => {
	const order = DESKTOP_ORDER;

	return [...nodes].sort((a, b) => {
		const aTitle = a?.title || '';
		const bTitle = b?.title || '';

		const aIdx = order.indexOf(aTitle);
		const bIdx = order.indexOf(bTitle);

		// jeżeli czegoś nie ma w DESKTOP_ORDER – leci na koniec, alfabetycznie
		if (aIdx === -1 && bIdx === -1) {
			return aTitle.localeCompare(bTitle);
		}
		if (aIdx === -1) return 1;
		if (bIdx === -1) return -1;

		return aIdx - bIdx;
	});
};

const Menu = ({ items, className }) => {
	const nodes = sortForDesktop(normalizeItems(items));

	return (
		<Wrapper className={className}>
			<MenuList>
				{nodes.map(item => {
					const hasSubmenu =
						Array.isArray(item.subMenu) && item.subMenu.length > 0;

					// dropdown TYLKO dla "o nas"
					const showDropdown = hasSubmenu && item.title === 'o nas';

					return (
						<MenuItem key={item.title}>
							<MenuHeader as={ConditionalLink} to={item.to}>
								{item.title}
							</MenuHeader>

							{showDropdown && <Dropdown submenu={item.subMenu} />}
						</MenuItem>
					);
				})}
			</MenuList>
		</Wrapper>
	);
};

Menu.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

Menu.defaultProps = {
	className: null,
};

export default Menu;
