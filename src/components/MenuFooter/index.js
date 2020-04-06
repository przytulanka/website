import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from './Item';
import { List, ListItem } from './styles';

const MenuFooter = ({ items, className }) => (
	<nav className={className}>
		<List>
			{items.map(item => (
				<ListItem key={item.title}>
					<MenuItem title={item.title} to={item.to} subItems={item.subMenu} />
				</ListItem>
			))}
		</List>
	</nav>
);

MenuFooter.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

MenuFooter.defaultProps = {
	className: null,
};

export default MenuFooter;
