import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { DropdownList, DropdownItem, DropdownLink } from './styles';

const Dropdown = ({ submenu }) => (
	<DropdownList aria-label="submenu">
		{submenu.map(item => (
			<DropdownItem key={item.title}>
				<DropdownLink as={ConditionalLink} to={item.to}>
					{item.title}
				</DropdownLink>
			</DropdownItem>
		))}
	</DropdownList>
);

Dropdown.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	submenu: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropdown;
