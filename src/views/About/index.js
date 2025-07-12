import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { uppercaseFirstChar } from 'utils';
import Slider from 'components/Slider';
import Quote from 'components/Quote';
import { SectionWrapper, SectionTitle, SectionText } from 'components/Share';
import { Wrapper, StyledText, SliderWrapper } from './styles';

const About = ({ id }) => {
	const { info, quote } = useStaticQuery(graphql`
    {
      info: markdownRemark(frontmatter: { type: { eq: "pageAbout" } }) {
        rawMarkdownBody
        frontmatter {
          title
          color
          images {
            id
            childImageSharp {
              fluid(maxWidth: 1000, quality: 30) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      quote: markdownRemark(frontmatter: { type: { eq: "quote" } }) {
        rawMarkdownBody
        frontmatter {
          author
        }
      }
    }
  `);
	const { title, color, images } = info.frontmatter;

	return (
		<>
			<Wrapper as={SectionWrapper} id={id} bg={uppercaseFirstChar(color)}>
				<SectionTitle bg={color}>{title}</SectionTitle>
				<StyledText as={SectionText}>{info.rawMarkdownBody}</StyledText>
				<SliderWrapper>
					<Slider images={images} type="about" />
				</SliderWrapper>
			</Wrapper>
			<Quote text={quote.rawMarkdownBody} author={quote.frontmatter.author} />
		</>
	);
};

About.propTypes = {
	id: PropTypes.string.isRequired,
};

export default About;
