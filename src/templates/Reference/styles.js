import styled from 'styled-components';

export const PageWrapper = styled.article`
	max-width: 1000px;
	margin: 0 auto;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 10em 1.5rem;
	}
`;

export const Wrapper = styled.article`
	padding: 6em 3em;
`;

export const Signature = styled.h2`
	font-size: 1em;
	font-family: Comfortaa, sans-serif;
	text-align: right;
`;
