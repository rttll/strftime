import Picker from './components/Picker';
import parts from './parts';
function App() {
  return (
    <>
      <div className='flex items-center justify-center h-screen bg-blue-400'>
        <div className='flex -mt-40 space-x-4'>
          <Picker parts={parts.date} />
          <Picker parts={parts.time} />
        </div>
      </div>
    </>
  );
}

export default App;
