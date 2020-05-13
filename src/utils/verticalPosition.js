function verticalPosition(element, offset) {
	const el = document.querySelector(element);
	const actualPos = window.pageYOffset;
	const destPosition = actualPos + el.getBoundingClientRect().top - offset;
	return destPosition;
}

export default verticalPosition;
