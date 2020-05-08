function formReducer(state, action) {
	switch (action.type) {
	case 'field': {
		return {
			...state,
			[action.field]: action.value,
		};
	}
	case 'verifying': {
		return {
			...state,
			isLoading: true,
			err: '',
		};
	}
	case 'success': {
		return {
			...state,
			isLoading: false,
			err: '',
			isSend: true,
		};
	}
	case 'error': {
		return {
			...state,
			err: action.error,
			isLoading: false,
		};
	}
	default:
		break;
	}
	return state;
}

export default formReducer;
