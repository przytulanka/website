import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import { dataFilter, uppercaseFirstChar } from 'utils';
import ConditionalLink from 'components/Conditional';
import { SectionWrapper, SectionTitle } from 'components/Share';
import BioCover from 'components/BioCover';
import { Wrapper, CrewList, CrewItem, StyledLink } from './styles';

const Crew = ({ id }) => {
	const { members } = useStaticQuery(graphql`
    {
      members: markdownRemark(frontmatter: { type: { eq: "crew" } }) {
        frontmatter {
          title
          color
          users {
            title {
              html
              fields {
                slug
              }
              frontmatter {
                title
                color
                cover {
                  childImageSharp {
                    fixed(
                      quality: 75
                      cropFocus: CENTER
                      width: 190
                      height: 190
                    ) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

	const users = dataFilter(members, 'users');
	if (!users.length) return null;

	return (
		<Wrapper
			as={SectionWrapper}
			id={id}
			bg={uppercaseFirstChar(members.frontmatter.color)}
		>
			<SectionTitle bg={members.frontmatter.color}>
				{members.frontmatter.title}
			</SectionTitle>
			<CrewList>
				{users.map(({ title }) => (
					<CrewItem key={title.frontmatter.title}>
						<StyledLink as={ConditionalLink} to={`$${title.fields.slug}`}>
							<BioCover
								cover={title.frontmatter.cover}
								color={title.frontmatter.color}
							/>
						</StyledLink>
					</CrewItem>
				))}
			</CrewList>
		</Wrapper>
	);
};

Crew.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Crew;
