import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { verticalPosition, getOffset } from 'utils';
import SEO from 'components/SEO';
import Collapse from 'components/Collapse';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { Wrapper, RulesList } from './styles';

const RulesTemplate = ({ data }) => {
	const { title, color, rules } = data.markdownRemark.frontmatter;

	const [openItem, setOpenItem] = useState(null);
	const [activeEl, setActiveEl] = useState(null);
	const handleClick = (item, id) => {
		setActiveEl(id);
		setOpenItem(null);
		if (item !== openItem) {
			setOpenItem(item);
		}
	};

	useEffect(() => {
		if (activeEl) {
			const offset = getOffset('#navbar') + 30;
			const destination = verticalPosition(`#${activeEl}`, offset);
			window.scrollTo(0, destination);
		}
	});

	return (
		<Wrapper as={SectionWrapper}>
			<SEO title={title} />
			<SectionTitle bg={color}>{title}</SectionTitle>
			<RulesList>
				{rules.map(({ title: item }, index) => (
					<Collapse
						key={item.frontmatter.title}
						id={`el${index}`}
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
