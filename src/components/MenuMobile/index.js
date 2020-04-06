import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { MenuList, MenuItem, MenuLink } from './styles';

const MenuMobile = ({ items, click, className }) => {
	const mobileMenu = [];
	items[0].subMenu.forEach(item => mobileMenu.push(item));
	items.slice(1).forEach(item => mobileMenu.push(item));

	return (
		<MenuList className={className}>
			{mobileMenu.map(item => (
				<MenuItem key={item.title}>
					<MenuLink as={ConditionalLink} to={item.to} click={click}>
						{item.title}
					</MenuLink>
				</MenuItem>
			))}
		</MenuList>
	);
};

MenuMobile.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	click: PropTypes.func,
	className: PropTypes.string,
};

MenuMobile.defaultProps = {
	click: null,
	className: null,
};

export default MenuMobile;
