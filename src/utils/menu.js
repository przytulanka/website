module.exports = [
	{
		title: 'oferta',
		to: '/oferta/',
	},
	{
		title: 'plan dnia',
		to: '/grupy_i_plan_dnia/',
	},
	{
		title: 'galeria',
		to: '/galeria/',
		subMenu: [], // zostawiamy – Gatsby dokleja dynamiczne pozycje galerii
	},
	{
		title: 'o nas',
		to: '/o_nas/',
		subMenu: [
			{ title: 'opowiadanie o Przytulance', to: '/o_nas/#story' },
			{ title: 'rodzice o Przytulance', to: '/o_nas/#reference' },
			{ title: 'kadra', to: '/#crew' },
			{ title: 'statut', to: '/statut_przedszkola_przytulanka/' },
			{ title: 'regulamin', to: '/regulamin_przedszkola_przytulanka/' },
		],
	},
	{
		title: 'kontakt',
		to: '/kontakt/',
		subMenu: [{ title: 'dane przedszkola', to: '/#contact' }],
	},
];
