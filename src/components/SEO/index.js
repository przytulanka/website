import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, pathname, article }) => {
	const { site, image, comfortaa } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl: url
        }
      }
      image: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
      comfortaa: file(
        relativePath: { eq: "comfortaa-v28-latin-ext_latin-regular.woff2" }
      ) {
        publicURL
      }
    }
  `);

	const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		titleTemplate: '%s | Przytulanka',
		description: description || defaultDescription,
		image: `${siteUrl}${image.publicURL}`,
		url: `${siteUrl}${pathname || '/'}`,
		type: article ? 'article' : 'website',
		html: {
			lang: 'pl-PL',
		},
	};

	return (
		<Helmet
			title={seo.title}
			titleTemplate={seo.titleTemplate}
			htmlAttributes={seo.html}
		>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:type" content={seo.type} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<link
				rel="preload"
				as="font"
				type="font/woff2"
				href={comfortaa.publicURL}
				crossOrigin
			/>
			<link
				rel="stylesheet"
				href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
				integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
				crossOrigin=""
			/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
				integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A=="
				crossOrigin="anonymous"
			/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
				integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw=="
				crossOrigin="anonymous"
			/>
		</Helmet>
	);
};
export default SEO;

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	pathname: PropTypes.string,
	article: PropTypes.bool,
};

SEO.defaultProps = {
	title: null,
	description: null,
	pathname: null,
	article: false,
};
