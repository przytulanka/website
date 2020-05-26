import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactPlayer from 'react-player';

import Gallery from 'components/Gallery';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { dataFilter } from 'utils';
import { VideoWrapper } from './styles';

const GalleryView = () => {
	const { video, galleries } = useStaticQuery(graphql`
		{
			video: markdownRemark(frontmatter: { type: { eq: "pageVideo" } }) {
				frontmatter {
					title
					color
					to
				}
			}
			galleries: markdownRemark(frontmatter: { type: { eq: "pageGallery" } }) {
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

	const gallery = dataFilter(galleries, 'gallery');
	if (!gallery.length) return null;
	const { title: videoTitle, color, to } = video.frontmatter;
	return (
		<>
			{!!to && (
				<SectionWrapper id="spacer">
					<SectionTitle bg={color}>{videoTitle}</SectionTitle>
					<VideoWrapper
						as={ReactPlayer}
						url={to}
						playing
						controls
						width="auto"
						height="auto"
					/>
				</SectionWrapper>
			)}
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
