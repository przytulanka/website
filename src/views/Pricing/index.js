import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { dataFilter } from 'utils';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { Wrapper, PricingList, PricingItem, Title, Text } from './styles';

const Pricing = ({ id }) => {
	const { pricing } = useStaticQuery(graphql`
    {
      pricing: markdownRemark(frontmatter: { type: { eq: "pagePricing" } }) {
        frontmatter {
          title
          color
          prices {
            title {
              html
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `);
	const prices = dataFilter(pricing, 'prices');
	if (!prices.length) return null;

	const { title, color } = pricing.frontmatter;

	return (
		<Wrapper as={SectionWrapper} id={id}>
			<SectionTitle bg={color}>{title}</SectionTitle>
			<PricingList>
				{prices.map(({ title: el }) => (
					<PricingItem key={el.frontmatter.title}>
						<Title>{el.frontmatter.title}</Title>
						<Text dangerouslySetInnerHTML={{ __html: el.html }} />
					</PricingItem>
				))}
			</PricingList>
		</Wrapper>
	);
};

Pricing.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Pricing;
