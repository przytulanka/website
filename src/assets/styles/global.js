import { createGlobalStyle } from 'styled-components';
import fall from 'assets/images/fall.jpg';
import winter from 'assets/images/winter.jpg';
import spring from 'assets/images/spring.jpg';
import summer from 'assets/images/summer.jpg';

const GlobalStyle = createGlobalStyle`
html {
	box-sizing: border-box;
	font-family: 'Open Sans', sans-serif;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}

body {
	position: relative;
	margin: 0;
}

body::before {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -1;
	background-size: 100%;
	opacity: 0.2;
	content: '';
}

.spring::before {
	background-image: url(${spring});
}

.summer::before {
	background-image: url(${summer});
	opacity: 0.05;
}

.fall::before {
	background-image: url(${fall});
}

.winter::before {
	background-image: url(${winter});
}

.ReactModal__Html--open,
.ReactModal__Body--open {
	overflow-y: hidden;
}

.ReactModal__Overlay {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	margin: 0 auto;
	background-color: rgba(0, 0, 0, 0.75);
}

.ReactModal__Content {
	position: absolute;
	top: 50%;
	right: 0;
	left: 0;
	max-width: 1000px;
	min-height: 320px;
	max-height: 90vh;
	margin: 0 auto;
	overflow: auto;
	background: #fff;
	border-radius: 30px;
	outline: none;
	transform: translateY(-50%);
	-webkit-overflow-scrolling: touch;
}

.slick-slide {
	padding: 0 20px;
}

.slick-next {
	right: -30px !important;
	width: 30px !important;
	height: 30px !important;
}

.slick-prev {
	left: -30px !important;
	width: 30px !important;
	height: 30px !important;
}

.slick-next::before,
.slick-prev::before {
	color: #f77e0b !important;
	font-size: 30px !important;
}

.slick-dots > li > button::before,
.slick-dots li.slick-active button::before {
	color: #f77e0b !important;
	font-size: 10px !important;
}

`;

export default GlobalStyle;
