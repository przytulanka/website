module.exports = [
  // index 0 (prawa kolumna, po lewej)
  {
    title: 'galeria',
    to: '/galeria/',
  },

  // index 1 (lewa kolumna – pojawia się jako 1. pozycja)
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

  // index 2 (prawa kolumna – pojawi się po „galeria”)
  {
    title: 'kontakt',
    to: '/#contact',
    // UWAGA: brak subMenu – musi go nie być, inaczej komponent potraktuje to jak dropdown
  },

  // index 3 (lewa kolumna – pojawi się jako 2. pozycja)
  {
    title: 'o nas',
    to: '/o_nas/',
    subMenu: [
      { title: 'opowiadanie o Przytulance', to: '/o_nas/#story' },
    ],
  },
];
