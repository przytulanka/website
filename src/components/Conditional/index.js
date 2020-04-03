import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { DisabledLink } from './styles';

const ConditionalLink = ({ to, className, children, click }) => {
	const firstChar = to && to.slice(0, 1);

	// disable link
	if (firstChar === '!') return <DisabledLink className={className}>{children}</DisabledLink>;

	// Gatsby Link
	if (firstChar === '/') {
		return (
			<Link onClick={click} to={to} className={className}>
				{children}
			</Link>
		);
	}

	// default outer link
	return (
		<a
			onClick={click}
			href={to}
			className={className}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
};

ConditionalLink.propTypes = {
	to: PropTypes.string.isRequired,
	click: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node,
};

ConditionalLink.defaultProps = {
	click: null,
	className: null,
	children: null,
};

export default ConditionalLink;
