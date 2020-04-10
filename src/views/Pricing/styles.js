import styled from 'styled-components';

export const Wrapper = styled.div`
	background: ${({ theme }) => theme.background.transparentGreen};
`;

export const PricingList = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	max-width: 900px;
	margin: 0 auto;
	padding: 0;
	list-style: none;
`;

export const PricingItem = styled.li`
	margin: 3em 1.5em 0;
`;

export const Title = styled.h3`
	margin: 0 0 2em;
	font-size: ${({ theme }) => theme.fontSize.large};
`;

export const Text = styled.div`
	margin: 0;
	padding: 0;
	line-height: 1.5;

	ul {
		padding: 0;
		list-style: none;
	}

	li {
		margin: 0 0 1.3em;

		&::before {
			content: '- ';
		}
	}
`;
