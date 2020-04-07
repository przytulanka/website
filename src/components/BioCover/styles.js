import styled from 'styled-components';

export const Cover = styled.div`
	flex-shrink: 0;
	max-width: 12.5em;
	max-height: 12.5em;
	border: 5px solid ${({ theme, bg }) => theme.color[bg]};
	border-radius: 50%;
	box-shadow: 0 3px 10px -4px ${({ theme }) => theme.color.dark};
`;

export const EmptyCover = styled.img`
	flex-shrink: 0;
	width: 12.5em;
	height: 12.5em;
	padding: 0.5em;
	background: #ccc;
	border: 5px solid ${({ theme, bg }) => theme.color[bg]};
	border-radius: 50%;
	box-shadow: 0 3px 10px -4px ${({ theme }) => theme.color.dark};
`;
