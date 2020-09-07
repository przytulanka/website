import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { uppercaseFirstChar } from 'utils';
import ContactMap from 'components/Map';
import { SectionWrapper, SectionTitle, SectionText } from 'components/Share';
import { Wrapper, MapWrapper, StyledText, StyledMap } from './styles';

const Contact = ({ id }) => {
	const { contact, mapMarker } = useStaticQuery(graphql`
		{
			contact: markdownRemark(frontmatter: { type: { eq: "pageContact" } }) {
				html
				frontmatter {
					title
					color
					to
				}
			}
			mapMarker: file(name: { eq: "map_marker" }) {
				publicURL
			}
		}
	`);
	const { title, color, to } = contact.frontmatter;
	const position = to.split(',');
	return (
		<>
			<Wrapper as={SectionWrapper} id={id} bg={uppercaseFirstChar(color)}>
				<SectionTitle bg={color}>{title}</SectionTitle>
				<StyledText
					as={SectionText}
					dangerouslySetInnerHTML={{ __html: contact.html }}
				/>
			</Wrapper>
			<MapWrapper>
				<StyledMap
					as={ContactMap}
					position={position}
					iconImg={mapMarker.publicURL}
				/>
			</MapWrapper>
		</>
	);
};

Contact.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Contact;
