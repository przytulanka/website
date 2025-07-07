import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	max-width: 1000px;
	margin: 0 auto;
	padding: 1.5em;
	line-height: 0;
	background: ${({ theme }) => theme.color.bright};
	border: 5px solid ${({ theme, bg }) => theme.color[bg]};

	&::before,
	&::after {
		position: absolute;
		border: 5px solid;
		content: '';
	}

	&::before {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-color: ${({ theme }) => theme.color.green};
	}

	&::after {
		top: -10px;
		right: -10px;
		bottom: -10px;
		left: -10px;
		border-color: ${({ theme }) => theme.color.violet};
		border-radius: 0.5em;
	}
`;

export const Text = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 0;
	line-height: 1.8;
	text-align: center;

	h3 {
		margin: 2em 0;
	}

	ul {
		margin: 0;
		padding: 0;
		text-align: left;
		list-style-type: none;

		li {
			display: flex;
			align-items: center;
			margin: 0 0 1.5em;

			&::before {
				min-width: 50px;
				height: 50px;
				background: url(${({ icon }) => icon}) no-repeat left top;
				content: '';
			}
		}
	}
`;
