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
    setOpen(name);
  }

  return (
    <div className='relative space-y-10'>
      <div className='flex space-x-1 text-6xl text-white'>
        {parts.map((part) => (
          <Select
            key={part.name}
            optionClicked={handleOptionClick}
            data={part}
            open={open === part.name}
            openMe={handleOpenMe}
          />
        ))}
      </div>
      <Readout parts={parts} />
    </div>
  );
}
