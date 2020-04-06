import styled from 'styled-components';

export const MenuList = styled.ul`
	height: 100vh;
	margin: 0;
	padding: 0.1em 0;
	color: ${({ theme }) => theme.color.dark};
	text-align: center;
	list-style: none;
	background: ${({ theme }) => theme.background.transparentDropdown};
`;

export const MenuItem = styled.li`
	position: relative;

	&:active,
	&:hover,
	&:focus {
		background: ${({ theme }) => theme.color.bright};

		& > ul {
			display: block;
			visibility: visible;
			opacity: 1;
		}
	}
`;

export const MenuLink = styled.a`
	display: block;
	margin: 0;
	padding: 1.1em 0;
	color: inherit;
	font: inherit;
	font-size: 1em;
	text-transform: lowercase;
	text-decoration: none;
	background: inherit;
	border: none;
	cursor: pointer;
`;
