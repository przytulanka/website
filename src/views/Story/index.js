import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import { SectionWrapper, SectionTitle, SectionText } from 'components/Share';
import { Background, Content } from './styles';

const Story = ({ id }) => {
	const { info } = useStaticQuery(graphql`
    {
      info: markdownRemark(frontmatter: { type: { eq: "pageStory" } }) {
        html
        frontmatter {
          title
          color
        }
      }
    }
  `);
	return (
		<SectionWrapper id={id}>
			<SectionTitle bg={info.frontmatter.color}>
				{info.frontmatter.title}
			</SectionTitle>
			<Background />
			<Content
				as={SectionText}
				dangerouslySetInnerHTML={{ __html: info.html }}
			/>
		</SectionWrapper>
	);
};

Story.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Story;
