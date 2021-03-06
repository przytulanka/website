import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SEO from 'components/SEO';
import Close from 'components/Close';
import Bio from 'components/Bio';
import { ModalBio, PageBio } from './styles';

const BioTemplate = ({ data }) => {
	const { title, color, cover } = data.markdownRemark.frontmatter;
	const text = data.markdownRemark.html;
	const { slug } = data.markdownRemark.fields;

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<>
							<Close closeTo={closeTo} color={color} />
							<ModalBio
								as={Bio}
								title={title}
								cover={cover}
								to={slug}
								text={text}
							/>
						</>
					) : (
						<>
							<SEO title={title} />
							<PageBio
								as={Bio}
								title={title}
								cover={cover}
								to={slug}
								text={text}
							/>
						</>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
	);
};

BioTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default BioTemplate;

export const query = graphql`
	query BioTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			fields {
				slug
			}
			frontmatter {
				title
				color
				cover {
					childImageSharp {
						fixed(quality: 30, cropFocus: CENTER, width: 300, height: 300) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
	}
`;
