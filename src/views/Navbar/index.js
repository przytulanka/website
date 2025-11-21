import React, { useState, useEffect } from 'react';

import Logo from 'components/Logo';
import Menu from 'components/Menu';
import MenuMobile from 'components/MenuMobile';
import Burger from 'components/Burger';

import menuItems from 'utils/menu';
import menuMobileItems from 'utils/menuMobile';

import {
  Wrapper,
  Container,
  StyledLogo,
  StyledMenu,
  StyledBurger,
  BurgerMenu,
} from './styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const disableBurger = () => {
    setIsOpen(false);
  };

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('orientationchange', disableBurger);
    return () => {
      window.removeEventListener('orientationchange', disableBurger);
    };
  }, []);

  return (
    <Wrapper id="navbar">
      <Container>
        <StyledLogo as={Logo} to="/" />
        
        {/* desktop menu korzysta ZAMIAST GraphQL → z utils/menu */}
        <StyledMenu as={Menu} items={menuItems} />

        <StyledBurger as={Burger} click={toggleBurger} isOpen={isOpen} />
        <BurgerMenu isOpen={isOpen}>

          {/* mobile menu korzysta z utils/menuMobile */}
          <MenuMobile items={menuMobileItems} click={toggleBurger} />

        </BurgerMenu>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
