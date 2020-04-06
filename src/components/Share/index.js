import styled from 'styled-components';

export const SectionWrapper = styled.section`
	position: relative;
	padding: 4em 0.75rem;
	overflow: hidden;
	text-align: center;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 1.5rem;
	}

	:first-of-type {
		padding: 8em 0.75rem 6em;
		${({ theme }) => theme.mq.tabletMid} {
			padding: 10em 1.5rem 8em;
		}
	}
`;

export const SectionTitle = styled.h2`
	display: inline-block;
	margin: 0 auto 2em;
	padding: 1em 2em;
	color: ${({ theme }) => theme.color.bright};
	font-size: ${({ theme }) => theme.fontSize.large};
	font-family: Comfortaa, sans-serif;
	text-align: center;
	background: ${({ bg, theme }) => theme.color[bg]};
	border-radius: 1em;
`;

export const SectionText = styled.p`
	margin: 0 auto;
	padding: 0;
	font-weight: 400;
	font-size: 1em;
	line-height: 2;
	text-align: justify;
	text-justify: inter-word;
	word-break: break-word;
`;
