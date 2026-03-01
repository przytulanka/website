import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Slider from 'components/Slider';
import { uppercaseFirstChar } from 'utils';
import { SectionWrapper } from 'components/Share';
import { Wrapper, SliderWrapper, PosterLink } from './styles';

const Newsfeed = ({ id }) => {
	const { newsfeed, poster } = useStaticQuery(graphql`
    {
      newsfeed: markdownRemark(frontmatter: { type: { eq: "pageNewsfeed" } }) {
        frontmatter {
          }
        }
      }
      poster: file(name: { eq: "nowa_rekrutacja" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);


	return (
		<Wrapper as={SectionWrapper} id={id} bg={uppercaseFirstChar(color)}>
			{poster && (
				<SliderWrapper>
					<PosterLink href="https://www.przedszkoleprzytulanka.pl/#contact">
						<Img
							fluid={poster.childImageSharp.fluid}
							alt="Nowa rekrutacja - Przedszkole Przytulanka"
						/>
					</PosterLink>
				</SliderWrapper>
			)}
			<SliderWrapper>
				<Slider images={images} type="newsfeed" />
			</SliderWrapper>
