import React from 'react';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { uppercaseFirstChar } from 'utils';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { Wrapper, SliderImage } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'assets/styles/slick.css';

const Gallery = ({ id, title, color, images }) => {
	const sliderSettings = {
		dots: true,
		arrows: false,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: 30,
	};

	return (
		<Wrapper as={SectionWrapper} id={id} bg={uppercaseFirstChar(color)}>
			<SectionTitle bg={color}>{title}</SectionTitle>
			<Slider
				dots={sliderSettings.dots}
				infinite={sliderSettings.infinite}
				arrows={sliderSettings.arrows}
				fade={sliderSettings.fade}
			>
				{images.map(image => (
					<SliderImage
						as={Img}
						fluid={image.childImageSharp.fluid}
						key={image.id}
					/>
				))}
			</Slider>
		</Wrapper>
	);
};

Gallery.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
