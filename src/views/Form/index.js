import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Form from 'components/Form';
import { SectionWrapper, SectionTitle } from 'components/Share';

const About = ({ id }) => {
	const { form } = useStaticQuery(graphql`
		{
			form: markdownRemark(frontmatter: { type: { eq: "pageForm" } }) {
				frontmatter {
					title
					color
				}
			}
		}
	`);

	return (
		<SectionWrapper id={id}>
			<SectionTitle bg={form.frontmatter.color}>
				{form.frontmatter.title}
			</SectionTitle>
			<Form />
		</SectionWrapper>
	);
};

About.propTypes = {
	id: PropTypes.string.isRequired,
};

export default About;
