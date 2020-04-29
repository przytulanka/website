import styled from 'styled-components';

export const Wrapper = styled.div`
	display: block;
	max-width: 25em;
	padding: 2em;
	color: ${({ theme }) => theme.color.dark};
	text-decoration: none;
	background: ${({ theme }) => theme.background.transparentNavbar};
	border: 0.4em solid ${({ bg, theme }) => theme.color[bg]};
	border-radius: 1em;
	cursor: pointer;
	transition:
		transform 0.2s ease-in-out,
		color 0.2s ease-in-out,
		background 0.2s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.color.bright};
		background: ${({ theme }) => theme.color.green};
		transform: scale(1.05);
	}
`;

export const Text = styled.p`
	margin: 0;
	padding: 0;
	text-align: center;
`;

export const Signature = styled.p`
	margin: 2em 0 0;
`;
