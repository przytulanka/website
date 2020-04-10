import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 2em;
	line-height: 0;
	border: 0.4em solid ${({ theme, bg }) => theme.color[bg]};
	border-radius: 1em;
`;

export const Text = styled.div`
	margin: 0;
	padding: 0;
	line-height: 1.8;
	text-align: justify;
`;

export const Icon = styled.img`
	display: block;
	height: 10em;
	margin: 0 auto 2em;
`;
