import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from 'components/SEO';
import { SectionText } from 'components/Share';
import ModalClose from 'components/ModalClose';
import { PageWrapper, ModalReference, Signature } from './styles';

const ReferenceTemplate = ({ data, location }) => {
	const { author } = data.markdownRemark.frontmatter;
	const text = data.markdownRemark.html;
	const isModal = location?.state?.modal;

	const handleModalClose = () => {
		window.history.back();
	};

	const handleBackdropClick = e => {
		if (e.target === e.currentTarget) {
			handleModalClose();
		}
	};

	const content = (
		<>
			<SectionText dangerouslySetInnerHTML={{ __html: text }} />
			<Signature>{author}</Signature>
		</>
	);

	if (isModal) {
		return (
			<>
				<SEO Signature={author} />
				<ModalReference onClick={handleBackdropClick}>
					<div>
						<ModalClose color="green" onClick={handleModalClose} />
						{content}
					</div>
				</ModalReference>
			</>
		);
	}

	return (
		<>
			<SEO Signature={author} />
			<PageWrapper>{content}</PageWrapper>
		</>
	);
};

ReferenceTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
	location: PropTypes.shape({
		state: PropTypes.shape({
			modal: PropTypes.bool,
		}),
	}).isRequired,
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
