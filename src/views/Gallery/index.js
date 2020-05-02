import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Gallery from 'components/Gallery';

const GalleryView = () => {
	const { building, rooms, playground } = useStaticQuery(graphql`
		{
			building: markdownRemark(
				frontmatter: { type: { eq: "pageGallery" }, title: { eq: "Budynek" } }
			) {
				frontmatter {
					...galleryFields
				}
			}
			rooms: markdownRemark(
				frontmatter: { type: { eq: "pageGallery" }, title: { eq: "Sale" } }
			) {
				frontmatter {
					...galleryFields
				}
			}
			playground: markdownRemark(
				frontmatter: {
					type: { eq: "pageGallery" }
					title: { eq: "Plac zabaw" }
				}
			) {
				frontmatter {
					...galleryFields
				}
			}
		}
	`);

	return (
		<>
			{!!building.frontmatter.images.length && (
				<Gallery
					id="budynek"
					title={building.frontmatter.title}
					color={building.frontmatter.color}
					images={building.frontmatter.images}
				/>
			)}
			{!!rooms.frontmatter.images.length && (
				<Gallery
					id="sale"
					title={rooms.frontmatter.title}
					color={rooms.frontmatter.color}
					images={rooms.frontmatter.images}
				/>
			)}
			{!!playground.frontmatter.images.length && (
				<Gallery
					id="placzabaw"
					title={playground.frontmatter.title}
					color={playground.frontmatter.color}
					images={playground.frontmatter.images}
				/>
			)}
		</>
	);
};

export default GalleryView;
