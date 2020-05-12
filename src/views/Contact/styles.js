import styled from 'styled-components';

export const Wrapper = styled.section`
	background: ${({ theme, bg }) => theme.background[`transparent${bg}`]};
`;

export const StyledText = styled.p`
	max-width: 900px;
	margin: 2em auto;
	text-align: center;
`;

export const StyledMap = styled.div`
	width: 100%;
	height: 200px;
	background: black;
	${({ theme }) => theme.mq.tabletMid} {
		height: 400px;
	}
`;
