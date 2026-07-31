import React, { useEffect, useState } from 'react';
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
	const { allMenu, logo, socials, site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          buildYear
        }
      }
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

	// Rok budowania (siteMetadata) to wspolne zrodlo dla SSR i pierwszego renderu
	// klienta - dzieki temu hydratacja nigdy sie nie rozjezdza, nawet na przelomie
	// roku. Aktualizacja biezacym rokiem dopiero po hydratacji (useEffect).
	const [year, setYear] = useState(site.siteMetadata.buildYear);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<Container>
			<Wrapper>
				<StyledMenu as={MenuFooter} items={allMenu.edges} />
				<StyledLogo as={Logo} to="/" image={logo.publicURL} />
				<StyledSocials as={Socials} socials={socials.frontmatter.socials} />
			</Wrapper>
			<Copyright>
				copyright © Przedszkole Klub Maluszka Przytulanka
				{` ${year}`} | developed by las media
			</Copyright>
		</Container>
	);
};

export default Footer;
