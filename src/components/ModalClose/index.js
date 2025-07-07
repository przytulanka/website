import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Cross } from './styles';

const ModalClose = ({ color, onClick }) => (
	<Wrapper onClick={onClick}>
		<Cross bg={color} />
	</Wrapper>
);

ModalClose.propTypes = {
	color: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default ModalClose;
