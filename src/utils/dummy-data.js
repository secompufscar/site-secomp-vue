export const events = [
  {
    id: 0,
    title: 'A vida após o smartphone',
    dateTime: new Date(2020, 8, 23, 19),
    headline: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
    content: '# Crura laticemque aequoris nunc abibo flectebat nam\n## Occidit Phineu vagatur tunc Lorem markdownum\nalis vulnus condeturque cunctis Alcyonen ille; si inopi cuperem voce. Finxit proavitaque ingens.\n\n## Hospes potuisse tuae ipse\nPraestent invito. Illos silvae patrem cura laborum percutiens quoque. Pacem **rebus dixere** fuit, esse medio docuisse simulacra videt?\n\n## Pendent sensus des tamen invadunt\nQua pavit crura quas timeto. Et veniunt Byblis: a membra dicunt frontem: tulisse vagos illa non? Celebrare inde nigrior fugit quadrupedes Iovi terris [neque](http://www.summo-ira.com/suastua.aspx) aestu est. Veros illa retro, cursum, ad manu aequales, stagnumque, domum. Inquit est rebus, cultu est pro: ulciscere numerare, me.',
  },
  {
    id: 1,
    title: 'A vida após o smartphone',
    dateTime: new Date(2020, 8, 23, 19),
    headline: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
  {
    id: 2,
    title: 'A vida após o smartphone',
    dateTime: new Date(2020, 8, 23, 19),
    headline: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
  {
    id: 3,
    title: 'Primeiros passos com o Power BI',
    dateTime: new Date(2020, 9, 27, 19),
    headline: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
  {
    id: 4,
    title: 'Primeiros passos com o Power BI',
    dateTime: new Date(2020, 9, 27, 19),
    headline: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
  {
    id: 5,
    title: 'Primeiros passos com o Power BI',
    dateTime: new Date(2020, 9, 27, 19),
    headline: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
];

export const prevEvents = events.filter((event) => event.dateTime.getTime() < Date.now());

export const nextEvents = events.filter((event) => event.dateTime.getTime() >= Date.now());
