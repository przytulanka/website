import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 4em 1rem;
	color: ${({ theme }) => theme.color.bright};
	background: ${({ theme }) => theme.color.violet};
`;

export const Container = styled.div`
	margin: 0 auto;
	font-family: Comfortaa, sans-serif;
	${({ theme }) => theme.mq.tabletMid} {
		max-width: 720px;
	}
`;

export const Text = styled.p`
	margin: 0;
	padding: 0;
	font-size: ${({ theme }) => theme.fontSize.large};
	line-height: 2;
	text-align: justify;
	text-justify: inter-word;
`;

export const Author = styled.p`
	margin: 0;
	padding: 1em 0;
	text-align: right;
`;
