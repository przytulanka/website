import styled from 'styled-components';
import dance from 'assets/images/dance-83478_1280.jpg';
import children from 'assets/images/children-picture-838372_1280.jpg';

export const Background = styled.div`
	position: relative;
	max-width: 900px;
	margin: 0 auto;

	&::before,
	&::after {
		position: absolute;
		top: 0;
		z-index: -1;
		display: block;
		width: 350px;
		height: 500px;
		background-repeat: no-repeat;
		background-size: contain;
		content: '';
	}

	&::before {
		left: 0;
		background-image: url(${dance});
		transform: rotate(-12.5deg) translateX(-25%);
	}

	&::after {
		right: 0;
		display: none;
		background-image: url(${children});
		transform: rotate(12.5deg) translate(25%, 25%);
	}

	${({ theme }) => theme.mq.tabletMid} {
		&::after {
			display: block;
		}
	}
`;

export const Content = styled.div`
	max-width: 800px;
	padding: 0.75rem;
	background: ${({ theme }) => theme.background.transparentWhite};
	${({ theme }) => theme.mq.tabletMid} {
		padding: 3rem;
	}
`;

export default Content;
