import { useState } from 'react';
import Select from './Select';
import Readout from './Readout';

export default function SelectGroup(props) {
  const [open, setOpen] = useState('');
  const [parts, setParts] = useState(props.parts);

  function handleOptionClick(name, code) {
    setParts((current) => {
      current.filter((part) => part.name === name)[0].selected = code;
      return current;
    });
  }

  function handletoggleMe(name) {
    setOpen(name);
  }

  return (
    <div className='relative space-y-2 md:space-y-10'>
      <div className='flex text-3xl text-white md:text-6xl'>
        {parts.map((part, i) => (
          <span
            key={part.name}
            className={
              props.type === 'date' || part.name === 'Second'
                ? 'pr-2 inline-block'
                : ''
            }>
            <Select
              optionClicked={handleOptionClick}
              data={part}
              open={open === part.name}
              toggleMe={handletoggleMe}
            />
          </span>
        ))}
      </div>
      <Readout parts={parts} />
    </div>
  );
}
