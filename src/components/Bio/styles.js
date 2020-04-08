import styled from 'styled-components';

export const Wrapper = styled.article`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2em 2em;
`;

export const Title = styled.h2`
	font-size: 1.7em;
	font-family: Comfortaa, sans-serif;
	text-align: center;
`;

export const StyledCover = styled.div`
	max-width: 13em;
	max-height: 13em;
	border: none;
`;

export const StyledText = styled.p`
	flex: 1 20em;
	margin: 0;

	p {
		margin: 0 0 2em;
	}
	${({ theme }) => theme.mq.tablet} {
		margin: 0 2em;
	}
`;
