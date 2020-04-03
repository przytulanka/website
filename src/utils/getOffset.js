function getOffset(offsetElementName) {
	const offsetElement = document.querySelector(offsetElementName);
	if (!offsetElement) return 0;

	const style = window.getComputedStyle(offsetElement).position;
	if (style !== 'fixed' && style !== 'sticky') return 0;

	const offset = offsetElement.offsetHeight;
	return offset;
}

export default getOffset;
