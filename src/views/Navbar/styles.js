import styled from 'styled-components';

export const Wrapper = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1000;
	background: ${({ theme }) => theme.color.bright};
	${({ theme }) => theme.mq.tabletMid} {
		position: absolute;
		background: ${({ theme }) => theme.background.transparentNavbar};
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 90rem;
	margin: 0 auto;
	padding: 1rem;
`;

export const StyledLogo = styled.div`
	display: block;
	width: 6em;
	${({ theme }) => theme.mq.tabletMid} {
		width: 12em;
	}
`;

export const StyledMenu = styled.nav`
	display: none;
	${({ theme }) => theme.mq.tabletMid} {
		display: block;
		flex: 1;
		max-width: 900px;
	}
`;

export const StyledBurger = styled.button`
	width: 3em;
	height: 3em;
	${({ theme }) => theme.mq.tabletMid} {
		display: none;
	}
`;

export const BurgerMenu = styled.nav`
	position: absolute;
	top: 100%;
	right: 0;
	left: 0;
	height: 100vh;
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	transition:
		opacity 0.35s ease-out,
		visibility 0.35s;
	will-change: opacity;
`;

export default Wrapper;
