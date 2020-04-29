import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SEO from 'components/SEO';
import Close from 'components/Close';
import { SectionText } from 'components/Share';
import { Wrapper, PageWrapper, Signature } from './styles';

const ReferenceTemplate = ({ data }) => {
	const { author } = data.markdownRemark.frontmatter;
	const text = data.markdownRemark.html;

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<>
							<Close closeTo={closeTo} color="green" />
							<Wrapper>
								<SectionText dangerouslySetInnerHTML={{ __html: text }} />
								<Signature>{author}</Signature>
							</Wrapper>
						</>
					) : (
						<>
							<SEO Signature={author} />
							<PageWrapper>
								<SectionText dangerouslySetInnerHTML={{ __html: text }} />
								<Signature>{author}</Signature>
							</PageWrapper>
						</>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
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
