import React from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';
import Dropdown from './Dropdown';
import { Wrapper, MenuList, MenuItem, MenuHeader } from './styles';

import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import { Wrapper, MenuList, MenuItem, MenuHeader } from './styles';

const Menu = ({ items, className }) => (
	<Wrapper className={className}>
		<MenuList>
			{items.map(({ node: item }) => {
				const hasSubMenu = item.subMenu && item.subMenu.length > 0;

				return (
					<MenuItem key={item.title}>
						{hasSubMenu ? (
							<MenuHeader>{item.title}</MenuHeader>
						) : (
							<MenuHeader as={ConditionalLink} to={item.to}>
								{item.title}
							</MenuHeader>
						)}
						{hasSubMenu && <Dropdown submenu={item.subMenu} />}
					</MenuItem>
				);
			})}
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
