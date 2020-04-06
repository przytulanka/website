import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Wrapper, Image } from './styles';

const Hero = () => {
	const { heroImage } = useStaticQuery(graphql`
		query {
			heroImage: file(name: { eq: "hero" }) {
				childImageSharp {
					fluid(maxHeight: 800) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Wrapper>
			<Image as={Img} fluid={heroImage.childImageSharp.fluid} />
		</Wrapper>
	);
};

export default Hero;
