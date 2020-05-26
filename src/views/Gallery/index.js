import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Gallery from 'components/Gallery';
import { dataFilter } from 'utils';

const GalleryView = () => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(frontmatter: { type: { eq: "pageGallery" } }) {
				frontmatter {
					gallery {
						title {
							id
							fields {
								slug
							}
							frontmatter {
								...galleryFields
							}
						}
					}
				}
			}
		}
	`);

	const gallery = dataFilter(markdownRemark, 'gallery');
	if (!gallery.length) return null;

	return (
		<>
			{gallery.map(
				({ title }) => !!title.frontmatter.images.length && (
					<Gallery
						id={title.fields.slug.substr(1)}
						key={title.fields.slug.substr(1)}
						title={title.frontmatter.title}
						color={title.frontmatter.color}
						images={title.frontmatter.images}
					/>
				),
			)}
		</>
	);
};

export default GalleryView;
