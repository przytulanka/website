import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
`;

export const SocialItem = styled.a`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	margin: 0 1em;
	color: ${({ theme }) => theme.color.bright};
	text-align: center;
	text-decoration: none;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

export const Icon = styled.img`
	width: 2em;
	height: 2em;
	${({ theme }) => theme.mq.tabletMid} {
		width: 3.5em;
		height: 3.5em;
	}
`;

export const Text = styled.p`
	max-width: 15em;
	margin: 0;
	color: ${({ theme }) => theme.color.bright};
	font-size: 0.6em;
	line-height: 1.5em;
	white-space: pre-wrap;
	text-decoration: none;
	word-break: break-word;
	${({ theme }) => theme.mq.tabletMid} {
		font-size: 0.8em;
	}
`;
