import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Logo from 'components/Logo';
import Menu from 'components/Menu';
import MenuMobile from 'components/MenuMobile';
import Burger from 'components/Burger';
import {
	Wrapper,
	Container,
	StyledLogo,
	StyledMenu,
	StyledBurger,
	BurgerMenu,
} from './styles';

const Navbar = () => {
	const { allMenu, site, logo } = useStaticQuery(graphql`
    {
      allMenu {
        edges {
          node {
            title
            to
            subMenu {
              title
              to
            }
          }
        }
      }
      site {
        siteMetadata {
          menuMobile {
            title
            to
          }
        }
      }
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);

	const { menuMobile } = site.siteMetadata;
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
				<StyledLogo as={Logo} to="/" image={logo.publicURL} />
				<StyledMenu as={Menu} items={allMenu.edges} />
				<StyledBurger as={Burger} click={toggleBurger} isOpen={isOpen} />
				<BurgerMenu isOpen={isOpen}>
					<MenuMobile items={menuMobile} click={toggleBurger} />
				</BurgerMenu>
			</Container>
		</Wrapper>
	);
};

export default Navbar;
