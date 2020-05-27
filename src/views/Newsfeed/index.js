import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Slider from 'components/Slider';
import { uppercaseFirstChar } from 'utils';
import { SectionWrapper } from 'components/Share';
import { Wrapper, SliderWrapper } from './styles';

const Newsfeed = ({ id }) => {
	const { newsfeed } = useStaticQuery(graphql`
		{
			newsfeed: markdownRemark(frontmatter: { type: { eq: "pageNewsfeed" } }) {
				frontmatter {
					color
					images {
						id
						childImageSharp {
							fluid(maxWidth: 860, quality: 50) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`);

	const { color, images } = newsfeed.frontmatter;
	if (!images.length) return null;

	return (
		<Wrapper as={SectionWrapper} id={id} bg={uppercaseFirstChar(color)}>
			<SliderWrapper>
				<Slider images={images} type="newsfeed" />
			</SliderWrapper>
		</Wrapper>
	);
};

Newsfeed.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Newsfeed;
