export const events = [
  {
    id: 0,
    title: 'A vida após o smartphone',
    dateTime: new Date(2020, 8, 23, 19),
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
  {
    id: 1,
    title: 'A vida após o smartphone',
    dateTime: new Date(2020, 8, 23, 19),
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
  {
    id: 2,
    title: 'A vida após o smartphone',
    dateTime: new Date(2020, 8, 23, 19),
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
  {
    id: 3,
    title: 'Primeiros passos com o Power BI',
    dateTime: new Date(2020, 9, 27, 19),
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
  {
    id: 4,
    title: 'Primeiros passos com o Power BI',
    dateTime: new Date(2020, 9, 27, 19),
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
  {
    id: 5,
    title: 'Primeiros passos com o Power BI',
    dateTime: new Date(2020, 9, 27, 19),
    content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.\n',
  },
];

export const prevEvents = events.filter((event) => event.dateTime.getTime() < Date.now());

export const nextEvents = events.filter((event) => event.dateTime.getTime() >= Date.now());
