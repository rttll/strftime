import SelectGroup from './components/SelectGroup';
import parts from './parts';
function App() {
  return (
    <>
      <div className='flex items-center justify-center h-screen bg-blue-400'>
        <div className='flex flex-col -mt-20 space-y-8 md:-mt-40 md:space-y-0 md:space-x-4 md:flex-row'>
          <SelectGroup parts={parts.date} type='date' />
          <SelectGroup parts={parts.time} type='time' />
        </div>
      </div>
    </>
  );
}

export default App;
