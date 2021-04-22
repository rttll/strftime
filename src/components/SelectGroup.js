import { useState } from 'react';
import Select from './Select';
import Readout from './Readout';
import VerticalSwitchButton from './VerticalSwitchButton';

export default function SelectGroup(props) {
  const [open, setOpen] = useState('');
  const [parts, setParts] = useState(props.parts);
  const [activeFormatIndex, setActiveFormatIndex] = useState(0);

  function rotateFormat() {
    const next =
      activeFormatIndex + 1 < props.formats.length ? activeFormatIndex + 1 : 0;
    setActiveFormatIndex(next);
  }

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
    <div className={`relative space-y-2 md:space-y-6 ${props.className}`}>
      <div className='flex items-center space-x-2'>
        {props.formats.length > 1 && (
          <VerticalSwitchButton onClick={rotateFormat} />
        )}
        <div className='flex'>
          {props.formats &&
            props.formats[activeFormatIndex].map((format, i) => {
              return format.datePart ? (
                <Select
                  key={format.datePart}
                  optionClicked={handleOptionClick}
                  data={
                    parts.filter((part) => part.name === format.datePart)[0]
                  }
                  spaceAfter={format.spaceAfter}
                  open={open === format.datePart}
                  toggleMe={handletoggleMe}
                />
              ) : (
                <span
                  key={`${format.punctuation}-${i}`}
                  className={`text-5xl text-white md:text-6xl ${
                    format.spaceAfter ? 'inline-block pr-2' : ''
                  }`}>
                  {format.punctuation}
                </span>
              );
            })}
        </div>
      </div>
      <Readout
        formats={props.formats}
        activeFormatIndex={activeFormatIndex}
        parts={parts}
      />
    </div>
  );
}
