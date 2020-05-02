import styled from 'styled-components';

export const Wrapper = styled.section`
	background: ${({ theme, bg }) => theme.background[`transparent${bg}`]};
`;

export const SliderImage = styled.div`
	max-width: 1000px;
	height: 15em;
	margin: 3em 0 0;
	border-radius: 5px;
	cursor: pointer;

	${({ theme }) => theme.mq.tabletMid} {
		height: 75vh;
	}
`;
