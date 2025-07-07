import styled from 'styled-components';

export const Cover = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 200px;
	min-height: 200px;
	border: 5px solid ${({ theme, bg }) => theme.color[bg]};
	border-radius: 50%;
	transition: transform 0.2s ease-in;
	will-change: transform;

	&:hover {
		transform: scale(1.1);
	}

	&::before,
	&::after {
		position: absolute;
		top: -5px;
		right: -5px;
		bottom: -5px;
		left: -5px;
		z-index: -1;
		padding: 5px;
		border-radius: 50%;
		transition: opacity 0.2s ease-in;
		content: '';
		will-change: opacity, transform;
	}

	&::before {
		box-shadow: 0 3px 10px -4px ${({ theme }) => theme.color.dark};
		opacity: 1;
	}

	&::after {
		box-shadow: 0 20px 30px -20px ${({ theme }) => theme.color.dark};
		opacity: 0;
	}

	&:hover::after {
		opacity: 1;
	}

	&:hover::before {
		opacity: 0;
	}
`;

export const Image = styled.div`
	border-radius: 50%;
	will-change: transform;
`;

export const NoImage = styled.img`
	width: 12.5em;
	height: 12.5em;
	padding: 0.5em;
	background: #ccc;
	border-radius: 50%;
`;
