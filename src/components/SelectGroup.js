import { useEffect, useState } from 'react';
import Select from './Select';
import Readout from './Readout';
import SwitchVertical from './icons/SwitchVertical';

export default function SelectGroup(props) {
  const [open, setOpen] = useState('');
  const [parts, setParts] = useState(props.parts);
  const [format, setFormat] = useState(null);
  const [formattedParts, setFormattedParts] = useState([]);

  useEffect(() => {
    if (props.formats) {
      const key = Object.keys(props.formats)[0];
      setFormat(props.formats[key]);
      // console.log(props.formats[key]);
    }
  }, [props.formats]);

  useEffect(() => {
    if (format) {
      const selectOrPunctuation = format.map((partOrPunctuation) => {
        const datePart = parts.filter(
          (part) => part.name === partOrPunctuation.replace(' ', '')
        )[0];
        const punctuationMark = datePart ? null : partOrPunctuation;
        const spaceAfter = partOrPunctuation.includes(' ');
        return datePart ? (
          <Select
            optionClicked={handleOptionClick}
            data={datePart}
            spaceAfter={spaceAfter}
            open={open === datePart.name}
            toggleMe={handletoggleMe}
          />
        ) : (
          <span className={spaceAfter ? 'inline-block pr-2' : ''}>
            {punctuationMark}
          </span>
        );
      });
      setFormattedParts(selectOrPunctuation);
    }
  }, [format]);

  function handleOptionClick(name, code) {
    console.log('hi');
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
        {props.formats && (
          <span className='p-4 text-white'>
            <SwitchVertical />
          </span>
        )}
        <div className='flex text-3xl text-white md:text-6xl'>
          {formattedParts.length > 0 &&
            formattedParts.map((partOrPunctuation) => (
              <span>{partOrPunctuation}</span>
            ))}
        </div>
      </div>
      <Readout parts={parts} />
    </div>
  );
}
