import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'components/Slider';
import { uppercaseFirstChar } from 'utils';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { Wrapper, SliderImage } from './styles';

const Gallery = ({ id, title, color, images }) => (
	<Wrapper as={SectionWrapper} id={id} bg={uppercaseFirstChar(color)}>
		<SectionTitle bg={color}>{title}</SectionTitle>
		<SliderImage>
			<Slider images={images} type="about" />
		</SliderImage>
	</Wrapper>
);

Gallery.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
