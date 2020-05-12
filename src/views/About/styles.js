import styled from 'styled-components';

export const Wrapper = styled.section`
	background: ${({ theme, bg }) => theme.background[`transparent${bg}`]};
`;

export const StyledText = styled.p`
	max-width: 900px;
	margin: 2em auto;
`;

export const SliderWrapper = styled.div`
	max-width: 600px;
	margin: 4em auto 0;
`;
