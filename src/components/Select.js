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
              className='flex items-baseline cursor-pointer'>
              <span>{option.label}</span>
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
          props.openMe(props.data.name);
        }}
        data-name={props.data.name}
        className={`inline-block transition-colors hover:text-gray-700 cursor-pointer`}>
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
