import styled from 'styled-components';

export const ModalBio = styled.article`
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

export const PageBio = styled.article`
	max-width: 1000px;
	margin: 0 auto;
	padding: 6em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 10em 1.5rem;
	}
`;
