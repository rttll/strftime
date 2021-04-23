const dateFormats = [
  [
    { datePart: 'DayName', spaceAfter: true },
    { datePart: 'Month', spaceAfter: true },
    { datePart: 'Day', spaceAfter: true },
    { punctuation: ',', spaceAfter: true },
    { datePart: 'Year' },
  ],
  [
    { datePart: 'Month' },
    { punctuation: '/' },
    { datePart: 'Day' },
    { punctuation: '/' },
    { datePart: 'Year' },
  ],
  [
    { datePart: 'Month' },
    { punctuation: '-' },
    { datePart: 'Day' },
    { punctuation: '-' },
    { datePart: 'Year' },
  ],
];

const timeFormats = [
  [
    { datePart: 'Hour' },
    { punctuation: ':' },
    { datePart: 'Minute' },
    { punctuation: ':' },
    { datePart: 'Second', spaceAfter: true },
    { datePart: 'Period' },
  ],
];
export { dateFormats, timeFormats };
