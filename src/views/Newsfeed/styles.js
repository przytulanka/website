import styled from 'styled-components';

export const Wrapper = styled.section`
	background: ${({ theme, bg }) => theme.background[`transparent${bg}`]};
`;

export const SliderWrapper = styled.div`
	max-width: 900px;
	margin: 0 auto;
`;

export const PosterLink = styled.a`
	display: block;
	margin-bottom: 2em;
	overflow: hidden;
	border-radius: 5px;
	cursor: pointer;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.9;
	}
`;
