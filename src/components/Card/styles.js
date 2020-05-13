import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 1.5em;
	line-height: 0;
	background: ${({ theme }) => theme.color.bright};
	border: 0.4em solid ${({ theme, bg }) => theme.color[bg]};
	border-radius: 1em;
`;

export const Title = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.large};
	line-height: 1.5;
`;

export const Subtitle = styled.span`
	display: block;
`;

export const Text = styled.div`
	margin: 0;
	padding: 0;
	line-height: 1.8;
	text-align: left;

	h3 {
		font-size: 1em;
		text-align: center;
	}

	ul {
		padding: 0 1em;
		line-height: 2;
	}
`;

export const Icon = styled.img`
	display: block;
	height: 10em;
	margin: 0 auto 2em;
`;
