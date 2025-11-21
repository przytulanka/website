import React from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';
import Dropdown from './Dropdown';
import { Wrapper, MenuList, MenuItem, MenuHeader } from './styles';

const Menu = ({ items, className }) => (
	<Wrapper className={className}>
		<MenuList>
			{items.map(({ node: item }) => {
	const hasSubmenu = item.subMenu && item.subMenu.length > 0;

	// dropdown pokazujemy TYLKO dla "o nas"
	const showDropdown = item.title === 'o nas' && hasSubmenu;

	return (
		<MenuItem key={item.title}>
			<MenuHeader
				as={ConditionalLink}
				to={item.to}
			>
				{item.title}
			</MenuHeader>

			{showDropdown && <Dropdown submenu={item.subMenu} />}
		</MenuItem>
	);
})
}
		</MenuList>
	</Wrapper>
);

Menu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

Menu.defaultProps = {
	className: null,
};

export default Menu;
