import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';

import Dropdown from './Dropdown';
import { Wrapper, MenuList, MenuItem, MenuHeader } from './styles';

// docelowa kolejność w menu desktop
const DESKTOP_ORDER = ['oferta', 'plan dnia', 'galeria', 'o nas', 'kontakt'];

const sortItems = edges =>
	[...edges].sort((a, b) => {
		const aTitle = a.node.title;
		const bTitle = b.node.title;

		const aIdx = DESKTOP_ORDER.indexOf(aTitle);
		const bIdx = DESKTOP_ORDER.indexOf(bTitle);

		// jeśli czegoś nie ma w DESKTOP_ORDER – ląduje na końcu
		if (aIdx === -1 && bIdx === -1) return 0;
		if (aIdx === -1) return 1;
		if (bIdx === -1) return -1;
		return aIdx - bIdx;
	});

const Menu = ({ items, className }) => {
	const orderedItems = sortItems(items);

	return (
		<Wrapper className={className}>
			<MenuList>
				{orderedItems.map(({ node: item }) => {
					const hasSubmenu = item.subMenu && item.subMenu.length > 0;

					// dropdown pokazujemy TYLKO dla "o nas"
					const showDropdown = item.title === 'o nas' && hasSubmenu;

					// poprawka linku dla "kontakt"
					let linkTo = item.to;
					if (item.title === 'kontakt') {
						linkTo = '/#contact';
					}

					return (
						<MenuItem key={item.title}>
							<MenuHeader as={ConditionalLink} to={linkTo}>
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
