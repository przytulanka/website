import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from 'components/SEO';
import Collapse from 'components/Collapse';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { Wrapper, RulesList } from './styles';

const RulesTemplate = ({ data }) => {
	const { title, color, rules } = data.markdownRemark.frontmatter;

	const [openItem, setOpenItem] = useState(null);
	const handleClick = item => {
		setOpenItem(null);
		if (item !== openItem) {
			setOpenItem(item);
		}
	};
	return (
		<Wrapper as={SectionWrapper}>
			<SEO title={title} />
			<SectionTitle bg={color}>{title}</SectionTitle>
			<RulesList>
				{rules.map(({ title: item }) => (
					<Collapse
						key={item.frontmatter.title}
						title={item.frontmatter.title}
						color={item.frontmatter.color}
						text={item.html}
						click={handleClick}
						isOpen={!!(openItem === item.frontmatter.title)}
					/>
				))}
			</RulesList>
		</Wrapper>
	);
};

RulesTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default RulesTemplate;

export const query = graphql`
	query RulesTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				color
				rules {
					title {
						html
						frontmatter {
							title
							color
						}
					}
				}
			}
		}
	}
`;
