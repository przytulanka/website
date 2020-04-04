import styled from 'styled-components';

export const DropdownList = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 2;
	display: none;
	width: 100%;
	padding: 1rem 0;
	list-style: none;
	background: ${({ theme }) => theme.background.transparentDropdown};
	visibility: hidden;
	opacity: 0;
`;

export const DropdownItem = styled.li`
	&:hover {
		background: ${({ theme }) => theme.background.transparentNavbar};
	}
`;

export const DropdownLink = styled.a`
	display: block;
	padding: 1em 1.25em;
	color: ${({ theme }) => theme.color.dark};
	font-size: 0.8em;
	text-align: left;
	text-transform: lowercase;
	text-decoration: none;

	${({ theme }) => theme.mq.tabletBig} {
		padding: 1em 1.5em;
		font-size: 1em;
	}
`;
