import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/SEO';
import Bio from 'components/Bio';
import { PageBio } from './styles';

const BioTemplate = ({ data }) => {
	const { title, cover } = data.markdownRemark.frontmatter;
	const text = data.markdownRemark.html;
	const { slug } = data.markdownRemark.fields;

	return (
		<>
			<SEO title={title} />
			<PageBio as={Bio} title={title} cover={cover} to={slug} text={text} />
		</>
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
