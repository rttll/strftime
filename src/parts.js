import strftime from 'strftime';

function getLabel(code) {
  return strftime(`%${code}`, new Date());
}
const time = [
  {
    name: 'Hour',
    selected: 'l',
    seperator: ':',
    options: [{ code: 'l', label: getLabel('l') }],
  },
  {
    name: 'Minute',
    selected: 'M',
    seperator: ':',
    options: [{ code: 'M', label: getLabel('M') }],
  },
  {
    name: 'Second',
    selected: 'S',
    options: [{ code: 'S', label: getLabel('S') }],
  },
  {
    name: 'thing',
    selected: 'P',
    options: [
      { code: 'P', label: getLabel('P') },
      { code: 'p', label: getLabel('p') },
    ],
  },
];

const date = [
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

export default { date, time };
