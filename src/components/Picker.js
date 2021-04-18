// import { Scroll, Frame } from 'framer';

import { useState } from 'react';
import Select from './Select';
import partsData from '../parts';
import Readout from './Readout';

export default function Picker() {
  const [open, setOpen] = useState('');
  const [parts, setParts] = useState(partsData);

  function handleOptionClick(name, code) {
    setParts((current) => {
      current.filter((part) => part.name === name)[0].selected = code;
      return current;
    });
  }

  function handleOpenMe(name) {
    // console.log('open', name);
    setOpen(name);
  }

  return (
    <div className='relative space-y-10'>
      <div className='flex space-x-4 text-6xl text-white'>
        {parts.map((part) => (
          <Select
            key={part.name}
            optionClicked={handleOptionClick}
            data={part}
            open={open === part.name}
            openMe={handleOpenMe}
          />
        ))}
        {/* <span>April 17, 2021 9:54 PM</span> */}
      </div>
      <Readout parts={parts} />
    </div>
  );
}
