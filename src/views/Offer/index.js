import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { dataFilter } from 'utils';
import Card from 'components/Card';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { CardList, StyledCard } from './styles';

const Offer = ({ id }) => {
	const { offer } = useStaticQuery(graphql`
		{
			offer: markdownRemark(frontmatter: { type: { eq: "pageOffer" } }) {
				frontmatter {
					title
					color
					offers {
						title {
							html
							frontmatter {
								title
								color
								icon {
									id
									publicURL
								}
							}
						}
					}
				}
			}
		}
	`);

	const offers = dataFilter(offer, 'offers');
	if (!offers.length) return null;

	const { title, color } = offer.frontmatter;

	return (
		<SectionWrapper id={id}>
			<SectionTitle bg={color}>{title}</SectionTitle>
			<CardList>
				{offers.map(({ title: el }) => (
					<StyledCard
						as={Card}
						key={el.frontmatter.title}
						color={el.frontmatter.color}
						icon={el.frontmatter.icon.publicURL}
						text={el.html}
					/>
				))}
			</CardList>
		</SectionWrapper>
	);
};

Offer.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Offer;
