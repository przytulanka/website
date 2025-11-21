module.exports = [
  {
    title: 'tak działamy',
    to: '!',
    subMenu: [
      { title: 'oferta',     to: '/oferta/' },
      { title: 'plan dnia',  to: '/grupy_i_plan_dnia/' },
      { title: 'kadra',      to: '/#crew' },
      { title: 'statut',     to: '/statut_przedszkola_przytulanka/' },
      { title: 'regulamin',  to: '/regulamin_przedszkola_przytulanka/' },
    ],
  },
  {
  title: 'o nas',
  to: '/o_nas/',
  subMenu: [
    { title: 'Opowiadanie o Przytulance', to: '/o_nas/#story' },
    { title: 'Rodzice o Przytulance', to: '/o_nas/#reference' },
  ],
  },

  {
    title: 'galeria',
    to: '/galeria/',
    subMenu: [], // puste – gatsby-node doklei dynamiczne pozycje galerii
  },
  {
    title: 'kontakt',
    to: '/kontakt/',
    subMenu: [
      { title: 'dane przedszkola', to: '/#contact' },
    ],
  },
];
