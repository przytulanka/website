import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 2em 0;
	padding: 0 1em;
	font-size: 1em;
	border: 0.25em solid;
	border-color: ${({ theme, bg }) => theme.color[bg]};
	border-radius: 1em;
	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

	&:hover {
		color: ${({ theme, isOpen }) => !isOpen && theme.color.bright};
		background-color: ${({ theme, bg, isOpen }) => !isOpen && theme.color[bg]};
	}
`;

export const Title = styled.h3`
	font-size: 1.2em;
	margin: 0;
	padding: 1em 0;
	text-align: center;
	position: relative;
	cursor: pointer;
	${({ theme, isOpen }) => isOpen
		&& `
		::after {
		content: '';
		position: absolute;
		background-color: ${theme.color.green};
		height: 3px;
		width: 50%;
		margin: 0 auto;
		left: 0;
		right: 0;
		bottom: 0;
	}
	`}
`;

export const Text = styled.div`
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	margin: 0;
	padding: 2em 0;
	line-height: 2;
	text-align: left;

	ul,
	ol {
		padding-left: 1.5em;
	}

	li {
		p {
			display: inline;
		}
	}
`;
