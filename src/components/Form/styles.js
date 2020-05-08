import styled from 'styled-components';

export const Error = styled.p`
	position: relative;
	width: 50%;
	margin-bottom: 1rem;
	padding: 1.5em;
	color: #721c24;
	background-color: #f8d7da;
	border: 1px solid transparent;
	border-color: #f5c6cb;
	border-radius: 1em;
`;

export const Succeed = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 1rem;
	padding: 3em;
	color: #155724;
	font-size: 2em;
	background-color: #d4edda;
	border: 1px solid transparent;
	border-color: #c3e6cb;
	border-radius: 0.25rem;
`;

export const SuccessLink = styled.a`
	color: inherit;
	font-size: 1.2rem;
`;

export const FormWrapper = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	max-width: 1000px;
	margin: 2em auto;
`;

export const Column = styled.div`
	width: 100%;
	max-width: 450px;
	padding: 0 0.75em 2em;
`;

export const InputWrapper = styled.p`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0;
	text-align: left;
`;

export const TextAreaWrapper = styled.p`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 450px;
	margin: 0;
	padding: 0 0.75em 2em;
	text-align: left;
`;

export const SubmitWrapper = styled.div`
	width: 100%;
`;

export const Label = styled.label`
	margin: 0 0 0.5em 1.5rem;
`;

export const Input = styled.input`
	padding: 0.75em 1.5rem;
	font-size: 1em;
	border: 3px solid ${({ theme }) => theme.color.violet};
	border-radius: 1em;
`;

export const TextArea = styled.textarea`
	height: 100%;
	padding: 0.75em 1.5rem;
	font-size: 1em;
	line-height: 2;
	border: 3px solid ${({ theme }) => theme.color.violet};
	border-radius: 1em;
`;

export const Send = styled.button`
	margin: 0 0 2em 0;
	padding: 1em 6em;
	color: ${({ theme }) => theme.color.bright};
	font: inherit;
	font-size: 0.8em;
	background: ${({ theme }) => theme.color.violet};
	border: none;
	border-radius: 1em;
	cursor: pointer;
`;
