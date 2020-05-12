const settings = {
	newsfeed: {
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 4000,
		cssEase: 'ease-in',
	},

	about: {
		dots: true,
		lazyLoad: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					arrows: false,
				},
			},
		],
	},
};

export default settings;
