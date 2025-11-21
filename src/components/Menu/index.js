import React from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';
import Dropdown from './Dropdown';
import { Wrapper, MenuList, MenuItem, MenuHeader } from './styles';

// Docelowa kolejność pozycji w menu desktop
const ORDER = ['oferta', 'plan dnia', 'galeria', 'o nas', 'kontakt'];

const sortItems = items => {
  const orderMap = new Map(ORDER.map((title, index) => [title, index]));

  // nie modyfikujemy oryginalnej tablicy – robimy kopię
  return [...items].sort((a, b) => {
    const aTitle = a?.node?.title || '';
    const bTitle = b?.node?.title || '';

    const aIndex = orderMap.get(aTitle) ?? 999;
    const bIndex = orderMap.get(bTitle) ?? 999;

    return aIndex - bIndex;
  });
};

const Menu = ({ items, className }) => {
  const orderedItems = sortItems(items);

  return (
    <Wrapper className={className}>
      <MenuList>
        {orderedItems.map(({ node: item }) => {
          // dodatkowe zabezpieczenie na wypadek undefined
          if (!item) return null;

          const hasSubmenu =
            Array.isArray(item.subMenu) && item.subMenu.length > 0;

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
