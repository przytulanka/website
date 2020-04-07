import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Cover, EmptyCover } from './styles';

const BioCover = ({ cover, color, className }) => {
	const { userIcon } = useStaticQuery(graphql`
		{
			userIcon: file(name: { eq: "user" }) {
				publicURL
			}
		}
	`);

	if (cover) {
		return (
			<Cover
				className={className}
				as={Img}
				fixed={cover.childImageSharp.fixed}
				draggable={false}
				bg={color}
			/>
		);
	}
	return (
		<EmptyCover className={className} bg={color} src={userIcon.publicURL} />
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
