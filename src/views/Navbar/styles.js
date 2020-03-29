import styled from 'styled-components';

export const Wrapper = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	background: ${({ theme }) => theme.color.bright};
	${({ theme }) => theme.mq.tabletMid} {
		position: absolute;
		background: ${({ theme }) => theme.background.transparentNavbar};
	}
`;

export default Wrapper;
