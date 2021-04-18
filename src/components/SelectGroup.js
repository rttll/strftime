import { useState } from 'react';
import Select from './Select';
import Readout from './Readout';
import SwitchVertical from './icons/SwitchVertical';

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
    <div className='relative space-y-2 md:space-y-10'>
      <div className='flex'>
        {props.formats.length > 1 && (
          // Don't show toggle if there's only one format option. e.g. Time
          <span className='p-4 text-white' onClick={rotateFormat}>
            <SwitchVertical />
          </span>
        )}
        <div className='flex text-3xl text-white md:text-6xl'>
          {props.formats &&
            props.formats[activeFormatIndex].map((partOrPunctuation, i) => {
              const datePart = parts.filter(
                (part) => part.name === partOrPunctuation.replace(' ', '')
              )[0];
              const punctuationMark = datePart ? null : partOrPunctuation;
              const spaceAfter = partOrPunctuation.includes(' ');
              return datePart ? (
                <Select
                  key={datePart.name}
                  optionClicked={handleOptionClick}
                  data={datePart}
                  spaceAfter={spaceAfter}
                  open={open === datePart.name}
                  toggleMe={handletoggleMe}
                />
              ) : (
                <span
                  key={`${punctuationMark}-${i}`}
                  className={spaceAfter ? 'inline-block pr-2' : ''}>
                  {punctuationMark}
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
