import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Cover, Image, NoImage } from './styles';

const BioCover = ({ cover, color, className }) => {
	const { userIcon } = useStaticQuery(graphql`
    {
      userIcon: file(name: { eq: "user" }) {
        publicURL
      }
    }
  `);

	return (
		<Cover className={className} bg={color}>
			{cover ? (
				<Image as={Img} fixed={cover.childImageSharp.fixed} draggable={false} />
			) : (
				<NoImage className={className} src={userIcon.publicURL} />
			)}
		</Cover>
	);
};

BioCover.propTypes = {
	cover: PropTypes.shape(),
	color: PropTypes.string,
	className: PropTypes.string,
};

BioCover.defaultProps = {
	color: null,
	cover: null,
	className: null,
};

export default BioCover;
