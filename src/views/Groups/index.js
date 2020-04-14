import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { dataFilter } from 'utils';
import Card from 'components/Card';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { CardList, StyledCard } from './styles';

const Groups = ({ id }) => {
	const { group } = useStaticQuery(graphql`
		{
			group: markdownRemark(frontmatter: { type: { eq: "pageGroups" } }) {
				frontmatter {
					title
					color
					groups {
						title {
							html
							frontmatter {
								title
								subtitle
								color
								icon {
									id
									publicURL
								}
							}
						}
					}
				}
			}
		}
	`);

	const groups = dataFilter(group, 'groups');
	if (!groups.length) return null;

	const { title, color } = group.frontmatter;

	return (
		<SectionWrapper id={id}>
			<SectionTitle bg={color}>{title}</SectionTitle>
			<CardList>
				{groups.map(({ title: el }) => (
					<StyledCard
						as={Card}
						key={el.frontmatter.title}
						title={el.frontmatter.title}
						subtitle={el.frontmatter.subtitle}
						color={el.frontmatter.color}
						icon={el.frontmatter.icon.publicURL}
						text={el.html}
					/>
				))}
			</CardList>
		</SectionWrapper>
	);
};

Groups.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Groups;
