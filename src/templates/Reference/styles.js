import styled from 'styled-components';

export const PageWrapper = styled.article`
	max-width: 1000px;
	margin: 0 auto;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 10em 1.5rem;
	}
`;

export const ModalReference = styled.article`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 2rem;
	background: rgba(0, 0, 0, 0.8);

	& > div {
		position: relative;
		max-width: 800px;
		max-height: 90vh;
		padding: 3rem;
		overflow-y: auto;
		background: ${({ theme }) => theme.color.bright};
		border-radius: 8px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
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
