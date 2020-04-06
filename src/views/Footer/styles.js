import styled from 'styled-components';

export const Container = styled.footer`
	color: ${({ theme }) => theme.color.dark};
	background: ${({ theme }) => theme.color.violet};
`;

export const Wrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 2em 0;
	${({ theme }) => theme.mq.desktop} {
		display: flex;
		justify-content: center;
		padding: 2em 3em;
	}
`;

export const StyledMenu = styled.nav`
	display: none;
	${({ theme }) => theme.mq.desktop} {
		display: flex;
		flex: 1;
		justify-content: center;
	}
`;

export const StyledLogo = styled.div`
	display: none;
	${({ theme }) => theme.mq.desktop} {
		display: block;
		font-size: 5em;
	}
`;

export const StyledSocials = styled.div`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Copyright = styled.p`
	width: 100%;
	margin: 0 auto;
	padding: 0.5em 0.5rem;
	color: ${({ theme }) => theme.color.bright};
	font-size: 0.7em;
	line-height: 2;
	text-align: center;
	background: ${({ theme }) => theme.color.green};
`;
