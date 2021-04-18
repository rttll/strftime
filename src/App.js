import SelectGroup from './components/SelectGroup';
import parts from './parts';
import { dateFormats, timeFormats } from './formats';
function App() {
  return (
    <>
      <div className='flex items-center justify-center h-screen bg-blue-400'>
        <div className='flex flex-col w-full px-4 -mt-20 space-y-8 md:max-w-5xl md:min-w-5xl md:-mt-40 md:space-y-0 md:space-x-4 md:flex-row'>
          <SelectGroup
            parts={parts.date}
            formats={dateFormats}
            type='date'
            className='w-full md:w-2/3'
          />
          <SelectGroup
            parts={parts.time}
            formats={timeFormats}
            type='time'
            className='w-full md:w-1/3'
          />
        </div>
      </div>
    </>
  );
}

export default App;
