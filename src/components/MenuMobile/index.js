import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { MenuList, MenuItem, MenuLink } from './styles';

const MenuMobile = ({ items, click, className }) => (
	<MenuList className={className}>
		{items.map(item => (
			<MenuItem key={item.title}>
				<MenuLink as={ConditionalLink} to={item.to} click={click}>
					{item.title}
				</MenuLink>
			</MenuItem>
		))}
	</MenuList>
);

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
