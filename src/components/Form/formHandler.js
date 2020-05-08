function encode(data) {
	return Object.keys(data)
		.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
		.join('&');
}

async function formHandler({ name, email, phone, msg, botField }) {
	if (typeof window === 'undefined') return false;
	return new Promise((resolve, reject) => {
		if (!name) {
			reject(new Error('Wpisz imię i nazwisko'));
		} else if (!email) {
			reject(new Error('Wpisz adres email'));
		} else if (!msg) {
			reject(new Error('Wpisz wiadomość'));
		} else {
			const xhr = new window.XMLHttpRequest();

			xhr.open('POST', '', true);

			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			xhr.onreadystatechange = () => {
				if (xhr.status === 200) {
					resolve();
				} else {
					reject(new Error('Niestety nie udało się wysłać'));
				}
			};

			xhr.send(
				encode({
					'form-name': 'contact',
					name,
					email,
					phone,
					msg,
					botField,
				}),
			);
		}
	});
}

export default formHandler;
