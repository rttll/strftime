import { useEffect, useRef } from 'react';

export default function Select(props) {
  const select = useRef(null);
  useEffect(() => {
    const closeSelectOnDocumentClick = (props, select, event) => {
      if (select) {
        const open = select.dataset.open === 'true';
        const selectWasClicked = event.path.includes(select);

        // Usefully, this will also close if Select from another SelectGroup is opened
        if (open && !selectWasClicked) {
          props.toggleMe(false);
        }
      }
    };
    document.addEventListener('click', (e) => {
      closeSelectOnDocumentClick.bind(this, props, select.current)(e);
    });
  }, [props]);

  function optionClicked(name, code) {
    console.log('clicky');
    props.optionClicked(name, code);
    props.toggleMe(false);
  }

  return (
    <div
      className={`relative ${props.spaceAfter ? 'pr-2' : ''}`}
      ref={select}
      data-open={props.open}>
      {props.open && (
        <div
          style={{ top: '50%' }}
          className='absolute z-40 flex flex-col p-4 space-y-4 text-blue-400 transform -translate-y-1/2 bg-white rounded-lg shadow-lg'>
          {props.data.options.map((option) => (
            <span
              onClick={() => {
                optionClicked.call(this, props.data.name, option.code);
              }}
              key={option.code}
              data-code={option.code}
              className='flex items-baseline cursor-pointer'>
              <span className='text-6xl'>{option.label}</span>
              {option.description && (
                <span className='inline-block pl-1 text-xs whitespace-nowrap'>
                  {option.description}
                </span>
              )}
            </span>
          ))}
        </div>
      )}
      <span
        onClick={() => {
          props.toggleMe(props.data.name);
        }}
        data-name={props.data.name}
        className={`text-5xl text-white md:text-6xl inline-block transition-colors hover:text-gray-700 cursor-pointer`}>
        {
          props.data.options.filter(
            (option) => option.code === props.data.selected
          )[0].label
        }
      </span>
    </div>
  );
}
