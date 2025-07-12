import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { SectionWrapper, SectionTitle } from 'components/Share';
import { Wrapper, Text } from './styles';

const Offer = ({ id }) => {
	const { offer, icon } = useStaticQuery(graphql`
    {
      offer: markdownRemark(frontmatter: { type: { eq: "pageOffer" } }) {
        html
        frontmatter {
          title
          color
        }
      }
      icon: file(relativePath: { eq: "mis.svg" }) {
        publicURL
      }
    }
  `);

	const { title, color } = offer.frontmatter;

	return (
		<SectionWrapper id={id}>
			<SectionTitle bg={color}>{title}</SectionTitle>
			<Wrapper bg="orange">
				<Text
					dangerouslySetInnerHTML={{ __html: offer.html }}
					icon={icon.publicURL}
				/>
			</Wrapper>
		</SectionWrapper>
	);
};

Offer.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Offer;
