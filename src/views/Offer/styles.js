import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 2em;
	line-height: 0;
	border: 0.4em solid ${({ theme, bg }) => theme.color[bg]};
	border-radius: 1em;
`;

export const Text = styled.div`
	margin: 0;
	padding: 0;
	line-height: 1.8;
	text-align: center;
`;
