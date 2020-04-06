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
	const { menu, logo } = useStaticQuery(graphql`
		{
			menu: site {
				siteMetadata {
					menu {
						title
						to
						subMenu {
							title
							to
						}
					}
				}
			}
			logo: file(relativePath: { eq: "logo.svg" }) {
				publicURL
			}
		}
	`);

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
				<StyledMenu as={Menu} items={menu.siteMetadata.menu} />
				<StyledBurger as={Burger} click={toggleBurger} isOpen={isOpen} />
				<BurgerMenu isOpen={isOpen}>
					<MenuMobile items={menu.siteMetadata.menu} click={toggleBurger} />
				</BurgerMenu>
			</Container>
		</Wrapper>
	);
};

export default Navbar;
