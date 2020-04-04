import styled from 'styled-components';

export const Wrapper = styled.nav`
	font-family: Comfortaa, sans-serif;
`;

export const MenuList = styled.ul`
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;
	font-size: 1em;
	text-decoration: none;
	list-style: none;
`;

export const MenuItem = styled.li`
	position: relative;
	flex: 1;

	/* code needs to be repeated cause of an IE bug */
	&:hover {
		background: ${({ theme }) => theme.background.transparentDropdown};

		& > ul {
			display: block;
			visibility: visible;
			opacity: 1;
		}
	}
`;

export const MenuHeader = styled.span`
	display: block;
	padding: 1.5em 0;
	color: ${({ theme }) => theme.color.dark};
	text-align: center;
	text-transform: lowercase;
	text-decoration: none;
`;
