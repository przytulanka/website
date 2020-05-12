import styled from 'styled-components';

export const Wrapper = styled.section`
	background: ${({ theme, bg }) => theme.background[`transparent${bg}`]};
`;

export const SliderWrapper = styled.div`
	max-width: 900px;
	margin: 0 auto;
`;
