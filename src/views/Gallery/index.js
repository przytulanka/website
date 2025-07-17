import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Gallery from 'components/Gallery';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { dataFilter } from 'utils';
import { VideoWrapper } from './styles';

const GalleryView = () => {
	const [ReactPlayer, setReactPlayer] = useState(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			import('react-player').then(module => {
				setReactPlayer(() => module.default);
			});
		}
	}, []);
	const { galleries } = useStaticQuery(graphql`
    {
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
	return (
		<>
			{gallery.map(({ title }) => {
				if (title.frontmatter?.images?.length) {
					return (
						<Gallery
							id={title.fields.slug.substr(1)}
							key={title.fields.slug.substr(1)}
							title={title.frontmatter.title}
							color={title.frontmatter.color}
							images={title.frontmatter.images}
						/>
					);
				}

				if (title.frontmatter?.to) {
					return (
						<SectionWrapper
							id={title.fields.slug.substr(1)}
							key={title.fields.slug.substr(1)}
						>
							<SectionTitle bg={title.frontmatter.color}>
								{title.frontmatter.title}
							</SectionTitle>
							<VideoWrapper
								as={ReactPlayer}
								url={title.frontmatter.to}
								playing
								controls
								width="auto"
								height="auto"
							/>
						</SectionWrapper>
					);
				}

				return null;
			})}
		</>
	);
};

export default GalleryView;
