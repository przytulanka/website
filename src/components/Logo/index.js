import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { LogoWrapper, LogoImg } from './styles';

const Logo = ({ to, image, alt, className }) => (
	<LogoWrapper as={to && ConditionalLink} to={to} className={className}>
		{image && <LogoImg src={image} alt={alt} />}
	</LogoWrapper>
);

Logo.propTypes = {
	to: PropTypes.string,
	image: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
};

Logo.defaultProps = {
	to: null,
	image: null,
	alt: 'Przedszkole Przytulanka - strona główna',
	className: null,
};

export default Logo;
