import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/SEO';
import Bio from 'components/Bio';
import ModalClose from 'components/ModalClose';
import { PageBio, ModalBio } from './styles';

const BioTemplate = ({ data, location }) => {
	const { title, color, cover } = data.markdownRemark.frontmatter;
	const text = data.markdownRemark.html;
	const { slug } = data.markdownRemark.fields;
	const isModal = location?.state?.modal;

	const handleModalClose = () => {
		window.history.back();
	};

	const handleBackdropClick = e => {
		if (e.target === e.currentTarget) {
			handleModalClose();
		}
	};

	if (isModal) {
		return (
			<>
				<SEO title={title} />
				<ModalBio onClick={handleBackdropClick}>
					<div>
						<ModalClose color={color} onClick={handleModalClose} />
						<Bio title={title} cover={cover} text={text} />
					</div>
				</ModalBio>
			</>
		);
	}

	return (
		<>
			<SEO title={title} />
			<PageBio as={Bio} title={title} cover={cover} to={slug} text={text} />
		</>
	);
};

BioTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
	location: PropTypes.shape({
		state: PropTypes.shape({
			modal: PropTypes.bool,
		}),
	}).isRequired,
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
