/* eslint react/jsx-props-no-spreading:0 */
import React from 'react';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import settings from './settings';

import { SliderImage } from './styles';

const Slick = ({ images, className, type }) => (
	<Slider {...settings[type]} className={className}>
		{images.map(image => (
			<SliderImage
				as={Img}
				fluid={image.childImageSharp.fluid}
				key={image.id}
			/>
		))}
	</Slider>
);

Slick.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Slick.defaultProps = {
	className: null,
};

export default Slick;
