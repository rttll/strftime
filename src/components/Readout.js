import Copy from './Copy';
import CopyIcon from './icons/CopyIcon';

export default function Readout(props) {
  const text = props.parts
    .map(
      ({ selected, seperator }) => `%${selected}${seperator ? seperator : ''} `
    )
    .join('');
  return (
    <div className='flex items-center justify-between w-full text-3xl bg-white rounded-lg outline-none'>
      <div className='flex pl-4 space-x-2'>
        <span>{text}</span>
      </div>
      <Copy message={text}>
        <span className='block p-4 transition-colors rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-pink-200'>
          <CopyIcon />
        </span>
      </Copy>
    </div>
  );
}
