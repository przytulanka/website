import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import { dataFilter } from 'utils';
import Tile from 'components/Tile';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { Wrapper, Tiles, TileItem } from './styles';

const Reference = ({ id }) => {
	const { markdownRemark } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { type: { eq: "pageReference" } }) {
        frontmatter {
          title
          color
          refs {
            title {
              excerpt
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `);

	const refs = dataFilter(markdownRemark, 'refs', 'title');
	if (!refs.length) return null;

	const { title, color } = markdownRemark.frontmatter;
	return (
		<Wrapper as={SectionWrapper} id={id}>
			<SectionTitle bg={color}>{title}</SectionTitle>

			<Tiles>
				{refs.map(({ title: author }) => (
					<TileItem key={author.id}>
						<Tile
							to={`$${author.fields.slug}`}
							bg="green"
							text={author.excerpt}
							signature={author.frontmatter.title}
						/>
					</TileItem>
				))}
			</Tiles>
		</Wrapper>
	);
};

Reference.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Reference;
