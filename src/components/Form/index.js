import React, { useReducer } from 'react';
import { Link } from 'gatsby';

import formHandler from './formHandler';
import formReducer from './reducer';
import initialState from './state';
import {
	FormWrapper,
	InputWrapper,
	SubmitWrapper,
	Error,
	Succeed,
	SuccessLink,
	Column,
	Label,
	Input,
	TextArea,
	Send,
	TextAreaWrapper,
} from './styles';

const Form = () => {
	const [state, dispatch] = useReducer(formReducer, initialState);
	const { name, email, phone, msg, isLoading, err, isSend, botField } = state;

	const onSubmit = async e => {
		e.preventDefault();
		dispatch({ type: 'verifying' });
		try {
			await formHandler(state);
			dispatch({ type: 'success' });
		} catch (error) {
			dispatch({
				type: 'error',
				error: error.message,
			});
		}
	};

	const onChange = e => {
		dispatch({
			type: 'field',
			field: e.target.name,
			value: e.currentTarget.value,
		});
	};

	if (isSend) {
		return (
			<Succeed>
				<p>Wysłano pomyślnie!</p>
				<SuccessLink as={Link} to="/">
					Wróć do głównej
				</SuccessLink>
			</Succeed>
		);
	}
	return (
		<FormWrapper
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="botField"
			onSubmit={onSubmit}
		>
			<input type="hidden" name="form-name" value="contact" />
			<p hidden>
				<Label htmlFor="botField"> Don’t fill this out: </Label>
				<Input
					name="botField"
					value={botField}
					onChange={onChange}
					id="botField"
				/>
			</p>
			<Column>
				<InputWrapper>
					<Label htmlFor="name"> imię i nazwisko* </Label>
					<Input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={onChange}
						requied
					/>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="email"> e-mail* </Label>
					<Input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={onChange}
						requied
					/>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="phone"> telefon </Label>
					<Input
						type="text"
						name="phone"
						id="phone"
						value={phone}
						onChange={onChange}
					/>
				</InputWrapper>
			</Column>
			<TextAreaWrapper>
				<Label htmlFor="text"> treść wiadomości* </Label>
				<TextArea
					id="text"
					name="msg"
					cols="2"
					rows="5"
					value={msg}
					onChange={onChange}
				/>
			</TextAreaWrapper>
			{err && <Error>{err}</Error>}
			<SubmitWrapper>
				<Send name="wyślij" type="submit">
					{isLoading ? 'Wysyłam' : 'wyślij wiadomość'}
				</Send>
			</SubmitWrapper>
		</FormWrapper>
	);
};

export default Form;
