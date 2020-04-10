import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import ContactMap from 'components/Map';
import { SectionWrapper, SectionTitle, SectionText } from 'components/Share';
import { Wrapper, StyledText, StyledMap } from './styles';

const Contact = ({ id }) => {
	const { contact, mapMarker } = useStaticQuery(graphql`
		{
			contact: markdownRemark(frontmatter: { type: { eq: "pageContact" } }) {
				html
				frontmatter {
					title
					color
				}
			}
			mapMarker: file(name: { eq: "map_marker" }) {
				publicURL
			}
		}
	`);
	const position = [52.240482531907524, 21.268575255830775];
	return (
		<>
			<Wrapper as={SectionWrapper} id={id}>
				<SectionTitle bg={contact.frontmatter.color}>
					{contact.frontmatter.title}
				</SectionTitle>
				<StyledText
					as={SectionText}
					dangerouslySetInnerHTML={{ __html: contact.html }}
				/>
			</Wrapper>
			<StyledMap
				as={ContactMap}
				position={position}
				iconImg={mapMarker.publicURL}
			/>
		</>
	);
};

Contact.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Contact;
