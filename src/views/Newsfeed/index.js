import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Slider from 'components/Slider';
import { uppercaseFirstChar } from 'utils';
import { SectionWrapper } from 'components/Share';
import { Wrapper, SliderWrapper, PosterLink } from './styles';

const Newsfeed = ({ id }) => {
	const data = useStaticQuery(graphql`
		query {
			newsfeed: markdownRemark(frontmatter: { type: { eq: "pageNewsfeed" } }) {
				frontmatter {
					color
					images {
						childImageSharp {
							fluid(maxWidth: 1200, quality: 80) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
			poster: file(name: { eq: "nowa_rekrutacja_2026" }) {
				childImageSharp {
					fluid(maxWidth: 900, quality: 80) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	// Bezpieczne wyciąganie danych
	const newsfeed = data?.newsfeed;
	const poster = data?.poster;
	const color = newsfeed?.frontmatter?.color || 'white';
	const images = newsfeed?.frontmatter?.images || [];

	return (
		<Wrapper as={SectionWrapper} id={id} bg={uppercaseFirstChar(color)}>
			{poster?.childImageSharp?.fluid && (
				<SliderWrapper>
					<PosterLink href="https://www.przedszkoleprzytulanka.pl/#contact">
						<Img
							fluid={poster.childImageSharp.fluid}
							alt="Nowa rekrutacja - Przedszkole Przytulanka"
						/>
					</PosterLink>
				</SliderWrapper>
			)}
			{images && images.length > 0 && (
				<SliderWrapper>
					<Slider images={images} type="newsfeed" />
				</SliderWrapper>
			)}
		</Wrapper>
	);
};

Newsfeed.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Newsfeed;
