import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import { Wrapper, MenuList, MenuItem, MenuHeader } from './styles';

const Menu = ({ items, className }) => (
	<Wrapper className={className}>
		<MenuList>
			{items.map(({ node: item }) => (
				<MenuItem key={item.title}>
					<MenuHeader>{item.title}</MenuHeader>
					{item.subMenu && <Dropdown submenu={item.subMenu} />}
				</MenuItem>
			))}
		</MenuList>
	</Wrapper>
);

Menu.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

Menu.defaultProps = {
	className: null,
};

export default Menu;
