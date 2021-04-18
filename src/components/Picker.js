import { useState } from 'react';
import Select from './Select';
import Readout from './Readout';

export default function Picker(props) {
  const [open, setOpen] = useState('');
  const [parts, setParts] = useState(props.parts);

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
      <div className='flex text-3xl text-white md:text-6xl'>
        {parts.map((part) => (
          <span key={part.name}>
            <Select
              optionClicked={handleOptionClick}
              data={part}
              open={open === part.name}
              openMe={handleOpenMe}
            />
          </span>
        ))}
      </div>
      <Readout parts={parts} />
    </div>
  );
}
