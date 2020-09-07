import styled from 'styled-components';

export const Wrapper = styled.section`
	background: ${({ theme, bg }) => theme.background[`transparent${bg}`]};
`;

export const StyledText = styled.div`
	max-width: 900px;
	margin: 2em auto;
	text-align: center;
`;

export const MapWrapper = styled.div`
	position: relative;
	height: 400px;
	max-height: 40vh;
`;

export const StyledMap = styled.div`
	z-index: 1;
	width: 100%;
	height: 100%;
`;
