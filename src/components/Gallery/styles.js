import styled from 'styled-components';

export const Wrapper = styled.section`
	background: ${({ theme, bg }) => theme.background[`transparent${bg}`]};
`;

export const SliderImage = styled.div`
	max-width: 1000px;
	margin: 2em auto 0;
`;
