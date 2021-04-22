import { useEffect, useState } from 'react';
import Copy from './Copy';
import CopyIcon from './icons/CopyIcon';

export default function Readout(props) {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const format = props.formats[props.activeFormatIndex];
    const data = format.map((format) => {
      const datePart = props.parts.filter(
        (part) => part.name === format.datePart
      )[0];
      const after = format.spaceAfter ? ' ' : '';
      return datePart
        ? `%${datePart.selected}${after}`
        : `${format.punctuation}${after}`;
    });
    setMessage(data.map((text) => text).join(''));
  }, [props]);
  return (
    <div className='flex items-center justify-between w-full text-3xl bg-white rounded-lg outline-none'>
      <div className='flex pl-4 space-x-2'>{message}</div>
      <Copy message={message}>
        <span className='block p-4 transition-colors rounded-tr-lg rounded-br-lg cursor-pointer hover:text-blue-400'>
          <CopyIcon />
        </span>
      </Copy>
    </div>
  );
}
