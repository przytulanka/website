import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MenuFooter from 'components/MenuFooter';
import Logo from 'components/Logo';
import Socials from 'components/Socials';
import {
	Wrapper,
	Container,
	StyledMenu,
	StyledLogo,
	StyledSocials,
	Copyright,
} from './styles';

const Footer = () => {
	const { menu, logo, socials } = useStaticQuery(graphql`
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
			socials: markdownRemark(frontmatter: { type: { eq: "socials" } }) {
				frontmatter {
					socials {
						title {
							rawMarkdownBody
							frontmatter {
								title
								color
								to
								cover {
									publicURL
								}
							}
						}
					}
				}
			}
		}
	`);

	const actualDate = new Date();

	return (
		<Container>
			<Wrapper>
				<StyledMenu as={MenuFooter} items={menu.siteMetadata.menu} />
				<StyledLogo as={Logo} to="/" image={logo.publicURL} />
				<StyledSocials as={Socials} socials={socials.frontmatter.socials} />
			</Wrapper>
			<Copyright>
				copyright © Przedszkole Klub Maluszka Przytulanka
				{` ${actualDate.getFullYear()}`} | developed by las media
			</Copyright>
		</Container>
	);
};

export default Footer;
