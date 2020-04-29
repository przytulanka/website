export const theme = {
	color: {
		bright: '#fff',
		dark: '#000',
		green: '#82B900',
		orange: '#F77E0B',
		pink: '#EA76AC',
		violet: '#6A1485',
		footerActiveLink: '#ccc',
	},
	background: {
		transparentNavbar: '#FFFFFFE6',
		transparentDropdown: '#82B900E6',
		transparentOrange: '#F77E0B0D',
		transparentGreen: '#82B9000D',
		transparentWhite: '#FFFFFFB5',
	},
	font: ['Open Sans', 'Comfortaa'],
	fontSize: {
		smallest: '.7em',
		small: '.8em',
		medium: '1em',
		large: '1.15em',
		largest: '1.3em',
	},
};

const bp = {
	mobileMid: 23.5,
	tablet: 37.5,
	tabletMid: 42,
	tabletBig: 56.25,
	desktop: 75,
	desktopBig: 112.5,
};

theme.mq = Object.fromEntries(
	Object.entries(bp).map(key => [key[0], `@media (min-width: ${key[1]}rem)`]),
);

export default theme;
