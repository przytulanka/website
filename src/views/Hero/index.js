import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Wrapper, Image } from './styles';

const Hero = () => {
	const { heroImage } = useStaticQuery(graphql`
    query {
      heroImage: file(name: { eq: "hero" }) {
        childImageSharp {
          fluid(maxHeight: 800, quality: 25) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

	return (
		<Wrapper>
			{/* Hero to element LCP - eager + brak fade-in sprawiaja, ze <picture>
			    jest juz w HTML z budowania i widoczny w trakcie ladowania. */}
			<Image
				as={Img}
				fluid={heroImage.childImageSharp.fluid}
				loading="eager"
				fadeIn={false}
			/>
		</Wrapper>
	);
};

export default Hero;
