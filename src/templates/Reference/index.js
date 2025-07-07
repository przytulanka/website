import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from 'components/SEO';
import { SectionText } from 'components/Share';
import { PageWrapper, Signature } from './styles';

const ReferenceTemplate = ({ data }) => {
	const { author } = data.markdownRemark.frontmatter;
	const text = data.markdownRemark.html;

	return (
		<>
			<SEO Signature={author} />
			<PageWrapper>
				<SectionText dangerouslySetInnerHTML={{ __html: text }} />
				<Signature>{author}</Signature>
			</PageWrapper>
		</>
	);
};

ReferenceTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default ReferenceTemplate;

export const query = graphql`
	query ReferenceTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			fields {
				slug
			}
			frontmatter {
				author
			}
		}
	}
`;
