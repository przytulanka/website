import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Title = styled.h3`
	margin-bottom: 0.3em;
	color: ${({ theme }) => theme.color.bright};
	font-weight: 600;
	font-size: 0.8em;
	text-transform: lowercase;
	text-decoration: none;
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
`;

export const ListItem = styled.li`
	margin: 0.3em 0;
	line-height: 0.85em;
`;

export const StyledLink = styled.a`
	color: ${({ theme }) => theme.color.bright};
	font-size: 0.7em;
	text-transform: lowercase;
	text-decoration: none;

	&:hover,
	&:active {
		color: ${({ theme }) => theme.color.footerActiveLink};
	}
`;
