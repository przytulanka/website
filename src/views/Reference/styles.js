import styled from 'styled-components';
import family from 'assets/images/family-879432_1280.jpg';
import flowers from 'assets/images/flowers-3311082_1280.jpg';

export const Wrapper = styled.div`
	padding: 0 0.75rem 6em;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 0 1.5rem 8em;
	}
`;

export const Tiles = styled.ul`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0;
	list-style: none;

	::before,
	::after {
		position: absolute;
		z-index: -1;
		display: block;
		width: 500px;
		height: 500px;
		background-repeat: no-repeat;
		background-size: contain;
		content: '';
	}

	::before {
		top: 0;
		left: 0;
		background-image: url(${flowers});
		transform: rotate(22.5deg) translate(0, 0);
	}

	::after {
		right: 0;
		bottom: 0;
		display: none;
		background-image: url(${family});
		transform: rotate(-22.5deg) translate(-25%, 75%);
	}

	${({ theme }) => theme.mq.tabletMid} {
		::after {
			display: block;
		}
	}
`;

export const TileItem = styled.li`
	margin: 2em 0;
	${({ theme }) => theme.mq.tablet} {
		margin: 1em;
	}
	${({ theme }) => theme.mq.desktop} {
		margin: 3em;
	}
`;
