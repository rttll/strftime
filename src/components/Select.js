export default function Select(props) {
  function optionClicked(name, code) {
    props.optionClicked(name, code);
    props.openMe('');
  }

  return (
    <div className='relative'>
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
              className='block cursor-pointer'>
              {option.label}
            </span>
          ))}
        </div>
      )}
      <span
        onClick={() => {
          props.openMe(props.data.name);
        }}
        data-name={props.data.name}
        className='inline-block p-1 transition-colors border border-white border-opacity-0 cursor-pointer hover:border-opacity-100'>
        {
          props.data.options.filter(
            (option) => option.code === props.data.selected
          )[0].label
        }
        {props.data.seperator && `${props.data.seperator}`}
      </span>
    </div>
  );
}
