import strftime from 'strftime';

function getLabel(code) {
  return strftime(`%${code}`, new Date());
}

export default [
  {
    name: 'DayName',
    selected: 'A',
    options: [
      { code: 'A', label: getLabel('A') },
      { code: 'a', label: getLabel('a') },
    ],
  },
  {
    name: 'Month',
    selected: 'B',
    options: [
      { code: 'B', label: getLabel('B') },
      { code: 'b', label: getLabel('b') },
    ],
  },
  {
    name: 'Day',
    selected: 'e',
    seperator: ',',
    options: [
      { code: 'd', label: getLabel('d') },
      { code: 'e', label: getLabel('e') },
    ],
  },
  {
    name: 'Year',
    selected: 'Y',
    options: [
      { code: 'Y', label: getLabel('Y') },
      { code: 'y', label: getLabel('y') },
    ],
  },
];
