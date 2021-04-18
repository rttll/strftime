import CopyIcon from './icons/CopyIcon';

export default function Readout(props) {
  return (
    <div className='flex items-center justify-between w-full text-3xl bg-white rounded-lg outline-none'>
      <div className='flex pl-4 space-x-2'>
        {props.parts.map(({ options }) => (
          <div>%{options[0].code}</div>
        ))}
      </div>
      <span className='block p-4 transition-colors rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-pink-200'>
        <CopyIcon />
      </span>
    </div>
  );
}
