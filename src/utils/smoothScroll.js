const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

function position(start, end, elapsed, duration) {
	const speed = easeInOutCubic(elapsed / duration);
	return start + (end - start) * speed;
}

function smoothScroll(to, offset, duration) {
	const start = window.pageYOffset;
	const end = to + start - offset;
	const clock = Date.now();
	function step() {
		const elapsed = Date.now() - clock;
		window.scroll(0, position(start, end, elapsed, duration));

		if (elapsed < duration) window.requestAnimationFrame(step);
	}
	step();
}

export default smoothScroll;
